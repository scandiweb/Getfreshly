// Function to detect if a message contains generated code
export const hasGeneratedCode = (content: string): boolean => {
  // Check for code blocks with HTML, CSS, or JavaScript
  const htmlMatch = content.match(/```html\n([\s\S]*?)```/);
  const cssMatch = content.match(/```css\n([\s\S]*?)```/);
  const jsMatch = content.match(/```javascript\n([\s\S]*?)```/);
  const jsAltMatch = content.match(/```js\n([\s\S]*?)```/);

  // Also check for code blocks without language specification that contain HTML/CSS/JS
  const genericCodeBlocks = content.match(/```\n([\s\S]*?)```/g);
  let hasGenericCode = false;

  if (genericCodeBlocks) {
    for (const block of genericCodeBlocks) {
      const codeContent = block.replace(/```\n/, '').replace(/```/, '');
      // Check if the code content looks like HTML, CSS, or JavaScript
      if (
        codeContent.includes('<html') ||
        codeContent.includes('<div') ||
        codeContent.includes('<body') ||
        codeContent.includes('function') ||
        codeContent.includes('const ') ||
        codeContent.includes('let ') ||
        codeContent.includes('var ') ||
        (codeContent.includes('{') && codeContent.includes('}')) ||
        codeContent.includes(';') ||
        codeContent.includes('color:') ||
        codeContent.includes('background:') ||
        codeContent.includes('margin:') ||
        codeContent.includes('padding:')
      ) {
        hasGenericCode = true;
        break;
      }
    }
  }

  return !!(
    htmlMatch?.[1]?.trim() ||
    cssMatch?.[1]?.trim() ||
    jsMatch?.[1]?.trim() ||
    jsAltMatch?.[1]?.trim() ||
    hasGenericCode
  );
};
