import { useState } from 'react';
import { toast } from 'sonner';
import { Message } from '@/types/chat';
import { ChatService } from '@/services/client/chat.service';
import { MessageFactory } from '@/factories/message.factory';

export function useMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const data = await ChatService.fetchMessages();
      setMessages(data.messages);
    } catch (error) {
      toast.error('Error fetching messages');
      console.error('Error fetching messages', error);
    } finally {
      setIsLoading(false);
    }
  };

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  const updateOrCreateAssistantMessage = (
    messageId: string,
    textChunk: string,
  ) => {
    setMessages((prev) => {
      const messageIndex = prev.findIndex((msg) => msg.id === messageId);

      if (messageIndex === -1) {
        const newMessage = MessageFactory.createAssistantMessage(
          messageId,
          textChunk,
        );
        return [...prev, newMessage];
      }

      const updatedMessages = [...prev];
      const existingMessage = updatedMessages[messageIndex];
      if (!existingMessage) return prev;

      updatedMessages[messageIndex] = {
        ...existingMessage,
        content: existingMessage.content + textChunk,
      };
      return updatedMessages;
    });
  };

  const updateLastAssistantMessage = (textChunk: string) => {
    setMessages((prev) => {
      if (prev.length === 0) return prev;

      const lastMessage = prev[prev.length - 1];
      if (!lastMessage || lastMessage.role !== 'assistant') {
        // Create a new assistant message if the last message isn't from assistant
        const newMessage = MessageFactory.createAssistantMessage(
          `temp-${Date.now()}`,
          textChunk,
          true,
        );
        return [...prev, newMessage];
      }

      const updatedMessages = [...prev];
      updatedMessages[updatedMessages.length - 1] = {
        ...lastMessage,
        content: lastMessage.content + textChunk,
      };
      return updatedMessages;
    });
  };

  const markLastAssistantMessageAsComplete = () => {
    setMessages((prev) => {
      if (prev.length === 0) return prev;

      const lastMessage = prev[prev.length - 1];
      if (!lastMessage || lastMessage.role !== 'assistant') return prev;

      const updatedMessages = [...prev];
      updatedMessages[updatedMessages.length - 1] = {
        ...lastMessage,
        isLoading: false,
      };
      return updatedMessages;
    });
  };

  return {
    messages,
    isLoading,
    fetchMessages,
    addMessage,
    updateOrCreateAssistantMessage,
    updateLastAssistantMessage,
    markLastAssistantMessageAsComplete,
  };
}

export function useDashboardMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const data = await ChatService.fetchDashboardMessages();
      setMessages(data.messages);
    } catch (error) {
      toast.error('Error fetching dashboard messages');
      console.error('Error fetching dashboard messages', error);
    } finally {
      setIsLoading(false);
    }
  };

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  const updateOrCreateAssistantMessage = (
    messageId: string,
    textChunk: string,
  ) => {
    setMessages((prev) => {
      const messageIndex = prev.findIndex((msg) => msg.id === messageId);

      if (messageIndex === -1) {
        const newMessage = MessageFactory.createAssistantMessage(
          messageId,
          textChunk,
        );
        return [...prev, newMessage];
      }

      const updatedMessages = [...prev];
      const existingMessage = updatedMessages[messageIndex];
      if (!existingMessage) return prev;

      updatedMessages[messageIndex] = {
        ...existingMessage,
        content: existingMessage.content + textChunk,
      };
      return updatedMessages;
    });
  };

  const updateLastAssistantMessage = (textChunk: string) => {
    setMessages((prev) => {
      if (prev.length === 0) return prev;

      const lastMessage = prev[prev.length - 1];
      if (!lastMessage || lastMessage.role !== 'assistant') {
        // Create a new assistant message if the last message isn't from assistant
        const newMessage = MessageFactory.createAssistantMessage(
          `temp-${Date.now()}`,
          textChunk,
          true,
        );
        return [...prev, newMessage];
      }

      const updatedMessages = [...prev];
      updatedMessages[updatedMessages.length - 1] = {
        ...lastMessage,
        content: lastMessage.content + textChunk,
      };
      return updatedMessages;
    });
  };

  const markLastAssistantMessageAsComplete = () => {
    setMessages((prev) => {
      if (prev.length === 0) return prev;

      const lastMessage = prev[prev.length - 1];
      if (!lastMessage || lastMessage.role !== 'assistant') return prev;

      const updatedMessages = [...prev];
      updatedMessages[updatedMessages.length - 1] = {
        ...lastMessage,
        isLoading: false,
      };
      return updatedMessages;
    });
  };

  return {
    messages,
    isLoading,
    fetchMessages,
    addMessage,
    updateOrCreateAssistantMessage,
    updateLastAssistantMessage,
    markLastAssistantMessageAsComplete,
  };
}
