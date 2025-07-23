
"use client";

import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { DemoLinkSection } from "@/components/sections/demo-link-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ServicesSection } from "@/components/sections/services-section";

export default function Home() {
  return (
    <>
      <h1 className="sr-only">PT Digi Media Komunika - Solusi Transformasi Digital</h1>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <DemoLinkSection />
      <FaqSection />
      <ContactSection />
    </>
  )
}
