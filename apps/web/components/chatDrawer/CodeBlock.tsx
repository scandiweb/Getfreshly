import { cn } from '@repo/ui/lib/utils';
import { CodeBlockProps } from '@/types/chat';

export function CodeBlock({ code, language }: CodeBlockProps) {
  return (
    <pre className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-x-auto border border-gray-200 dark:border-gray-700">
      <code
        className={cn(
          'text-sm font-mono',
          language === 'html' && 'text-blue-600 dark:text-blue-400',
          language === 'css' && 'text-green-600 dark:text-green-400',
          language === 'javascript' && 'text-yellow-600 dark:text-yellow-400',
        )}
      >
        {code}
      </code>
    </pre>
  );
}
