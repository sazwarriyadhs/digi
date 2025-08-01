
import { getArticleBySlug, getArticles } from '@/lib/firestore';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import { Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type Props = {
  params: { slug: string };
};

export const revalidate = 60; // Revalidate at most every 60 seconds

// Generate static paths for all articles at build time
export async function generateStaticParams() {
  try {
    const articles = await getArticles();
    return articles.map((article) => ({
      slug: article.slug,
    }));
  } catch (error) {
    console.error("Failed to generate static params for news:", error);
    return [];
  }
}

// Generate metadata dynamically for each article page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: 'Artikel Tidak Ditemukan',
    };
  }

  return {
    title: `${article.title} | PT Digi Media Komunika`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: 'article',
      publishedTime: new Date(article.createdAt.seconds * 1000).toISOString(),
      images: [
        {
          url: article.image,
          width: 800,
          height: 400,
          alt: article.title,
        },
      ],
    },
    twitter: {
        card: 'summary_large_image',
        title: article.title,
        description: article.summary,
        images: [article.image],
    },
    alternates: {
      canonical: `/news/${article.slug}`,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }
  
  const createdAt = new Date(article.createdAt.seconds * 1000);

  return (
    <div className="bg-background">
      <div className="container mx-auto py-12 px-4 md:px-6 max-w-4xl">
        <article className="prose lg:prose-xl dark:prose-invert mx-auto">
          <div className="space-y-4 not-prose">
            <Button asChild variant="ghost" className="mb-4">
                <Link href="/news">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Kembali ke Semua Artikel
                </Link>
            </Button>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">
              {article.title}
            </h1>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Diterbitkan pada {createdAt.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
            </div>
          </div>

          <div className="my-8">
            <Image
              src={article.image}
              alt={article.title}
              width={800}
              height={400}
              className="w-full rounded-lg object-cover"
              priority
            />
          </div>
          
          <div className="text-foreground" dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>
      </div>
    </div>
  );
}
