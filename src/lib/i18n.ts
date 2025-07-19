
export const translations = {
    id: {
        companyName: "PT Digi Media Komunika",
        navLinks: [
            { href: "/#about", label: "Tentang" },
            { href: "/#services", label: "Layanan" },
            { href: "/portfolio", label: "Portofolio" },
            { 
                label: "Klien Kami",
                children: [
                    { href: "/demo", label: "Demo & Studi Kasus" },
                    { href: "/appointment", label: "Jadwalkan Temu" },
                    { href: "/proposal", label: "Minta Penawaran" },
                ]
            },
            { 
                label: "Perusahaan",
                children: [
                    { href: "/team", label: "Tim Kami" },
                    { href: "/investor", label: "Investasi & Kemitraan" },
                    { href: "/#faq", label: "FAQ" },
                    { href: "/brochure", label: "Brosur" },
                    { href: "/#contact", label: "Kontak" },
                ]
            },
            { href: "/ai-help", label: "Bantuan AI" },
            { href: "/demo/lasertrack", label: "Aplikasi Unggulan", isExternal: false },
        ],
        hero: {
            slides: [
                {
                    badge: "Pengembangan",
                    title: "Pengembangan Aplikasi & Sistem Kustom",
                    description: "Membangun solusi web dan mobile yang tangguh yang disesuaikan dengan kebutuhan unik Anda.",
                    cta1: "Lihat Layanan",
                    cta2: "Hubungi Kami",
                    image: "/images/hero1.jpg",
                    aiHint: "code programming"
                },
                {
                    badge: "Infrastruktur",
                    title: "Layanan Cloud & DevOps Modern",
                    description: "Mengoptimalkan infrastruktur Anda untuk skalabilitas, keandalan, dan efisiensi.",
                    cta1: "Lihat Layanan",
                    cta2: "Hubungi Kami",
                    image: "/images/devops.jpg",
                    aiHint: "server room"
                },
                {
                    badge: "Keamanan",
                    title: "Konsultasi Keamanan Siber Proaktif",
                    description: "Melindungi aset digital Anda dengan audit keamanan dan strategi mitigasi risiko yang komprehensif.",
                    cta1: "Lihat Layanan",
                    cta2: "Hubungi Kami",
                    image: "/images/cyber.jpg",
                    aiHint: "cyber security"
                },
                {
                    badge: "Strategi",
                    title: "Konsultasi Strategi TI yang Andal",
                    description: "Menyelaraskan teknologi dengan tujuan bisnis Anda untuk mendorong pertumbuhan dan inovasi.",
                    cta1: "Lihat Layanan",
                    cta2: "Hubungi Kami",
                    image: "/images/hero2.jpg",
                    aiHint: "business strategy"
                }
            ]
        },
        about: {
            badge: "Tentang Kami",
            title: "Siapa Kami",
        },
        services: {
            badge: "Layanan Kami",
            title: "Solusi Teknologi Untuk Transformasi Digital Anda",
            description: "Kami menyediakan serangkaian layanan konsultasi TI dan pengembangan untuk membantu bisnis Anda bertumbuh di era digital.",
            pricingDetails: "Rincian Harga",
            includes: "Termasuk",
            packages: {
                title: "Paket Terpadu",
                description: "Pilih paket lengkap untuk memulai transformasi digital Anda dengan harga terbaik.",
                popular: "Paling Populer"
            },
            prefixes: {
                startsFrom: "Mulai dari",
            },
            suffixes: {
                month: "bulan",
                day: "hari",
                module: "modul",
            }
        },
        portfolio: {
            badge: "Galeri Demo",
            title: "Galeri Demo Interaktif",
            description: "Jelajahi demo interaktif dari beberapa solusi unggulan kami untuk melihat fungsionalitasnya secara langsung.",
            cta: "Kunjungi Galeri Demo"
        },
        portfolioPage: {
            badge: "Portofolio",
            title: "Proyek Klien Kami",
            description: "Jelajahi contoh proyek sukses yang telah kami kerjakan untuk klien kami di berbagai industri.",
            clientProjectsTitle: "Proyek Unggulan",
            duration: "Durasi",
            projectOfficer: "Project Officer",
            viewDetails: "Lihat Detail Proyek"
        },
        team: {
            badge: "Tim Kami",
            title: "Temui Para Ahli Kami",
            description: "Tim kami terdiri dari para profesional yang bersemangat dan berdedikasi untuk memberikan hasil terbaik.",
            viewProfile: "Lihat Profil",
            downloadCard: "Unduh Kartu Nama"
        },
        faq: {
            badge: "FAQ Cerdas",
            title: "Punya Pertanyaan?",
            description: "Tanyakan pada asisten AI kami. Ini telah dilatih tentang informasi perusahaan kami untuk memberi Anda jawaban yang cepat dan akurat.",
            cardTitle: "Tanya Apa Saja",
            cardDescription: "Ketik pertanyaan Anda di bawah ini dan dapatkan respons instan.",
            placeholder: "contoh: Layanan pemasaran digital apa yang Anda tawarkan?",
            submit: "Ajukan Pertanyaan",
            loading: "Mohon tunggu...",
            thinking: "Berpikir...",
            errorTitle: "Kesalahan",
            you: "Anda",
            aiAssistant: "Asisten AI",
        },
        aiHelp: {
            badge: "Bantuan AI",
            title: "Asisten AI Cerdas Anda",
            description: "Ajukan pertanyaan apa pun kepada asisten AI kami. Asisten ini dilatih tentang informasi perusahaan dan berbagai topik umum untuk memberi Anda jawaban yang cepat dan akurat.",
            cardTitle: "Tanya Apa Saja",
            cardDescription: "Ketik pertanyaan Anda di bawah ini dan dapatkan respons instan.",
            placeholder: "contoh: Apa saja tren terbaru dalam pengembangan web?",
            submit: "Ajukan Pertanyaan",
            loading: "Mohon tunggu...",
            thinking: "Berpikir...",
            errorTitle: "Kesalahan",
            you: "Anda",
            aiAssistant: "Asisten AI",
        },
        contact: {
            badge: "Hubungi Kami",
            title: "Mari Membangun Bersama",
            description: "Punya proyek dalam pikiran atau hanya ingin menyapa? Kami ingin sekali mendengar dari Anda.",
            phoneTitle: "Telepon",
            phoneText: "+62 878 6453 0047",
            emailTitle: "Informasi",
            emailText: "info@digimediakomunika.cloud",
            financeEmailTitle: "Administrasi",
            financeEmailText: "admin@digimediakomunika.cloud",
            addressTitle: "Alamat",
            addressText: "Cimahpar Stoneyard, Kota Bogor, Jawa Barat 16155",
            mapTitle: "Kantor Profesional",
            mapAlt: "Foto Kantor Profesional Digi Media Komunika",
            form: {
                title: "Kirim Pesan",
                description: "Isi formulir di bawah ini dan kami akan segera menghubungi Anda.",
                name: "Nama",
                namePlaceholder: "Nama Anda",
                email: "Email",
                emailPlaceholder: "email.anda@contoh.com",
                message: "Pesan",
                messagePlaceholder: "Bagaimana kami bisa membantu Anda?",
                submit: "Kirim Pesan",
            },
            toast: {
                title: "Pesan Terkirim!",
                description: "Terima kasih telah menghubungi kami. Kami akan segera menghubungi Anda.",
            },
            validation: {
                name: "Nama harus terdiri dari minimal 2 karakter.",
                email: "Silakan masukkan email yang valid.",
                message: "Pesan harus terdiri dari minimal 10 karakter.",
            }
        },
        footer: {
            rights: "Semua hak dilindungi undang-undang.",
            privacy: "Kebijakan Privasi",
            terms: "Ketentuan Layanan",
        },
        demo: {
            badge: "Galeri Demo",
            title: "Galeri Demo Interaktif",
            description: "Jelajahi demo interaktif dari beberapa solusi unggulan kami untuk melihat fungsionalitasnya secara langsung.",
            viewDemo: "Lihat Demo"
        },
        appointment: {
            badge: "Jadwalkan Temu",
            title: "Pesan Sesi Konsultasi Anda",
            description: "Siap untuk membahas proyek Anda? Jadwalkan konsultasi gratis dengan para ahli kami.",
            form: {
                title: "Buat Janji Temu",
                description: "Pilih tanggal dan waktu yang paling sesuai untuk Anda.",
                name: "Nama Lengkap",
                namePlaceholder: "Nama Anda",
                email: "Email",
                emailPlaceholder: "email.anda@contoh.com",
                service: "Layanan yang diminati",
                servicePlaceholder: "Pilih layanan",
                date: "Tanggal Pilihan",
                datePlaceholder: "Pilih tanggal",
                time: "Waktu Pilihan",
                timePlaceholder: "Pilih waktu",
                message: "Catatan Tambahan (Opsional)",
                messagePlaceholder: "Beri tahu kami lebih banyak tentang proyek Anda...",
                submit: "Jadwalkan Sekarang",
            },
            toast: {
                title: "Janji Temu Dibuat!",
                description: "Kami telah menerima permintaan Anda dan akan segera menghubungi Anda.",
            },
            validation: {
                name: "Nama diperlukan.",
                email: "A valid email is required.",
                service: "Silakan pilih layanan.",
                date: "Tanggal diperlukan.",
                time: "Waktu diperlukan.",
            }
        },
        proposal: {
            badge: "Formulir Penawaran",
            title: "Dapatkan Penawaran Proyek Khusus",
            description: "Isi formulir di bawah ini dengan detail proyek Anda, dan kami akan kembali kepada Anda dengan penawaran yang disesuaikan.",
            form: {
                title: "Detail Permintaan Penawaran",
                description: "Semakin banyak detail yang Anda berikan, semakin akurat penawaran kami.",
                name: "Nama Lengkap",
                namePlaceholder: "Nama Anda",
                company: "Nama Perusahaan",
                companyPlaceholder: "Nama perusahaan Anda",
                email: "Email",
                emailPlaceholder: "email.anda@contoh.com",
                phone: "Nomor Telepon",
                phonePlaceholder: "+62 812 3456 7890",
                services: "Layanan yang Diminati",
                servicesDescription: "Pilih satu atau lebih layanan yang relevan dengan proyek Anda.",
                projectDescription: "Deskripsi Proyek",
                projectDescriptionPlaceholder: "Jelaskan proyek Anda secara detail...",
                budget: "Perkiraan Anggaran",
                budgetPlaceholder: "Pilih rentang anggaran",
                budgets: [
                    "Kurang dari Rp 25.000.000",
                    "Rp 25.000.000 - Rp 100.000.000",
                    "Rp 100.000.000 - Rp 500.000.000",
                    "Lebih dari Rp 500.000.000",
                    "Belum ditentukan"
                ],
                submit: "Kirim Permintaan",
            },
            toast: {
                title: "Permintaan Terkirim!",
                description: "Terima kasih! Kami akan meninjau permintaan Anda dan segera menghubungi Anda.",
            },
            validation: {
                name: "Nama diperlukan.",
                company: "Nama perusahaan diperlukan.",
                email: "Email yang valid diperlukan.",
                phone: "Nomor telepon yang valid diperlukan.",
                services: "Pilih setidaknya satu layanan.",
                projectDescription: "Deskripsi proyek harus minimal 30 karakter.",
                budget: "Silakan pilih perkiraan anggaran.",
            }
        },
        brochure: {
            badge: "Unduh Brosur",
            title: "Katalog Layanan Kami",
            description: "Dapatkan informasi lengkap mengenai layanan, paket, dan studi kasus kami dalam satu dokumen praktis. Unduh brosur kami sekarang.",
            cardTitle: "Solusi Transformasi Digital",
            cardDescription: "Klik tombol di bawah untuk mengunduh brosur 'Solusi Transformasi Digital' kami.",
            downloadButton: "Unduh Brosur",
            imageAlt: "/images/sampul.png",
            fileInfo: "File: PDF, Ukuran: ~2.5MB"
        },
        investor: {
            badge: "Investasi & Kemitraan",
            title: "Peluang Investasi & Kemitraan",
            description: "Kami mencari mitra strategis untuk bergabung dengan kami dalam perjalanan kami untuk merevolusi lanskap digital. Temukan potensi pertumbuhan bersama Digi Media Komunika.",
            contactEmail: "admin@digimediakomunika.cloud",
            whyInvest: {
                title: "Mengapa Bermitra dengan Kami?",
                points: [
                    "Model bisnis yang terbukti dengan rekam jejak proyek yang sukses.",
                    "Tim ahli dengan keahlian mendalam di bidang teknologi dan strategi bisnis.",
                    "Pasar yang berkembang pesat dengan potensi pertumbuhan yang signifikan.",
                    "Komitmen terhadap inovasi dan pengembangan solusi mutakhir.",
                    "Struktur kemitraan yang transparan dan saling menguntungkan."
                ]
            },
            getInTouch: {
                title: "Hubungi Kami",
                description: "Mari kita diskusikan bagaimana kita bisa sukses bersama.",
                cta: "Tertarik untuk berdiskusi lebih lanjut?",
                invitation: "Kami mengundang Anda untuk menghubungi tim pengembangan bisnis kami untuk presentasi terperinci.",
                confidentiality: "Semua pertanyaan akan diperlakukan dengan kerahasiaan tertinggi.",
            },
            downloadBrochure: "Unduh Profil Perusahaan"
        },
        privacyPolicy: {
            title: "Kebijakan Privasi",
            lastUpdated: "Terakhir diperbarui: 29 Juni 2024",
            intro: "Kebijakan Privasi ini menjelaskan bagaimana informasi Anda dikumpulkan, digunakan, dan dibagikan saat Anda mengunjungi atau melakukan pembelian dari situs web kami.",
            sections: [
                {
                    title: "Informasi Pribadi yang Kami Kumpulkan",
                    content: [
                        "Saat Anda mengunjungi Situs, kami secara otomatis mengumpulkan informasi tertentu tentang perangkat Anda, termasuk informasi tentang browser web Anda, alamat IP, zona waktu, dan beberapa cookie yang terpasang di perangkat Anda.",
                        "Selain itu, saat Anda melakukan pembelian atau mencoba melakukan pembelian melalui Situs, kami mengumpulkan informasi tertentu dari Anda, termasuk nama, alamat penagihan, alamat pengiriman, informasi pembayaran, alamat email, dan nomor telepon. Kami menyebut informasi ini sebagai 'Informasi Pesanan'."
                    ]
                },
                {
                    title: "Bagaimana Kami Menggunakan Informasi Pribadi Anda?",
                    content: [
                        "Kami menggunakan Informasi Pesanan yang kami kumpulkan secara umum untuk memenuhi setiap pesanan yang dilakukan melalui Situs (termasuk memproses informasi pembayaran Anda, mengatur pengiriman, dan memberikan Anda faktur dan/atau konfirmasi pesanan).",
                        "Kami menggunakan Informasi Perangkat yang kami kumpulkan untuk membantu kami menyaring potensi risiko dan penipuan (khususnya, alamat IP Anda), dan secara lebih umum untuk meningkatkan dan mengoptimalkan Situs kami."
                    ]
                },
                {
                    title: "Perubahan",
                    content: [
                        "Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu untuk mencerminkan, misalnya, perubahan pada praktik kami atau karena alasan operasional, hukum, atau peraturan lainnya."
                    ]
                },
                {
                    title: "Hubungi Kami",
                    content: [
                        "Untuk informasi lebih lanjut tentang praktik privasi kami, jika Anda memiliki pertanyaan, atau jika Anda ingin mengajukan keluhan, silakan hubungi kami melalui email di info@digimediakomunika.cloud atau melalui surat menggunakan detail yang disediakan di halaman kontak kami."
                    ]
                }
            ]
        },
        termsOfService: {
            title: "Ketentuan Layanan",
            lastUpdated: "Terakhir diperbarui: 29 Juni 2024",
            intro: "Harap baca Ketentuan Layanan ini dengan cermat sebelum menggunakan situs web kami.",
            sections: [
                {
                    title: "Persetujuan terhadap Ketentuan",
                    content: [
                        "Dengan mengakses atau menggunakan Situs, Anda setuju untuk terikat oleh Ketentuan Layanan ini. Jika Anda tidak setuju dengan bagian mana pun dari ketentuan ini, maka Anda tidak boleh mengakses Situs."
                    ]
                },
                {
                    title: "Kekayaan Intelektual",
                    content: [
                        "Situs dan konten asli, fitur, dan fungsionalitasnya adalah dan akan tetap menjadi milik eksklusif PT Digi Media Komunika dan pemberi lisensinya."
                    ]
                },
                {
                    title: "Tautan ke Situs Web Lain",
                    content: [
                        "Situs kami mungkin berisi tautan ke situs web atau layanan pihak ketiga yang tidak dimiliki atau dikendalikan oleh PT Digi Media Komunika. Kami tidak memiliki kendali atas, dan tidak bertanggung jawab atas, konten, kebijakan privasi, atau praktik situs web atau layanan pihak ketiga mana pun."
                    ]
                },
                {
                    title: "Penghentian",
                    content: [
                        "Kami dapat menghentikan atau menangguhkan akses Anda ke Situs kami segera, tanpa pemberitahuan atau kewajiban sebelumnya, dengan alasan apa pun, termasuk tanpa batasan jika Anda melanggar Ketentuan."
                    ]
                },
                 {
                    title: "Hubungi Kami",
                    content: [
                        "Jika Anda memiliki pertanyaan tentang Ketentuan ini, silakan hubungi kami."
                    ]
                }
            ]
        },
    },
    en: {
        companyName: "PT Digi Media Komunika",
        navLinks: [
            { href: "/#about", label: "About" },
            { href: "/#services", label: "Services" },
            { href: "/portfolio", label: "Portfolio" },
            { 
                label: "Our Clients",
                children: [
                    { href: "/demo", label: "Demos & Case Studies" },
                    { href: "/appointment", label: "Schedule Appointment" },
                    { href: "/proposal", label: "Request Proposal" },
                ]
            },
            { 
                label: "Company",
                children: [
                    { href: "/team", label: "Our Team" },
                    { href: "/investor", label: "Investment & Partnership" },
                    { href: "/#faq", label: "FAQ" },
                    { href: "/brochure", label: "Brochure" },
                    { href: "/#contact", label: "Contact" },
                ]
            },
            { href: "/ai-help", label: "AI Help" },
            { href: "/demo/lasertrack", label: "Featured App", isExternal: false },
        ],
        hero: {
            slides: [
                {
                    badge: "Development",
                    title: "Custom Application & System Development",
                    description: "Building robust web and mobile solutions tailored to your unique needs.",
                    cta1: "View Services",
                    cta2: "Contact Us",
                    image: "/images/hero1.jpg",
                    aiHint: "code programming"
                },
                {
                    badge: "Infrastructure",
                    title: "Modern Cloud & DevOps Services",
                    description: "Optimizing your infrastructure for scalability, reliability, and efficiency.",
                    cta1: "View Services",
                    cta2: "Contact Us",
                    image: "/images/devops.jpg",
                    aiHint: "server room"
                },
                {
                    badge: "Security",
                    title: "Proactive Cybersecurity Consulting",
                    description: "Safeguarding your digital assets with comprehensive security audits and risk mitigation strategies.",
                    cta1: "View Services",
                    cta2: "Contact Us",
                    image: "/images/cyber.jpg",
                    aiHint: "cyber security"
                },
                {
                    badge: "Strategy",
                    title: "Reliable IT Strategy Consulting",
                    description: "Aligning technology with your business objectives to drive growth and innovation.",
                    cta1: "View Services",
                    cta2: "Contact Us",
                    image: "/images/hero2.jpg",
                    aiHint: "business strategy"
                }
            ]
        },
        about: {
            badge: "About Us",
            title: "Who We Are",
        },
        services: {
            badge: "Our Services",
            title: "Technology Solutions for Your Digital Transformation",
            description: "We provide a series of IT consulting and development services to help your business grow in the digital era.",
            pricingDetails: "Pricing Details",
            includes: "Includes",
            packages: {
                title: "Integrated Packages",
                description: "Choose a complete package to start your digital transformation at the best price.",
                popular: "Most Popular"
            },
            prefixes: {
                startsFrom: "Starts from",
            },
            suffixes: {
                month: "month",
                day: "day",
                module: "module",
            }
        },
        portfolio: {
            badge: "Demo Gallery",
            title: "Interactive Demo Gallery",
            description: "Explore interactive demos of some of our flagship solutions to see their functionality firsthand.",
            cta: "Go to Demo Gallery"
        },
        portfolioPage: {
            badge: "Portfolio",
            title: "Our Client Projects",
            description: "Explore successful project examples we have worked on for our clients across various industries.",
            clientProjectsTitle: "Featured Projects",
            duration: "Duration",
            projectOfficer: "Project Officer",
            viewDetails: "View Project Details"
        },
        team: {
            badge: "Our Team",
            title: "Meet Our Experts",
            description: "Our team consists of passionate and dedicated professionals committed to delivering the best results.",
            viewProfile: "View Profile",
            downloadCard: "Download vCard"
        },
        faq: {
            badge: "Intelligent FAQ",
            title: "Have a Question?",
            description: "Ask our AI assistant. It has been trained on our company information to provide you with quick and accurate answers.",
            cardTitle: "Ask Anything",
            cardDescription: "Type your question below and get an instant response.",
            placeholder: "e.g., What kind of digital marketing services do you offer?",
            submit: "Ask Question",
            loading: "Please wait...",
            thinking: "Thinking...",
            errorTitle: "Error",
            you: "You",
            aiAssistant: "AI Assistant",
        },
        aiHelp: {
            badge: "AI Help",
            title: "Your Intelligent AI Assistant",
            description: "Ask our AI assistant anything. It's trained on our company information and a wide range of general topics to give you quick and accurate answers.",
            cardTitle: "Ask Anything",
            cardDescription: "Type your question below and get an instant response.",
            placeholder: "e.g., What are the latest trends in web development?",
            submit: "Ask Question",
            loading: "Please wait...",
            thinking: "Thinking...",
            errorTitle: "Error",
            you: "You",
            aiAssistant: "AI Assistant",
        },
        contact: {
            badge: "Contact Us",
            title: "Let's Build Together",
            description: "Have a project in mind or just want to say hello? We'd love to hear from you.",
            phoneTitle: "Phone",
            phoneText: "+62 878 6453 0047",
            emailTitle: "Information",
            emailText: "info@digimediakomunika.cloud",
            financeEmailTitle: "Administration",
            financeEmailText: "admin@digimediakomunika.cloud",
            addressTitle: "Address",
            addressText: "Cimahpar Stoneyard, Bogor City, West Java 16155",
            mapTitle: "Professional Office",
            mapAlt: "Photo of Digi Media Komunika Professional Office",
            form: {
                title: "Send a Message",
                description: "Fill out the form below and we'll get back to you as soon as possible.",
                name: "Name",
                namePlaceholder: "Your Name",
                email: "Email",
                emailPlaceholder: "your.email@example.com",
                message: "Message",
                messagePlaceholder: "How can we help you?",
                submit: "Send Message",
            },
            toast: {
                title: "Message Sent!",
                description: "Thank you for reaching out. We'll get back to you soon.",
            },
            validation: {
                name: "Name must be at least 2 characters.",
                email: "Please enter a valid email.",
                message: "Message must be at least 10 characters.",
            }
        },
        footer: {
            rights: "All rights reserved.",
            privacy: "Privacy Policy",
            terms: "Terms of Service",
        },
        demo: {
            badge: "Demo Gallery",
            title: "Interactive Demo Gallery",
            description: "Explore interactive demos of some of our flagship solutions to see their functionality firsthand.",
            viewDemo: "View Demo"
        },
        appointment: {
            badge: "Schedule an Appointment",
            title: "Book Your Consultation Session",
            description: "Ready to discuss your project? Schedule a free consultation with our experts.",
            form: {
                title: "Book an Appointment",
                description: "Choose a date and time that works best for you.",
                name: "Full Name",
                namePlaceholder: "Your Name",
                email: "Email",
                emailPlaceholder: "your.email@example.com",
                service: "Service of Interest",
                servicePlaceholder: "Select a service",
                date: "Preferred Date",
                datePlaceholder: "Pick a date",
                time: "Preferred Time",
                timePlaceholder: "Select a time",
                message: "Additional Notes (Optional)",
                messagePlaceholder: "Tell us more about your project...",
                submit: "Schedule Now",
            },
            toast: {
                title: "Appointment Booked!",
                description: "We've received your request and will be in touch shortly.",
            },
            validation: {
                name: "Name is required.",
                email: "A valid email is required.",
                service: "Please select a service.",
                date: "A date is required.",
                time: "A time is required.",
            }
        },
        proposal: {
            badge: "Proposal Request Form",
            title: "Get a Custom Project Proposal",
            description: "Fill out the form below with your project details, and we'll get back to you with a tailored proposal.",
            form: {
                title: "Proposal Request Details",
                description: "The more details you provide, the more accurate our proposal will be.",
                name: "Full Name",
                namePlaceholder: "Your Name",
                company: "Company Name",
                companyPlaceholder: "Your company's name",
                email: "Email",
                emailPlaceholder: "your.email@example.com",
                phone: "Phone Number",
                phonePlaceholder: "+1 (555) 123-4567",
                services: "Services of Interest",
                servicesDescription: "Select one or more services relevant to your project.",
                projectDescription: "Project Description",
                projectDescriptionPlaceholder: "Describe your project in detail...",
                budget: "Estimated Budget",
                budgetPlaceholder: "Select a budget range",
                budgets: [
                    "Less than $1,500",
                    "$1,500 - $6,000",
                    "$6,000 - $30,000",
                    "More than $30,000",
                    "To be determined"
                ],
                submit: "Submit Request",
            },
            toast: {
                title: "Request Submitted!",
                description: "Thank you! We will review your request and get in touch with you shortly.",
            },
            validation: {
                name: "Name is required.",
                company: "Company name is required.",
                email: "A valid email is required.",
                phone: "A valid phone number is required.",
                services: "Please select at least one service.",
                projectDescription: "Project description must be at least 30 characters.",
                budget: "Please select an estimated budget.",
            }
        },
        brochure: {
            badge: "Download Brochure",
            title: "Our Service Catalog",
            description: "Get complete information about our services, packages, and case studies in one convenient document. Download our brochure now.",
            cardTitle: "Digital Transformation Solutions",
            cardDescription: "Click the button below to download our 'Digital Transformation Solutions' brochure.",
            downloadButton: "Download Brochure",
            imageAlt: "Brochure Cover",
            fileInfo: "File: PDF, Size: ~2.5MB"
        },
        investor: {
            badge: "Investment & Partnership",
            title: "Investment & Partnership Opportunities",
            description: "We are seeking strategic partners to join us on our journey to revolutionize the digital landscape. Discover the potential for growth with Digi Media Komunika.",
            contactEmail: "admin@digimediakomunika.cloud",
            whyInvest: {
                title: "Why Partner with Us?",
                points: [
                    "Proven business model with a track record of successful projects.",
                    "Expert team with deep expertise in technology and business strategy.",
                    "Rapidly growing market with significant growth potential.",
                    "Commitment to innovation and developing cutting-edge solutions.",
                    "Transparent and mutually beneficial partnership structure."
                ]
            },
            getInTouch: {
                title: "Get in Touch",
                description: "Let's discuss how we can achieve success together.",
                cta: "Interested in discussing further?",
                invitation: "We invite you to contact our business development team for a detailed presentation.",
                confidentiality: "All inquiries will be treated with the utmost confidentiality.",
            },
            downloadBrochure: "Download Company Profile"
        },
        privacyPolicy: {
            title: "Privacy Policy",
            lastUpdated: "Last updated: June 29, 2024",
            intro: "This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from our website.",
            sections: [
                {
                    title: "Personal Information We Collect",
                    content: [
                        "When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.",
                        "Additionally, when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information, email address, and phone number. We refer to this information as 'Order Information'."
                    ]
                },
                {
                    title: "How Do We Use Your Personal Information?",
                    content: [
                        "We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).",
                        "We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site."
                    ]
                },
                {
                    title: "Changes",
                    content: [
                        "We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons."
                    ]
                },
                {
                    title: "Contact Us",
                    content: [
                        "For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at info@digimediakomunika.cloud or by mail using the details provided on our contact page."
                    ]
                }
            ]
        },
        termsOfService: {
            title: "Terms of Service",
            lastUpdated: "Last updated: June 29, 2024",
            intro: "Please read these Terms of Service carefully before using our website.",
            sections: [
                {
                    title: "Agreement to Terms",
                    content: [
                        "By accessing or using the Site, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the Site."
                    ]
                },
                {
                    title: "Intellectual Property",
                    content: [
                        "The Site and its original content, features, and functionality are and will remain the exclusive property of PT Digi Media Komunika and its licensors."
                    ]
                },
                {
                    title: "Links To Other Web Sites",
                    content: [
                        "Our Site may contain links to third-party web sites or services that are not owned or controlled by PT Digi Media Komunika. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party web sites or services."
                    ]
                },
                {
                    title: "Termination",
                    content: [
                        "We may terminate or suspend access to our Site immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms."
                    ]
                },
                {
                    title: "Contact Us",
                    content: [
                        "If you have any questions about these Terms, please contact us."
                    ]
                }
            ]
        },
    }
}

export type Translation = typeof translations;

    

    

