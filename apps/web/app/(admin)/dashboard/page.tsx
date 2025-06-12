import { BreadcrumbsConsumer } from '@/consumers/breadcrumbsConsumer';
import { Breadcrumb } from '@/types/breadcrumbs';
import { UserService } from '@/services/user.service';
import { FacebookService } from '@/services/server/facebook.service';
import PerformanceDashboard from '@/components/dashboard/PerformanceDashboard';
import { cookies } from 'next/headers';
import { SelectedAccount } from '@/types/chat';

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

  let adPreviews: string[] = [];

  if (selectedAccountCookie) {
    try {
      const selectedAccount: SelectedAccount = JSON.parse(
        decodeURIComponent(selectedAccountCookie.value),
      );
      accessToken = selectedAccount.accessToken;
      adAccountId = selectedAccount.accountId;

      // Fetch metrics and ad previews in parallel
      const [metrics, previews] = await Promise.all([
        FacebookService.getMetricsData(accessToken, adAccountId),
        FacebookService.getAdPreviews(accessToken, [
          '6824503105566',
          '6824503105566',
          '6824503105566',
          '6824503105566',
          '6824503105566',
          '6824503105566',
          '6824503105566',
        ]),
      ]);

      metaMetrics = metrics;
      adPreviews = previews;
    } catch (error) {
      console.error('Error parsing selected account cookie:', error);
    }
  }

  return (
    <div className="pb-6 space-y-8">
      <BreadcrumbsConsumer breadcrumbs={breadCrumbs} />
      <PerformanceDashboard metaMetrics={metaMetrics} adPreviews={adPreviews} />
    </div>
  );
}
