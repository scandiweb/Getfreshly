# Chat Drawer Component

This directory contains the ChatDrawer component with proper separation of concerns and global organization.

## Structure

```
chatDrawer/
├── ChatDrawer.tsx              # Main component
├── CodeBlock.tsx               # Individual code block display
├── CodeDetectedNotification.tsx  # Notification when code is detected
├── CodeView.tsx                # Code view with syntax highlighting
├── DrawerContent.tsx           # Main drawer content with tabs
├── DrawerHeader.tsx            # Drawer header with title and close button
├── VisualizationFrame.tsx      # Iframe for code preview
├── index.ts                    # Component exports
└── README.md                   # This file
```

## Global Organization

The ChatDrawer component is now properly organized across the global directories:

### **Hooks** (`@/hooks/useChatDrawer.ts`)

- Custom hook for managing chat drawer state
- Handles message fetching, code extraction, and auto-opening behavior
- Encapsulates all complex state management logic

### **Types** (`@/types/chat.ts`)

- All TypeScript interfaces are centralized
- Includes `ExtractedCode`, `ChatDrawerProps`, `CodeViewProps`, `CodeBlockProps`
- Extends existing chat types

### **Utils** (`@/utils/codeExtractor.ts`)

- Code extraction and parsing utilities
- Functions for categorizing and extracting HTML, CSS, and JavaScript
- Message completion checking logic

### **Components** (`@/components/chatDrawer/`)

- All UI components are organized in their own directory
- Each component has a single responsibility
- Clean separation between logic and presentation

## Key Benefits

1. **Global Accessibility**: Components, hooks, and utilities can be used throughout the application
2. **No Import Conflicts**: Proper organization prevents naming conflicts
3. **Better Maintainability**: Clear separation of concerns
4. **Reusability**: Components and utilities can be reused in other parts of the app
5. **Consistent Structure**: Follows the established project patterns

## Usage

```tsx
import { ChatDrawer } from '@/components/chatDrawer';

<ChatDrawer
  chatId="chat-123"
  messages={messages}
  previewMessageIndex={selectedMessageIndex}
  previewTimestamp={timestamp}
/>;
```

## Import Structure

```tsx
// Main component
import { ChatDrawer } from '@/components/chatDrawer';

// Individual components (if needed)
import {
  CodeBlock,
  CodeView,
  VisualizationFrame,
} from '@/components/chatDrawer';

// Hook (if needed elsewhere)
import { useChatDrawer } from '@/hooks/useChatDrawer';

// Types
import { ChatDrawerProps, ExtractedCode } from '@/types/chat';

// Utils
import { extractCodeFromContent, hasCode } from '@/utils/codeExtractor';
```

## Migration Notes

- All imports have been updated to use global paths (`@/`)
- No conflicts with existing code
- Maintains all original functionality
- Improved organization and maintainability
