import * as React from 'react';
import { cn } from '@repo/ui/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';

const chatBubbleVariants = cva('rounded-lg p-4 max-w-[80%] text-sm', {
  variants: {
    variant: {
      user: 'bg-primary text-primary-foreground ml-auto',
      assistant:
        'bg-muted text-muted-foreground mr-auto prose prose-invert dark:prose-invert max-w-none break-words overflow-hidden',
    },
  },
  defaultVariants: {
    variant: 'user',
  },
});

interface ChatBubbleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chatBubbleVariants> {
  message: string;
  userImage?: string;
  userName?: string;
  isLoading?: boolean;
}

const markdownComponents: Components = {
  pre: ({ children }) => (
    <pre className="hidden overflow-x-auto rounded-lg bg-black/10 p-2 break-words whitespace-pre-wrap">
      {children}
    </pre>
  ),
  code: ({ children, className }) => {
    const isInline = !className;
    return isInline ? (
      <code className="rounded bg-black/10 px-1 py-0.5 break-words">
        {children}
      </code>
    ) : (
      <code className={cn(className, 'break-words')}>{children}</code>
    );
  },
  p: ({ children }) => (
    <p className="break-words overflow-hidden">{children}</p>
  ),
};

export function ChatBubble({
  className,
  variant,
  message,
  userImage,
  userName,
  isLoading,
  ...props
}: ChatBubbleProps) {
  return (
    <div className="flex items-end gap-2 group">
      {variant === 'user' && (
        <div className="order-2 flex-shrink-0">
          <Avatar>
            <AvatarImage src={userImage} alt={userName || 'User'} />
            <AvatarFallback>{userName?.charAt(0) || 'U'}</AvatarFallback>
          </Avatar>
        </div>
      )}
      <div
        className={cn(
          chatBubbleVariants({ variant }),
          'order-1 flex items-center gap-2',
          className,
        )}
        {...props}
      >
        <div className="whitespace-pre-wrap break-words overflow-hidden">
          {variant === 'user' ? (
            message.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < message.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))
          ) : (
            <div className="[&_*:first-child]:mt-0 [&_*:last-child]:mb-0 leading-normal break-words overflow-hidden">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={markdownComponents}
              >
                {message}
              </ReactMarkdown>
            </div>
          )}
        </div>
        {isLoading && <Loader2 className="h-4 w-4 animate-spin opacity-70" />}
      </div>
    </div>
  );
}
