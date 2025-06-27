import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function AkademikDemoPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">Demo: Hotel Pelangi Website</h1>
        <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
          Ini adalah demonstrasi website untuk Hotel Pelangi, menampilkan kamar dan pemesanan online. Di bawah ini adalah pratinjau langsung dari situs tersebut.
        </p>
      </div>
      <Card className="w-full max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle>Live Preview: Hotel Pelangi</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video w-full rounded-lg overflow-hidden border">
            <iframe
              src="https://hotelpelangi.vercel.app/"
              title="Hotel Pelangi Demo"
              className="w-full h-full border-0"
            />
          </div>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            <p>
              Pratinjau interaktif dimuat di atas. Untuk pengalaman penuh,{" "}
              <Link href="https://hotelpelangi.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
                kunjungi situs live
              </Link>.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
