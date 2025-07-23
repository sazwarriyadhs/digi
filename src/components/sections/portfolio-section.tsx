
"use client";

import { useAppContext } from "@/context/AppContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { portfolioItems } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";

export function PortfolioSection() {
  const { t, language } = useAppContext();
  const featuredItems = portfolioItems.slice(0, 3); // Ambil 3 item pertama untuk ditampilkan

  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">{t('portfolio.badge')}</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">{t('portfolio.title')}</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {t('portfolio.description')}
          </p>
        </div>

        <div className="mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {featuredItems.map((item, index) => (
            <Card key={index} className="overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 flex flex-col bg-background">
              <Image
                  src={item.imageUrl}
                  alt={item[language].project}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={item.aiHint}
              />
              <CardHeader>
                  <Badge className="w-fit mb-2">{item[language].client}</Badge>
                  <CardTitle as="h3" className="text-lg">{item[language].project}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{item[language].details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/portfolio">
              {t('portfolio.cta')} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
