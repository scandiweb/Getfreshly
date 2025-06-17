import {
  AdPerformanceData,
  AnalyzedAd,
  PerformanceAnalysis,
} from '@/types/facebook';

/**
 * Analyzes ad performance data to identify best and worst performing ads
 * Based on impressions vs average and CTR vs average
 */
export function analyzeAdPerformance(
  ads: AdPerformanceData[],
): PerformanceAnalysis {
  // Filter ads that have insights data
  const adsWithInsights = ads.filter(
    (ad) =>
      ad.insights?.data &&
      ad.insights.data.length > 0 &&
      (ad.insights.data[0]?.impressions || 0) > 0,
  );

  if (adsWithInsights.length === 0) {
    return {
      bestPerformingAds: [],
      worstPerformingAds: [],
      averageImpressions: 0,
      averageCTR: 0,
      totalAdsAnalyzed: 0,
    };
  }

  // Calculate averages
  const totalImpressions = adsWithInsights.reduce((sum, ad) => {
    const insights = ad.insights?.data?.[0];
    const impressions = Number(insights?.impressions || 0);
    return sum + impressions;
  }, 0);
  const totalCTR = adsWithInsights.reduce((sum, ad) => {
    const insights = ad.insights?.data?.[0];
    const ctr = Number(insights?.ctr || 0);
    return sum + ctr;
  }, 0);

  const averageImpressions = totalImpressions / adsWithInsights.length;
  const averageCTR = totalCTR / adsWithInsights.length;

  // Analyze each ad
  const analyzedAds: AnalyzedAd[] = adsWithInsights.map((ad) => {
    const insights = ad.insights?.data?.[0];
    if (!insights) {
      throw new Error('Ad insights data is missing'); // This shouldn't happen due to our filtering
    }

    // Determine performance vs average
    const impressionsVsAverage = getPerformanceCategory(
      Number(insights.impressions),
      averageImpressions,
    );
    const ctrVsAverage = getPerformanceCategory(
      Number(insights.ctr),
      averageCTR,
    );

    // Parse engagement rate ranking
    const engagementRanking = parseEngagementRanking(
      insights.engagement_rate_ranking,
    );

    // Calculate performance score and reasons
    const { score, reasons } = calculatePerformanceScore(
      insights,
      averageImpressions,
      averageCTR,
      impressionsVsAverage,
      ctrVsAverage,
      engagementRanking,
    );

    return {
      ...ad,
      performanceScore: score,
      impressionsVsAverage,
      ctrVsAverage,
      engagementRanking,
      reasons,
    };
  });

  // Sort by performance score
  const sortedAds = [...analyzedAds].sort(
    (a, b) => b.performanceScore - a.performanceScore,
  );

  // Get top ads (max 7) as best, bottom ads (max 7) as worst
  const maxItems = Math.min(7, sortedAds.length);
  const bestPerformingAds = sortedAds.slice(0, maxItems);
  const worstPerformingAds = sortedAds.slice(-maxItems);

  return {
    bestPerformingAds,
    worstPerformingAds,
    averageImpressions,
    averageCTR,
    totalAdsAnalyzed: adsWithInsights.length,
  };
}

/**
 * Categorizes a metric value compared to the average
 */
function getPerformanceCategory(
  value: number,
  average: number,
): 'above' | 'below' | 'average' {
  const threshold = 0.1; // 10% threshold for "average"

  if (value > average * (1 + threshold)) {
    return 'above';
  } else if (value < average * (1 - threshold)) {
    return 'below';
  } else {
    return 'average';
  }
}

/**
 * Parses Facebook's engagement_rate_ranking into our category system
 */
function parseEngagementRanking(
  ranking?: string,
): 'above' | 'below' | 'average' | 'unknown' {
  if (!ranking) return 'unknown';

  if (ranking === 'ABOVE_AVERAGE') {
    return 'above';
  } else if (ranking === 'AVERAGE') {
    return 'average';
  } else if (ranking.includes('BELOW_AVERAGE')) {
    return 'below';
  } else {
    return 'unknown';
  }
}

/**
 * Calculates performance score and generates reasons for the score
 */
function calculatePerformanceScore(
  insights: {
    impressions: number;
    ctr: number;
    engagement_rate_ranking?: string;
  },
  averageImpressions: number,
  averageCTR: number,
  impressionsVsAverage: 'above' | 'below' | 'average',
  ctrVsAverage: 'above' | 'below' | 'average',
  engagementRanking: 'above' | 'below' | 'average' | 'unknown',
): { score: number; reasons: string[] } {
  let score = 50; // Base score
  const reasons: string[] = [];

  // CTR scoring (most important factor)
  if (ctrVsAverage === 'above') {
    score += 30;
    reasons.push(
      `High CTR (${Number(insights.ctr).toFixed(2)}% vs ${averageCTR.toFixed(2)}% avg)`,
    );
  } else if (ctrVsAverage === 'below') {
    score -= 25;
    reasons.push(
      `Low CTR (${Number(insights.ctr).toFixed(2)}% vs ${averageCTR.toFixed(2)}% avg)`,
    );
  }

  // Impressions scoring
  if (impressionsVsAverage === 'above') {
    score += 15;
    reasons.push(
      `High impressions (${Number(insights.impressions).toLocaleString()} vs ${Math.round(averageImpressions).toLocaleString()} avg)`,
    );
  } else if (impressionsVsAverage === 'below') {
    score -= 10;
    reasons.push(
      `Low impressions (${Number(insights.impressions).toLocaleString()} vs ${Math.round(averageImpressions).toLocaleString()} avg)`,
    );
  }

  // Engagement rate ranking (Facebook's algorithm)
  if (engagementRanking === 'above') {
    score += 25;
    reasons.push('Above average engagement rate (Facebook ranking)');
  } else if (engagementRanking === 'below') {
    score -= 20;
    reasons.push('Below average engagement rate (Facebook ranking)');
  } else if (engagementRanking === 'average') {
    reasons.push('Average engagement rate (Facebook ranking)');
  } else {
    reasons.push('Engagement rate ranking unavailable');
  }

  // Ensure score stays within reasonable bounds
  score = Math.max(0, Math.min(100, score));

  return { score, reasons };
}

/**
 * Helper function to get ad preview IDs for best/worst performing ads
 */
export function getAdPreviewIds(analyzedAds: AnalyzedAd[]): string[] {
  return analyzedAds.map((ad) => ad.id);
}
