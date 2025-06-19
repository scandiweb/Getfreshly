'use client';

import { Button } from '@repo/ui/components/button';
import { Eye, Code2 } from 'lucide-react';
import { cn } from '@repo/ui/lib/utils';

interface VisualizeCodeButtonProps {
  onClick: () => void;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'default';
}

export function VisualizeCodeButton({
  onClick,
  className,
  variant = 'outline',
  size = 'sm',
}: VisualizeCodeButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      className={cn(
        'flex items-center gap-2 text-xs transition-all hover:scale-105',
        'bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30',
        'border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300',
        className,
      )}
    >
      <Eye className="h-3 w-3" />
      <Code2 className="h-3 w-3" />
      Visualize Code
    </Button>
  );
}
