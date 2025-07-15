
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppContext } from "@/context/AppContext";
import { Download } from "lucide-react";
import Link from "next/link";

export default function SpaDemoPage() {
  const { t } = useAppContext();

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">Demo: Serenity Spa &amp; Wellness</h1>
        <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
          Ini adalah demonstrasi website untuk Spa &amp; Wellness, menampilkan layanan dan pemesanan online. Di bawah ini adalah pratinjau langsung dari situs tersebut.
        </p>
      </div>
      <Card className="w-full max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle>Live Preview: Serenity Spa &amp; Wellness</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video w-full rounded-lg overflow-hidden border">
            <iframe
              src="https://serenityspawellness.vercel.app/"
              title="Serenity Spa & Wellness Demo"
              className="w-full h-full border-0"
            />
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Pratinjau interaktif dimuat di atas. Untuk pengalaman penuh,{" "}
              <Link href="https://serenityspawellness.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
                kunjungi situs live
              </Link>.
            </p>
            <Button asChild size="lg">
                <a href="/DMK-Company-Profile.pdf" download>
                    <Download className="mr-2 h-5 w-5" />
                    {t('brochure.downloadButton')}
                </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
