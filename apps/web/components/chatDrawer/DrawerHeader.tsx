import { Button } from '@repo/ui/components/button';
import { DrawerTitle } from '@repo/ui/components/drawer';
import { X } from 'lucide-react';

interface DrawerHeaderProps {
  currentPreviewIndex: number | null;
  previewMessageIndex: number | null | undefined;
  onClose: () => void;
}

export function DrawerHeader({
  currentPreviewIndex,
  previewMessageIndex,
  onClose,
}: DrawerHeaderProps) {
  const messageNumber = (currentPreviewIndex ?? previewMessageIndex ?? 0) + 1;
  const showMessageNumber =
    currentPreviewIndex !== null || previewMessageIndex !== null;

  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
      <DrawerTitle className="text-lg font-semibold">
        Code Preview
        {showMessageNumber && (
          <span className="text-sm font-normal text-gray-500 ml-2">
            (Message {messageNumber})
          </span>
        )}
      </DrawerTitle>
      <Button variant="ghost" size="icon" onClick={onClose}>
        <X className="h-5 w-5" />
      </Button>
    </div>
  );
}
