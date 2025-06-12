'use client';

import { useState, useMemo } from 'react';
import { Button } from '@repo/ui/components/button';
import { Card, CardContent } from '@repo/ui/components/card';
import { Settings, RefreshCw } from 'lucide-react';
import MetricCustomizationDialog from './MetricCustomizationDialog';
import AdSlider from './AdSlider';
import { FacebookMetrics } from '@/types/facebook';

export interface Metric {
  id: string;
  title: string;
  value: string | number;
  isVisible: boolean;
  order: number;
}

interface PerformanceDashboardProps {
  metaMetrics?: FacebookMetrics;
  adPreviews?: string[];
}

export default function PerformanceDashboard({
  metaMetrics,
  adPreviews,
}: PerformanceDashboardProps) {
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  const formatPercentage = (num: number) => {
    return `${num.toFixed(1)}%`;
  };

  // Generate metrics based on Facebook data
  const ALL_METRICS: Metric[] = useMemo(
    () => [
      {
        id: 'impressions',
        title: 'Impressions',
        value: metaMetrics?.hasData
          ? formatNumber(metaMetrics.impressions)
          : '0',
        isVisible: true,
        order: 0,
      },
      {
        id: 'engagement',
        title: 'Engagement',
        value: metaMetrics?.hasData ? formatNumber(metaMetrics.clicks) : '0',
        isVisible: true,
        order: 1,
      },
      {
        id: 'ctr',
        title: 'CTR',
        value: metaMetrics?.hasData ? formatPercentage(metaMetrics.ctr) : '0%',
        isVisible: true,
        order: 2,
      },
      {
        id: 'campaigns',
        title: 'No. of active campaigns',
        value: metaMetrics?.hasData ? metaMetrics.activeCampaigns : 0,
        isVisible: true,
        order: 3,
      },
      {
        id: 'adsets',
        title: 'No. of active ad sets',
        value: metaMetrics?.hasData ? metaMetrics.activeAdSets : 0,
        isVisible: true,
        order: 4,
      },
      {
        id: 'ads',
        title: 'No. of active ads',
        value: metaMetrics?.hasData ? metaMetrics.activeAds : 0,
        isVisible: true,
        order: 5,
      },
      {
        id: 'spend',
        title: 'Total Spend',
        value: metaMetrics?.hasData ? metaMetrics.totalSpend : '$0',
        isVisible: false,
        order: 6,
      },
    ],
    [metaMetrics],
  );

  const [metrics, setMetrics] = useState<Metric[]>(ALL_METRICS);
  const [isCustomizationOpen, setIsCustomizationOpen] = useState(false);

  // Update metrics when ALL_METRICS changes
  useMemo(() => {
    setMetrics(ALL_METRICS);
  }, [ALL_METRICS]);

  const visibleMetrics = metrics
    .filter((metric) => metric.isVisible)
    .sort((a, b) => a.order - b.order);

  const handleMetricToggle = (metricId: string) => {
    setMetrics((prev) =>
      prev.map((metric) =>
        metric.id === metricId
          ? { ...metric, isVisible: !metric.isVisible }
          : metric,
      ),
    );
  };

  const handleReorder = (draggedId: string, newIndex: number) => {
    setMetrics((prev) => {
      const newMetrics = [...prev];

      // Get only visible metrics for reordering
      const visibleMetricsForReorder = newMetrics.filter((m) => m.isVisible);

      // Find the dragged item
      const draggedIndex = visibleMetricsForReorder.findIndex(
        (m) => m.id === draggedId,
      );

      if (draggedIndex === -1) return prev;

      // Remove the dragged item
      const draggedItem = visibleMetricsForReorder[draggedIndex];
      if (!draggedItem) return prev;
      visibleMetricsForReorder.splice(draggedIndex, 1);

      // Insert at the new position (clamp to valid range)
      const insertIndex = Math.max(
        0,
        Math.min(newIndex, visibleMetricsForReorder.length),
      );
      visibleMetricsForReorder.splice(insertIndex, 0, draggedItem);

      // Update order values for all visible metrics
      visibleMetricsForReorder.forEach((metric, index) => {
        const metricIndex = newMetrics.findIndex((m) => m.id === metric.id);
        if (metricIndex !== -1 && newMetrics[metricIndex]) {
          newMetrics[metricIndex] = {
            ...newMetrics[metricIndex],
            order: index,
          };
        }
      });

      return newMetrics;
    });
  };

  const getTrendIcon = (trend?: string) => {
    if (trend === 'up') return '↗';
    if (trend === 'down') return '↘';
    return '';
  };

  const getTrendColor = (trend?: string) => {
    if (trend === 'up') return 'text-green-600';
    if (trend === 'down') return 'text-red-600';
    return 'text-gray-600';
  };

  return (
    <div className="space-y-4 p-4">
      {/* Error Display */}
      {metaMetrics?.error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                Error loading Facebook data
              </h3>
              <div className="mt-2 text-sm text-red-700">
                <p>{metaMetrics?.error}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header with Customize Button */}
      <div className="flex justify-end gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            /* TODO: Add refresh functionality */
          }}
          className="gap-2"
        >
          <RefreshCw className="h-4 w-4" />
          Refresh
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsCustomizationOpen(true)}
          className="gap-2"
        >
          <Settings className="h-4 w-4" />
          Customise
        </Button>
      </div>

      {/* Data Status */}
      {!metaMetrics?.hasData && !metaMetrics?.error && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                No Facebook data available
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  Please connect your Facebook ad account to view performance
                  metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Metrics Grid - Responsive and flexible */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {visibleMetrics.map((metric) => (
          <Card
            key={metric.id}
            className="hover:shadow-md transition-shadow py-2"
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600 leading-tight">
                  {metric.title}
                </h3>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-gray-900">
                  {metric.value}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Ad Previews Slider */}
      {adPreviews && adPreviews.length > 0 && (
        <AdSlider ads={adPreviews} title="Best performing ads" />
      )}

      {adPreviews && adPreviews.length > 0 && (
        <AdSlider ads={adPreviews} title="Lowest performing ads" />
      )}

      {/* Customization Dialog */}
      <MetricCustomizationDialog
        isOpen={isCustomizationOpen}
        onClose={() => setIsCustomizationOpen(false)}
        metrics={metrics}
        onMetricToggle={handleMetricToggle}
        onReorder={handleReorder}
      />
    </div>
  );
}
