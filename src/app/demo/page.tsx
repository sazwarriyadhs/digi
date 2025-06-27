
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppContext } from "@/context/AppContext";
import { demoItems } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function DemoPage() {
  const { language, t } = useAppContext();

  return (
    <div className="bg-card">
        <div className="container mx-auto py-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">{t('demo.badge')}</div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">{t('demo.title')}</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t('demo.description')}
            </p>
            </div>
            <div className="mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {demoItems.map((item, index) => (
                <Card key={index} className="overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 flex flex-col bg-background">
                <Image
                    src={item.imageUrl}
                    alt={item[language].name}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    data-ai-hint={item.aiHint}
                />
                <CardHeader>
                    <CardTitle>{item[language].name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                    <p className="text-sm text-muted-foreground mb-4">{item[language].description}</p>
                    <Button asChild className="mt-auto w-full">
                    {item.href.startsWith('http') ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer">
                            {t('demo.viewDemo')} <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    ) : (
                        <Link href={item.href}>
                            {t('demo.viewDemo')} <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    )}
                    </Button>
                </CardContent>
                </Card>
            ))}
            </div>
        </div>
    </div>
  );
}
