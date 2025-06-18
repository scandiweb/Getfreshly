export const imageGenerationToolDefinition = {
  type: 'function',
  function: {
    name: 'generateImage',
    description: 'Generate an image based on a text prompt',
    parameters: {
      type: 'object',
      properties: {
        prompt: {
          type: 'string',
          description: 'The text prompt describing the image to generate',
        },
        revised_prompt: {
          type: 'string',
          description:
            'A more detailed or refined version of the original prompt for better results',
        },
        size: {
          type: 'string',
          enum: ['256x256', '512x512', '1024x1024'],
          description: 'The size of the generated image',
          default: '512x512',
        },
        quality: {
          type: 'string',
          enum: ['standard', 'hd'],
          description: 'The quality of the generated image',
          default: 'standard',
        },
      },
      required: ['prompt'],
    },
  },
};
