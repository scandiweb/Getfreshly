import { UserService } from '@/services/user.service';
import { ApiErrorHandler } from '@/utils/error-handler';
import { MessageService } from '@/services/server/message.service';
import { ChatValidator } from '@/validators/chat.validator';
import { StreamingService } from '@/services/server/streaming.service';
import { type ChatCompletionMessageParam } from 'openai/resources/index.mjs';
import { DashboardChatService } from '@/services/server/dashboard-chat.service';
import { ApiUtils } from '@/utils/api.utils';

export async function POST(request: Request) {
  try {
    const userId = await UserService.requireAuth();
    const requestBody = await request.json();
    const { message, adAccountId, accessToken } =
      ChatValidator.validateMessage(requestBody);
    const { dashboardContext } = requestBody; // Extract dashboard context separately

    const chatHistory = await MessageService.getDashboardChatHistory(userId);
    const messages = [
      ...chatHistory,
      { role: 'user', content: message },
    ] as ChatCompletionMessageParam[];

    // Set up streaming
    const { stream, writer } = StreamingService.createStream();
    const streamingService = new StreamingService(writer);

    DashboardChatService.streamChatResponse(
      streamingService,
      messages,
      userId,
      accessToken,
      adAccountId,
      dashboardContext, // Pass dashboard context separately
    ).finally(() => streamingService.close());

    return new Response(stream.readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    });
  } catch (error) {
    return ApiErrorHandler.handle(error);
  }
}

export async function GET() {
  try {
    const userId = await UserService.requireAuth();
    const messages = await MessageService.getUserMessages(userId, 'dashboard');

    return ApiUtils.createResponse({ messages });
  } catch (error) {
    return ApiErrorHandler.handle(error);
  }
}
