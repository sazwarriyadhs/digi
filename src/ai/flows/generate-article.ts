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
  slug: z.string().describe("The URL-friendly slug for the article, e.g., '5-digital-transformation-trends'."),
  imageUrl: z.string().url().describe("The URL for a relevant featured image for the article. Use placehold.co for this."),
  aiHint: z.string().describe("A one or two-word hint for the AI to find a relevant image, e.g., 'digital transformation'."),
  id_title: z.string().describe("The title of the article in Indonesian."),
  id_description: z.string().describe("A short, compelling description of the article in Indonesian (1-2 sentences)."),
  id_category: z.string().describe("The category of the article in Indonesian (e.g., 'Teknologi', 'Keamanan Siber')."),
  id_author: z.string().describe("The author of the article. Use 'Azwar Riyadh' or 'Titi Ariwati'."),
  id_content: z.string().describe("The full content of the article in Indonesian, formatted as a single HTML string."),
  en_title: z.string().describe("The title of the article in English."),
  en_description: z.string().describe("A short, compelling description of the article in English (1-2 sentences)."),
  en_category: z.string().describe("The category of the article in English (e.g., 'Technology', 'Cybersecurity')."),
  en_author: z.string().describe("The author of the article. Use 'Azwar Riyadh' or 'Titi Ariwati'."),
  en_content: z.string().describe("The full content of the article in English, formatted as a single HTML string."),
});
export type GenerateArticleOutput = z.infer<typeof GenerateArticleOutputSchema>;

export async function generateArticle(input: GenerateArticleInput): Promise<GenerateArticleOutput> {
  return generateArticleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateArticlePrompt',
  input: {schema: GenerateArticleInputSchema},
  output: {schema: GenerateArticleOutputSchema},
  model: 'googleai/gemini-1.5-flash-latest',
  prompt: `You are an expert content creator for a tech company, PT Digi Media Komunika.
Your task is to generate a complete, SEO-friendly blog article based on the provided topic.
The article must be generated in both Indonesian and English.
The content should be professional, insightful, and well-structured.
The HTML content should use proper tags like <p>, <h3>, <ul>, <ol>, <li>, and <strong> for formatting.
The article should be from the perspective of one of the company's experts, Azwar Riyadh or Titi Ariwati.
For the imageUrl, create a placeholder using https://placehold.co/1200x675.png.

Topic: {{{topic}}}
`,
});

const generateArticleFlow = ai.defineFlow(
  {
    name: 'generateArticleFlow',
    inputSchema: GenerateArticleInputSchema,
    outputSchema: GenerateArticleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('The AI model did not return a valid article.');
    }
    // Add current date for both languages
    const currentDate = new Date().toISOString().split('T')[0];
    return {
        ...output,
        id_date: currentDate,
        en_date: currentDate,
    };
  }
);
