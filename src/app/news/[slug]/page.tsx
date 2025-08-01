
import { getArticleBySlug, getArticles } from '@/lib/firestore';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type Props = {
  params: { slug: string };
};

export const revalidate = 60; // Revalidate at most every 60 seconds

// Generate static paths for all articles at build time
export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// Generate metadata dynamically for each article page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  // Assuming you might want to switch metadata language based on some logic,
  // but for now, we'll default to Indonesian (id).
  const title = article.id_title;
  const description = article.id_description;

  return {
    title: `${title} | PT Digi Media Komunika`,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: 'article',
      publishedTime: article.id_date,
      authors: [article.id_author],
      images: [
        {
          url: article.imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
        card: 'summary_large_image',
        title: title,
        description: description,
        images: [article.imageUrl],
    }
  };
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }
  
  // Here you could potentially use a cookie or another mechanism to determine language.
  // For this server component, we'll default to 'id'.
  const lang = 'id';

  const title = lang === 'id' ? article.id_title : article.en_title;
  const content = lang === 'id' ? article.id_content : article.en_content;
  const category = lang === 'id' ? article.id_category : article.en_category;
  const author = lang === 'id' ? article.id_author : article.en_author;
  const date = lang === 'id' ? article.id_date : article.en_date;
  const createdAt = article.createdAt ? new Date(article.createdAt.seconds * 1000) : new Date(date);

  return (
    <div className="bg-background">
      <div className="container mx-auto py-12 px-4 md:px-6 max-w-4xl">
        <article className="prose lg:prose-xl dark:prose-invert mx-auto">
          <div className="space-y-4 not-prose">
            <Button asChild variant="ghost" className="mb-4">
                <Link href="/news">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Kembali ke Artikel
                </Link>
            </Button>
            <Badge className="w-fit mb-2">{category}</Badge>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">
              {title}
            </h1>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{author}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{createdAt.toLocaleDateString(lang, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
            </div>
          </div>

          <div className="my-8">
            <Image
              src={article.imageUrl}
              alt={title}
              width={1200}
              height={675}
              className="w-full rounded-lg object-cover"
              data-ai-hint={article.aiHint}
              priority
            />
          </div>
          
          <div className="text-foreground" dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </div>
    </div>
  );
}
