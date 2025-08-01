
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAppContext } from "@/context/AppContext";
import { articles } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function NewsPage() {
  const { language, t } = useAppContext();

  return (
    <div className="bg-background">
        <div className="container mx-auto py-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">{t('news.badge')}</div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">{t('news.title')}</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {t('news.description')}
                </p>
            </div>

            <div className="mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article, index) => (
                    <Card key={index} className="overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 flex flex-col bg-card">
                        <Link href={`/news/${article.slug}`}>
                            <Image
                                src={article.imageUrl}
                                alt={article[language].title}
                                width={600}
                                height={400}
                                className="w-full h-48 object-cover"
                                data-ai-hint={article.aiHint}
                            />
                        </Link>
                        <CardHeader>
                            <Badge className="w-fit mb-2">{article[language].category}</Badge>
                            <CardTitle as="h3" className="text-xl">
                                <Link href={`/news/${article.slug}`} className="hover:text-primary transition-colors">
                                    {article[language].title}
                                </Link>
                            </CardTitle>
                            <CardDescription>
                                {article[language].description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col justify-end">
                             <div className="text-sm text-muted-foreground space-y-2">
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    <span><strong>{t('news.author')}:</strong> {article[language].author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span><strong>{t('news.publishedDate')}:</strong> {new Date(article[language].date).toLocaleDateString(language, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                </div>
                            </div>
                        </CardContent>
                         <CardFooter>
                            <Button asChild variant="secondary" className="mt-auto w-full">
                                <Link href={`/news/${article.slug}`}>
                                    {t('news.readMore')} <ArrowRight className="ml-2 h-4 w-4" />
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
