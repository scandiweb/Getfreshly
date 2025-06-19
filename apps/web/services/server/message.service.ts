import { CreateMessageData } from '@/types/chat';
import { prisma } from '@repo/database';
import type { ChatCompletionMessageParam } from 'openai/resources/chat/completions';

export class MessageService {
  static async createMessage(data: CreateMessageData) {
    return await prisma.message.create({
      data,
    });
  }

  static async getUserChatHistory(
    userId: string,
    chatType: string = 'general',
  ): Promise<ChatCompletionMessageParam[]> {
    const messages = await prisma.message.findMany({
      where: {
        userId,
        chatType,
        content: { not: '' },
      },
      orderBy: { createdAt: 'asc' },
      select: {
        role: true,
        content: true,
      },
    });

    return messages as ChatCompletionMessageParam[];
  }

  static async getDashboardChatHistory(
    userId: string,
  ): Promise<ChatCompletionMessageParam[]> {
    return this.getUserChatHistory(userId, 'dashboard');
  }

  static async getUserMessages(userId: string, chatType?: string) {
    const whereClause: any = { userId };
    if (chatType) {
      whereClause.chatType = chatType;
    }

    return await prisma.message.findMany({
      where: whereClause,
      orderBy: { createdAt: 'asc' },
    });
  }

  static async updateMessage(
    messageId: string,
    data: Partial<CreateMessageData>,
  ) {
    return await prisma.message.update({
      where: { id: messageId },
      data,
    });
  }

  static async storeMessages(
    userId: string,
    messages: ChatCompletionMessageParam[],
    chatType: string = 'general',
  ) {
    for (const message of messages) {
      await this.createMessage({
        ...message,
        userId,
        chatType,
      } as CreateMessageData);
    }
  }

  static async storeDashboardMessages(
    userId: string,
    messages: ChatCompletionMessageParam[],
  ) {
    return this.storeMessages(userId, messages, 'dashboard');
  }
}
