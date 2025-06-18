'use client';

import { useState } from 'react';
import { Button } from '@repo/ui/components/button';
import { RefreshCw } from 'lucide-react';
import { toast } from 'sonner';

export default function RefreshButton() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    if (isRefreshing) return;

    setIsRefreshing(true);

    try {
      const response = await fetch('/api/dashboard/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to refresh dashboard');
      }

      if (result.success) {
        console.log('✅ Dashboard refreshed successfully:', result);

        toast.success('Dashboard refreshed!');

        // Small delay before refresh to show the success message
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        throw new Error(result.error || 'Refresh failed');
      }
    } catch (error) {
      console.error('❌ Error refreshing dashboard:', error);
      toast.error(
        error instanceof Error ? error.message : 'Failed to refresh dashboard',
      );
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <Button
      onClick={handleRefresh}
      disabled={isRefreshing}
      variant="outline"
      size="sm"
      className="flex items-center gap-2"
    >
      <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
      {isRefreshing ? 'Refreshing...' : 'Refresh'}
    </Button>
  );
}
