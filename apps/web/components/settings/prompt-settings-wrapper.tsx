'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';
import { Button } from '@repo/ui/components/button';
import { MessageSquarePlus } from 'lucide-react';
import { PromptModal } from '@/components/prompts';
import { ServerPrompt } from '@/services/server/prompt.service';

interface PromptSettingsModalProps {
  initialPrompt: ServerPrompt | null;
}

export function PromptSettingsModal({
  initialPrompt,
}: PromptSettingsModalProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquarePlus className="size-5" />
          Pre-Prompt Management
        </CardTitle>
        <CardDescription>
          Set your pre-prompt for better AI interactions. This will be used as
          context for all your conversations.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {initialPrompt ? (
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">
              <strong>Current prompt:</strong>
            </div>
            <div className="p-3 bg-muted rounded-md text-sm">
              {initialPrompt.content.length > 200
                ? `${initialPrompt.content.substring(0, 200)}...`
                : initialPrompt.content}
            </div>
            <div className="text-xs text-muted-foreground">
              Last updated: {initialPrompt.updatedAt.toLocaleDateString()}
            </div>
          </div>
        ) : (
          <div className="text-sm text-muted-foreground">
            No pre-prompt set yet. Click the button below to create one.
          </div>
        )}

        <div className="flex justify-end">
          <PromptModal initialPrompt={initialPrompt}>
            <Button>
              <MessageSquarePlus className="size-4 mr-2" />
              {initialPrompt ? 'Edit Pre-Prompt' : 'Add Pre-Prompt'}
            </Button>
          </PromptModal>
        </div>
      </CardContent>
    </Card>
  );
}
