import OpenAI from 'openai';

interface GenerateImageParams {
  prompt: string;
  size?: '256x256' | '512x512' | '1024x1024';
  quality?: 'standard' | 'hd';
}

export const imageGenerationToolsExecution = (client: OpenAI) => ({
  generateImage: async (params: GenerateImageParams) => {
    try {
      const response = await client.images.generate({
        model: 'dall-e-3',
        prompt: params.prompt,
        n: 1,
        size: params.size || '512x512',
        quality: params.quality || 'standard',
      });

      if (!response.data?.[0]?.url) {
        throw new Error('No image URL in response');
      }

      return {
        success: true,
        data: response.data[0].url,
      };
    } catch (error) {
      return {
        success: false,
        error:
          error instanceof Error ? error.message : 'Failed to generate image',
      };
    }
  },
});
