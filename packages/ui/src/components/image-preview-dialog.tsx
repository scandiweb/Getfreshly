'use client';

import * as React from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from './dialog';
import { cn } from '@repo/ui/lib/utils';
import { X } from 'lucide-react';

interface ImagePreviewDialogProps {
  src: string;
  alt?: string;
  children: React.ReactNode;
  className?: string;
}

export function ImagePreviewDialog({
  src,
  alt = 'Image',
  children,
  className,
}: ImagePreviewDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={cn('cursor-pointer', className)}>{children}</div>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-transparent border-none shadow-none">
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <DialogClose asChild>
            <button
              className="absolute top-4 right-4 z-50 rounded-full bg-black/50 hover:bg-black/70 text-white p-2 transition-colors duration-200 backdrop-blur-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <X className="h-5 w-5" />
            </button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
