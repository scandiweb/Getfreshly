'use client';

import React from 'react';
import { Card, CardContent } from '@repo/ui/components/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@repo/ui/components/carousel';
import { Badge } from '@repo/ui/components/badge';

interface AdData {
  id: string;
  preview: string;
  performanceScore: number;
  reasons: string[];
}

interface AdSliderProps {
  ads: AdData[];
  title?: string;
}

export default function AdSlider({
  ads,
  title = 'Best performing ads',
}: AdSliderProps) {
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  const getScoreColor = (score: number) => {
    if (score >= 75) return 'bg-green-100 text-green-800';
    if (score >= 50) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  if (!ads || ads.length === 0) {
    return (
      <div className="space-y-4 my-10 px-4">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <Card>
          <CardContent className="p-6">
            <p className="text-gray-500">No ad previews available</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-4 my-10 px-4">
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full relative"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <div className="relative flex gap-2">
            <CarouselPrevious className="static translate-0" />
            <CarouselNext className="static translate-0" />
          </div>
        </div>
        <CarouselContent className="-ml-2 md:-ml-4 gap-2">
          {ads.map((ad, i) => (
            <CarouselItem key={ad.id} className="pl-2 md:pl-4 basis-auto">
              <div className="space-y-3">
                {/* Ad Preview */}
                <div
                  className="[&>iframe]:border [&>iframe]:border-gray-200 [&>iframe]:rounded-lg [&>iframe]:shadow-md"
                  dangerouslySetInnerHTML={{ __html: ad.preview }}
                />

                {/* Ad Information */}
                <Card className="py-0">
                  <CardContent className="p-4 space-y-3">
                    {/* Ad ID and Score */}
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">ID:</span> {ad.id}
                      </div>
                      {/* <Badge className={getScoreColor(ad.performanceScore)}>
                        Score: {ad.performanceScore}
                      </Badge> */}
                    </div>

                    {/* Performance Reasons */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-900">
                        Performance Analysis:
                      </h4>
                      <ul className="space-y-1">
                        {ad.reasons.map((reason, index) => (
                          <li
                            key={index}
                            className="text-xs text-gray-600 flex items-start gap-2"
                          >
                            <span className="text-gray-400 mt-1">•</span>
                            <span>{reason}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
