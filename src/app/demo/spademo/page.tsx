import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function SpaDemoPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">Demo: Serenity Spa & Wellness</h1>
        <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
          Ini adalah demonstrasi website untuk Spa & Wellness, menampilkan layanan dan pemesanan online. Gambar di bawah ini menunjukkan halaman utama.
        </p>
      </div>
      <Card className="w-full max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle>Serenity Spa & Wellness</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video w-full rounded-lg overflow-hidden border">
            <Image
              src="https://placehold.co/1200x675.png"
              alt="Demo Spa & Wellness"
              width={1200}
              height={675}
              className="w-full h-full object-cover"
              data-ai-hint="spa wellness website"
            />
          </div>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            <p>Fungsionalitas interaktif akan diimplementasikan di sini. Kunjungi situs live di <Link href="https://serenityspawellness.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">serenityspawellness.vercel.app</Link>.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
