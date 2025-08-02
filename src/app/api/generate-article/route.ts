
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { addArticle } from "@/lib/firestore";
import { companyInfo } from "@/lib/data";

if (!process.env.GOOGLE_API_KEY) {
  throw new Error("Google API key is not configured.");
}

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

const schema = z.object({
  topic: z.string().min(5, { message: "Topik harus memiliki setidaknya 5 karakter." }),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.errors[0].message }, { status: 400 });
    }

    const { topic } = parsed.data;
    
    // Using Indonesian for the prompt context
    const servicesText = companyInfo.id.services.map(s => `${s.title}: ${s.description}`).join('\n');
    const companyContext = `Tentang Kami: ${companyInfo.id.about}\n\nLayanan Kami:\n${servicesText}`;

    const prompt = `
      Anda adalah seorang penulis konten profesional dan ahli SEO untuk perusahaan konsultan teknologi bernama "PT Digi Media Komunika".
      Tugas Anda adalah menulis sebuah artikel blog yang informatif, menarik, dan terstruktur dengan baik berdasarkan topik yang diberikan.
      
      Gunakan informasi perusahaan berikut sebagai konteks jika relevan, tetapi jangan hanya mengulanginya:
      ---
      ${companyContext}
      ---
      
      Instruksi Penulisan:
      1.  **Judul:** Buat judul yang menarik dan relevan dengan topik.
      2.  **Struktur:** Gunakan format HTML. Mulai dengan tag <h1> untuk judul. Gunakan <h2> untuk sub-judul utama dan <h3> untuk poin-poin di dalamnya. Gunakan <p> untuk paragraf dan <ul><li> untuk daftar.
      3.  **Gaya Bahasa:** Profesional, tetapi mudah dipahami oleh audiens bisnis dan teknologi.
      4.  **Konten:** Artikel harus memiliki pendahuluan, beberapa bagian isi yang mendalam, dan kesimpulan.
      5.  **Panjang:** Sekitar 400-600 kata.
      
      Topik yang harus ditulis: "${topic}"
      
      Mulai menulis:
    `;

    const result = await model.generateContent(prompt);
    const text = await result.response.text();

    // Extract title from the generated content (assuming first h1 is the title)
    const titleMatch = text.match(/<h1>(.*?)<\/h1>/);
    const title = titleMatch ? titleMatch[1] : topic;

    // Generate a summary (first paragraph)
    const summaryMatch = text.match(/<p>(.*?)<\/p>/);
    const summary = summaryMatch ? summaryMatch[1].substring(0, 150) + '...' : text.substring(0, 150) + '...';

    // Save to Firestore
    const newArticle = {
      title,
      content: text,
      summary: summary,
      author: "AI Generator",
      category: "Teknologi",
      image: `https://placehold.co/600x400.png`,
    };

    await addArticle(newArticle);

    return NextResponse.json({ content: text });

  } catch (error) {
    console.error("Error in generate-article API route:", error);
    const errorMessage = error instanceof Error ? error.message : "Terjadi kesalahan yang tidak diketahui";
    return NextResponse.json({ error: `Terjadi kesalahan internal: ${errorMessage}` }, { status: 500 });
  }
}
