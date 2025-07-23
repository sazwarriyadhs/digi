
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function LaserTrackDemoPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">Demo: LaserTrack</h1>
        <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
          Ini adalah demonstrasi platform pelacakan aset berbasis web dengan visualisasi data real-time. Di bawah ini adalah pratinjau dari antarmuka aplikasi.
        </p>
      </div>
      <Card className="w-full max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle>Live Preview: LaserTrack</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video w-full rounded-lg overflow-hidden border">
            <Image
                src="/images/laser.png"
                alt="Antarmuka dashboard aplikasi LaserTrack menampilkan peta dan data aset"
                width={1200}
                height={675}
                className="w-full h-full object-cover"
                data-ai-hint="asset tracking dashboard"
            />
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Gambar di atas adalah pratinjau antarmuka. Untuk pengalaman penuh,{" "}
              <Link href="https://lasertrack-7uid.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
                kunjungi situs live
              </Link>.
            </p>
            <Button asChild size="lg">
                <a href="/images/Pitch Deck_ SERENITY LaserTrack.pdf" download>
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
