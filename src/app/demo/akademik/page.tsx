import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function AkademikDemoPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">Demo: Dashboard Akademik Mahasiswa</h1>
        <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
          Ini adalah demonstrasi platform akademik online dengan fitur untuk rencana studi, jadwal, dan nilai. Gambar di bawah ini menunjukkan halaman utama mahasiswa.
        </p>
      </div>
      <Card className="w-full max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle>Portal Mahasiswa</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video w-full rounded-lg overflow-hidden border">
            <Image
              src="https://placehold.co/1200x675.png"
              alt="Demo Akademik"
              width={1200}
              height={675}
              className="w-full h-full object-cover"
              data-ai-hint="student dashboard portal"
            />
          </div>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            <p>Fungsionalitas interaktif (misalnya, memilih mata kuliah, melihat transkrip) akan diimplementasikan di sini.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
