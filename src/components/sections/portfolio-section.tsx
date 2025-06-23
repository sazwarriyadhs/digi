import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const portfolioItems = [
  {
    title: "E-commerce Platform Redesign",
    description: "A complete overhaul of a client's online store, resulting in a 40% increase in conversions.",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "modern ecommerce website",
  },
  {
    title: "Corporate Branding for Tech Startup",
    description: "Developed a fresh brand identity that positioned a new startup as a major player in the AI space.",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "technology brand logo",
  },
  {
    title: "Mobile App for Health & Wellness",
    description: "Designed and developed an intuitive mobile app for tracking fitness goals and nutrition.",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "fitness app interface",
  },
   {
    title: "SEO Campaign for Local Business",
    description: "Executed a successful SEO strategy that ranked a local business #1 for key search terms.",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "analytics dashboard graph",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Portfolio</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">A Glimpse of Our Work</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We're proud of the work we do. Here are some of our favorite projects that showcase our passion and expertise.
          </p>
        </div>
        <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mt-12">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-60 object-cover"
                data-ai-hint={item.aiHint}
              />
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
