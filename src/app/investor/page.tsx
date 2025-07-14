
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppContext } from "@/context/AppContext";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export default function InvestorPage() {
  const { t } = useAppContext();
  const contactEmail = t('investor.contactEmail');

  return (
    <div className="bg-background">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">{t('investor.badge')}</div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">{t('investor.title')}</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {t('investor.description')}
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle>{t('investor.whyInvest.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4 text-muted-foreground">
                        {(t('investor.whyInvest.points') || []).map((point: string, index: number) => (
                             <li key={index} className="flex items-start gap-3">
                                <div className="bg-primary/10 text-primary rounded-full p-1 mt-1">
                                    <ArrowRight className="w-4 h-4"/>
                                </div>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>{t('investor.getInTouch.title')}</CardTitle>
                    <CardDescription>{t('investor.getInTouch.description')}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center text-center">
                   <p className="text-lg font-semibold">{t('investor.getInTouch.cta')}</p>
                   <p className="text-muted-foreground mb-6">{t('investor.getInTouch.invitation')}</p>
                    <Button asChild size="lg">
                        <a href={`mailto:${contactEmail}`}>
                            <Mail className="mr-2 h-5 w-5" />
                            {contactEmail}
                        </a>
                    </Button>
                     <p className="text-xs text-muted-foreground mt-4">{t('investor.getInTouch.confidentiality')}</p>
                </CardContent>
            </Card>
        </div>
        <div className="text-center mt-16">
            <Button asChild variant="secondary" size="lg">
                <Link href="/brochure">
                    {t('investor.downloadBrochure')}
                </Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
