import { FacebookAdInsights, FacebookMetrics } from '@/types/facebook';

export class FacebookService {
  private static readonly GRAPH_API_BASE_URL =
    'https://graph.facebook.com/v18.0';

  /**
   * Get ad account insights including total spend
   */
  static async getAdAccountInsights(
    accessToken: string,
    adAccountId: string,
    timeRange: string = 'last_30d',
  ): Promise<FacebookAdInsights> {
    const url = `${this.GRAPH_API_BASE_URL}/${adAccountId}/insights`;
    const params = new URLSearchParams({
      access_token: accessToken,
      date_preset: timeRange,
      fields: 'spend,impressions,clicks,ctr,cpm,cpc',
      level: 'account',
    });

    try {
      const response = await fetch(`${url}?${params}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Facebook API Error: ${errorData.error?.message || response.statusText}`,
        );
      }

      const data = await response.json();

      if (!data.data || data.data.length === 0) {
        // Return default values if no data
        return {
          spend: 0,
          impressions: 0,
          clicks: 0,
          ctr: 0,
          cpm: 0,
          cpc: 0,
        };
      }

      const insights = data.data[0];
      return {
        spend: parseFloat(insights.spend || '0'),
        impressions: parseInt(insights.impressions || '0'),
        clicks: parseInt(insights.clicks || '0'),
        ctr: parseFloat(insights.ctr || '0'),
        cpm: parseFloat(insights.cpm || '0'),
        cpc: parseFloat(insights.cpc || '0'),
      };
    } catch (error) {
      console.error('Error fetching Facebook ad insights:', error);
      throw error;
    }
  }

  /**
   * Get active campaigns for an ad account
   */
  static async getActiveCampaigns(
    accessToken: string,
    adAccountId: string,
  ): Promise<number> {
    const url = `${this.GRAPH_API_BASE_URL}/${adAccountId}/campaigns`;
    const params = new URLSearchParams({
      access_token: accessToken,
      limit: '0',
      effective_status: JSON.stringify(['ACTIVE']),
      summary: 'total_count',
    });

    try {
      const response = await fetch(`${url}?${params}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Facebook API Error: ${errorData.error?.message || response.statusText}`,
        );
      }

      const data = await response.json();
      return data.summary.total_count || 0;
    } catch (error) {
      console.error('Error fetching Facebook campaigns:', error);
      return 0;
    }
  }

  /**
   * Get active ad sets for an ad account
   */
  static async getActiveAdSets(
    accessToken: string,
    adAccountId: string,
  ): Promise<number> {
    const url = `${this.GRAPH_API_BASE_URL}/${adAccountId}/adsets`;
    const params = new URLSearchParams({
      access_token: accessToken,
      effective_status: JSON.stringify(['ACTIVE']),
      limit: '0',
      summary: 'total_count',
    });

    try {
      const response = await fetch(`${url}?${params}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Facebook API Error: ${errorData.error?.message || response.statusText}`,
        );
      }

      const data = await response.json();
      return data.summary.total_count || 0;
    } catch (error) {
      console.error('Error fetching Facebook ad sets:', error);
      return 0;
    }
  }

  /**
   * Get active ads for an ad account
   */
  static async getActiveAds(
    accessToken: string,
    adAccountId: string,
  ): Promise<number> {
    const url = `${this.GRAPH_API_BASE_URL}/${adAccountId}/ads`;
    const params = new URLSearchParams({
      access_token: accessToken,
      effective_status: JSON.stringify(['ACTIVE']),
      limit: '0',
      summary: 'total_count',
    });

    try {
      const response = await fetch(`${url}?${params}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Facebook API Error: ${errorData.error?.message || response.statusText}`,
        );
      }

      const data = await response.json();
      return data.summary.total_count || 0;
    } catch (error) {
      console.error('Error fetching Facebook ads:', error);
      return 0;
    }
  }

  /**
   * Get comprehensive dashboard data for an ad account
   */
  static async getMetricsData(
    accessToken: string,
    adAccountId: string,
    timeRange: string = 'last_30d',
  ): Promise<FacebookMetrics> {
    try {
      // Fetch all data in parallel
      const [insights, campaigns, adSets, ads] = await Promise.all([
        this.getAdAccountInsights(accessToken, adAccountId, timeRange),
        this.getActiveCampaigns(accessToken, adAccountId),
        this.getActiveAdSets(accessToken, adAccountId),
        this.getActiveAds(accessToken, adAccountId),
      ]);

      return {
        hasData: true,
        totalSpend: insights.spend,
        impressions: insights.impressions,
        clicks: insights.clicks,
        ctr: insights.ctr,
        activeCampaigns: campaigns,
        activeAdSets: adSets,
        activeAds: ads,
      };
    } catch (error) {
      console.error('Error fetching Facebook dashboard data:', error);
      return {
        totalSpend: 0,
        impressions: 0,
        clicks: 0,
        ctr: 0,
        activeCampaigns: 0,
        activeAdSets: 0,
        activeAds: 0,
        hasData: false,
        error:
          error instanceof Error
            ? error.message
            : 'Failed to fetch Facebook data',
      };
    }
  }
}
