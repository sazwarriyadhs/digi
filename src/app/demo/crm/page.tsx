import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function CrmDemoPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">Demo: Sistem CRM Bank Nusantara</h1>
        <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
          Ini adalah demonstrasi aplikasi CRM untuk manajemen pelanggan, live chat, dan analitik. Gambar di bawah ini mensimulasikan antarmuka dashboard utama.
        </p>
      </div>
      <Card className="w-full max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle>Dashboard CRM</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video w-full rounded-lg overflow-hidden border">
            <Image
              src="https://storage.googleapis.com/project-os-prod/images/c2351239-2445-42b7-a3f1-7f41555e56d8.png"
              alt="Demo CRM"
              width={1200}
              height={675}
              className="w-full h-full object-cover"
              data-ai-hint="crm dashboard analytics"
            />
          </div>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            <p>Fungsionalitas interaktif (misalnya, melihat data pelanggan, memulai obrolan) akan diimplementasikan di sini.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
