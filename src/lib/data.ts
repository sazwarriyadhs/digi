import { Lightbulb, Codepen, ShieldCheck, CloudCog, DatabaseZap, Briefcase, LifeBuoy, Presentation, GanttChartSquare } from "lucide-react";
import React from "react";

export const companyInfo = {
  id: {
    about: "Digi Media Komunika adalah agensi media digital yang berpikiran maju yang berbasis di jantung lanskap teknologi. Kami berspesialisasi dalam menciptakan pengalaman digital yang dinamis dan menarik. Tim kami terdiri dari para kreator, ahli strategi, dan teknolog yang bersemangat yang berdedikasi untuk mendorong batas-batas inovasi digital. Kami percaya pada kekuatan kolaborasi dan bekerja sama dengan klien kami untuk memahami visi mereka dan mewujudkannya.",
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
  },
  en: {
    about: "Digi Media Komunika is a forward-thinking digital media agency based in the heart of the tech landscape. We specialize in creating dynamic and engaging digital experiences. Our team is composed of passionate creators, strategists, and technologists who are dedicated to pushing the boundaries of digital innovation. We believe in the power of collaboration and work closely with our clients to understand their vision and bring it to life.",
    services: [
      { title: "IT Strategy Consultation", description: "Designing digital strategies aligned with business goals, including technology mapping, cost efficiency, and digital transformation." },
      { title: "Application & System Development", description: "End-to-end services for building mobile apps, web apps, and internal systems." },
      { title: "Cybersecurity Consultation", description: "System audits and data security implementation, including penetration testing, firewalls, and risk management." },
      { title: "Cloud & DevOps Services", description: "Cloud migration, server management, CI/CD, deployment automation, and infrastructure." },
      { title: "Data & Business Intelligence Consultation", description: "Building data warehouses, analytics dashboards, and BI tool integration." },
      { title: "ERP/CRM Services", description: "Implementation of ERP or CRM systems for business automation and customer tracking." },
      { title: "IT Support & Maintenance", description: "System maintenance and technical support for your IT applications and infrastructure." },
      { title: "Training & Implementation", description: "Workshops and staff training for using new systems, software, or cloud platforms." },
      { title: "IT Audit & Compliance", description: "Comprehensive audits of IT infrastructure and compliance with industry standards." }
    ]
  }
};

export const services = [
    {
      icon: React.createElement(Lightbulb, { className: "w-8 h-8 text-primary" }),
      id: { title: "Konsultasi Strategi IT", description: "Membantu perusahaan merancang strategi digital yang selaras dengan tujuan bisnis, termasuk pemetaan teknologi, efisiensi biaya, dan transformasi digital." },
      en: { title: "IT Strategy Consultation", description: "Helping companies design digital strategies that align with business goals, including technology mapping, cost efficiency, and digital transformation." },
      prices: [ { idr: 15000000, prefix: "startsFrom", id: { item: "Proyek Konsultasi" }, en: { item: "Consulting Project" } } ],
      includes: { id: ["2x workshop", "Dokumentasi roadmap", "Rekomendasi implementasi"], en: ["2x workshops", "Roadmap documentation", "Implementation recommendations"] }
    },
    {
      icon: React.createElement(Codepen, { className: "w-8 h-8 text-primary" }),
      id: { title: "Pengembangan Aplikasi & Sistem", description: "Layanan end-to-end untuk membangun aplikasi mobile, web, dan sistem internal berbasis kebutuhan spesifik klien." },
      en: { title: "Application & System Development", description: "End-to-end services to build mobile, web, and internal systems based on specific client needs." },
      prices: [
        { idr: 30000000, prefix: "startsFrom", id: { item: "Aplikasi Web" }, en: { item: "Web Application" } },
        { idr: 50000000, prefix: "startsFrom", id: { item: "Aplikasi Mobile (Android/iOS)" }, en: { item: "Mobile Application (Android/iOS)" } },
        { idr: 75000000, prefix: "startsFrom", id: { item: "Sistem ERP/CRM" }, en: { item: "ERP/CRM System" } }
      ],
      includes: { id: ["Desain UI/UX", "Coding", "Testing", "Dokumentasi", "Training"], en: ["UI/UX Design", "Coding", "Testing", "Documentation", "Training"] }
    },
    {
      icon: React.createElement(ShieldCheck, { className: "w-8 h-8 text-primary" }),
      id: { title: "Konsultasi Keamanan Siber", description: "Audit sistem dan implementasi keamanan data, termasuk penetration testing, firewall, dan manajemen risiko." },
      en: { title: "Cybersecurity Consultation", description: "System audits and data security implementation, including penetration testing, firewalls, and risk management." },
      prices: [
        { idr: 10000000, id: { item: "Audit Keamanan" }, en: { item: "Security Audit" } },
        { idr: 12000000, prefix: "startsFrom", id: { item: "Penetration Test" }, en: { item: "Penetration Test" } },
        { idr: 8000000, prefix: "startsFrom", id: { item: "Setup Keamanan (Firewall, Antivirus Server)" }, en: { item: "Security Setup (Firewall, Antivirus Server)" } }
      ],
      includes: { id: [], en: [] }
    },
    {
      icon: React.createElement(CloudCog, { className: "w-8 h-8 text-primary" }),
      id: { title: "Layanan Cloud & DevOps", description: "Migrasi ke cloud (AWS, GCP, Azure), manajemen server, CI/CD, otomatisasi deployment, dan infrastruktur." },
      en: { title: "Cloud & DevOps Services", description: "Migration to the cloud (AWS, GCP, Azure), server management, CI/CD, deployment automation, and infrastructure." },
      prices: [
        { idr: 15000000, prefix: "startsFrom", id: { item: "Migrasi Cloud" }, en: { item: "Cloud Migration" } },
        { idr: 10000000, prefix: "startsFrom", id: { item: "Setup DevOps CI/CD" }, en: { item: "DevOps CI/CD Setup" } },
        { idr: 2500000, prefix: "startsFrom", suffix: "month", id: { item: "Managed Cloud Service" }, en: { item: "Managed Cloud Service" } }
      ],
      includes: { id: [], en: [] }
    },
    {
      icon: React.createElement(DatabaseZap, { className: "w-8 h-8 text-primary" }),
      id: { title: "Konsultasi Data & Business Intelligence", description: "Membangun data warehouse, dashboard analytics, dan integrasi BI tools (Power BI, Tableau)." },
      en: { title: "Data & Business Intelligence Consultation", description: "Building data warehouses, analytics dashboards, and integrating BI tools (Power BI, Tableau)." },
      prices: [
        { idr: 20000000, id: { item: "Setup Data Warehouse" }, en: { item: "Data Warehouse Setup" } },
        { idr: 10000000, prefix: "startsFrom", id: { item: "Dashboard BI" }, en: { item: "BI Dashboard" } },
        { idr: 25000000, prefix: "startsFrom", id: { item: "Big Data Integration" }, en: { item: "Big Data Integration" } }
      ],
      includes: { id: [], en: [] }
    },
    {
      icon: React.createElement(Briefcase, { className: "w-8 h-8 text-primary" }),
      id: { title: "Layanan ERP/CRM", description: "Implementasi sistem ERP (Odoo, SAP) atau CRM (Salesforce, Zoho) untuk otomasi bisnis dan pelacakan pelanggan." },
      en: { title: "ERP/CRM Services", description: "Implementation of ERP (Odoo, SAP) or CRM (Salesforce, Zoho) systems for business automation and customer tracking." },
      prices: [
        { idr: 40000000, prefix: "startsFrom", id: { item: "ERP Setup" }, en: { item: "ERP Setup" } },
        { idr: 25000000, prefix: "startsFrom", id: { item: "CRM Setup" }, en: { item: "CRM Setup" } },
        { idr: 5000000, suffix: "module", id: { item: "Integrasi Modul Tambahan" }, en: { item: "Additional Module Integration" } }
      ],
      includes: { id: [], en: [] }
    },
    {
      icon: React.createElement(LifeBuoy, { className: "w-8 h-8 text-primary" }),
      id: { title: "IT Support & Maintenance", description: "Pemeliharaan sistem dan dukungan teknis untuk aplikasi dan infrastruktur TI Anda." },
      en: { title: "IT Support & Maintenance", description: "System maintenance and technical support for your IT applications and infrastructure." },
      prices: [
        { idr: 2000000, suffix: "month", id: { item: "Basic Support" }, en: { item: "Basic Support" } },
        { idr: 5000000, suffix: "month", id: { item: "Premium Support (include SLA + emergency support)" }, en: { item: "Premium Support (include SLA + emergency support)" } }
      ],
      includes: { id: [], en: [] }
    },
    {
      icon: React.createElement(Presentation, { className: "w-8 h-8 text-primary" }),
      id: { title: "Pelatihan & Implementasi", description: "Workshop dan pelatihan staf untuk penggunaan sistem, software baru, atau platform cloud." },
      en: { title: "Training & Implementation", description: "Workshops and staff training for using new systems, software, or cloud platforms." },
      prices: [
        { idr: 5000000, suffix: "day", id: { item: "Pelatihan In-House" }, en: { item: "In-House Training" } },
        { idr: 2000000, suffix: "module", id: { item: "Modul Online (e-learning)" }, en: { item: "Online Module (e-learning)" } }
      ],
      includes: { id: [], en: [] }
    },
    {
      icon: React.createElement(GanttChartSquare, { className: "w-8 h-8 text-primary" }),
      id: { title: "IT Audit & Kepatuhan", description: "Audit menyeluruh terhadap infrastruktur TI dan kepatuhan terhadap standar ISO 27001, GDPR, dsb." },
      en: { title: "IT Audit & Compliance", description: "Comprehensive audit of IT infrastructure and compliance with standards such as ISO 27001, GDPR, etc." },
      prices: [
        { idr: 12000000, prefix: "startsFrom", id: { item: "Audit TI" }, en: { item: "IT Audit" } },
        { idr: 5000000, id: { item: "Laporan Kepatuhan" }, en: { item: "Compliance Report" } }
      ],
      includes: { id: [], en: [] }
    }
  ];
  
export const packages = [
    {
      title: "DIGI STARTER PACK",
      priceIdr: 25000000,
      features: {
        id: ["Audit", "Strategi", "Rekomendasi", "Peta Jalan"],
        en: ["Audit", "Strategy", "Recommendations", "Roadmap"],
      },
      highlight: false
    },
    {
      title: "DIGI ENTERPRISE SUITE",
      priceIdr: 120000000,
      features: {
        id: ["Cloud", "ERP", "DevOps", "Support 6 bulan"],
        en: ["Cloud", "ERP", "DevOps", "6 months Support"],
      },
      highlight: true
    }
];

export const portfolioItems = [
    {
      id: { title: "Desain Ulang Platform E-commerce", description: "Perombakan total toko online klien, menghasilkan peningkatan konversi sebesar 40%." },
      en: { title: "E-commerce Platform Redesign", description: "A complete overhaul of a client's online store, resulting in a 40% increase in conversions." },
      imageUrl: "https://placehold.co/600x400.png",
      aiHint: "modern ecommerce website",
    },
    {
      id: { title: "Branding Korporat untuk Startup Teknologi", description: "Mengembangkan identitas merek baru yang memposisikan startup baru sebagai pemain utama di bidang AI." },
      en: { title: "Corporate Branding for Tech Startup", description: "Developed a fresh brand identity that positioned a new startup as a major player in the AI space." },
      imageUrl: "https://placehold.co/600x400.png",
      aiHint: "technology brand logo",
    },
    {
      id: { title: "Aplikasi Seluler untuk Kesehatan & Kebugaran", description: "Merancang dan mengembangkan aplikasi seluler intuitif untuk melacak tujuan kebugaran dan nutrisi." },
      en: { title: "Mobile App for Health & Wellness", description: "Designed and developed an intuitive mobile app for tracking fitness goals and nutrition." },
      imageUrl: "https://placehold.co/600x400.png",
      aiHint: "fitness app interface",
    },
     {
      id: { title: "Kampanye SEO untuk Bisnis Lokal", description: "Menjalankan strategi SEO yang sukses yang menempatkan bisnis lokal di peringkat #1 untuk kata kunci pencarian utama." },
      en: { title: "SEO Campaign for Local Business", description: "Executed a successful SEO strategy that ranked a local business #1 for key search terms." },
      imageUrl: "https://placehold.co/600x400.png",
      aiHint: "analytics dashboard graph",
    },
  ];
