export interface FacebookConfig {
  appId: string;
  appSecret: string;
  redirectUri: string;
  baseUrl: string;
}

export interface TokenResponse {
  access_token: string;
  expires_in: number;
  error?: {
    message: string;
  };
}

export interface FacebookAdInsights {
  spend: number;
  impressions: number;
  clicks: number;
  ctr: number;
  cpm: number;
  cpc: number;
}

export interface FacebookMetrics {
  totalSpend: number;
  impressions: number;
  clicks: number;
  ctr: number;
  activeCampaigns: number;
  activeAdSets: number;
  activeAds: number;
  hasData: boolean;
  error?: string;
}

export interface AdPerformanceInsights {
  impressions: number;
  ctr: number;
  engagement_rate_ranking?: string;
}

export interface AdPerformanceData {
  id: string;
  name: string;
  created_time: string;
  insights?: {
    data: AdPerformanceInsights[];
  };
}

export interface FacebookAdsResponse {
  data: AdPerformanceData[];
  paging?: {
    cursors?: {
      before: string;
      after: string;
    };
    next?: string;
  };
}

export interface AnalyzedAd extends AdPerformanceData {
  performanceScore: number;
  impressionsVsAverage: 'above' | 'below' | 'average';
  ctrVsAverage: 'above' | 'below' | 'average';
  engagementRanking: 'above' | 'below' | 'average' | 'unknown';
  reasons: string[]; // reasons why it's good/bad
}

export interface PerformanceAnalysis {
  bestPerformingAds: AnalyzedAd[];
  worstPerformingAds: AnalyzedAd[];
  averageImpressions: number;
  averageCTR: number;
  totalAdsAnalyzed: number;
}
