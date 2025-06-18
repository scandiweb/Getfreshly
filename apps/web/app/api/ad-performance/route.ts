import { NextRequest, NextResponse } from 'next/server';
import { UserService } from '@/services/user.service';
import { AdPerformanceCacheService } from '@/services/server/adPerformanceCache.service';

export async function GET(request: NextRequest) {
  try {
    // Require authentication
    const userId = await UserService.requireAuth();

    // Get parameters from URL
    const { searchParams } = new URL(request.url);
    const facebookAdAccountId = searchParams.get('adAccountId');
    const limit = parseInt(searchParams.get('limit') || '50');

    if (!facebookAdAccountId) {
      return NextResponse.json(
        { error: 'Ad account ID is required' },
        { status: 400 },
      );
    }

    // Get stored ad performance data
    const storedData = await AdPerformanceCacheService.getStoredDataForAI(
      userId,
      facebookAdAccountId,
      limit,
    );

    // Transform the data for AI analysis
    const analysisData = storedData.map((snapshot) => ({
      snapshotId: snapshot.id,
      timestamp: snapshot.createdAt,
      totalAdsAnalyzed: snapshot.totalAdsAnalyzed,
      averageImpressions: snapshot.averageImpressions,
      averageCTR: snapshot.averageCTR,
      // Include cached metrics data
      metrics: {
        totalSpend: snapshot.totalSpend,
        totalImpressions: snapshot.totalImpressions,
        totalClicks: snapshot.totalClicks,
        overallCTR: snapshot.overallCTR,
        activeCampaigns: snapshot.activeCampaigns,
        activeAdSets: snapshot.activeAdSets,
        activeAds: snapshot.activeAds,
      },
      bestPerformingAds: snapshot.ads
        .filter((ad) => ad.performanceCategory === 'best')
        .map((ad) => ({
          id: ad.facebookAdId,
          name: ad.adName,
          impressions: ad.impressions,
          ctr: ad.ctr,
          engagementRateRanking: ad.engagementRateRanking,
          performanceScore: ad.performanceScore,
          impressionsVsAverage: ad.impressionsVsAverage,
          ctrVsAverage: ad.ctrVsAverage,
          engagementRanking: ad.engagementRanking,
          reasons: ad.reasons,
          previewUrl: ad.previewUrl,
          createdTime: ad.adCreatedTime,
        })),
      worstPerformingAds: snapshot.ads
        .filter((ad) => ad.performanceCategory === 'worst')
        .map((ad) => ({
          id: ad.facebookAdId,
          name: ad.adName,
          impressions: ad.impressions,
          ctr: ad.ctr,
          engagementRateRanking: ad.engagementRateRanking,
          performanceScore: ad.performanceScore,
          impressionsVsAverage: ad.impressionsVsAverage,
          ctrVsAverage: ad.ctrVsAverage,
          engagementRanking: ad.engagementRanking,
          reasons: ad.reasons,
          previewUrl: ad.previewUrl,
          createdTime: ad.adCreatedTime,
        })),
    }));

    return NextResponse.json({
      success: true,
      data: analysisData,
      totalSnapshots: storedData.length,
    });
  } catch (error) {
    console.error('Error fetching ad performance data for AI:', error);
    return NextResponse.json(
      { error: 'Failed to fetch ad performance data' },
      { status: 500 },
    );
  }
}

// Clean up old cache data
export async function DELETE() {
  try {
    // Optional: Add admin check here if needed
    const deletedCount = await AdPerformanceCacheService.cleanupOldCache();

    return NextResponse.json({
      success: true,
      message: `Cleaned up ${deletedCount} old ad performance snapshots`,
      deletedCount,
    });
  } catch (error) {
    console.error('Error cleaning up cache:', error);
    return NextResponse.json(
      { error: 'Failed to clean up cache' },
      { status: 500 },
    );
  }
}
