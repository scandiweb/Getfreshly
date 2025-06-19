'use client';

import { Button } from '@repo/ui/components/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@repo/ui/components/dropdown-menu';
import { Settings } from 'lucide-react';
import { PromptModalClientWrapper } from '@/components/prompts/prompt-modal-client-wrapper';

export function SettingsDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <PromptModalClientWrapper />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
