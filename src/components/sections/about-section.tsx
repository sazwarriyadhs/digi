import Image from "next/image";

export const companyInfo = {
  about: "Digi Media Komunika is a forward-thinking digital media agency based in the heart of the tech landscape. We specialize in creating dynamic and engaging digital experiences. Our team is composed of passionate creators, strategists, and technologists who are dedicated to pushing the boundaries of digital innovation. We believe in the power of collaboration and work closely with our clients to understand their vision and bring it to life.",
  services: [
    { title: "Konsultasi Strategi IT", description: "Merancang strategi digital yang selaras dengan tujuan bisnis, termasuk pemetaan teknologi, efisiensi biaya, dan transformasi digital." },
    { title: "Pengembangan Aplikasi & Sistem", description: "Layanan end-to-end untuk membangun aplikasi mobile, web, dan sistem internal." },
    { title: "Konsultasi Keamanan Siber", description: "Audit sistem dan implementasi keamanan data, termasuk penetration testing, firewall, dan manajemen risiko." },
    { title: "Layanan Cloud & DevOps", description: "Migrasi ke cloud, manajemen server, CI/CD, otomatisasi deployment, dan infrastruktur." },
    { title: "Konsultasi Data & Business Intelligence", description: "Membangun data warehouse, dashboard analytics, dan integrasi BI tools." },
    { title: "Layanan ERP/CRM", description: "Implementasi sistem ERP atau CRM untuk otomasi bisnis dan pelacakan pelanggan." },
    { title: "IT Support & Maintenance", description: "Pemeliharaan sistem dan dukungan teknis untuk aplikasi dan infrastruktur TI." },
    { title: "Pelatihan & Implementasi", description: "Workshop dan pelatihan staf untuk penggunaan sistem, software baru, atau platform cloud." },
    { title: "IT Audit & Kepatuhan", description: "Audit menyeluruh terhadap infrastruktur TI dan kepatuhan terhadap standar industri." }
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
