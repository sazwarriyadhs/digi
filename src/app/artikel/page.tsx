
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Loader, Sparkles, FileText } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useAppContext } from "@/context/AppContext";

export default function ArticleGeneratorPage() {
  const { t } = useAppContext();
  const [topic, setTopic] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!topic.trim()) {
      setError("Topik tidak boleh kosong.");
      return;
    }

    setIsLoading(true);
    setGeneratedContent("");
    setError(null);

    try {
      const response = await fetch('/api/generate-article', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Gagal menghasilkan artikel.");
      }

      const data = await response.json();
      setGeneratedContent(data.content);

    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-background">
      <div className="container mx-auto py-12 px-4 md:px-6 max-w-4xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Generator Konten AI</div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Buat Artikel Secara Otomatis</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Masukkan topik atau ide, dan biarkan AI kami menulis draf artikel yang menarik untuk Anda.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Generator Artikel</CardTitle>
            <CardDescription>Isi topik di bawah ini untuk memulai.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="topic" className="font-semibold">Topik Artikel</Label>
                <Textarea
                  id="topic"
                  placeholder="Contoh: 'Manfaat AI dalam Pemasaran Digital' atau '5 Tren Teknologi di Tahun 2024'"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  disabled={isLoading}
                  rows={3}
                  className="mt-2"
                />
              </div>
              <Button type="submit" disabled={isLoading || !topic.trim()} className="w-full">
                {isLoading ? (
                  <>
                    <Loader className="mr-2 h-4 w-4 animate-spin" /> Menghasilkan...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" /> Buat Artikel
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {error && (
          <Alert variant="destructive" className="mb-8">
            <AlertTitle>Terjadi Kesalahan</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {generatedContent && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-6 w-6 text-primary" />
                Hasil Artikel
              </CardTitle>
              <CardDescription>Berikut adalah draf yang dihasilkan oleh AI. Anda dapat menyalin dan mengeditnya sesuai kebutuhan.</CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className="prose dark:prose-invert max-w-none text-foreground"
                dangerouslySetInnerHTML={{ __html: generatedContent.replace(/\\n/g, '<br />') }}
              />
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
