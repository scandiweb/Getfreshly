import { ExtractedCode } from '@/types/chat';

export function VisualizationFrame({ html, css, js }: ExtractedCode) {
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
