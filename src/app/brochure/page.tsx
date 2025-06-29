
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppContext } from "@/context/AppContext";
import { Download } from "lucide-react";
import Image from "next/image";

export default function BrochurePage() {
  const { t } = useAppContext();

  return (
    <div className="bg-background">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">{t('brochure.badge')}</div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">{t('brochure.title')}</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {t('brochure.description')}
          </p>
        </div>
        <div className="max-w-md mx-auto">
          <Card className="overflow-hidden">
            <CardHeader className="p-0">
              <Image 
                src="https://storage.googleapis.com/project-os-prod/images/c0a8b7d6-e5f4-3210-9876-fedcba987654.png" 
                alt={t('brochure.imageAlt')}
                width={600}
                height={850}
                className="w-full h-auto object-cover"
                data-ai-hint="brochure cover design"
              />
            </CardHeader>
            <CardContent className="text-center p-6 bg-card">
                <CardTitle className="mb-2 text-2xl">{t('brochure.cardTitle')}</CardTitle>
                <CardDescription className="mb-6">{t('brochure.cardDescription')}</CardDescription>
                <Button asChild size="lg" className="w-full">
                    {/* The href should point to the actual PDF file in the /public directory */}
                    <a href="/DMK-Company-Profile.pdf" download>
                        <Download className="mr-2 h-5 w-5" />
                        {t('brochure.downloadButton')}
                    </a>
                </Button>
                 <p className="text-xs text-muted-foreground mt-4">{t('brochure.fileInfo')}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
