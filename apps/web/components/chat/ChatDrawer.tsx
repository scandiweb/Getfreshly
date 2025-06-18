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
import { useState, useEffect } from 'react';
import { cn } from '@repo/ui/lib/utils';

interface ChatDrawerProps
{
  chatId: string;
  messages: Array<{
    content: string;
    role: 'user' | 'assistant';
  }>;
}

export function ChatDrawer({
  messages: initialMessages,
  chatId,
}: ChatDrawerProps) {
  const [messages, setMessages] = useState(initialMessages);
  const [htmlCode, setHtmlCode] = useState<string>('');
  const [cssCode, setCssCode] = useState<string>('');
  const [jsCode, setJsCode] = useState<string>('');
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Function to fetch messages
  const fetchMessages = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/chats/${chatId}`);
      if (!response.ok) throw new Error('Failed to fetch messages');
      const { messages: fetchedMessages } = await response.json();
      setMessages(fetchedMessages);
    } catch {
      // Error handling without using the error variable
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch messages when drawer opens
  useEffect(() => {
    if (open) {
      fetchMessages();
    }
  }, [open, chatId]);

  // Update messages when initialMessages changes
  useEffect(() => {
    setMessages(initialMessages);
  }, [initialMessages]);

  useEffect(() => {
    // Extract code from the last assistant message
    const lastAssistantMessage = [...messages]
      .reverse()
      .find((m) => m.role === 'assistant');
    if (lastAssistantMessage) {
      const { content } = lastAssistantMessage;

      // Extract HTML
      const htmlMatch = content.match(/```html\n([\s\S]*?)```/);
      setHtmlCode(htmlMatch?.[1]?.trim() || '');

      // Extract CSS
      const cssMatch = content.match(/```css\n([\s\S]*?)```/);
      setCssCode(cssMatch?.[1]?.trim() || '');

      // Extract JavaScript
      const jsMatch = content.match(/```javascript\n([\s\S]*?)```/);
      setJsCode(jsMatch?.[1]?.trim() || '');
    }
  }, [messages]);

  const renderCodeBlock = (code: string, language: string) => (
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

  const renderVisualization = () => {
    if (!htmlCode && !cssCode && !jsCode) {
      return (
        <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
          No code to visualize
        </div>
      );
    }
    return (
      <div className="w-full h-full bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
        <iframe
          srcDoc={`
            <!DOCTYPE html>
            <html>
              <head>
                <style>
                  ${cssCode}
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
                ${htmlCode}
                <script>${jsCode}</script>
              </body>
            </html>
          `}
          sandbox='allow-scripts'
          className="w-full h-full border-0 flex-1 min-h-0"
        />
      </div>
    );
  };

  return (
    <Drawer direction="right" open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="absolute right-4 top-4">
          <Settings2 className="h-4 w-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="w-full h-full flex flex-col bg-white dark:bg-gray-900 shadow-2xl border-l border-gray-200 dark:border-gray-800 p-0">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
          <DrawerTitle className="text-lg font-semibold">
            Code Preview
          </DrawerTitle>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
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
              {renderVisualization()}
            </TabsContent>
            <TabsContent
              value="code"
              className="flex-1 flex flex-col p-6 h-0 min-h-0"
            >
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-gray-100" />
                </div>
              ) : (
                <div className="flex-1 flex flex-col gap-6 overflow-y-auto">
                  {htmlCode && (
                    <div>
                      <h3 className="text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">
                        HTML
                      </h3>
                      {renderCodeBlock(htmlCode, 'html')}
                    </div>
                  )}
                  {cssCode && (
                    <div>
                      <h3 className="text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">
                        CSS
                      </h3>
                      {renderCodeBlock(cssCode, 'css')}
                    </div>
                  )}
                  {jsCode && (
                    <div>
                      <h3 className="text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">
                        JavaScript
                      </h3>
                      {renderCodeBlock(jsCode, 'javascript')}
                    </div>
                  )}
                  {!htmlCode && !cssCode && !jsCode && (
                    <div className="text-center text-gray-500 dark:text-gray-400 py-8">
                      No code available
                    </div>
                  )}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
