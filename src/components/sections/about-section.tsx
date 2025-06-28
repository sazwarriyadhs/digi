"use client";

import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import { companyInfo } from "@/lib/data";


export function AboutSection() {
  const { language, t } = useAppContext();
  const info = companyInfo[language];

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">{t('about.badge')}</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">{t('about.title')}</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              {info.about}
            </p>
          </div>
          <Image
            src="/images/aboutus.jpg"
            alt="About Us Image"
            width={600}
            height={400}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            data-ai-hint="team collaboration"
          />
        </div>
      </div>
    </section>
  );
}
