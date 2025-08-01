import { NextResponse } from "next/server"
import { z } from "zod"
import { GoogleGenerativeAI } from "@google/generative-ai"

if (!process.env.GOOGLE_API_KEY) {
  throw new Error("Google API key is not configured.");
}

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY)
const model = genAI.getGenerativeModel({ model: "gemini-pro" })

const schema = z.object({
  topic: z.string(),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsed = schema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 })
    }

    const prompt = `Tulis artikel blog singkat yang profesional dan edukatif untuk perusahaan teknologi berjudul: ${parsed.data.topic}`

    const result = await model.generateContent(prompt)
    const text = await result.response.text()

    return NextResponse.json({ result: text })
  } catch (error) {
    console.error("Error in API route:", error)
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred"
    return NextResponse.json({ error: `An internal server error occurred: ${errorMessage}` }, { status: 500 })
  }
}
