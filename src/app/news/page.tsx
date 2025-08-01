
import { getArticles } from "@/lib/firestore";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import type { Article } from "@/lib/firestore";

// Force dynamic rendering to ensure fresh data on each request.
export const dynamic = "force-dynamic";

export default async function NewsPage() {
    const articles: Article[] = await getArticles();

  return (
    <div className="bg-background">
        <div className="container mx-auto py-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Artikel & Berita</div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Wawasan & Pembaruan Terbaru</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Tetap terinformasi dengan berita terbaru perusahaan, wawasan industri, dan artikel dari tim kami.
                </p>
            </div>
            {articles.length > 0 ? (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article) => (
                    <Link key={article.id} href={`/news/${article.id}`} className="group">
                        <Card className="overflow-hidden h-full flex flex-col transform transition-transform duration-300 hover:-translate-y-2">
                            {article.image && (
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-48 object-cover"
                                />
                            )}
                            <CardHeader>
                                <CardTitle className="text-xl group-hover:text-primary transition-colors">{article.title}</CardTitle>
                                <CardDescription>
                                   {new Date(article.createdAt.seconds * 1000).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground line-clamp-3">{article.summary || article.content}</p>
                            </CardContent>
                        </Card>
                    </Link>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <p className="text-muted-foreground text-lg">Belum ada artikel yang dipublikasikan.</p>
                    <p className="text-sm text-muted-foreground mt-2">Silakan periksa kembali nanti.</p>
                </div>
            )}
        </div>
    </div>
  )
}
