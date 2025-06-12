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
