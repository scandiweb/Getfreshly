import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@repo/ui/components/dialog';
import { DropdownMenuItem } from '@repo/ui/components/dropdown-menu';
import { MessageSquarePlus } from 'lucide-react';
import { ServerPrompt } from '@/services/server/prompt.service';
import { PromptForm } from './prompt-form';

interface PromptModalProps {
  initialPrompt?: ServerPrompt | null;
  children?: React.ReactNode;
}

export function PromptModal({ initialPrompt, children }: PromptModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children || (
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            <MessageSquarePlus className="size-4 mr-2" />
            Add Pre-Prompt
          </DropdownMenuItem>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Manage Pre-Prompt</DialogTitle>
          <DialogDescription>
            Set your pre-prompt for better AI interactions. This will be used as
            context for all your conversations.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <PromptForm initialPrompt={initialPrompt || null} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
