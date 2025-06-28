"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppContext } from "@/context/AppContext";
import { portfolioItems } from "@/lib/data";
import Image from "next/image";
import { CardDescription } from "@/components/ui/card";

export default function PortfolioPage() {
  const { language, t } = useAppContext();

  return (
    <div className="bg-background">
        <div className="container mx-auto py-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">{t('portfolioPage.badge')}</div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">{t('portfolioPage.title')}</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t('portfolioPage.description')}
            </p>
            </div>
            <div className="mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            {portfolioItems.map((item, index) => (
                <Card key={index} className="overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 flex flex-col bg-card">
                    <Image
                        src={item.imageUrl}
                        alt={item[language].project}
                        width={600}
                        height={400}
                        className="w-full h-56 object-cover"
                        data-ai-hint={item.aiHint}
                    />
                    <CardHeader>
                        <CardTitle>{item[language].project}</CardTitle>
                        <CardDescription>{t('portfolioPage.client')}: {item[language].client}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-sm text-muted-foreground">{item[language].details}</p>
                    </CardContent>
                </Card>
            ))}
            </div>
        </div>
    </div>
  );
}
