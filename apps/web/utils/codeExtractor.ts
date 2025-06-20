import { ExtractedCode } from '@/types/chat';

const HTML_PATTERNS = ['<html', '<div', '<body', '<head', '<!DOCTYPE'];
const CSS_PATTERNS = [
  'color:',
  'background:',
  'margin:',
  'padding:',
  'font-',
  'border:',
  'display:',
  'position:',
];
const JS_PATTERNS = [
  'function',
  'const ',
  'let ',
  'var ',
  'document.',
  'window.',
  'addEventListener',
  'console.',
];

export const categorizeGenericCode = (
  codeContent: string,
  result: ExtractedCode,
): ExtractedCode => {
  const newResult = { ...result };

  if (HTML_PATTERNS.some((pattern) => codeContent.includes(pattern))) {
    newResult.html = codeContent;
  } else if (CSS_PATTERNS.some((pattern) => codeContent.includes(pattern))) {
    newResult.css = codeContent;
  } else if (JS_PATTERNS.some((pattern) => codeContent.includes(pattern))) {
    newResult.js = codeContent;
  }

  return newResult;
};

export const extractCodeFromContent = (content: string): ExtractedCode => {
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

export const isMessageComplete = (content: string): boolean => {
  const codeBlockCount = (content.match(/```/g) || []).length;
  return codeBlockCount % 2 === 0; // Even number means all code blocks are closed
};

export const hasCode = (extractedCode: ExtractedCode): boolean => {
  return !!(extractedCode.html || extractedCode.css || extractedCode.js);
};
