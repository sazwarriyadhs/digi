'use server';

/**
 * @fileOverview An AI agent that answers general questions, using company info for context when relevant.
 *
 * - answerGeneralQuestion - A function that answers a user's question.
 * - GeneralQuestionInput - The input type for the answerGeneralQuestion function.
 * - GeneralQuestionOutput - The return type for the answerGeneralQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneralQuestionInputSchema = z.object({
  question: z.string().describe('The question to be answered.'),
  companyInformation: z
    .string()
    .describe('Information about the company to use for context.'),
});
export type GeneralQuestionInput = z.infer<typeof GeneralQuestionInputSchema>;

const GeneralQuestionOutputSchema = z.object({
  answer: z.string().describe('The answer to the question.'),
});
export type GeneralQuestionOutput = z.infer<typeof GeneralQuestionOutputSchema>;

export async function answerGeneralQuestion(input: GeneralQuestionInput): Promise<GeneralQuestionOutput> {
  return generalQuestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generalQuestionPrompt',
  input: {schema: GeneralQuestionInputSchema},
  output: {schema: GeneralQuestionOutputSchema},
  model: 'googleai/gemini-1.5-flash-latest',
  prompt: `You are a helpful AI assistant for a company named PT Digi Media Komunika.
Your goal is to answer the user's question accurately and concisely.

If the question is about the company, use the provided company information below to form your answer.
If the question is general (e.g., "what is a website?", "how much does an app cost?"), answer it helpfully and you can provide estimates or general information. For pricing questions, you can refer to the company's services and mention that prices can vary.

Company Information:
{{{companyInformation}}}

Question:
{{{question}}}

Answer: `,
});

const generalQuestionFlow = ai.defineFlow(
  {
    name: 'generalQuestionFlow',
    inputSchema: GeneralQuestionInputSchema,
    outputSchema: GeneralQuestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('The AI model did not return a valid output.');
    }
    return output;
  }
);
