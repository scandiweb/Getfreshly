'use client';

import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from '@repo/ui/components/drawer';
import { Button } from '@repo/ui/components/button';
import { Settings2 } from 'lucide-react';

import { ChatDrawerProps } from '@/types/chat';
import { useChatDrawer } from '@/hooks/useChatDrawer';
import { DrawerHeader, DrawerContent as ChatDrawerContent } from './index';

export function ChatDrawer({
  messages: initialMessages,
  chatId,
  previewMessageIndex,
  previewTimestamp,
}: ChatDrawerProps) {
  const {
    messages,
    extractedCode,
    open,
    isLoading,
    currentPreviewIndex,
    handleOpenChange,
  } = useChatDrawer({
    chatId,
    initialMessages,
    previewMessageIndex,
    previewTimestamp,
  });

  return (
    <Drawer direction="right" open={open} onOpenChange={handleOpenChange}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="absolute right-4 top-4">
          <Settings2 className="h-4 w-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="!max-w-xl h-full flex flex-col bg-white dark:bg-gray-900 shadow-2xl border-l border-gray-200 dark:border-gray-800 p-0">
        <DrawerHeader
          currentPreviewIndex={currentPreviewIndex}
          previewMessageIndex={previewMessageIndex}
          onClose={() => handleOpenChange(false)}
        />
        <ChatDrawerContent
          extractedCode={extractedCode}
          isLoading={isLoading}
        />
      </DrawerContent>
    </Drawer>
  );
}
