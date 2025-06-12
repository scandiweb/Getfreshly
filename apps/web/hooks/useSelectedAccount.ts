import { SelectedAccount } from '@/types/chat';
import { useCookie } from './useCookie';

export function useSelectedAccount() {
  const [selectedAccount, setSelectedAccount] =
    useCookie<SelectedAccount | null>('selected-ad-account', null, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
      sameSite: 'lax',
    });

  return {
    selectedAccount,
    setSelectedAccount,
    hasSelectedAccount: selectedAccount !== null,
    getAccountInfo: () =>
      selectedAccount
        ? {
            accountId: selectedAccount.accountId,
            accountName: selectedAccount.accountName,
            accessToken: selectedAccount.accessToken,
          }
        : null,
  };
}
