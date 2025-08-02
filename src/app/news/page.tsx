

"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getArticles, type Article } from "@/lib/firestore";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/context/AppContext";
import { Calendar, Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function NewsPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useAppContext();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const fetchedArticles = await getArticles();
        setArticles(fetchedArticles);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

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
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <div className="w-full h-48 bg-muted rounded-t-lg"></div>
                <CardHeader>
                  <div className="h-6 w-3/4 bg-muted rounded"></div>
                  <div className="h-4 w-1/2 bg-muted rounded mt-2"></div>
                </CardHeader>
                <CardContent>
                  <div className="h-4 w-full bg-muted rounded"></div>
                  <div className="h-4 w-5/6 bg-muted rounded mt-2"></div>
                </CardContent>
                <CardFooter>
                  <div className="h-10 w-full bg-muted rounded"></div>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="flex flex-col">
                <Link href={`/news/${article.id}`} className="block">
                  <Image
                    src={article.image || "https://placehold.co/600x400.png"}
                    alt={article.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover rounded-t-lg"
                    data-ai-hint="blog post"
                  />
                </Link>
                <CardHeader>
                  {article.category && <Badge className="mb-2 w-fit">{article.category}</Badge>}
                  <CardTitle as="h2">
                    <Link href={`/news/${article.id}`} className="hover:text-primary transition-colors">
                      {article.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{article.summary}</CardDescription>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <div className="text-xs text-muted-foreground space-y-2">
                    <div className="flex items-center gap-2">
                      <User className="w-3 h-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(article.createdAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                  </div>
                  <Button asChild className="w-full mt-auto">
                    <Link href={`/news/${article.id}`}>
                      {t('news.readMore')}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
