import { useState, useEffect, useCallback } from 'react';
import { Message } from '@/types/chat';
import {
  extractCodeFromContent,
  isMessageComplete,
  hasCode,
} from '@/utils/codeExtractor';

interface ExtractedCode {
  html: string;
  css: string;
  js: string;
}

interface UseChatDrawerProps {
  chatId: string;
  initialMessages: Message[];
  previewMessageIndex?: number | null;
  previewTimestamp?: number;
}

interface UseChatDrawerReturn {
  messages: Message[];
  extractedCode: ExtractedCode;
  open: boolean;
  isLoading: boolean;
  currentPreviewIndex: number | null;
  manuallyClosedMessageId: string;
  handleOpenChange: (newOpen: boolean) => void;
  setExtractedCode: (code: ExtractedCode) => void;
}

export const useChatDrawer = ({
  chatId,
  initialMessages,
  previewMessageIndex,
  previewTimestamp,
}: UseChatDrawerProps): UseChatDrawerReturn => {
  const [messages, setMessages] = useState(initialMessages);
  const [extractedCode, setExtractedCode] = useState<ExtractedCode>({
    html: '',
    css: '',
    js: '',
  });
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPreviewIndex, setCurrentPreviewIndex] = useState<number | null>(
    null,
  );
  const [manuallyClosedMessageId, setManuallyClosedMessageId] =
    useState<string>('');
  const [lastProcessedMessageId, setLastProcessedMessageId] =
    useState<string>('');

  const fetchMessages = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/chats/${chatId}`);
      if (!response.ok) throw new Error('Failed to fetch messages');
      const { messages: fetchedMessages } = await response.json();
      setMessages(fetchedMessages);
    } catch (error) {
      console.error('Failed to fetch messages:', error);
    } finally {
      setIsLoading(false);
    }
  }, [chatId]);

  const handleOpenChange = useCallback(
    (newOpen: boolean) => {
      setOpen(newOpen);
      if (!newOpen) {
        const lastAssistantMessage = [...messages]
          .reverse()
          .find((m) => m.role === 'assistant');
        if (lastAssistantMessage?.id) {
          setManuallyClosedMessageId(lastAssistantMessage.id);
        }
        setCurrentPreviewIndex(null);
      }
    },
    [messages],
  );

  // Handle external preview message index changes
  useEffect(() => {
    if (previewMessageIndex !== null && previewMessageIndex !== undefined) {
      const message = messages[previewMessageIndex];
      if (message && message.role === 'assistant') {
        if (!isMessageComplete(message.content)) {
          return;
        }

        const newExtractedCode = extractCodeFromContent(message.content);
        setExtractedCode(newExtractedCode);
        setCurrentPreviewIndex(previewMessageIndex);
        setOpen(true);
      }
    }
  }, [previewMessageIndex, previewTimestamp, messages]);

  // Fetch messages when drawer opens
  useEffect(() => {
    if (open) {
      fetchMessages();
    }
  }, [open, fetchMessages]);

  // Update messages when initialMessages changes
  useEffect(() => {
    setMessages(initialMessages);
  }, [initialMessages]);

  // Auto-open drawer when code is detected in completed assistant messages
  useEffect(() => {
    // Skip if we're already showing a specific message or if drawer is open
    if (currentPreviewIndex !== null || previewMessageIndex !== null || open) {
      return;
    }

    const lastAssistantMessage = [...messages]
      .reverse()
      .find((m) => m.role === 'assistant');

    if (!lastAssistantMessage) {
      return;
    }

    // Skip if we've already processed this message
    if (lastAssistantMessage.id === lastProcessedMessageId) {
      return;
    }

    // Skip if message was manually closed
    if (lastAssistantMessage.id === manuallyClosedMessageId) {
      return;
    }

    // Only process complete messages that aren't loading
    if (
      !isMessageComplete(lastAssistantMessage.content) ||
      lastAssistantMessage.isLoading
    ) {
      return;
    }

    const newExtractedCode = extractCodeFromContent(
      lastAssistantMessage.content,
    );
    const hasCodeInMessage = hasCode(newExtractedCode);

    if (hasCodeInMessage) {
      // Open drawer immediately when code is detected
      setExtractedCode(newExtractedCode);
      setLastProcessedMessageId(lastAssistantMessage.id);
      setOpen(true);
    }
  }, [
    messages,
    open,
    currentPreviewIndex,
    previewMessageIndex,
    manuallyClosedMessageId,
    lastProcessedMessageId,
  ]);

  // Reset states when messages change significantly (new chat)
  useEffect(() => {
    if (messages.length <= 1) {
      setCurrentPreviewIndex(null);
      setManuallyClosedMessageId('');
      setLastProcessedMessageId('');
    }
  }, [messages.length]);

  return {
    messages,
    extractedCode,
    open,
    isLoading,
    currentPreviewIndex,
    manuallyClosedMessageId,
    handleOpenChange,
    setExtractedCode,
  };
};
