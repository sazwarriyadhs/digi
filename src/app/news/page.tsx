
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { getArticles, Article } from "@/lib/firestore";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const revalidate = 60; // Revalidate at most every 60 seconds

export default async function NewsPage() {
  const articles = await getArticles();
  
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

            <div className="mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                    <Card key={article.id} className="overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 flex flex-col bg-card">
                        <Link href={`/news/${article.slug}`}>
                            <Image
                                src={article.image}
                                alt={article.title}
                                width={800}
                                height={400}
                                className="w-full h-48 object-cover"
                            />
                        </Link>
                        <CardHeader>
                            <CardTitle as="h3" className="text-xl">
                                <Link href={`/news/${article.slug}`} className="hover:text-primary transition-colors">
                                    {article.title}
                                </Link>
                            </CardTitle>
                            <CardDescription>
                                {article.summary}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col justify-end">
                             <div className="text-sm text-muted-foreground space-y-2">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{new Date(article.createdAt.seconds * 1000).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                </div>
                            </div>
                        </CardContent>
                         <CardFooter>
                            <Button asChild variant="secondary" className="mt-auto w-full">
                                <Link href={`/news/${article.slug}`}>
                                    Baca Selengkapnya <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    </div>
  );
}
