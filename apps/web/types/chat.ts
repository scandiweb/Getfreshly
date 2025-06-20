import { LinkedAccount } from './linkedAccounts';

export type MessageRole = 'user' | 'assistant';

export type Message = {
  chatId: string;
  id: string;
  content: string;
  role: MessageRole;
  isLoading?: boolean;
  userId?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export interface MessagesListProps {
  messages: Message[];
  currentUser: CurrentUser;
}

export interface CurrentUser {
  name?: string;
  image?: string;
}

export interface StreamChunkData {
  chunk: string;
}

export interface ChatInputProps {
  onSendMessage: (
    message: string,
    selectedAccount?: SelectedAccount | null,
  ) => Promise<void>;
  linkedAccounts: LinkedAccount[];
}

export interface AccountSelectorProps {
  isDisabled?: boolean;
  linkedAccounts: LinkedAccount[];
  onAccountSelect?: (account: SelectedAccount | null) => void;
}

export interface SelectedAccount {
  accountId: string;
  accountName: string;
  accessToken: string;
}

export interface CreateMessageData {
  content: string;
  userId: string;
  chatId: string;
  role: 'user' | 'assistant';
  isLoading?: boolean;
}

// Chat Drawer Types
export interface ExtractedCode {
  html: string;
  css: string;
  js: string;
}

export interface ChatDrawerProps {
  chatId: string;
  messages: Message[];
  previewMessageIndex?: number | null;
  previewTimestamp?: number;
}

export interface CodeViewProps extends ExtractedCode {
  isLoading: boolean;
}

export interface CodeBlockProps {
  code: string;
  language: string;
}
