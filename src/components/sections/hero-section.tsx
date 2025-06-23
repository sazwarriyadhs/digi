"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/context/AppContext";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  const { t } = useAppContext();
  const slides = t('hero.slides');
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {(slides || []).map((slide: any, index: number) => (
            <CarouselItem key={index}>
              <div className="relative h-[600px] md:h-[700px] w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  data-ai-hint={slide.aiHint}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                  <div className="container px-4 md:px-6 space-y-6">
                    <Badge variant="secondary" className="text-sm">
                      {slide.badge}
                    </Badge>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter font-headline">
                      {slide.title}
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-200">
                      {slide.description}
                    </p>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                      <Button asChild size="lg">
                        <Link href="#services">{slide.cta1}</Link>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
                        <Link href="#contact">{slide.cta2}</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
            <CarouselPrevious className="absolute left-8 top-1/2 -translate-y-1/2 z-10 bg-black/20 text-white border-white/50 hover:bg-black/50" />
            <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2 z-10 bg-black/20 text-white border-white/50 hover:bg-black/50" />
        </div>
      </Carousel>
    </section>
  );
}
