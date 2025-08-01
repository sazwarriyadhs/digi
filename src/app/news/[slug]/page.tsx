
import { articles } from '@/lib/data';
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

// Generate metadata dynamically for each article page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  // Assuming 'en' is the primary language for metadata if 'id' is not available
  const lang = 'id'; // Or detect language context if available
  const articleLang = article[lang] || article.en;

  return {
    title: `${articleLang.title} | PT Digi Media Komunika`,
    description: articleLang.description,
    openGraph: {
      title: articleLang.title,
      description: articleLang.description,
      type: 'article',
      publishedTime: articleLang.date,
      authors: [articleLang.author],
      images: [
        {
          url: article.imageUrl,
          width: 1200,
          height: 630,
          alt: articleLang.title,
        },
      ],
    },
    twitter: {
        card: 'summary_large_image',
        title: articleLang.title,
        description: articleLang.description,
        images: [article.imageUrl],
    }
  };
}

export default function ArticlePage({ params }: Props) {
  const article = articles.find((p) => p.slug === params.slug);

  if (!article) {
    notFound();
  }

  // Assuming 'id' as the primary language, fallback to 'en'
  const lang = 'id'; // This could be dynamic based on context
  const articleLang = article[lang] || article.en;

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
            <Badge className="w-fit mb-2">{articleLang.category}</Badge>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">
              {articleLang.title}
            </h1>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{articleLang.author}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(articleLang.date).toLocaleDateString(lang, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
            </div>
          </div>

          <div className="my-8">
            <Image
              src={article.imageUrl}
              alt={articleLang.title}
              width={1200}
              height={675}
              className="w-full rounded-lg object-cover"
              data-ai-hint={article.aiHint}
              priority
            />
          </div>
          
          <div className="text-foreground" dangerouslySetInnerHTML={{ __html: articleLang.content }} />
        </article>
      </div>
    </div>
  );
}

    