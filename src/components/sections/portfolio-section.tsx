"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useAppContext } from "@/context/AppContext";
import { portfolioItems } from "@/lib/data";

export function PortfolioSection() {
  const { language, t } = useAppContext();
  
  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">{t('portfolio.badge')}</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">{t('portfolio.title')}</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {t('portfolio.description')}
          </p>
        </div>
        <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mt-12">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 flex flex-col">
              <Image
                src={item.imageUrl}
                alt={item[language].project}
                width={600}
                height={400}
                className="w-full h-60 object-cover"
                data-ai-hint={item.aiHint}
              />
              <CardHeader>
                <CardDescription className="font-semibold">{item[language].client}</CardDescription>
                <CardTitle>{item[language].project}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                 <p className="text-sm text-muted-foreground">{item[language].details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
