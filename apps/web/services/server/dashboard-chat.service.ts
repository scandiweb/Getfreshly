import { ChatCompletionMessageParam } from 'openai/resources/index.mjs';
import { MessageService } from './message.service';
import { StreamingService } from './streaming.service';
import { DashboardOpenAIChatService } from './AI/dashboard-openai.service';

export class DashboardChatService {
  static async streamChatResponse(
    streamingService: StreamingService,
    messages: ChatCompletionMessageParam[],
    userId: string,
    accessToken?: string,
    adAccountId?: string,
    dashboardContext?: any,
  ): Promise<void> {
    try {
      let fullResponse = '';
      const dashboardChatService = new DashboardOpenAIChatService(
        accessToken,
        adAccountId,
        dashboardContext,
      );

      for await (const chunk of dashboardChatService.streamChat(messages)) {
        fullResponse += chunk;
        await streamingService.writeChunk(chunk);
      }

      // Store messages in database
      const newMessages = [
        messages[messages.length - 1],
        { role: 'assistant', content: fullResponse },
      ] as ChatCompletionMessageParam[];

      await MessageService.storeDashboardMessages(userId, newMessages);
      await streamingService.writeDone();
    } catch (error) {
      console.error('Error in dashboard streaming response:', error);
      await streamingService.writeError('Error processing response');
    }
  }
}
