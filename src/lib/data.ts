

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
        href: "/demo/crm",
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
        duration: { id: "3 Bulan", en: "3 Months" },
        projectOfficer: "Azwar Riyadh",
        imageUrl: "/images/crm.jpg",
        aiHint: "crm dashboard analytics",
    },
    {
        href: "/demo/devops",
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
        duration: { id: "4 Bulan", en: "4 Months" },
        projectOfficer: "Azwar Riyadh",
        imageUrl: "/images/aws.jpg",
        aiHint: "cloud infrastructure diagram",
    },
    {
        href: "/demo/akademik",
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
        duration: { id: "6 Bulan", en: "6 Months" },
        projectOfficer: "Azwar Riyadh",
        imageUrl: "/images/akademik.jpg",
        aiHint: "university student portal",
    },
    {
        href: "#",
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
        duration: { id: "2 Bulan", en: "2 Months" },
        projectOfficer: "Azwar Riyadh",
        imageUrl: "/images/cyber.jpg",
        aiHint: "security audit report",
    },
    {
        href: "/demo/banjir-online",
        id: {
            client: "PU Air DKI Jakarta",
            project: "Aplikasi Mobile: BanjirOnline (Android dan iOS)",
            details: "Mengembangkan aplikasi mobile untuk memantau ketinggian air secara real-time dan memberikan peringatan dini banjir kepada warga. Dilengkapi dengan peta interaktif dan notifikasi push."
        },
        en: {
            client: "Jakarta Water Resources Agency",
            project: "Mobile App: BanjirOnline (Android and iOS)",
            details: "Developed a mobile application to monitor water levels in real-time and provide early flood warnings to residents. Equipped with an interactive map and push notifications."
        },
        duration: { id: "5 Bulan", en: "5 Months" },
        projectOfficer: "Azwar Riyadh",
        imageUrl: "/images/banjirmobile.png",
        aiHint: "flood warning app",
    },
    {
        href: "/demo/takobo",
        id: {
            client: "Pemerintah Kota Bogor",
            project: "Aplikasi Mobile Takobo (Tanggap Bencana Kota Bogor)",
            details: "Mengembangkan aplikasi mobile lintas platform untuk sistem peringatan dini bencana alam di Kota Bogor, menyediakan informasi real-time dan notifikasi darurat."
        },
        en: {
            client: "Bogor City Government",
            project: "Takobo Mobile App (Bogor City Disaster Response)",
            details: "Developed a cross-platform mobile app for a natural disaster early warning system in Bogor City, providing real-time information and emergency notifications."
        },
        duration: { id: "5 Bulan", en: "5 Months" },
        projectOfficer: "Azwar Riyadh",
        imageUrl: "/images/takobo.png",
        aiHint: "disaster warning app",
    },
    {
        href: "/demo/serenity-trade",
        id: {
            client: "Serenity Group",
            project: "Platform Ekspor Agri-Komoditas",
            details: "Membangun platform trading digital untuk komoditas agrikultur, menghubungkan petani lokal dengan pasar global. Fitur termasuk analitik harga real-time, logistik terintegrasi, dan pembayaran aman."
        },
        en: {
            client: "Serenity Group",
            project: "Agri-Commodity Export Platform",
            details: "Built a digital trading platform for agricultural commodities, connecting local farmers with the global market. Features include real-time price analytics, integrated logistics, and secure payments."
        },
        duration: { id: "7 Bulan", en: "7 Months" },
        projectOfficer: "Azwar Riyadh, Titi Ariwati",
        imageUrl: "/images/thetrade.png",
        aiHint: "agriculture trading platform",
    },
    {
        href: "/demo/digiai",
        id: {
            client: "Serenity Group",
            project: "DigiAI",
            details: "Aplikasi AI canggih untuk mengubah teks menjadi gambar, gambar menjadi video, dan teks menjadi video, membuka kemungkinan kreatif tanpa batas."
        },
        en: {
            client: "Serenity Group",
            project: "DigiAI",
            details: "An advanced AI application to convert text to image, image to video, and text to video, unlocking endless creative possibilities."
        },
        duration: { id: "2 Bulan", en: "2 Months" },
        projectOfficer: "Azwar Riyadh, Titi Ariwati",
        imageUrl: "/images/DigiAI.jpg",
        aiHint: "ai generated art",
    },
    {
        href: "/demo/lasertrack",
        id: {
            client: "LaserTrack Inc.",
            project: "Sistem Pelacakan Laser Berbasis Web",
            details: "Mengembangkan platform pelacakan real-time untuk aset yang dilengkapi laser, meningkatkan keamanan dan efisiensi operasional."
        },
        en: {
            client: "LaserTrack Inc.",
            project: "Web-based Laser Tracking System",
            details: "Developed a real-time tracking platform for laser-equipped assets, enhancing security and operational efficiency."
        },
        duration: { id: "4 Bulan", en: "4 Months" },
        projectOfficer: "Azwar Riyadh",
        imageUrl: "/images/laser.png",
        aiHint: "asset tracking dashboard",
    },
    {
        href: "/demo/cintakita",
        id: {
            client: "Komunitas Cinta Kita",
            project: "Platform Komunitas & Donasi Online",
            details: "Membangun platform sosial untuk komunitas, lengkap dengan fitur donasi, acara, dan forum diskusi untuk meningkatkan interaksi dan dukungan anggota."
        },
        en: {
            client: "Cinta Kita Community",
            project: "Online Community & Donation Platform",
            details: "Built a social platform for a community, complete with donation features, events, and discussion forums to increase member interaction and support."
        },
        duration: { id: "3 Bulan", en: "3 Months" },
        projectOfficer: "Titi Ariwati",
        imageUrl: "/images/cintakita.jpeg",
        aiHint: "community social platform",
    },
    {
        href: "/demo/visionask",
        id: {
            client: "Visionask",
            project: "Aplikasi OCR untuk Dokumen",
            details: "Mengembangkan aplikasi OCR canggih untuk mengekstrak teks dari berbagai jenis dokumen secara akurat dan efisien."
        },
        en: {
            client: "Visionask",
            project: "Document OCR Application",
            details: "Developed an advanced OCR application to accurately and efficiently extract text from various document types."
        },
        duration: { id: "3 Bulan", en: "3 Months" },
        projectOfficer: "Azwar Riyadh, Titi Ariwati",
        imageUrl: "/images/vision.png",
        aiHint: "document scanner ocr",
    },
    {
        href: "/demo/resume-ace",
        id: {
            client: "Internal Project",
            project: "Resume Ace - AI Resume Builder",
            details: "Membangun platform berbasis AI untuk membuat resume profesional dengan templat yang ramah ATS dan saran cerdas untuk membantu pengguna mendapatkan pekerjaan impian mereka."
        },
        en: {
            client: "Internal Project",
            project: "Resume Ace - AI Resume Builder",
            details: "Built an AI-powered platform to create professional resumes with ATS-friendly templates and smart suggestions to help users land their dream job."
        },
        duration: { id: "1 Bulan", en: "1 Month" },
        projectOfficer: "Azwar Riyadh, Titi Ariwati",
        imageUrl: "/images/resumeace.png",
        aiHint: "resume builder application",
    },
    {
        href: "/demo/tradeflow",
        id: {
            client: "Internal Project",
            project: "TradeFlow - Integrasi Trading Kripto & Saham AS",
            details: "Platform canggih untuk integrasi trading Kripto dan Saham AS."
        },
        en: {
            client: "Internal Project",
            project: "TradeFlow - Crypto & US Equities Trading Integration",
            details: "An advanced platform for Crypto and US Equities trading integration."
        },
        duration: { id: "2 Bulan", en: "2 Months" },
        projectOfficer: "Azwar Riyadh, Titi Ariwati",
        imageUrl: "/images/tradeflow.png",
        aiHint: "trading platform logistics",
    }
];

export const demoItems = [
    {
        href: "/demo/spademo",
        aiHint: "spa wellness website",
        imageUrl: "/images/Serenity%20Spa%20&%20Wellness.png",
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
        imageUrl: "/images/thebi.png",
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
    },
    {
        href: "/demo/serenity-ews",
        aiHint: "landslide warning",
        imageUrl: "/images/serenityews.png",
        id: {
            name: "Serenity EWS Bogor",
            description: "Demo Sistem Peringatan Dini Bahaya Bencana Alam Terdekat. Status keamanan real-time Anda berdasarkan lokasi."
        },
        en: {
            name: "Serenity EWS Bogor",
            description: "Demo of an Early Warning System for Nearby Natural Disasters. Real-time security status based on your location."
        }
    },
    {
        href: "/demo/seo",
        aiHint: "seo analysis dashboard",
        imageUrl: "/images/theseo.png",
        id: {
            name: "Optimasi SEO dan SMO Website Anda",
            description: "Demo alat untuk analisis dan optimasi SEO dan Media Sosial untuk meningkatkan peringkat dan visibilitas online."
        },
        en: {
            name: "Your Website's SEO and SMO Optimization",
            description: "Demo tool for SEO and Social Media analysis and optimization to improve rankings and online visibility."
        }
    },
    {
        href: "/demo/pantau-csy",
        aiHint: "community security dashboard",
        imageUrl: "/images/logopantau.png",
        id: {
            name: "Aplikasi Monitoring Warga Cimahpar",
            description: "Demo aplikasi untuk memantau keamanan dan aktivitas warga di Perumahan Cimahpar Stoneyard secara real-time."
        },
        en: {
            name: "Cimahpar Residential Monitoring App",
            description: "Demo application for real-time monitoring of security and resident activity at Cimahpar Stoneyard housing."
        }
    },
    {
        href: "/demo/takobo",
        aiHint: "disaster warning app",
        imageUrl: "/images/takobo.png",
        id: {
            name: "Aplikasi Mobile Takobo (Tanggap Bencana Kota Bogor)",
            description: "Mengembangkan aplikasi mobile lintas platform untuk sistem peringatan dini bencana alam di Kota Bogor, menyediakan informasi real-time dan notifikasi darurat."
        },
        en: {
            name: "Takobo Mobile App (Bogor City Disaster Response)",
            description: "Developed a cross-platform mobile app for a natural disaster early warning system in Bogor City, providing real-time information and emergency notifications."
        }
    },
    {
        href: "https://agribid-khaki.vercel.app/",
        aiHint: "agriculture trading",
        imageUrl: "/images/thetrade.png",
        id: {
            name: "Serenity Trade Hub",
            description: "Demo platform trading komoditas agrikultur yang menghubungkan pasar global."
        },
        en: {
            name: "Serenity Trade Hub",
            description: "Demo of an agricultural commodity trading platform connecting global markets."
        }
    },
    {
        href: "/demo/banjir-online",
        aiHint: "flood warning app",
        imageUrl: "/images/banjirmobile.png",
        id: {
            name: "Aplikasi BanjirOnline",
            description: "Demo aplikasi mobile untuk pemantauan banjir dengan peta interaktif dan notifikasi."
        },
        en: {
            name: "BanjirOnline App",
            description: "Demo of a mobile application for flood monitoring with interactive maps and notifications."
        }
    },
    {
        href: "/demo/digiai",
        aiHint: "ai generated art",
        imageUrl: "/images/DigiAI.jpg",
        id: {
            name: "DigiAI",
            description: "Demo aplikasi AI untuk konversi teks ke gambar, gambar ke video, dan teks ke video."
        },
        en: {
            name: "DigiAI",
            description: "Demo of an AI application for text-to-image, image-to-video, and text-to-video conversion."
        }
    },
    {
        href: "/demo/lasertrack",
        aiHint: "asset tracking interface",
        imageUrl: "/images/laser.png",
        id: {
            name: "LaserTrack",
            description: "Demo platform pelacakan aset berbasis web dengan visualisasi data real-time."
        },
        en: {
            name: "LaserTrack",
            description: "Demo of a web-based asset tracking platform with real-time data visualization."
        }
    },
    {
        href: "/demo/cintakita",
        aiHint: "community social platform",
        imageUrl: "/images/cintakita.jpeg",
        id: {
            name: "Cinta Kita",
            description: "Demo platform komunitas dengan donasi, acara, dan forum diskusi."
        },
        en: {
            name: "Cinta Kita",
            description: "Demo of a community platform with donations, events, and discussion forums."
        }
    },
    {
        href: "/demo/visionask",
        aiHint: "document scanner ocr",
        imageUrl: "/images/vision.png",
        id: {
            name: "Visionask OCR",
            description: "Demo aplikasi OCR canggih untuk mengekstrak teks dari dokumen."
        },
        en: {
            name: "Visionask OCR",
            description: "Demo of an advanced OCR application for extracting text from documents."
        }
    },
    {
        href: "/demo/resume-ace",
        aiHint: "resume builder application",
        imageUrl: "/images/resumeace.png",
        id: {
            name: "Resume Ace",
            description: "Demo aplikasi pembuat resume berbasis AI dengan templat profesional."
        },
        en: {
            name: "Resume Ace",
            description: "Demo of an AI-powered resume builder with professional templates."
        }
    },
    {
        href: "/demo/tradeflow",
        aiHint: "trading platform logistics",
        imageUrl: "/images/tradeflow.png",
        id: {
            name: "TradeFlow - Integrasi Trading Kripto & Saham AS",
            description: "Platform canggih untuk integrasi trading Kripto dan Saham AS."
        },
        en: {
            name: "TradeFlow - Crypto & US Equities Trading Integration",
            description: "An advanced platform for Crypto and US Equities trading integration."
        }
    }
];

export const teamMembers = [
    {
        id: {
            name: "Titi Ariwati",
            role: "Chief Executive Officer",
            bio: "Titi memimpin perusahaan dengan visi strategis, menggabungkan keahlian desainnya dengan kepemimpinan bisnis untuk mendorong inovasi dan pertumbuhan.",
        },
        en: {
            name: "Titi Ariwati",
            role: "Chief Executive Officer",
            bio: "Titi leads the company with strategic vision, combining her design expertise with business leadership to drive innovation and growth.",
        },
        imageUrl: "/images/titi.png",
        aiHint: "female portrait creative",
        social: {
            linkedin: "https://www.linkedin.com/",
            twitter: "https://twitter.com/",
        }
    },
    {
        id: {
            name: "Azwar Riyadh Subarkah",
            role: "Chief Technology Officer dan Founder",
            bio: "Azwar adalah seorang pemimpin teknologi berpengalaman dengan hasrat untuk mendorong inovasi dan membangun tim rekayasa berkinerja tinggi. Ia ahli dalam arsitektur cloud dan integrasi AI.",
        },
        en: {
            name: "Azwar Riyadh Subarkah",
            role: "Chief Technology Officer and Founder",
            bio: "Azwar is a seasoned technology leader with a passion for driving innovation and building high-performing engineering teams. He is an expert in cloud architecture and AI integration.",
        },
        imageUrl: "/images/azwar.jpg",
        aiHint: "male portrait tech",
        social: {
            phone: "087864530047",
            email: "azwarriyadh@digimediakomunika.cloud",
            linkedin: "https://www.linkedin.com/",
            github: "https://github.com/sazwarriyadhs",
            instagram: "https://www.instagram.com/azwarriyadhs"
        }
    }
];

export const articles = [
    {
        slug: "tren-transformasi-digital-2024",
        imageUrl: "/images/article1.jpg",
        aiHint: "digital transformation trends",
        id: {
            title: "5 Tren Transformasi Digital yang Akan Mendominasi di Tahun 2024",
            description: "Pelajari tren-tren kunci dalam transformasi digital, mulai dari AI generatif hingga komputasi kuantum, dan bagaimana bisnis Anda dapat memanfaatkannya.",
            category: "Teknologi",
            author: "Azwar Riyadh",
            date: "2024-07-01",
            content: `
                <p>Tahun 2024 menandai era baru dalam transformasi digital, di mana teknologi tidak lagi hanya menjadi pendukung, tetapi inti dari strategi bisnis. Inovasi yang dulunya dianggap fiksi ilmiah kini menjadi kenyataan, mendorong perusahaan untuk beradaptasi atau berisiko tertinggal. Berikut adalah lima tren transformasi digital yang paling berpengaruh yang perlu Anda perhatikan.</p>
                
                <h3 class="font-bold text-xl my-4">1. Kecerdasan Buatan (AI) Generatif yang Meresap</h3>
                <p>AI generatif, yang dipopulerkan oleh model seperti GPT-4, telah melampaui sekadar pembuatan konten. Kini, AI ini diintegrasikan ke dalam alur kerja inti bisnis, mulai dari pengembangan perangkat lunak (dengan bantuan penulisan kode), pemasaran (untuk personalisasi kampanye), hingga layanan pelanggan (melalui chatbot yang lebih cerdas dan sadar konteks). Perusahaan yang berhasil akan fokus pada penggunaan AI generatif untuk meningkatkan produktivitas, bukan hanya menggantikan tugas-tugas sederhana.</p>
                
                <h3 class="font-bold text-xl my-4">2. Komputasi Tepi (Edge Computing) untuk Data Real-time</h3>
                <p>Dengan ledakan perangkat Internet of Things (IoT), pemrosesan data di cloud pusat tidak lagi efisien untuk aplikasi yang membutuhkan respons seketika. Edge computing memindahkan pemrosesan lebih dekat ke sumber data, mengurangi latensi dan memungkinkan analisis real-time. Ini sangat penting untuk sektor manufaktur (pemantauan mesin), ritel (pengalaman di dalam toko yang dipersonalisasi), dan kendaraan otonom.</p>

                <h3 class="font-bold text-xl my-4">3. Keamanan Siber Berbasis AI</h3>
                <p>Seiring dengan semakin canggihnya ancaman siber, pendekatan keamanan tradisional tidak lagi memadai. Platform keamanan siber yang didukung AI dapat secara proaktif mengidentifikasi dan merespons ancaman secara real-time. Mereka menganalisis pola perilaku untuk mendeteksi anomali yang mungkin menandakan adanya pelanggaran, secara signifikan mengurangi waktu respons dan meminimalkan potensi kerusakan.</p>

                <h3 class="font-bold text-xl my-4">4. Pengalaman Pelanggan yang Terkomposisi (Composable CX)</h3>
                <p>Daripada mengandalkan platform monolitik yang kaku, perusahaan beralih ke arsitektur yang dapat dikomposisi. Ini berarti membangun tumpukan teknologi pengalaman pelanggan (CX) mereka dengan memilih solusi 'terbaik di kelasnya' untuk setiap fungsi (misalnya, CRM, analisis, personalisasi) dan mengintegrasikannya melalui API. Pendekatan ini memberikan fleksibilitas yang lebih besar untuk beradaptasi dengan perubahan kebutuhan pelanggan dan dengan cepat mengadopsi teknologi baru.</p>

                <h3 class="font-bold text-xl my-4">5. Keberlanjutan sebagai Pendorong Teknologi</h3>
                <p>Tekanan dari regulator dan konsumen mendorong perusahaan untuk memprioritaskan keberlanjutan. Teknologi memainkan peran penting dalam hal ini. Cloud yang efisien energi, analitik data untuk mengoptimalkan rantai pasokan, dan IoT untuk memantau dampak lingkungan menjadi komponen penting dari strategi TI modern. 'Green IT' bukan lagi sekadar slogan pemasaran; itu adalah keharusan bisnis.</p>

                <p class="mt-6">Perusahaan yang merangkul tren ini tidak hanya akan bertahan tetapi juga berkembang dalam lanskap digital yang terus berubah. Kuncinya adalah melihat teknologi ini bukan sebagai solusi terisolasi, tetapi sebagai komponen terintegrasi dari strategi bisnis yang lebih luas.</p>
            `
        },
        en: {
            title: "5 Digital Transformation Trends That Will Dominate in 2024",
            description: "Learn about the key trends in digital transformation, from generative AI to quantum computing, and how your business can leverage them.",
            category: "Technology",
            author: "Azwar Riyadh",
            date: "2024-07-01",
            content: `
                <p>The year 2024 marks a new era in digital transformation, where technology is no longer just a supporter, but the core of business strategy. Innovations once considered science fiction are now a reality, forcing companies to adapt or risk being left behind. Here are the five most influential digital transformation trends you need to watch.</p>

                <h3 class="font-bold text-xl my-4">1. Pervasive Generative Artificial Intelligence (AI)</h3>
                <p>Generative AI, popularized by models like GPT-4, has moved beyond simple content creation. It is now being integrated into core business workflows, from software development (with code-writing assistance), marketing (for personalizing campaigns), to customer service (through smarter, context-aware chatbots). Successful companies will focus on using generative AI to augment productivity, not just replace simple tasks.</p>

                <h3 class="font-bold text-xl my-4">2. Edge Computing for Real-time Data</h3>
                <p>With the explosion of Internet of Things (IoT) devices, processing data in a central cloud is no longer efficient for applications requiring instantaneous response. Edge computing moves processing closer to the data source, reducing latency and enabling real-time analytics. This is critical for manufacturing (machine monitoring), retail (personalized in-store experiences), and autonomous vehicles.</p>

                <h3 class="font-bold text-xl my-4">3. AI-Driven Cybersecurity</h3>
                <p>As cyber threats become more sophisticated, traditional security approaches are no longer adequate. AI-powered cybersecurity platforms can proactively identify and respond to threats in real-time. They analyze behavioral patterns to detect anomalies that may signal a breach, significantly reducing response time and minimizing potential damage.</p>

                <h3 class="font-bold text-xl my-4">4. Composable Customer Experience (CX)</h3>
                <p>Instead of relying on rigid, monolithic platforms, companies are moving towards composable architectures. This means building their customer experience (CX) tech stack by picking 'best-in-class' solutions for each function (e.g., CRM, analytics, personalization) and integrating them via APIs. This approach provides greater flexibility to adapt to changing customer needs and quickly adopt new technologies.</p>

                <h3 class="font-bold text-xl my-4">5. Sustainability as a Tech Driver</h3>
                <p>Pressure from regulators and consumers is pushing companies to prioritize sustainability. Technology plays a crucial role in this. Energy-efficient clouds, data analytics to optimize supply chains, and IoT for monitoring environmental impact are becoming essential components of modern IT strategy. 'Green IT' is no longer just a marketing buzzword; it's a business imperative.</p>

                <p class="mt-6">Companies that embrace these trends will not only survive but thrive in the ever-changing digital landscape. The key is to see these technologies not as isolated solutions, but as integrated components of a broader business strategy.</p>
            `
        }
    },
    {
        slug: "pentingnya-keamanan-siber-untuk-ukm",
        imageUrl: "/images/article2.jpg",
        aiHint: "cyber security small business",
        id: {
            title: "Mengapa Keamanan Siber Penting untuk Usaha Kecil dan Menengah (UKM)?",
            description: "UKM sering menjadi target serangan siber. Temukan langkah-langkah praktis untuk melindungi bisnis Anda dari ancaman digital yang terus berkembang.",
            category: "Keamanan Siber",
            author: "Titi Ariwati",
            date: "2024-06-25",
            content: `
                <p>Banyak pemilik usaha kecil dan menengah (UKM) berpikir bahwa mereka terlalu kecil untuk menjadi target penjahat siber. Ini adalah kesalahpahaman yang berbahaya. Faktanya, UKM adalah target utama karena mereka seringkali memiliki pertahanan yang lebih lemah dibandingkan perusahaan besar.</p>
                <h3 class="font-bold text-xl my-4">Risiko yang Dihadapi UKM</h3>
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>Kerugian Finansial:</strong> Serangan ransomware, di mana data Anda dienkripsi hingga Anda membayar tebusan, dapat melumpuhkan bisnis.</li>
                    <li><strong>Kerusakan Reputasi:</strong> Pelanggaran data yang mengekspos informasi pelanggan dapat menghancurkan kepercayaan yang telah Anda bangun dengan susah payah.</li>
                    <li><strong>Gangguan Operasional:</strong> Serangan dapat membuat sistem penting menjadi offline, menghentikan operasi bisnis Anda selama berhari-hari.</li>
                    <li><strong>Masalah Hukum dan Kepatuhan:</strong> Jika Anda menangani data sensitif, pelanggaran dapat mengakibatkan denda yang besar karena tidak mematuhi peraturan seperti GDPR atau POPI.</li>
                </ul>
                <h3 class="font-bold text-xl my-4">Langkah-Langkah Praktis untuk Melindungi Bisnis Anda</h3>
                <p>Anda tidak memerlukan anggaran keamanan sekelas perusahaan besar untuk melindungi bisnis Anda. Berikut adalah beberapa langkah mendasar namun sangat efektif:</p>
                <ol class="list-decimal pl-5 space-y-2 mt-2">
                    <li><strong>Pelatihan Karyawan:</strong> Garis pertahanan pertama Anda adalah karyawan Anda. Latih mereka untuk mengenali email phishing, menggunakan kata sandi yang kuat, dan memahami pentingnya keamanan data.</li>
                    <li><strong>Gunakan Kata Sandi yang Kuat dan Otentikasi Dua Faktor (2FA):</strong> Terapkan kebijakan kata sandi yang kuat dan aktifkan 2FA di semua akun yang memungkinkan. 2FA menambahkan lapisan keamanan ekstra yang signifikan.</li>
                    <li><strong>Selalu Perbarui Perangkat Lunak Anda:</strong> Perbarui sistem operasi, browser, dan perangkat lunak lainnya secara teratur. Pembaruan seringkali berisi patch keamanan penting.</li>
                    <li><strong>Cadangkan Data Anda Secara Teratur:</strong> Simpan cadangan data penting Anda di beberapa lokasi (misalnya, di cloud dan di hard drive eksternal). Ini adalah jaring pengaman utama Anda terhadap ransomware.</li>
                    <li><strong>Amankan Jaringan Wi-Fi Anda:</strong> Ubah nama dan kata sandi default router Anda. Gunakan enkripsi WPA2 atau WPA3 dan buat jaringan terpisah untuk tamu jika memungkinkan.</li>
                </ol>
                <p class="mt-6">Keamanan siber bukan lagi pilihan; ini adalah bagian penting dari menjalankan bisnis di era digital. Dengan mengambil langkah-langkah proaktif ini, Anda dapat secara signifikan mengurangi risiko dan melindungi masa depan perusahaan Anda.</p>
            `
        },
        en: {
            title: "Why is Cybersecurity Important for Small and Medium Enterprises (SMEs)?",
            description: "SMEs are often targets of cyber attacks. Discover practical steps to protect your business from evolving digital threats.",
            category: "Cybersecurity",
            author: "Titi Ariwati",
            date: "2024-06-25",
            content: `
                <p>Many small and medium-sized enterprise (SME) owners think they are too small to be a target for cybercriminals. This is a dangerous misconception. In fact, SMEs are prime targets because they often have weaker defenses than large corporations.</p>
                <h3 class="font-bold text-xl my-4">The Risks SMEs Face</h3>
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>Financial Loss:</strong> Ransomware attacks, where your data is encrypted until you pay a ransom, can be crippling.</li>
                    <li><strong>Reputational Damage:</strong> A data breach that exposes customer information can destroy the trust you've worked hard to build.</li>
                    <li><strong>Operational Disruption:</strong> An attack can take critical systems offline, halting your business operations for days.</li>
                    <li><strong>Legal and Compliance Issues:</strong> If you handle sensitive data, a breach can lead to hefty fines for non-compliance with regulations like GDPR or POPI.</li>
                </ul>
                <h3 class="font-bold text-xl my-4">Practical Steps to Protect Your Business</h3>
                <p>You don't need a corporate-sized security budget to protect your business. Here are some fundamental yet highly effective steps:</p>
                <ol class="list-decimal pl-5 space-y-2 mt-2">
                    <li><strong>Employee Training:</strong> Your first line of defense is your employees. Train them to recognize phishing emails, use strong passwords, and understand the importance of data security.</li>
                    <li><strong>Use Strong Passwords and Two-Factor Authentication (2FA):</strong> Enforce a strong password policy and enable 2FA on all possible accounts. 2FA adds a significant extra layer of security.</li>
                    <li><strong>Keep Your Software Updated:</strong> Regularly update your operating systems, browsers, and other software. Updates often contain critical security patches.</li>
                    <li><strong>Back Up Your Data Regularly:</strong> Keep backups of your important data in multiple locations (e.g., in the cloud and on an external hard drive). This is your primary safety net against ransomware.</li>
                    <li><strong>Secure Your Wi-Fi Network:</strong> Change the default name and password of your router. Use WPA2 or WPA3 encryption and create a separate network for guests if possible.</li>
                </ol>
                <p class="mt-6">Cybersecurity is no longer an option; it's an essential part of doing business in the digital age. By taking these proactive steps, you can significantly reduce your risk and protect your company's future.</p>
            `
        }
    },
    {
        slug: "membangun-budaya-inovasi-di-perusahaan",
        imageUrl: "/images/article3.jpg",
        aiHint: "innovation culture team",
        id: {
            title: "Studi Kasus: Bagaimana Kami Membangun Budaya Inovasi di PT Digi Media Komunika",
            description: "Dari sesi brainstorming rutin hingga proyek internal, kami membagikan cara kami menumbuhkan budaya kreativitas dan inovasi di dalam tim.",
            category: "Budaya Perusahaan",
            author: "Azwar Riyadh",
            date: "2024-06-18",
            content: `
                <p>Inovasi bukanlah hasil dari satu momen pencerahan; itu adalah produk dari budaya yang secara konsisten mendorong rasa ingin tahu, eksperimen, and kolaborasi. Di PT Digi Media Komunika, kami percaya bahwa inovasi adalah detak jantung dari pertumbuhan kami. Berikut adalah pandangan di balik layar tentang bagaimana kami secara aktif menumbuhkan budaya ini.</p>
                <h3 class="font-bold text-xl my-4">1. Waktu untuk Inovasi: "Lab Day"</h3>
                <p>Setiap dua minggu sekali, kami mengadakan "Lab Day," di mana anggota tim didorong untuk bekerja pada proyek-proyek di luar tanggung jawab reguler mereka. Proyek-proyek ini bisa berupa apa saja, mulai dari mencoba framework JavaScript baru, membangun prototipe untuk ide aplikasi, hingga mengotomatiskan proses internal. Lab Day memberikan kebebasan untuk gagal dan belajar, yang sangat penting untuk inovasi sejati.</p>
                
                <h3 class="font-bold text-xl my-4">2. Kolaborasi Lintas Fungsi: "Sesi Spark"</h3>
                <p>Kami secara teratur mengadakan "Sesi Spark," di mana tim dari berbagai departemen—seperti pengembang, desainer, dan ahli strategi—berkumpul untuk memecahkan masalah tertentu. Perspektif yang beragam ini sering kali mengarah pada solusi yang tidak akan ditemukan oleh satu tim saja. Ini memecah silo dan mendorong pemahaman yang lebih dalam tentang tantangan di seluruh perusahaan.</p>

                <h3 class="font-bold text-xl my-4">3. Merayakan Kegagalan sebagai Pembelajaran</h3>
                <p>Salah satu penghalang terbesar inovasi adalah rasa takut akan kegagalan. Kami secara aktif bekerja untuk menghilangkan stigma ini. Dalam ulasan proyek, kami tidak hanya membahas apa yang berhasil tetapi juga apa yang tidak, dan yang terpenting, apa yang kami pelajari dari kegagalan tersebut. Kami memiliki saluran "belajar dari kesalahan" di mana anggota tim dapat berbagi pengalaman mereka tanpa takut dihakimi.</p>

                <h3 class="font-bold text-xl my-4">4. Akses ke Alat dan Pelatihan</h3>
                <p>Kami berinvestasi dalam menyediakan akses bagi tim kami ke alat-alat terbaru dan platform pembelajaran online. Mendorong pembelajaran berkelanjutan memastikan bahwa tim kami selalu mengetahui perkembangan teknologi terbaru, yang pada gilirannya memicu ide-ide baru untuk proyek klien dan peningkatan internal.</p>

                <p class="mt-6">Membangun budaya inovasi adalah proses yang berkelanjutan, bukan tujuan akhir. Dengan menyediakan waktu, ruang, dan keamanan psikologis bagi tim kami untuk bereksperimen dan berkolaborasi, kami tidak hanya meningkatkan layanan kami tetapi juga menciptakan lingkungan kerja yang lebih menarik dan memuaskan.</p>
            `
        },
        en: {
            title: "Case Study: How We Built a Culture of Innovation at PT Digi Media Komunika",
            description: "From regular brainstorming sessions to internal projects, we share how we foster a culture of creativity and innovation within the team.",
            category: "Company Culture",
            author: "Azwar Riyadh",
            date: "2024-06-18",
            content: `
                <p>Innovation isn't the result of a single "aha!" moment; it's the product of a culture that consistently encourages curiosity, experimentation, and collaboration. At PT Digi Media Komunika, we believe that innovation is the heartbeat of our growth. Here's a behind-the-scenes look at how we actively cultivate this culture.</p>
                <h3 class="font-bold text-xl my-4">1. Time for Innovation: "Lab Days"</h3>
                <p>Every other Friday, we hold "Lab Days," where team members are encouraged to work on projects outside their regular responsibilities. These can be anything from trying out a new JavaScript framework, building a prototype for an app idea, to automating an internal process. Lab Day provides the freedom to fail and learn, which is essential for true innovation.</p>
                
                <h3 class="font-bold text-xl my-4">2. Cross-Functional Collaboration: "Spark Sessions"</h3>
                <p>We regularly host "Spark Sessions," where teams from different departments—such as developers, designers, and strategists—come together to brainstorm solutions for a specific problem. This diversity of perspectives often leads to breakthroughs that a single team might not discover on its own. It breaks down silos and fosters a deeper understanding of challenges across the company.</p>

                <h3 class="font-bold text-xl my-4">3. Celebrating Failure as Learning</h3>
                <p>One of the biggest barriers to innovation is the fear of failure. We actively work to destigmatize it. In our project reviews, we discuss not only what went right but also what went wrong and, most importantly, what we learned from it. We have a "lessons learned" channel where team members can share their experiences without fear of judgment.</p>

                <h3 class="font-bold text-xl my-4">4. Access to Tools and Training</h3>
                <p>We invest in giving our team access to the latest tools and online learning platforms. Encouraging continuous learning ensures our team is always up-to-date with the latest technological advancements, which in turn sparks new ideas for client projects and internal improvements.</p>

                <p class="mt-6">Building a culture of innovation is an ongoing process, not a destination. By providing the time, space, and psychological safety for our team to experiment and collaborate, we not only improve our services but also create a more engaging and fulfilling work environment.</p>
            `
        }
    }
];



    