import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function MapPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">Demo: Peta Cimahpar Stoneyard</h1>
        <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
          Ini adalah demonstrasi bagaimana fitur peta dapat diintegrasikan. Gambar di bawah ini mensimulasikan peta interaktif dari OpenStreetMap yang menunjukkan lokasi Cimahpar Stoneyard.
        </p>
      </div>
      <Card className="w-full max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle>Lokasi: Cimahpar Stoneyard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video w-full rounded-lg overflow-hidden border">
            <Image
              src="https://storage.googleapis.com/project-os-prod/images/9c339f47-9759-402a-9f50-484d0800e882.png"
              alt="Peta OpenStreetMap dari lokasi Cimahpar Stoneyard di Bogor."
              width={1200}
              height={675}
              className="w-full h-full object-cover"
              data-ai-hint="city map"
            />
          </div>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            <p>Fungsionalitas peta interaktif (misalnya, menggunakan OpenStreetMap dengan React-Leaflet) akan diimplementasikan di sini.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
