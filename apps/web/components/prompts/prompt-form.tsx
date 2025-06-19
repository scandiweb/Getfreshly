'use client';

import { useState } from 'react';
import { Button } from '@repo/ui/components/button';
import { Textarea } from '@repo/ui/components/textarea';
import { Save, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import {
  savePromptAction,
  deletePromptAction,
} from '@/lib/server-actions/prompt-actions';
import { ServerPrompt } from '@/services/server/prompt.service';

interface PromptFormProps {
  initialPrompt: ServerPrompt | null;
  onSuccess?: (prompt: ServerPrompt | null) => void;
}

export function PromptForm({ initialPrompt, onSuccess }: PromptFormProps) {
  const [promptContent, setPromptContent] = useState(
    initialPrompt?.content || '',
  );
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleSavePrompt = async () => {
    if (!promptContent.trim()) {
      toast.error('Prompt content cannot be empty');
      return;
    }

    setIsSaving(true);
    try {
      const result = await savePromptAction(promptContent);

      if (result.success) {
        toast.success('Prompt saved successfully');
        onSuccess?.(result.prompt || null);
      } else {
        toast.error(result.error || 'Failed to save prompt');
      }
    } catch (error) {
      toast.error('Failed to save prompt');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeletePrompt = async () => {
    if (!initialPrompt) {
      toast.error('No prompt to delete');
      return;
    }

    if (
      !confirm(
        'Are you sure you want to delete your pre-prompt? This action cannot be undone.',
      )
    ) {
      return;
    }

    setIsDeleting(true);
    try {
      const result = await deletePromptAction();

      if (result.success) {
        setPromptContent('');
        toast.success('Prompt deleted successfully');
        onSuccess?.(null);
      } else {
        toast.error(result.error || 'Failed to delete prompt');
      }
    } catch (error) {
      toast.error('Failed to delete prompt');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium mb-2 block">
          Pre-Prompt Content
        </label>
        <Textarea
          value={promptContent}
          onChange={(e) => setPromptContent(e.target.value)}
          placeholder="Enter your pre-prompt content here... This will be used as context for all your AI conversations."
          className="min-h-[300px] max-h-[400px] resize-y"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          {initialPrompt ? (
            <span>
              Last updated:{' '}
              {new Date(initialPrompt.updatedAt).toLocaleDateString()}
            </span>
          ) : (
            <span>No prompt set yet</span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {initialPrompt && (
            <Button
              variant="outline"
              onClick={handleDeletePrompt}
              disabled={isDeleting || isSaving}
            >
              <Trash2 className="size-4 mr-2" />
              {isDeleting ? 'Deleting...' : 'Delete'}
            </Button>
          )}
          <Button
            onClick={handleSavePrompt}
            disabled={isSaving || isDeleting || !promptContent.trim()}
          >
            <Save className="size-4 mr-2" />
            {isSaving ? 'Saving...' : 'Save Prompt'}
          </Button>
        </div>
      </div>
    </div>
  );
}
