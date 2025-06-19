'use client';

import { useState, useEffect } from 'react';
import { PromptModal } from './prompt-modal';
import { ServerPrompt } from '@/services/server/prompt.service';
import { getPromptAction } from '@/lib/server-actions/prompt-actions';

interface PromptModalClientWrapperProps {
  children?: React.ReactNode;
}

export function PromptModalClientWrapper({ children }: PromptModalClientWrapperProps) {
  const [prompt, setPrompt] = useState<ServerPrompt | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPrompt = async () => {
      try {
        const result = await getPromptAction();
        if (result.success && result.prompt) {
          setPrompt({
            id: result.prompt.id,
            content: result.prompt.content,
            createdAt: new Date(result.prompt.createdAt),
            updatedAt: new Date(result.prompt.updatedAt),
          });
        }
      } catch (error) {
        console.error('Failed to fetch prompt:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPrompt();
  }, []);

  if (isLoading) {
    return null; // Don't show loading, just don't render anything until ready
  }

  return <PromptModal initialPrompt={prompt}>{children}</PromptModal>;
}
