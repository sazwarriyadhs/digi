import { Lightbulb, Codepen, ShieldCheck, CloudCog, DatabaseZap, Briefcase, LifeBuoy, Presentation, GanttChartSquare, Bot, Search } from "lucide-react";
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
      { title: "IT Audit & Kepatuhan", description: "Audit menyeluruh terhadap infrastruktur TI dan kepatuhan terhadap standar industri." },
      { title: "Konsultasi SEO Gratis", description: "Dapatkan analisis dasar gratis untuk website Anda. Kami akan memberikan laporan singkat tentang potensi peningkatan SEO, termasuk analisis kata kunci dan kecepatan situs, untuk membantu Anda memahami di mana harus memulai." },
      { title: "Layanan Bantuan AI", description: "Implementasi chatbot cerdas, asisten virtual, atau sistem otomatisasi berbasis AI untuk meningkatkan layanan pelanggan dan efisiensi operasional." }
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
      { title: "IT Audit & Compliance", description: "Comprehensive audits of IT infrastructure and compliance with industry standards." },
      { title: "Free SEO Consultation", description: "Get a free basic analysis of your website. We'll provide a brief report on potential SEO improvements, including keyword and site speed analysis, to help you understand where to start." },
      { title: "AI Assistant Services", description: "Implementation of intelligent chatbots, virtual assistants, or AI-based automation systems to enhance customer service and operational efficiency." }
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
    },
    {
      icon: React.createElement(Search, { className: "w-8 h-8 text-primary" }),
      id: { 
        title: "Konsultasi SEO Gratis", 
        description: "Dapatkan analisis dasar gratis untuk website Anda. Kami akan memberikan laporan singkat tentang potensi peningkatan SEO, termasuk analisis kata kunci dan kecepatan situs, untuk membantu Anda memahami di mana harus memulai." 
      },
      en: { 
        title: "Free SEO Consultation", 
        description: "Get a free basic analysis of your website. We'll provide a brief report on potential SEO improvements, including keyword and site speed analysis, to help you understand where to start." 
      },
      prices: [
        { idr: 0, id: { item: "Analisis & Laporan Awal" }, en: { item: "Initial Analysis & Report" } }
      ],
      includes: { 
        id: ["Analisis kata kunci dasar", "Pemeriksaan kecepatan situs", "Laporan ringkas"], 
        en: ["Basic keyword analysis", "Site speed check", "Summary report"] 
      }
    },
    {
      icon: React.createElement(Bot, { className: "w-8 h-8 text-primary" }),
      id: { 
        title: "Layanan Bantuan AI", 
        description: "Implementasi chatbot cerdas, asisten virtual, atau sistem otomatisasi berbasis AI untuk meningkatkan layanan pelanggan dan efisiensi operasional." 
      },
      en: { 
        title: "AI Assistant Services", 
        description: "Implementation of intelligent chatbots, virtual assistants, or AI-based automation systems to enhance customer service and operational efficiency." 
      },
      prices: [
        { idr: 15000000, prefix: "startsFrom", id: { item: "Setup Chatbot" }, en: { item: "Chatbot Setup" } },
        { idr: 25000000, prefix: "startsFrom", id: { item: "Integrasi AI Kustom" }, en: { item: "Custom AI Integration" } }
      ],
      includes: { 
        id: ["Analisis kebutuhan", "Desain alur percakapan", "Pelatihan model AI"], 
        en: ["Needs analysis", "Conversation flow design", "AI model training"] 
      }
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
        id: {
            client: "Bank Nusantara",
            project: "Implementasi Sistem CRM berbasis Web",
            details: "Kami membangun sistem CRM kustom yang terintegrasi dengan call center dan live chat, serta menyediakan dashboard analitik real-time untuk 100+ CS. Hasilnya, efisiensi layanan pelanggan meningkat sebesar 40%."
        },
        en: {
            client: "Bank Nusantara",
            project: "Web-based CRM System Implementation",
            details: "We built a custom CRM system integrated with the call center and live chat, and provided a real-time analytics dashboard for 100+ customer service agents, increasing service efficiency by 40%."
        },
        imageUrl: "/images/crm.jpg",
        aiHint: "crm dashboard analytics",
    },
    {
        id: {
            client: "PT Astra Tech",
            project: "Migrasi Infrastruktur ke AWS Cloud",
            details: "Kami membantu migrasi 20+ microservices ke AWS dengan arsitektur serverless dan sistem monitoring otomatis (Grafana + Prometheus), yang berhasil mengurangi downtime sistem hingga 95%."
        },
        en: {
            client: "PT Astra Tech",
            project: "Infrastructure Migration to AWS Cloud",
            details: "We assisted in migrating 20+ microservices to AWS with a serverless architecture and automated monitoring (Grafana + Prometheus), reducing system downtime by up to 95%."
        },
        imageUrl: "/images/aws.jpg",
        aiHint: "cloud infrastructure diagram",
    },
    {
        id: {
            client: "Universitas Digital Indonesia",
            project: "Pengembangan Sistem Akademik Online",
            details: "Platform ini terintegrasi dengan SSO, memiliki fitur jadwal otomatis, ekspor PDF, dan notifikasi via email/SMS, yang mengotomatisasi proses KRS & nilai untuk 10.000+ mahasiswa."
        },
        en: {
            client: "Digital University of Indonesia",
            project: "Online Academic System Development",
            details: "This platform, integrated with SSO, features automatic scheduling, PDF export, and notifications via email/SMS, automating the study plan and grading process for over 10,000 students."
        },
        imageUrl: "/images/akademik.jpg",
        aiHint: "university student portal",
    },
    {
        id: {
            client: "RS Sehat Sentosa",
            project: "Audit Keamanan Sistem Informasi",
            details: "Audit dilakukan pada sistem SIMRS dan server internal, dilengkapi laporan teknis dan SOP penanganan insiden, berhasil mengidentifikasi dan menutup 13 celah keamanan kritikal."
        },
        en: {
            client: "Sehat Sentosa Hospital",
            project: "Information System Security Audit",
            details: "The audit was conducted on the hospital's information system and internal servers, including a technical report and incident handling SOPs, successfully identifying and closing 13 critical security vulnerabilities."
        },
        imageUrl: "/images/cyber.jpg",
        aiHint: "security audit report",
    }
];

export const demoItems = [
    {
        href: "/demo/spademo",
        aiHint: "spa wellness website",
        imageUrl: "/images/Serenity Spa & Wellness.png",
        id: {
            name: "Serenity Spa & Wellness",
            description: "Demo website untuk Spa & Wellness, menampilkan layanan dan pemesanan online."
        },
        en: {
            name: "Serenity Spa & Wellness",
            description: "Demo website for a Spa & Wellness center, showcasing services and online booking."
        }
    },
    {
        href: "/demo/akademik",
        aiHint: "hotel website",
        imageUrl: "/images/pelangihotel.png",
        id: {
            name: "Hotel Pelangi Website",
            description: "Demo website untuk Hotel Pelangi, menampilkan kamar dan pemesanan online."
        },
        en: {
            name: "Hotel Pelangi Website",
            description: "Demo website for Hotel Pelangi, showcasing rooms and online booking."
        }
    },
    {
        href: "/demo/devops",
        aiHint: "cloud monitoring dashboard",
        imageUrl: "/images/serenitywatcher.png",
        id: {
            name: "Serenity Watcher",
            description: "Demo real-time dashboard untuk monitoring cloud server dan pipeline CI/CD."
        },
        en: {
            name: "Serenity Watcher",
            description: "Demo of a real-time dashboard for monitoring cloud servers and CI/CD pipelines."
        }
    },
    {
        href: "/demo/bi",
        aiHint: "business intelligence dashboard",
        imageUrl: "/images/powerbi.png",
        id: {
            name: "Serenity BI",
            description: "Demo dashboard Business Intelligence untuk analisis data dan visualisasi."
        },
        en: {
            name: "Serenity BI",
            description: "A Business Intelligence dashboard demo for data analysis and visualization."
        }
    },
    {
        href: "/demo/serenity-parkease",
        aiHint: "parking management dashboard",
            imageUrl: "/images/parkease.png",
        id: {
            name: "Serenity Parkease",
            description: "Demo aplikasi manajemen parkir untuk pemantauan slot dan reservasi."
        },
        en: {
            name: "Serenity Parkease",
            description: "Demo of a parking management application for slot monitoring and reservations."
        }
    },
    {
        href: "/demo/serenity-tarot",
        aiHint: "tarot cards mystical",
        imageUrl: "/images/serenitytarot.png",
        id: {
            name: "Serenity Tarot",
            description: "Demo aplikasi pembacaan kartu tarot interaktif yang didukung oleh AI untuk wawasan dan refleksi diri."
        },
        en: {
            name: "Serenity Tarot",
            description: "Demo of an interactive AI-powered tarot card reading application for insight and self-reflection."
        }
    }
];

export const teamMembers = [
    {
        id: {
            name: "Jean Philips",
            role: "Chief Executive Officer",
            bio: "Jean adalah seorang visioner dengan pengalaman lebih dari 15 tahun di industri teknologi, memimpin perusahaan menuju inovasi dan pertumbuhan yang berkelanjutan.",
        },
        en: {
            name: "Jean Philips",
            role: "Chief Executive Officer",
            bio: "Jean is a visionary with over 15 years of experience in the tech industry, leading the company towards sustainable innovation and growth.",
        },
        imageUrl: "/images/jean.jpeg",
        aiHint: "male portrait business",
        social: {
            linkedin: "https://www.linkedin.com/",
            twitter: "https://twitter.com/",
        }
    },
    {
        id: {
            name: "Azwar Riyadh",
            role: "Chief Technology Officer",
            bio: "Azwar adalah seorang pemimpin teknologi berpengalaman dengan hasrat untuk mendorong inovasi dan membangun tim rekayasa berkinerja tinggi. Ia ahli dalam arsitektur cloud dan integrasi AI.",
        },
        en: {
            name: "Azwar Riyadh",
            role: "Chief Technology Officer",
            bio: "Azwar is a seasoned technology leader with a passion for driving innovation and building high-performing engineering teams. He is an expert in cloud architecture and AI integration.",
        },
        imageUrl: "/images/azwar.jpg",
        aiHint: "male portrait tech",
        social: {
            linkedin: "https://www.linkedin.com/",
            github: "https://github.com/sazwarriyadhs",
            instagram: "https://www.instagram.com/azwarriyadhs"
        }
    },
    {
        id: {
            name: "Agus Wijaya",
            role: "Head of Operations",
            bio: "Agus bertanggung jawab atas kelancaran operasional sehari-hari, memastikan proyek berjalan tepat waktu dan sesuai anggaran dengan kualitas tertinggi.",
        },
        en: {
            name: "Agus Wijaya",
            role: "Head of Operations",
            bio: "Agus is responsible for the smooth day-to-day operations, ensuring projects are delivered on time and within budget with the highest quality.",
        },
        imageUrl: "/images/agus.jpg",
        aiHint: "male portrait professional",
        social: {
            linkedin: "https://www.linkedin.com/",
            twitter: "https://twitter.com/",
        }
    },
    {
        id: {
            name: "Dewi Anggraini",
            role: "Lead UI/UX Designer",
            bio: "Dewi adalah otak kreatif di balik antarmuka pengguna yang intuitif dan menarik. Dia mengubah ide-ide kompleks menjadi desain yang ramah pengguna.",
        },
        en: {
            name: "Dewi Anggraini",
            role: "Lead UI/UX Designer",
            bio: "Dewi is the creative mind behind our intuitive and engaging user interfaces. She transforms complex ideas into user-friendly designs.",
        },
        imageUrl: "/images/titi.png",
        aiHint: "female portrait creative",
        social: {
            linkedin: "https://www.linkedin.com/",
            twitter: "https://twitter.com/",
        }
    }
];





