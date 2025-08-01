'use server';

/**
 * @fileOverview An AI agent that generates a preview of a blog article.
 *
 * - previewArticle - A function that generates an article preview without saving it.
 * - PreviewArticleInput - The input type for the previewArticle function.
 * - ArticleData - The return type for the previewArticle function (shared with generate-article).
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { ArticleData } from './generate-article'; // Re-use the same output type

// Define the input schema, including the writing style
const PreviewArticleInputSchema = z.object({
  topic: z.string().describe('The topic for the article.'),
  style: z.string().describe("The desired writing style for the article (e.g., 'Profesional', 'Santai')."),
});
export type PreviewArticleInput = z.infer<typeof PreviewArticleInputSchema>;

// The output schema is the same as the final article data structure
const PreviewArticleOutputSchema = z.object({
  title: z.string().describe("The title of the article."),
  slug: z.string().describe("The URL-friendly slug for the article, e.g., 'tren-ai-di-industri-kreatif'."),
  summary: z.string().describe("A short, compelling summary of the article (1-2 sentences)."),
  content: z.string().describe("The full content of the article, formatted as a single HTML string with tags like <p>, <h3>, <ul>, etc."),
  image: z.string().url().describe("The URL for a relevant featured image. Use `https://source.unsplash.com/800x400/?<topic>` format."),
});

// The main function to be called by the server action
export async function previewArticle(input: PreviewArticleInput): Promise<ArticleData> {
  return previewArticleFlow(input);
}

// Define the prompt for generating the article preview
const prompt = ai.definePrompt({
  name: 'previewArticlePrompt',
  input: {schema: PreviewArticleInputSchema},
  output: {schema: PreviewArticleOutputSchema},
  model: 'googleai/gemini-1.5-flash-latest',
  prompt: `You are an expert content creator for a tech company, PT Digi Media Komunika.
Your task is to generate a complete, SEO-friendly blog article based on the provided topic and writing style.
The language is Indonesian.
The content should be professional, insightful, and well-structured with a minimum length of 600 words.
The HTML content should use proper tags like <p>, <h3>, <h4>, <ul>, <ol>, <li>, and <strong> for formatting.
For the image URL, create a URL using the format: https://source.unsplash.com/800x400/?<topic-in-english-for-search>. Replace spaces in topic with a comma.
The slug should be a URL-friendly version of the title.
The summary should be a concise overview of the article content.

Topic: {{{topic}}}
Writing Style: {{{style}}}
`,
});

// Define the Genkit flow for generating the preview
const previewArticleFlow = ai.defineFlow(
  {
    name: 'previewArticleFlow',
    inputSchema: PreviewArticleInputSchema,
    outputSchema: PreviewArticleOutputSchema,
  },
  async (input): Promise<ArticleData> => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('The AI model did not return a valid article preview.');
    }
    return output;
  }
);
