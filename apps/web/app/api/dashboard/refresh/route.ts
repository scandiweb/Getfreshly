import { NextRequest, NextResponse } from 'next/server';
import { UserService } from '@/services/user.service';
import { AdPerformanceCacheService } from '@/services/server/adPerformanceCache.service';
import { cookies } from 'next/headers';
import { SelectedAccount } from '@/types/chat';

export async function POST(request: NextRequest) {
  try {
    // Verify user authentication
    const userId = await UserService.requireAuth();

    // Get selected account from cookie
    const cookieStore = await cookies();
    const selectedAccountCookie = cookieStore.get('selected-ad-account');

    if (!selectedAccountCookie) {
      return NextResponse.json(
        { error: 'No ad account selected' },
        { status: 400 },
      );
    }

    let selectedAccount: SelectedAccount;
    try {
      selectedAccount = JSON.parse(
        decodeURIComponent(selectedAccountCookie.value),
      );
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid ad account selection' },
        { status: 400 },
      );
    }

    const { accessToken, accountId } = selectedAccount;

    if (!accessToken || !accountId) {
      return NextResponse.json(
        { error: 'Missing access token or account ID' },
        { status: 400 },
      );
    }

    // Force refresh the cache
    console.log(
      `Refreshing dashboard cache for user ${userId} and account ${accountId}`,
    );

    const result = await AdPerformanceCacheService.forceRefresh(
      userId,
      accessToken,
      accountId,
      100, // Fetch up to 100 ads for analysis
    );

    return NextResponse.json({
      success: true,
      message: 'Dashboard refreshed successfully',
      data: {
        totalAdsAnalyzed: result.performanceAnalysis.totalAdsAnalyzed,
        bestPerformingAdsCount: result.bestPerformingAds.length,
        worstPerformingAdsCount: result.worstPerformingAds.length,
      },
    });
  } catch (error) {
    console.error('Error refreshing dashboard:', error);

    return NextResponse.json(
      {
        error: 'Failed to refresh dashboard',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}
