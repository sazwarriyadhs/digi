
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppContext } from "@/context/AppContext";
import { Download } from "lucide-react";
import Link from "next/link";

export default function SerenityTradeDemoPage() {
  const { t } = useAppContext();

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">Demo: Serenity Trade Hub</h1>
        <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
          Ini adalah demonstrasi platform trading untuk komoditas agrikultur. Di bawah ini adalah pratinjau langsung dari aplikasi tersebut.
        </p>
      </div>
      <Card className="w-full max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle>Live Preview: Serenity Trade Hub</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video w-full rounded-lg overflow-hidden border">
            <iframe
              src="https://serenitytrade.vercel.app/"
              title="Serenity Trade Hub Demo"
              className="w-full h-full border-0"
            />
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Pratinjau interaktif dimuat di atas. Untuk pengalaman penuh,{" "}
              <Link href="https://serenitytrade.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
                kunjungi situs live
              </Link>.
            </p>
            <Button asChild size="lg">
                <a href="/images/PITCH DECK - SERENITYTRADE.pdf" download>
                    <Download className="mr-2 h-5 w-5" />
                    Unduh Pitch Deck
                </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
