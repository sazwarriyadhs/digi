import Image from "next/image";

export const companyInfo = {
  about: "Digi Media Komunika is a forward-thinking digital media agency based in the heart of the tech landscape. We specialize in creating dynamic and engaging digital experiences. Our team is composed of passionate creators, strategists, and technologists who are dedicated to pushing the boundaries of digital innovation. We believe in the power of collaboration and work closely with our clients to understand their vision and bring it to life.",
  services: [
    { title: "Web Development", description: "Crafting responsive, high-performance websites with modern technologies." },
    { title: "UI/UX Design", description: "Designing intuitive and beautiful user interfaces that enhance user experience." },
    { title: "Digital Marketing", description: "Implementing data-driven marketing strategies to boost your online presence." },
    { title: "Branding & Identity", description: "Building strong, memorable brands that resonate with your target audience." },
    { title: "Content Creation", description: "Producing compelling content, from video production to copywriting." },
    { title: "SEO Optimization", description: "Improving your search engine ranking to drive organic traffic." },
  ]
};

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Us</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Who We Are</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              {companyInfo.about}
            </p>
          </div>
          <Image
            src="https://placehold.co/600x400.png"
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
