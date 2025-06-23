import { ChatBubble } from '@repo/ui/components/chat-bubble';
import { ScrollToBottom } from './scroll-to-bottom';
import { MessagesListProps } from '@/types/chat';
import { hasGeneratedCode } from '../../utils/codeDetection';
import { VisualizeCodeButton } from './VisualizeCodeButton';

interface MessagesListWithVisualizeProps extends MessagesListProps {
  onVisualizeMessage?: (messageIndex: number) => void;
}

// Function to check if a message is complete (not still streaming)
const isMessageComplete = (content: string): boolean => {
  // Check if the message has incomplete code blocks
  const codeBlockCount = (content.match(/```/g) || []).length;
  return codeBlockCount % 2 === 0; // Even number means all code blocks are closed
};

export function MessagesList({
  messages,
  currentUser,
  onVisualizeMessage,
}: MessagesListWithVisualizeProps) {
  return (
    <div className="p-4 pb-24 flex flex-col gap-4 max-h-full overflow-y-scroll">
      {messages.map((message, index) => (
        <div key={message.id} className="flex flex-col gap-2 over">
          <ChatBubble
            variant={message.role}
            message={message.content}
            userName={message.role === 'user' ? currentUser.name : undefined}
            userImage={message.role === 'user' ? currentUser.image : undefined}
            isLoading={message.isLoading}
          />

          {/* Show visualize button for assistant messages with code that are complete */}
          {message.role === 'assistant' &&
            hasGeneratedCode(message.content) &&
            isMessageComplete(message.content) &&
            onVisualizeMessage && (
              <div className="flex justify-start ml-12">
                <VisualizeCodeButton
                  onClick={() => onVisualizeMessage(index)}
                  className="animate-in slide-in-from-left duration-300"
                />
              </div>
            )}
        </div>
      ))}
      <ScrollToBottom deps={[messages]} />
    </div>
  );
}
