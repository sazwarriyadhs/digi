import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { FaqSection } from "@/components/sections/faq-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Separator className="my-16" />
      <ServicesSection />
      <Separator className="my-16" />
      <PortfolioSection />
      <Separator className="my-16" />
      <FaqSection />
      <Separator className="my-16" />
      <ContactSection />
    </>
  );
}
