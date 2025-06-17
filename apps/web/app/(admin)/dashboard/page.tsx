import { BreadcrumbsConsumer } from '@/consumers/breadcrumbsConsumer';
import { Breadcrumb } from '@/types/breadcrumbs';
import { UserService } from '@/services/user.service';
import { FacebookService } from '@/services/server/facebook.service';
import PerformanceDashboard from '@/components/dashboard/PerformanceDashboard';
import { cookies } from 'next/headers';
import { SelectedAccount } from '@/types/chat';
import AdSlider from '@/components/dashboard/AdSlider';
import { AdPerformanceCacheService } from '@/services/server/adPerformanceCache.service';

// Cache this page for 1 hour (3600 seconds)
export const revalidate = 3600;

const breadCrumbs: Breadcrumb[] = [
  {
    label: 'Dashboard',
    link: '/dashboard',
  },
];

export default async function Page() {
  const userId = await UserService.requireAuth();

  // Get selected account from cookie
  const cookieStore = await cookies();
  const selectedAccountCookie = cookieStore.get('selected-ad-account');

  let accessToken: string | undefined;
  let adAccountId: string | undefined;
  let metaMetrics = {
    hasData: false,
    totalSpend: 0,
    impressions: 0,
    clicks: 0,
    ctr: 0,
    activeCampaigns: 0,
    activeAdSets: 0,
    activeAds: 0,
  };

  let bestPerformingAdPreviews: {
    id: string;
    preview: string;
    performanceScore: number;
    reasons: string[];
  }[] = [];
  let worstPerformingAdPreviews: {
    id: string;
    preview: string;
    performanceScore: number;
    reasons: string[];
  }[] = [];

  if (selectedAccountCookie) {
    try {
      const selectedAccount: SelectedAccount = JSON.parse(
        decodeURIComponent(selectedAccountCookie.value),
      );
      accessToken = selectedAccount.accessToken;
      adAccountId = selectedAccount.accountId;

      // Use cached ad performance data with 1-hour expiration (includes metrics)
      const cachedResult = await AdPerformanceCacheService.getAdPerformanceData(
        userId,
        accessToken,
        adAccountId,
        100,
      );

      // Use cached metrics if available, otherwise use default
      metaMetrics = cachedResult.metaMetrics || {
        hasData: false,
        totalSpend: 0,
        impressions: 0,
        clicks: 0,
        ctr: 0,
        activeCampaigns: 0,
        activeAdSets: 0,
        activeAds: 0,
      };

      // Use cached preview URLs if available, otherwise fetch them
      const bestAdsWithPreviews = cachedResult.bestPerformingAds.filter(
        (ad: any) => ad.previewUrl,
      );
      const worstAdsWithPreviews = cachedResult.worstPerformingAds.filter(
        (ad: any) => ad.previewUrl,
      );

      // For ads without cached previews, fetch them
      const bestAdsWithoutPreviews = cachedResult.bestPerformingAds.filter(
        (ad: any) => !ad.previewUrl,
      );
      const worstAdsWithoutPreviews = cachedResult.worstPerformingAds.filter(
        (ad: any) => !ad.previewUrl,
      );

      const [bestNewPreviews, worstNewPreviews] = await Promise.all([
        bestAdsWithoutPreviews.length > 0
          ? FacebookService.getAdPreviews(
              accessToken,
              bestAdsWithoutPreviews.map((ad: any) => ad.id),
            )
          : Promise.resolve([]),
        worstAdsWithoutPreviews.length > 0
          ? FacebookService.getAdPreviews(
              accessToken,
              worstAdsWithoutPreviews.map((ad: any) => ad.id),
            )
          : Promise.resolve([]),
      ]);

      // Combine cached and newly fetched previews
      bestPerformingAdPreviews = [
        ...bestAdsWithPreviews.map((ad: any) => ({
          id: ad.id,
          preview: ad.previewUrl,
          performanceScore: ad.performanceScore,
          reasons: ad.reasons,
        })),
        ...bestAdsWithoutPreviews
          .map((ad: any, index: number) => ({
            id: ad.id,
            preview: bestNewPreviews[index] || '',
            performanceScore: ad.performanceScore,
            reasons: ad.reasons,
          }))
          .filter((ad) => ad.preview),
      ];

      worstPerformingAdPreviews = [
        ...worstAdsWithPreviews.map((ad: any) => ({
          id: ad.id,
          preview: ad.previewUrl,
          performanceScore: ad.performanceScore,
          reasons: ad.reasons,
        })),
        ...worstAdsWithoutPreviews
          .map((ad: any, index: number) => ({
            id: ad.id,
            preview: worstNewPreviews[index] || '',
            performanceScore: ad.performanceScore,
            reasons: ad.reasons,
          }))
          .filter((ad) => ad.preview),
      ];
    } catch (error) {
      console.error('Error parsing selected account cookie:', error);
    }
  }

  return (
    <div className="pb-6 space-y-8">
      <BreadcrumbsConsumer breadcrumbs={breadCrumbs} />
      <PerformanceDashboard metaMetrics={metaMetrics} />

      {/* Ad Previews Sliders */}
      {bestPerformingAdPreviews && bestPerformingAdPreviews.length > 0 && (
        <AdSlider ads={bestPerformingAdPreviews} title="Best performing ads" />
      )}

      {worstPerformingAdPreviews && worstPerformingAdPreviews.length > 0 && (
        <AdSlider
          ads={worstPerformingAdPreviews}
          title="Lowest performing ads"
        />
      )}
    </div>
  );
}
