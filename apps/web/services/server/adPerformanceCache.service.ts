import { PrismaClient } from '@repo/database';
import { FacebookService } from './facebook.service';
import {
  analyzeAdPerformance,
  getAdPreviewIds,
} from '@/utils/adPerformanceAnalysis';
import { AnalyzedAd, PerformanceAnalysis } from '@/types/facebook';

const prisma = new PrismaClient();

interface CachedAdPerformanceResult {
  bestPerformingAds: AnalyzedAd[];
  worstPerformingAds: AnalyzedAd[];
  performanceAnalysis: PerformanceAnalysis;
  metaMetrics?: {
    hasData: boolean;
    totalSpend: number;
    impressions: number;
    clicks: number;
    ctr: number;
    activeCampaigns: number;
    activeAdSets: number;
    activeAds: number;
  };
}

export class AdPerformanceCacheService {
  private static readonly CACHE_DURATION_HOURS = 1;

  /**
   * Get ad performance data with 1-hour caching
   */
  static async getAdPerformanceData(
    userId: string,
    accessToken: string,
    facebookAdAccountId: string,
    limit: number = 50,
  ): Promise<CachedAdPerformanceResult> {
    // Check if we have recent cached data
    const cachedData = await this.getCachedData(userId, facebookAdAccountId);

    if (cachedData) {
      console.log('Using cached ad performance data');
      return this.transformCachedDataToResult(cachedData);
    }

    console.log('Fetching fresh ad performance data from Facebook API');

    // Fetch fresh data from Facebook API
    const [adsPerformanceData, metricsData] = await Promise.all([
      FacebookService.getAdsPerformanceData(
        accessToken,
        facebookAdAccountId,
        limit,
      ),
      FacebookService.getMetricsData(accessToken, facebookAdAccountId),
    ]);

    // Analyze the performance
    const performanceAnalysis = analyzeAdPerformance(adsPerformanceData);

    // Fetch ad previews for best and worst performing ads
    const bestAdIds = getAdPreviewIds(performanceAnalysis.bestPerformingAds);
    const worstAdIds = getAdPreviewIds(performanceAnalysis.worstPerformingAds);

    const [bestPreviews, worstPreviews] = await Promise.all([
      bestAdIds.length > 0
        ? FacebookService.getAdPreviews(accessToken, bestAdIds)
        : Promise.resolve([]),
      worstAdIds.length > 0
        ? FacebookService.getAdPreviews(accessToken, worstAdIds)
        : Promise.resolve([]),
    ]);

    // Create preview URL maps
    const previewUrlMap = new Map<string, string>();
    bestAdIds.forEach((id, index) => {
      if (bestPreviews[index]) {
        previewUrlMap.set(id, bestPreviews[index]);
      }
    });
    worstAdIds.forEach((id, index) => {
      if (worstPreviews[index]) {
        previewUrlMap.set(id, worstPreviews[index]);
      }
    });

    // Save to database with preview URLs
    await this.saveToDatabase(
      userId,
      facebookAdAccountId,
      performanceAnalysis,
      adsPerformanceData,
      previewUrlMap,
      metricsData,
    );

    return {
      bestPerformingAds: performanceAnalysis.bestPerformingAds,
      worstPerformingAds: performanceAnalysis.worstPerformingAds,
      performanceAnalysis,
      metaMetrics: metricsData,
    };
  }

  /**
   * Check for cached data within the last hour
   */
  private static async getCachedData(
    userId: string,
    facebookAdAccountId: string,
  ) {
    const oneHourAgo = new Date(
      Date.now() - this.CACHE_DURATION_HOURS * 60 * 60 * 1000,
    );

    const snapshot = await prisma.adPerformanceSnapshot.findFirst({
      where: {
        userId,
        facebookAdAccountId,
        createdAt: {
          gte: oneHourAgo,
        },
      },
      include: {
        ads: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return snapshot;
  }

  /**
   * Transform cached database data back to our result format
   */
  private static transformCachedDataToResult(
    cachedData: any,
  ): CachedAdPerformanceResult {
    const bestPerformingAds = cachedData.ads
      .filter((ad: any) => ad.performanceCategory === 'best')
      .map((ad: any) => ({
        id: ad.facebookAdId,
        name: ad.adName,
        created_time: ad.adCreatedTime.toISOString(),
        insights: {
          data: [
            {
              impressions: ad.impressions,
              ctr: ad.ctr,
              engagement_rate_ranking: ad.engagementRateRanking,
            },
          ],
        },
        performanceScore: ad.performanceScore,
        impressionsVsAverage: ad.impressionsVsAverage as
          | 'above'
          | 'below'
          | 'average',
        ctrVsAverage: ad.ctrVsAverage as 'above' | 'below' | 'average',
        engagementRanking: ad.engagementRanking as
          | 'above'
          | 'below'
          | 'average'
          | 'unknown',
        reasons: ad.reasons,
        previewUrl: ad.previewUrl,
      }));

    const worstPerformingAds = cachedData.ads
      .filter((ad: any) => ad.performanceCategory === 'worst')
      .map((ad: any) => ({
        id: ad.facebookAdId,
        name: ad.adName,
        created_time: ad.adCreatedTime.toISOString(),
        insights: {
          data: [
            {
              impressions: ad.impressions,
              ctr: ad.ctr,
              engagement_rate_ranking: ad.engagementRateRanking,
            },
          ],
        },
        performanceScore: ad.performanceScore,
        impressionsVsAverage: ad.impressionsVsAverage as
          | 'above'
          | 'below'
          | 'average',
        ctrVsAverage: ad.ctrVsAverage as 'above' | 'below' | 'average',
        engagementRanking: ad.engagementRanking as
          | 'above'
          | 'below'
          | 'average'
          | 'unknown',
        reasons: ad.reasons,
        previewUrl: ad.previewUrl,
      }));

    const performanceAnalysis = {
      bestPerformingAds,
      worstPerformingAds,
      averageImpressions: cachedData.averageImpressions,
      averageCTR: cachedData.averageCTR,
      totalAdsAnalyzed: cachedData.totalAdsAnalyzed,
    };

    const metaMetrics = {
      hasData: true,
      totalSpend: cachedData.totalSpend,
      impressions: cachedData.totalImpressions,
      clicks: cachedData.totalClicks,
      ctr: cachedData.overallCTR,
      activeCampaigns: cachedData.activeCampaigns,
      activeAdSets: cachedData.activeAdSets,
      activeAds: cachedData.activeAds,
    };

    return {
      bestPerformingAds,
      worstPerformingAds,
      performanceAnalysis,
      metaMetrics,
    };
  }

  /**
   * Save performance analysis to database
   */
  private static async saveToDatabase(
    userId: string,
    facebookAdAccountId: string,
    performanceAnalysis: PerformanceAnalysis,
    rawAdsData: any[],
    previewUrlMap?: Map<string, string>,
    metricsData?: any,
  ) {
    try {
      // Create snapshot
      const snapshot = await prisma.adPerformanceSnapshot.create({
        data: {
          userId,
          facebookAdAccountId,
          totalAdsAnalyzed: performanceAnalysis.totalAdsAnalyzed,
          averageImpressions: performanceAnalysis.averageImpressions,
          averageCTR: performanceAnalysis.averageCTR,
          // Store cached metrics data
          totalSpend: metricsData?.totalSpend || 0,
          totalImpressions: metricsData?.impressions || 0,
          totalClicks: metricsData?.clicks || 0,
          overallCTR: metricsData?.ctr || 0,
          activeCampaigns: metricsData?.activeCampaigns || 0,
          activeAdSets: metricsData?.activeAdSets || 0,
          activeAds: metricsData?.activeAds || 0,
        },
      });

      // Prepare ad data for bulk insert
      const adDataToSave = [
        ...performanceAnalysis.bestPerformingAds.map((ad) => ({
          snapshotId: snapshot.id,
          facebookAdId: ad.id,
          adName: ad.name,
          impressions: Number(ad.insights?.data?.[0]?.impressions || 0),
          ctr: Number(ad.insights?.data?.[0]?.ctr || 0),
          engagementRateRanking:
            ad.insights?.data?.[0]?.engagement_rate_ranking,
          performanceScore: ad.performanceScore,
          performanceCategory: 'best',
          impressionsVsAverage: ad.impressionsVsAverage,
          ctrVsAverage: ad.ctrVsAverage,
          engagementRanking: ad.engagementRanking,
          reasons: ad.reasons,
          previewUrl: previewUrlMap?.get(ad.id) || null,
          adCreatedTime: new Date(ad.created_time),
        })),
        ...performanceAnalysis.worstPerformingAds.map((ad) => ({
          snapshotId: snapshot.id,
          facebookAdId: ad.id,
          adName: ad.name,
          impressions: Number(ad.insights?.data?.[0]?.impressions || 0),
          ctr: Number(ad.insights?.data?.[0]?.ctr || 0),
          engagementRateRanking:
            ad.insights?.data?.[0]?.engagement_rate_ranking,
          performanceScore: ad.performanceScore,
          performanceCategory: 'worst',
          impressionsVsAverage: ad.impressionsVsAverage,
          ctrVsAverage: ad.ctrVsAverage,
          engagementRanking: ad.engagementRanking,
          reasons: ad.reasons,
          previewUrl: previewUrlMap?.get(ad.id) || null,
          adCreatedTime: new Date(ad.created_time),
        })),
      ];

      // Bulk insert ad performance data
      if (adDataToSave.length > 0) {
        await prisma.adPerformanceData.createMany({
          data: adDataToSave,
        });
      }

      console.log(
        `Saved ${adDataToSave.length} ad performance records to database`,
      );
    } catch (error) {
      console.error('Error saving ad performance data to database:', error);
      // Don't throw error - we can still return the fresh data even if caching fails
    }
  }

  /**
   * Get stored ad performance data for AI analysis
   */
  static async getStoredDataForAI(
    userId: string,
    facebookAdAccountId: string,
    limit: number = 100,
  ) {
    const snapshots = await prisma.adPerformanceSnapshot.findMany({
      where: {
        userId,
        facebookAdAccountId,
      },
      include: {
        ads: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: limit,
    });

    return snapshots;
  }

  /**
   * Clean up old cached data (older than 24 hours)
   */
  static async cleanupOldCache() {
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

    const deleted = await prisma.adPerformanceSnapshot.deleteMany({
      where: {
        createdAt: {
          lt: twentyFourHoursAgo,
        },
      },
    });

    console.log(`Cleaned up ${deleted.count} old ad performance snapshots`);
    return deleted.count;
  }
}
