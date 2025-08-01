
import { NextResponse } from "next/server"
import { z } from "zod"
import { GoogleGenerativeAI } from "@google/generative-ai"

const schema = z.object({
  topic: z.string().min(1, { message: "Topic is required" }),
})

export async function POST(req: Request) {
  if (!process.env.GOOGLE_API_KEY) {
    return NextResponse.json({ error: "Google API key is not configured." }, { status: 500 });
  }

  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY)
  const model = genAI.getGenerativeModel({ model: "gemini-pro" })

  try {
    const body = await req.json()
    const parsed = schema.safeParse(body)
    if (!parsed.success) {
        const errors = parsed.error.issues.map(issue => issue.message).join(', ')
        return NextResponse.json({ error: `Invalid input: ${errors}` }, { status: 400 })
    }

    const prompt = `Tulis artikel blog yang profesional dan edukatif untuk perusahaan teknologi dengan judul utama yang jelas tentang topik ini: "${parsed.data.topic}". 
    Format jawabanmu dengan judul di baris pertama, lalu diikuti oleh konten artikel di baris-baris berikutnya.
    Judul harus dalam format tebal (markdown). Contoh: **Judul Artikel Disini**`

    const result = await model.generateContent(prompt)
    const text = await result.response.text()

    return NextResponse.json({ result: text })
  } catch(error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred"
    console.error("Error in API route:", errorMessage)
    return NextResponse.json({ error: `An internal server error occurred: ${errorMessage}` }, { status: 500 })
  }
}
