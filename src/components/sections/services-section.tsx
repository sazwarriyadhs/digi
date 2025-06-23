import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Lightbulb, Codepen, ShieldCheck, CloudCog, DatabaseZap, Briefcase, LifeBuoy, Presentation, GanttChartSquare } from "lucide-react";

const services = [
  {
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    title: "Konsultasi Strategi IT",
    description: "Membantu perusahaan merancang strategi digital yang selaras dengan tujuan bisnis, termasuk pemetaan teknologi, efisiensi biaya, dan transformasi digital.",
    prices: [
      { item: "Proyek Konsultasi", value: "Mulai dari Rp15.000.000 / proyek" },
    ],
    includes: ["2x workshop", "Dokumentasi roadmap", "Rekomendasi implementasi"]
  },
  {
    icon: <Codepen className="w-8 h-8 text-primary" />,
    title: "Pengembangan Aplikasi & Sistem",
    description: "Layanan end-to-end untuk membangun aplikasi mobile, web, dan sistem internal berbasis kebutuhan spesifik klien.",
    prices: [
      { item: "Aplikasi Web", value: "Mulai Rp30.000.000" },
      { item: "Aplikasi Mobile (Android/iOS)", value: "Mulai Rp50.000.000" },
      { item: "Sistem ERP/CRM", value: "Mulai Rp75.000.000" },
    ],
    includes: ["Desain UI/UX", "Coding", "Testing", "Dokumentasi", "Training"]
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Konsultasi Keamanan Siber",
    description: "Audit sistem dan implementasi keamanan data, termasuk penetration testing, firewall, dan manajemen risiko.",
    prices: [
      { item: "Audit Keamanan", value: "Rp10.000.000" },
      { item: "Penetration Test", value: "Mulai Rp12.000.000" },
      { item: "Setup Keamanan (Firewall, Antivirus)", value: "Mulai Rp8.000.000" },
    ],
    includes: []
  },
  {
    icon: <CloudCog className="w-8 h-8 text-primary" />,
    title: "Layanan Cloud & DevOps",
    description: "Migrasi ke cloud (AWS, GCP, Azure), manajemen server, CI/CD, otomatisasi deployment, dan infrastruktur.",
    prices: [
      { item: "Migrasi Cloud", value: "Mulai Rp15.000.000" },
      { item: "Setup DevOps CI/CD", value: "Mulai Rp10.000.000" },
      { item: "Managed Cloud Service", value: "Mulai Rp2.500.000 / bulan" },
    ],
    includes: []
  },
  {
    icon: <DatabaseZap className="w-8 h-8 text-primary" />,
    title: "Konsultasi Data & Business Intelligence",
    description: "Membangun data warehouse, dashboard analytics, dan integrasi BI tools (Power BI, Tableau).",
    prices: [
      { item: "Setup Data Warehouse", value: "Rp20.000.000" },
      { item: "Dashboard BI", value: "Mulai Rp10.000.000" },
      { item: "Big Data Integration", value: "Mulai Rp25.000.000" },
    ],
    includes: []
  },
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: "Layanan ERP/CRM",
    description: "Implementasi sistem ERP (Odoo, SAP) atau CRM (Salesforce, Zoho) untuk otomasi bisnis dan pelacakan pelanggan.",
    prices: [
      { item: "ERP Setup", value: "Mulai Rp40.000.000" },
      { item: "CRM Setup", value: "Mulai Rp25.000.000" },
      { item: "Integrasi Modul Tambahan", value: "Rp5.000.000 / modul" },
    ],
    includes: []
  },
  {
    icon: <LifeBuoy className="w-8 h-8 text-primary" />,
    title: "IT Support & Maintenance",
    description: "Pemeliharaan sistem dan dukungan teknis untuk aplikasi dan infrastruktur TI Anda.",
    prices: [
      { item: "Basic Support", value: "Rp2.000.000 / bulan" },
      { item: "Premium Support (SLA)", value: "Rp5.000.000 / bulan" },
    ],
    includes: []
  },
  {
    icon: <Presentation className="w-8 h-8 text-primary" />,
    title: "Pelatihan & Implementasi",
    description: "Workshop dan pelatihan staf untuk penggunaan sistem, software baru, atau platform cloud.",
    prices: [
      { item: "Pelatihan In-House", value: "Rp5.000.000 / hari" },
      { item: "Modul Online (e-learning)", value: "Rp2.000.000 / modul" },
    ],
    includes: []
  },
  {
    icon: <GanttChartSquare className="w-8 h-8 text-primary" />,
    title: "IT Audit & Kepatuhan",
    description: "Audit menyeluruh terhadap infrastruktur TI dan kepatuhan terhadap standar ISO 27001, GDPR, dsb.",
    prices: [
      { item: "Audit TI", value: "Mulai Rp12.000.000" },
      { item: "Laporan Kepatuhan", value: "Tambahan Rp5.000.000" },
    ],
    includes: []
  }
];

const packages = [
  {
    title: "DIGI STARTER PACK",
    price: "Rp25.000.000",
    features: ["Audit", "Strategi", "Rekomendasi", "Peta Jalan"],
    highlight: false
  },
  {
    title: "DIGI ENTERPRISE SUITE",
    price: "Rp120.000.000",
    features: ["Cloud", "ERP", "DevOps", "Support 6 bulan"],
    highlight: true
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Layanan Kami</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Solusi Teknologi Untuk Transformasi Digital Anda</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Kami menyediakan serangkaian layanan konsultasi TI dan pengembangan untuk membantu bisnis Anda bertumbuh di era digital.
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl gap-4 mt-12">
          <Accordion type="single" collapsible className="w-full">
            {services.map((service, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="border-b">
                <AccordionTrigger className="text-lg hover:no-underline py-6">
                  <div className="flex items-center gap-4">
                    {service.icon}
                    <span className="text-left">{service.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-6 pl-14">
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Rincian Harga</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {service.prices.map((price, i) => (
                          <li key={i} className="flex justify-between">
                            <span>{price.item}</span>
                            <span className="font-medium text-foreground">{price.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {service.includes.length > 0 && (
                       <div>
                        <h4 className="font-semibold mb-2 text-primary">Termasuk</h4>
                        <ul className="space-y-2 text-sm">
                          {service.includes.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-muted-foreground">
                              <Check className="w-4 h-4 text-primary" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-4xl font-headline">Paket Terpadu</h3>
            <p className="max-w-2xl mx-auto mt-2 text-muted-foreground md:text-lg">Pilih paket lengkap untuk memulai transformasi digital Anda dengan harga terbaik.</p>
        </div>

        <div className="mx-auto grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mt-12 max-w-4xl">
            {packages.map((pkg, index) => (
                <Card key={index} className={pkg.highlight ? "border-primary border-2 shadow-lg" : ""}>
                    <CardHeader>
                        {pkg.highlight && <Badge className="w-fit self-start bg-primary">Paling Populer</Badge>}
                        <CardTitle className="mt-2 text-2xl">{pkg.title}</CardTitle>
                        <CardDescription>
                            <span className="text-3xl font-bold text-foreground">{pkg.price}</span>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-2">
                        <ul className="space-y-3">
                           {pkg.features.map((feature, i) => (
                               <li key={i} className="flex items-center gap-3">
                                   <Check className="w-5 h-5 text-primary"/>
                                   <span className="text-muted-foreground">{feature}</span>
                               </li>
                           ))}
                        </ul>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
