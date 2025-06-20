import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@repo/ui/components/tabs';
import { Code2, Eye } from 'lucide-react';
import { ExtractedCode } from '@/types/chat';
import { VisualizationFrame } from './VisualizationFrame';
import { CodeView } from './CodeView';

interface DrawerContentProps {
  extractedCode: ExtractedCode;
  isLoading: boolean;
}

export function DrawerContent({
  extractedCode,
  isLoading,
}: DrawerContentProps) {
  return (
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
  );
}
