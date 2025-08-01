import { NextResponse } from 'next/server';
import { previewArticle } from '@/ai/flows/preview-article';
import * as z from 'zod';

const requestSchema = z.object({
  topic: z.string(),
  style: z.string(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = requestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ message: 'Invalid request body. Topic and style are required.' }, { status: 400 });
    }

    const { topic, style } = parsed.data;

    const articleData = await previewArticle({ topic, style });

    return NextResponse.json({ success: true, article: articleData });
  } catch (e) {
    console.error("Error in /api/gen-article:", e);
    const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
    return NextResponse.json({ success: false, message: `An error occurred: ${errorMessage}` }, { status: 500 });
  }
}
