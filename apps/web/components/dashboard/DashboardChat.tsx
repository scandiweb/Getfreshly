'use client';

import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { ChatInput } from '../chat/ChatInput';
import { LoadingSpinner } from '../chat/LoadingSpinner';
import { MessagesList } from '../chat/MessagesList';
import { useDashboardMessages } from '@/hooks/useMessages';
import { MessageFactory } from '@/factories/message.factory';
import { CurrentUser, SelectedAccount } from '@/types/chat';
import { LinkedAccount } from '@/types/linkedAccounts';
import { ChatService } from '@/services/client/chat.service';
import { FacebookMetrics } from '@/types/facebook';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';
import { MessageCircle, Minimize2, Maximize2 } from 'lucide-react';
import { Button } from '@repo/ui/components/button';

interface DashboardChatProps {
  currentUser: CurrentUser;
  linkedAccounts: LinkedAccount[];
  metaMetrics?: FacebookMetrics;
  bestPerformingAds?: Array<{
    id: string;
    performanceScore: number;
    reasons: string[];
  }>;
  worstPerformingAds?: Array<{
    id: string;
    performanceScore: number;
    reasons: string[];
  }>;
}

export default function DashboardChat({
  currentUser,
  linkedAccounts,
  metaMetrics,
  bestPerformingAds,
  worstPerformingAds,
}: DashboardChatProps) {
  const [isMinimized, setIsMinimized] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  const {
    messages,
    isLoading,
    fetchMessages,
    addMessage,
    updateLastAssistantMessage,
    markLastAssistantMessageAsComplete,
  } = useDashboardMessages();

  useEffect(() => {
    if (!isMinimized && !isInitialized) {
      fetchMessages();
      setIsInitialized(true);
    }
  }, [isMinimized, isInitialized, fetchMessages]);

  const formatDashboardContext = () => {
    return {
      metrics: metaMetrics
        ? {
            hasData: metaMetrics.hasData,
            totalSpend: metaMetrics.totalSpend,
            impressions: metaMetrics.impressions,
            clicks: metaMetrics.clicks,
            ctr: metaMetrics.ctr,
            activeCampaigns: metaMetrics.activeCampaigns,
            activeAdSets: metaMetrics.activeAdSets,
            activeAds: metaMetrics.activeAds,
          }
        : null,
      bestPerformingAds:
        bestPerformingAds?.map((ad) => ({
          id: ad.id,
          performanceScore: ad.performanceScore,
          reasons: ad.reasons,
        })) || [],
      worstPerformingAds:
        worstPerformingAds?.map((ad) => ({
          id: ad.id,
          performanceScore: ad.performanceScore,
          reasons: ad.reasons,
        })) || [],
    };
  };

  const handleNewMessage = async (
    content: string,
    selectedAccount?: SelectedAccount | null,
  ) => {
    const userMessage = MessageFactory.createUserMessage(content);
    addMessage(userMessage);

    try {
      // Send the message with dashboard context as separate data
      await ChatService.sendDashboardMessage(
        content, // Send only the user's message
        (chunk: string) => {
          updateLastAssistantMessage(chunk);
        },
        selectedAccount,
        formatDashboardContext(), // Pass dashboard context separately
      );
      markLastAssistantMessageAsComplete();
    } catch (error) {
      console.error('Error sending message', error);
      toast.error('Error sending message');
    }
  };

  if (isMinimized) {
    return (
      <Card className="fixed bottom-4 right-4 w-80 shadow-lg">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <CardTitle className="text-sm">Dashboard Assistant</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(false)}
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-sm text-muted-foreground">
            Ask me about your ad performance, metrics, or get marketing insights
            based on your current dashboard data.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="fixed bottom-4 right-4 w-96 h-[600px] shadow-lg flex flex-col">
      <CardHeader className="pb-2 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            <CardTitle className="text-sm">Dashboard Assistant</CardTitle>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMinimized(true)}
          >
            <Minimize2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className="flex-1 overflow-hidden">
              <MessagesList messages={messages} currentUser={currentUser} />
            </div>
            <div className="border-t bg-background flex-shrink-0">
              <ChatInput
                onSendMessage={handleNewMessage}
                linkedAccounts={linkedAccounts}
              />
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
