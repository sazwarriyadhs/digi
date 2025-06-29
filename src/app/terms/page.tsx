
"use client";

import { useAppContext } from "@/context/AppContext";

export default function TermsOfServicePage() {
  const { t } = useAppContext();
  const termsSections = t('termsOfService.sections') || [];

  return (
    <div className="bg-background">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">{t('termsOfService.title')}</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {t('termsOfService.lastUpdated')}
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-muted-foreground">{t('termsOfService.intro')}</p>
          {termsSections.map((section: { title: string; content: string[] }, index: number) => (
            <div key={index}>
              <h2 className="text-2xl font-bold mb-4 font-headline">{section.title}</h2>
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-muted-foreground mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
