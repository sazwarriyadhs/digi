import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function MapPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">Demo: Cimahpar Stoneyard Map</h1>
        <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed">
          This is a demonstration of how a map feature could be integrated. The image below simulates an interactive map from OpenStreetMap showing the Cimahpar Stoneyard location.
        </p>
      </div>
      <Card className="w-full max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle>Location: Cimahpar Stoneyard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video w-full rounded-lg overflow-hidden border">
            <Image
              src="https://storage.googleapis.com/project-os-prod/images/9c339f47-9759-402a-9f50-484d0800e882.png"
              alt="Map of Cimahpar Stoneyard"
              width={1200}
              height={675}
              className="w-full h-full object-cover"
              data-ai-hint="city map"
            />
          </div>
          <div className="mt-4 text-center text-sm text-muted-foreground">
            <p>Interactive map functionality (e.g., using OpenStreetMap with React-Leaflet) would be implemented here.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
