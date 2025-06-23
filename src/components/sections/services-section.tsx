import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Megaphone, Palette, Search, Clapperboard, PenTool } from "lucide-react";

const services = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Web Development",
      description: "Crafting responsive, high-performance websites with modern technologies.",
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "UI/UX Design",
      description: "Designing intuitive and beautiful user interfaces that enhance user experience.",
    },
    {
      icon: <Megaphone className="w-8 h-8 text-primary" />,
      title: "Digital Marketing",
      description: "Implementing data-driven marketing strategies to boost your online presence.",
    },
    {
      icon: <PenTool className="w-8 h-8 text-primary" />,
      title: "Branding & Identity",
      description: "Building strong, memorable brands that resonate with your target audience.",
    },
    {
      icon: <Clapperboard className="w-8 h-8 text-primary" />,
      title: "Content Creation",
      description: "Producing compelling content, from video production to copywriting.",
    },
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "SEO Optimization",
      description: "Improving your search engine ranking to drive organic traffic.",
    },
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Services</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">What We Do</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We provide a wide range of digital services to help your business succeed. Our expert team is ready to tackle any challenge.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
