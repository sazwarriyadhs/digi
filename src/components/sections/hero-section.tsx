"use client";

import { Button } from "@/components/ui/button";
import { useAppContext } from "@/context/AppContext";
import Link from "next/link";

export function HeroSection() {
  const { t } = useAppContext();

  return (
    <section className="w-full py-24 md:py-32 lg:py-40 bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-1 lg:gap-12 xl:grid-cols-1">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                {t('hero.title')}
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto">
                {t('hero.subtitle')}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#contact">{t('hero.cta1')}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#portfolio">{t('hero.cta2')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
