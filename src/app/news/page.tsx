
import { db } from "@/lib/firebase"
import { collection, getDocs, orderBy, query, Timestamp } from "firebase/firestore"
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic"

interface Article {
    id: string;
    title: string;
    content: string;
    createdAt: Timestamp;
}

export default async function NewsPage() {
    let articles: Article[] = [];
    try {
        const snapshot = await getDocs(query(collection(db, "artikel"), orderBy("createdAt", "desc")))
        articles = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Article[];
    } catch(e) {
        console.error("Failed to fetch articles: ", e);
        // Silently fail or render an error message.
        // For now, we'll just render an empty list.
    }


  return (
    <div className="bg-background">
        <div className="container mx-auto py-12 px-4 md:px-6 max-w-4xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Artikel & Berita</div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Wawasan & Pembaruan Terbaru</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Tetap terinformasi dengan berita terbaru perusahaan, wawasan industri, dan artikel dari tim kami.
                </p>
            </div>
            <div className="space-y-8">
                {articles.length > 0 ? articles.map((a) => (
                <div key={a.id} className="border-b pb-6">
                    <h2 className="text-2xl font-semibold hover:text-primary transition-colors">
                        <Link href={`/news/${a.id}`}>{a.title}</Link>
                    </h2>
                    <p className="text-sm text-muted-foreground mt-2">
                       {new Date(a.createdAt.seconds * 1000).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <div className="prose prose-neutral dark:prose-invert mt-4 line-clamp-3" dangerouslySetInnerHTML={{ __html: a.content }} />
                    <Link href={`/news/${a.id}`} className="text-primary hover:underline mt-4 inline-block">Baca Selengkapnya</Link>
                </div>
                )) : (
                    <p className="text-center text-muted-foreground">Belum ada artikel yang dipublikasikan.</p>
                )}
            </div>
        </div>
    </div>
  )
}
