'use client';

import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from '@repo/ui/components/drawer';
import { Button } from '@repo/ui/components/button';
import {
  Settings2,
  Code2,
  Eye,
  X,
} from 'lucide-react';

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@repo/ui/components/tabs';
import { useState, useEffect, useCallback } from 'react';
import { cn } from '@repo/ui/lib/utils';

// Types
interface ChatMessage {
  content: string;
  role: 'user' | 'assistant';
  id?: string;
}

interface ChatDrawerProps {
  chatId: string;
  messages: ChatMessage[];
  previewMessageIndex?: number | null; // New prop to control which message to preview
  previewTimestamp?: number; // Add timestamp to force updates
}

interface ExtractedCode {
  html: string;
  css: string;
  js: string;
}

// Utility functions
const categorizeGenericCode = (
  codeContent: string,
  result: ExtractedCode,
): ExtractedCode => {
  const htmlPatterns = ['<html', '<div', '<body', '<head', '<!DOCTYPE'];
  const cssPatterns = [
    'color:',
    'background:',
    'margin:',
    'padding:',
    'font-',
    'border:',
    'display:',
    'position:',
  ];
  const jsPatterns = [
    'function',
    'const ',
    'let ',
    'var ',
    'document.',
    'window.',
    'addEventListener',
    'console.',
  ];

  const newResult = { ...result };

  if (htmlPatterns.some((pattern) => codeContent.includes(pattern))) {
    newResult.html = codeContent;
  } else if (cssPatterns.some((pattern) => codeContent.includes(pattern))) {
    newResult.css = codeContent;
  } else if (jsPatterns.some((pattern) => codeContent.includes(pattern))) {
    newResult.js = codeContent;
  }

  return newResult;
};

const extractCodeFromContent = (content: string): ExtractedCode => {
  const result: ExtractedCode = { html: '', css: '', js: '' };

  // Extract language-specific code blocks
  const htmlMatch = content.match(/```html\n([\s\S]*?)```/);
  const cssMatch = content.match(/```css\n([\s\S]*?)```/);
  const jsMatch = content.match(/```javascript\n([\s\S]*?)```/);
  const jsAltMatch = content.match(/```js\n([\s\S]*?)```/);

  result.html = htmlMatch?.[1]?.trim() || '';
  result.css = cssMatch?.[1]?.trim() || '';
  result.js = (jsMatch?.[1] || jsAltMatch?.[1])?.trim() || '';

  // Extract and categorize generic code blocks
  const genericCodeBlocks = content.match(/```\n([\s\S]*?)```/g);
  if (genericCodeBlocks) {
    genericCodeBlocks.forEach((block) => {
      const codeContent = block.replace(/```\n/, '').replace(/```/, '').trim();
      const categorizedResult = categorizeGenericCode(codeContent, result);
      Object.assign(result, categorizedResult);
    });
  }

  return result;
};

// Components
function CodeBlock({ code, language }: { code: string; language: string }) {
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

function CodeDetectedNotification() {
  return (
    <div className="fixed top-4 right-4 z-50 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg animate-in slide-in-from-right duration-300">
      <div className="flex items-center gap-2">
        <Code2 className="h-4 w-4" />
        <span className="text-sm">Code detected! Opening preview...</span>
      </div>
    </div>
  );
}

function VisualizationFrame({ html, css, js }: ExtractedCode) {
  if (!html && !css && !js) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
        No code to visualize
      </div>
    );
  }

  const iframeSrcDoc = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          ${css}
          body {
            margin: 0;
            padding: 0;
            background: white;
          }
          canvas {
            width: 100%;
            height: 100%;
          }
          .content {
            width: 100%;
            height: 100%;
          }
          .container {
            width: 100%;
            height: 100%;
          }
        </style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
    </html>
  `;

  return (
    <div className="w-full h-full bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
      <iframe
        srcDoc={iframeSrcDoc}
        sandbox="allow-scripts"
        className="w-full h-full border-0 flex-1 min-h-0"
      />
    </div>
  );
}

function CodeView({
  html,
  css,
  js,
  isLoading,
}: ExtractedCode & { isLoading: boolean }) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-gray-100" />
      </div>
    );
  }

  const hasCode = html || css || js;

  if (!hasCode) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400 py-8">
        No code available
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col gap-6 overflow-y-auto">
      {html && (
        <div>
          <h3 className="text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">
            HTML
          </h3>
          <CodeBlock code={html} language="html" />
        </div>
      )}
      {css && (
        <div>
          <h3 className="text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">
            CSS
          </h3>
          <CodeBlock code={css} language="css" />
        </div>
      )}
      {js && (
        <div>
          <h3 className="text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">
            JavaScript
          </h3>
          <CodeBlock code={js} language="javascript" />
        </div>
      )}
    </div>
  );
}

// Main component
export function ChatDrawer({
  messages: initialMessages,
  chatId,
  previewMessageIndex,
  previewTimestamp,
}: ChatDrawerProps) {
  const [messages, setMessages] = useState(initialMessages);
  const [extractedCode, setExtractedCode] = useState<ExtractedCode>({
    html: '',
    css: '',
    js: '',
  });
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPreviewIndex, setCurrentPreviewIndex] = useState<number | null>(
    null,
  );
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [showCodeDetected, setShowCodeDetected] = useState(false);

  const fetchMessages = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/chats/${chatId}`);
      if (!response.ok) throw new Error('Failed to fetch messages');
      const { messages: fetchedMessages } = await response.json();
      setMessages(fetchedMessages);
    } catch {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }, [chatId]);

  // Function to check if a message is complete (not still streaming)
  const isMessageComplete = useCallback((content: string): boolean => {
    // Check if the message has incomplete code blocks
    const codeBlockCount = (content.match(/```/g) || []).length;
    return codeBlockCount % 2 === 0; // Even number means all code blocks are closed
  }, []);

  // Handle external preview message index changes
  useEffect(() => {
    if (previewMessageIndex !== null && previewMessageIndex !== undefined) {
      const message = messages[previewMessageIndex];
      if (message && message.role === 'assistant') {
        // Check if the message is complete before allowing preview
        if (!isMessageComplete(message.content)) {
          return; // Don't open drawer if message is still streaming
        }

        const newExtractedCode = extractCodeFromContent(message.content);
        setExtractedCode(newExtractedCode);
        setCurrentPreviewIndex(previewMessageIndex);
        setOpen(true);
      }
    }
  }, [previewMessageIndex, previewTimestamp, messages, isMessageComplete]);

  // Handle drawer open/close changes
  const handleOpenChange = useCallback((newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      // User manually closed the drawer
      setCurrentPreviewIndex(null);
    }
  }, []);

  // Fetch messages when drawer opens
  useEffect(() => {
    if (open) {
      fetchMessages();
    }
  }, [open, fetchMessages]);

  // Update messages when initialMessages changes
  useEffect(() => {
    setMessages(initialMessages);
  }, [initialMessages]);

  // Auto-open drawer when code is detected in completed assistant messages
  useEffect(() => {
    // Don't auto-open if we're already previewing a specific message
    if (currentPreviewIndex !== null || previewMessageIndex !== null) {
      return undefined;
    }

    const lastAssistantMessage = [...messages]
      .reverse()
      .find((m) => m.role === 'assistant');

    if (lastAssistantMessage) {
      const newExtractedCode = extractCodeFromContent(
        lastAssistantMessage.content,
      );
      const hasCode =
        newExtractedCode.html || newExtractedCode.css || newExtractedCode.js;

      // Only auto-open if message is complete, has code, and we haven't auto-opened yet
      if (
        hasCode &&
        !hasAutoOpened &&
        !open &&
        isMessageComplete(lastAssistantMessage.content)
      ) {
        setExtractedCode(newExtractedCode);
        setShowCodeDetected(true);

        const timer = setTimeout(() => {
          setOpen(true);
          setHasAutoOpened(true);
          setShowCodeDetected(false);
        }, 800);

        return () => clearTimeout(timer);
      }
    }

    return undefined;
  }, [
    messages,
    hasAutoOpened,
    open,
    currentPreviewIndex,
    previewMessageIndex,
    isMessageComplete,
  ]);

  // Reset auto-open flag when messages change significantly (new chat)
  useEffect(() => {
    if (messages.length <= 1) {
      setHasAutoOpened(false);
      setShowCodeDetected(false);
      setCurrentPreviewIndex(null);
    }
  }, [messages.length]);

  return (
    <>
      {showCodeDetected && <CodeDetectedNotification />}
      <Drawer direction="right" open={open} onOpenChange={handleOpenChange}>
        <DrawerTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4"
          >
            <Settings2 className="h-4 w-4" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="!max-w-xl h-full flex flex-col bg-white dark:bg-gray-900 shadow-2xl border-l border-gray-200 dark:border-gray-800 p-0">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
            <DrawerTitle className="text-lg font-semibold">
              Code Preview
              {(currentPreviewIndex !== null ||
                previewMessageIndex !== null) && (
                <span className="text-sm font-normal text-gray-500 ml-2">
                  (Message{' '}
                  {(currentPreviewIndex ?? previewMessageIndex ?? 0) + 1})
                </span>
              )}
            </DrawerTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleOpenChange(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex-1 flex flex-col min-h-0">
            <Tabs
              defaultValue="visualize"
              className="flex-1 flex flex-col w-full h-full"
            >
              <TabsList className="grid w-full grid-cols-2 bg-transparent px-6">
                <TabsTrigger
                  value="visualize"
                  className="flex items-center gap-2 data-[state=active]:bg-gray-100 dark:data-[state=active]:bg-gray-800 rounded-t-md px-4 py-2 transition-colors"
                >
                  <Eye className="h-4 w-4" />
                  Preview
                </TabsTrigger>
                <TabsTrigger
                  value="code"
                  className="flex items-center gap-2 data-[state=active]:bg-gray-100 dark:data-[state=active]:bg-gray-800 rounded-t-md px-4 py-2 transition-colors"
                >
                  <Code2 className="h-4 w-4" />
                  Code
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="visualize"
                className="flex-1 flex flex-col p-6 h-0 min-h-0"
              >
                <VisualizationFrame {...extractedCode} />
              </TabsContent>
              <TabsContent
                value="code"
                className="flex-1 flex flex-col p-6 h-0 min-h-0"
              >
                <CodeView {...extractedCode} isLoading={isLoading} />
              </TabsContent>
            </Tabs>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
