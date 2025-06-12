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

interface AdSliderProps {
  ads: string[];
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
            <CarouselItem key={i} className="pl-2 md:pl-4 basis-auto">
              <div
                className="[&>iframe]:border [&>iframe]:border-gray-200 [&>iframe]:rounded-lg [&>iframe]:shadow-md"
                dangerouslySetInnerHTML={{ __html: ad }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
