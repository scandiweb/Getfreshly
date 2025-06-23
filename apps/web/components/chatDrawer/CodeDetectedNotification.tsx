import { Code2 } from 'lucide-react';

export function CodeDetectedNotification() {
  return (
    <div className="fixed top-4 right-4 z-50 bg-blue-500 text-white px-3 py-2 rounded-md shadow-lg animate-in slide-in-from-right duration-200">
      <div className="flex items-center gap-2">
        <Code2 className="h-3 w-3" />
        <span className="text-xs font-medium">Code preview ready</span>
      </div>
    </div>
  );
}
