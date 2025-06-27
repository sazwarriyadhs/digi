"use client";

import { useAppContext } from "@/context/AppContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function DemoLinkSection() {
  const { t } = useAppContext();

  return (
    <section id="demo-gallery" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">{t('demoLink.badge')}</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">{t('demoLink.title')}</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {t('demoLink.description')}
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link href="/demo">
              {t('demoLink.cta')} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
