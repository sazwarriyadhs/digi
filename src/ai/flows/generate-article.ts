
'use server';

/**
 * @fileOverview An AI agent that generates a blog article based on a topic.
 *
 * - generateArticle - A function that generates an article.
 * - GenerateArticleInput - The input type for the generateArticle function.
 * - GenerateArticleOutput - The return type for the generateArticle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateArticleInputSchema = z.object({
  topic: z.string().describe('The topic for the article.'),
});
export type GenerateArticleInput = z.infer<typeof GenerateArticleInputSchema>;

const GenerateArticleOutputSchema = z.object({
  title: z.string().describe("The title of the article."),
  slug: z.string().describe("The URL-friendly slug for the article, e.g., 'tren-ai-di-industri-kreatif'."),
  summary: z.string().describe("A short, compelling summary of the article (1-2 sentences)."),
  content: z.string().describe("The full content of the article, formatted as a single HTML string with tags like <p>, <h3>, <ul>, etc."),
  image: z.string().url().describe("The URL for a relevant featured image. Use `https://source.unsplash.com/800x400/?<topic>` format."),
});

// This is the final data structure that will be saved to Firestore.
// It matches the output schema but we will add the createdAt timestamp in the action.
export type ArticleData = z.infer<typeof GenerateArticleOutputSchema>;

export async function generateArticle(input: GenerateArticleInput): Promise<ArticleData> {
  return generateArticleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateArticlePrompt',
  input: {schema: GenerateArticleInputSchema},
  output: {schema: GenerateArticleOutputSchema},
  model: 'googleai/gemini-1.5-flash-latest',
  prompt: `You are an expert content creator for a tech company, PT Digi Media Komunika.
Your task is to generate a complete, SEO-friendly blog article based on the provided topic.
The language is Indonesian.
The content should be professional, insightful, and well-structured.
The HTML content should use proper tags like <p>, <h3>, <ul>, <ol>, <li>, and <strong> for formatting.
For the image URL, create a URL using the format: https://source.unsplash.com/800x400/?<topic-in-english-for-search>. Replace spaces in topic with a comma.
The slug should be a URL-friendly version of the title.
The summary should be a concise overview of the article content.

Topic: {{{topic}}}
`,
});

const generateArticleFlow = ai.defineFlow(
  {
    name: 'generateArticleFlow',
    inputSchema: GenerateArticleInputSchema,
    outputSchema: GenerateArticleOutputSchema,
  },
  async (input): Promise<ArticleData> => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('The AI model did not return a valid article.');
    }
    return output;
  }
);
