import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function SeoDemoPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">Demo: The SEO - Optimasi YouTube</h1>
        <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
          Demo alat untuk analisis dan optimasi SEO video YouTube untuk meningkatkan peringkat.
        </p>
      </div>
      <Card className="w-full max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle>Live Preview: The SEO - YouTube Optimization</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video w-full rounded-lg overflow-hidden border">
            <iframe
              src="https://theseo.vercel.app/id"
              title="The SEO Demo"
              className="w-full h-full border-0"
            />
          </div>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            <p>
              Pratinjau interaktif dimuat di atas. Untuk pengalaman penuh,{" "}
              <Link href="https://theseo.vercel.app/id" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
                kunjungi situs live
              </Link>.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
