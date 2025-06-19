import OpenAI from 'openai';
import {
  ChatCompletionMessageParam,
  ChatCompletionTool,
} from 'openai/resources/chat/completions.mjs';
import { facebookToolDefinition } from './facebook-tools.definition';
import { facebookToolsExecution } from './facebook-tools.execution';

export class DashboardOpenAIChatService {
  private client: OpenAI;
  private tools: Record<string, (args: any) => any>;
  private instructions: string = '';

  constructor(
    accessToken?: string,
    adAccountId?: string,
    dashboardContext?: any,
  ) {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      throw new Error(
        'OpenAI API key is required. Set OPENAI_API_KEY environment variable or pass apiKey in config.',
      );
    }

    this.client = new OpenAI({ apiKey, timeout: 30000, maxRetries: 2 });
    this.tools = facebookToolsExecution(accessToken);
    this.instructions = this.getDashboardInstructions(
      adAccountId,
      dashboardContext,
    );
  }

  private getDashboardInstructions(
    adAccountId?: string,
    dashboardContext?: any,
  ): string {
    const contextData = dashboardContext
      ? JSON.stringify(dashboardContext, null, 2)
      : 'No current dashboard data available';

    return `You are a specialized Facebook Ads Marketing Expert and Dashboard Assistant. You have access to the user's current dashboard data including metrics and ad performance analysis.

CURRENT DASHBOARD CONTEXT:
${contextData}

CONTEXT AWARENESS:
- The above dashboard context contains:
  - Current metrics (spend, impressions, clicks, CTR, active campaigns/adsets/ads)
  - Best performing ads with performance scores and reasons  
  - Worst performing ads with performance scores and reasons
- Use this context to provide specific, data-driven insights and recommendations when users ask about their metrics or ad performance

DASHBOARD-SPECIFIC INSTRUCTIONS:
1. ANALYZE THE PROVIDED DATA: When users ask about metrics, performance, or ads, reference the specific data from the dashboard context above
2. PROVIDE ACTIONABLE INSIGHTS: Give concrete recommendations based on the current performance data when relevant
3. EXPLAIN PERFORMANCE PATTERNS: Help users understand why certain ads are performing better/worse
4. SUGGEST OPTIMIZATIONS: Recommend specific actions to improve underperforming ads or scale successful ones
5. COMPARE METRICS: Point out interesting patterns, outliers, or trends in the data
6. BE SPECIFIC: Reference actual numbers, performance scores, and reasons from the dashboard data when discussing performance

RESPONSE STYLE:
- Only reference dashboard data when users ask about metrics, performance, or specific ads
- For general marketing questions not related to current performance, provide general advice
- When discussing current performance, use specific metrics and performance scores from the context
- Provide clear, actionable next steps based on the actual data
- Explain the reasoning behind your recommendations

AD ACCOUNT INFO:
- Use ad account ID: ${adAccountId} if user doesn't provide another one
- If access token errors occur, ask user to select an account or re-link their Facebook account

Remember: You are analyzing REAL dashboard data, so be specific and reference the actual performance metrics provided in the context.`;
  }

  async *streamChat(
    messages: ChatCompletionMessageParam[],
  ): AsyncGenerator<string, void, unknown> {
    try {
      const stream = await this.client.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'developer',
            content: this.instructions,
          },
          ...messages,
        ],
        tools: facebookToolDefinition as ChatCompletionTool[],
        stream: true,
        temperature: 0.7,
        max_tokens: 1024,
        stream_options: { include_usage: false },
        top_p: 0.9,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

      let currentTool: any = null;

      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content;
        const toolCall = chunk.choices[0]?.delta?.tool_calls?.[0];

        if (content) {
          yield content;
        }

        // First tool call chunk
        if (toolCall && toolCall.index === 0 && toolCall.id) {
          currentTool = {
            id: toolCall.id,
            name: toolCall.function?.name || '',
            arguments: toolCall.function?.arguments || '',
          };
        } else if (
          toolCall &&
          toolCall.index === 0 &&
          currentTool &&
          toolCall.function?.arguments
        ) {
          // Accumulate tool arguments
          currentTool.arguments += toolCall.function.arguments;
        }

        // Message finished
        if (
          (chunk.choices[0]?.finish_reason === 'stop' ||
            chunk.choices[0]?.finish_reason === 'tool_calls') &&
          currentTool
        ) {
          yield '\n\n🔧 Using tools...\n';
          yield `\n Calling tool: ${currentTool.name} With arguments: ${currentTool.arguments}\n`;

          const toolCall = this.tools[currentTool.name];
          const args = JSON.parse(currentTool.arguments || '{}');
          const result = await toolCall?.(args);

          // Create a new message array with the tool response
          const updatedMessages: ChatCompletionMessageParam[] = [
            ...messages,
            {
              role: 'assistant',
              content: null,
              tool_calls: [
                {
                  id: currentTool.id,
                  type: 'function',
                  function: {
                    name: currentTool.name,
                    arguments: currentTool.arguments || '{}',
                  },
                },
              ],
            },
            {
              role: 'tool',
              content: JSON.stringify(result),
              tool_call_id: currentTool.id,
            },
          ];

          yield* this.streamChat(updatedMessages);
        }
      }
    } catch (error) {
      yield this.getErrorMessage(error);
    }
  }

  private getErrorMessage(error: unknown): string {
    if (error instanceof Error) {
      if (error.message.includes('rate_limit')) {
        return 'I am currently experiencing high demand. Please try again in a moment.';
      }
      if (error.message.includes('quota')) {
        return 'API quota exceeded. Please contact support.';
      }
      if (error.message.includes('invalid_api_key')) {
        return 'API configuration error. Please contact support.';
      }
    }
    return 'I encountered an error processing your request. Please try again.';
  }
}
