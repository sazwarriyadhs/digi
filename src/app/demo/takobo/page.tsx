import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function TakoboDemoPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">Demo: Takobo Mobile App</h1>
        <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
          Ini adalah demonstrasi aplikasi "Tanggap Bencana Kota Bogor" (Takobo), sebuah sistem peringatan dini bencana alam berbasis mobile untuk platform Android dan iOS.
        </p>
      </div>
      <Card className="w-full max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle>Pratinjau Aplikasi: Takobo Mobile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video w-full rounded-lg overflow-hidden border">
            <Image
 src="/images/takobo.png"
              alt="Demo Aplikasi Takobo Mobile"
              width={1200}
              height={675}
              className="w-full h-full object-cover"
              data-ai-hint="disaster warning app"
            />
          </div>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            <p>Gambar di atas menampilkan halaman utama dari aplikasi Takobo Mobile.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
