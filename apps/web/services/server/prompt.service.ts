import { prisma } from '@repo/database';

export interface ServerPrompt {
  id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export class ServerPromptService {
  static async getUserPrompt(userId: string): Promise<ServerPrompt | null> {
    try {
      const prompt = await prisma.prompt.findUnique({
        where: { userId },
        select: {
          id: true,
          content: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      return prompt;
    } catch (error) {
      console.error('Error fetching user prompt:', error);
      return null;
    }
  }

  static async hasUserPrompt(userId: string): Promise<boolean> {
    try {
      const prompt = await prisma.prompt.findUnique({
        where: { userId },
        select: { id: true },
      });

      return !!prompt;
    } catch (error) {
      console.error('Error checking if user has prompt:', error);
      return false;
    }
  }
}
