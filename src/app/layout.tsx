
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { AppProvider } from "@/context/AppContext";
import { SplashScreen } from "@/components/layout/splash-screen";
import { Analytics } from "@vercel/analytics/react";


export const metadata: Metadata = {
  title: 'PT Digi Media Komunika - Solusi Transformasi Digital',
  description: 'PT Digi Media Komunika adalah mitra terpercaya dalam transformasi digital. Kami menyediakan layanan web, cloud, DevOps, keamanan siber, dan AI.',
  metadataBase: new URL('https://digimediakomunika.cloud'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'PT Digi Media Komunika',
    description: 'Solusi digital dari web, cloud, DevOps hingga AI.',
    url: 'https://digimediakomunika.cloud',
    images: [
      {
        url: 'https://digimediakomunika.cloud/images/og.jpg',
        width: 1200,
        height: 630,
        alt: 'PT Digi Media Komunika',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PT Digi Media Komunika',
    description: 'Solusi digital dari web, cloud, DevOps hingga AI.',
    images: ['https://digimediakomunika.cloud/images/og.jpg'],
  },
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adsensePublisherId = "ca-pub-2279227107562302";

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-adsense-account" content={adsensePublisherId}></meta>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        {/* ✅ Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1WSQ61ZDCF"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1WSQ61ZDCF');
            `,
          }}
        />
        {/* ✅ Google AdSense */}
        <script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsensePublisherId}`}
     crossOrigin="anonymous"></script>
      </head>
      <body className="font-body antialiased">
          <AppProvider>
            <SplashScreen />
            <Header />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </AppProvider>
        <Analytics />
      </body>
    </html>
  );
}
