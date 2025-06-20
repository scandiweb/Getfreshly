import { CodeViewProps } from '@/types/chat';
import { CodeBlock } from './CodeBlock';

export function CodeView({
  html,
  css,
  js,
  isLoading,
}: CodeViewProps) {
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
