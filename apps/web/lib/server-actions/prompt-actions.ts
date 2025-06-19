'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@repo/database';
import { UserService } from '@/services/user.service';

export async function getPromptAction() {
  try {
    const userId = await UserService.requireAuth();

    const prompt = await prisma.prompt.findFirst({
      where: { userId },
      select: {
        id: true,
        content: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return { success: true, prompt };
  } catch (error) {
    console.error('Error fetching prompt:', error);
    return { success: false, error: 'Failed to fetch prompt' };
  }
}

export async function savePromptAction(content: string) {
  try {
    const userId = await UserService.requireAuth();

    if (!content || typeof content !== 'string') {
      throw new Error('Content is required');
    }

    // Check if user already has a prompt
    const existingPrompt = await prisma.prompt.findFirst({
      where: { userId },
    });

    let prompt;
    if (existingPrompt) {
      // Update existing prompt
      prompt = await prisma.prompt.update({
        where: { id: existingPrompt.id },
        data: { content },
        select: {
          id: true,
          content: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } else {
      // Create new prompt
      prompt = await prisma.prompt.create({
        data: {
          userId,
          content,
        },
        select: {
          id: true,
          content: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    }

    revalidatePath('/settings');
    return { success: true, prompt };
  } catch (error) {
    console.error('Error saving prompt:', error);
    return { success: false, error: 'Failed to save prompt' };
  }
}

export async function deletePromptAction() {
  try {
    const userId = await UserService.requireAuth();

    // Check if the prompt exists and belongs to the user
    const prompt = await prisma.prompt.findFirst({
      where: { userId },
    });

    if (!prompt) {
      throw new Error('Prompt not found');
    }

    // Delete the prompt
    await prisma.prompt.delete({
      where: { id: prompt.id },
    });

    revalidatePath('/settings');
    return { success: true };
  } catch (error) {
    console.error('Error deleting prompt:', error);
    return { success: false, error: 'Failed to delete prompt' };
  }
}
