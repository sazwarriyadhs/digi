'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { collection, addDoc, Timestamp } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { useToast } from "@/hooks/use-toast"
import { Loader } from "lucide-react"

export default function AdminArtikel() {
  const [topic, setTopic] = useState("")
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  async function generateArtikel() {
    if (!topic.trim()) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a topic.",
      })
      return
    }
    setLoading(true)
    try {
      const res = await fetch("/api/genkit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic }),
      })
      if (!res.ok) {
        throw new Error(`API error: ${res.statusText}`)
      }
      const data = await res.json()
      // Simple parsing of title and content
      const lines = (data.result || "").split('\n')
      const generatedTitle = lines.length > 0 ? lines[0].replace('**', '').replace('**', '').trim() : topic;
      const generatedContent = lines.slice(1).join('\n').trim();

      setTitle(generatedTitle)
      setContent(generatedContent)
      toast({
        title: "Content Generated!",
        description: "The article content has been generated below.",
      })
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred"
      toast({
        variant: "destructive",
        title: "Error",
        description: `Failed to generate content: ${errorMessage}`,
      })
    }
    setLoading(false)
  }

  async function saveArtikel() {
    if (!title || !content) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Title and content cannot be empty.",
      })
      return
    }

    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    const summary = content.slice(0, 150) + '...';

    try {
      await addDoc(collection(db, "articles"), {
        title,
        slug,
        summary,
        content,
        image: `https://source.unsplash.com/800x400/?${encodeURIComponent(topic)}`,
        createdAt: Timestamp.now(),
      })
      toast({
        title: "Success!",
        description: "Article has been saved successfully!",
      })
      setTopic("")
      setTitle("")
      setContent("")
    } catch (error) {
       const errorMessage = error instanceof Error ? error.message : "An unknown error occurred"
       toast({
        variant: "destructive",
        title: "Error",
        description: `Failed to save article: ${errorMessage}`,
      })
    }
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Admin Artikel Generator</CardTitle>
            <CardDescription>Generate and save new articles to your blog.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Masukkan Topik Artikel"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              disabled={loading}
            />
             <Button onClick={generateArtikel} disabled={loading} className="w-full">
              {loading ? <><Loader className="mr-2 h-4 w-4 animate-spin" /> Menghasilkan...</> : 'Generate Artikel'}
            </Button>
            <hr />
            <Input
              placeholder="Judul Artikel akan muncul di sini..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
              placeholder="Konten Artikel akan muncul di sini..."
              rows={15}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </CardContent>
          <CardFooter>
            <Button onClick={saveArtikel} disabled={!title || !content} className="w-full">Simpan ke Firestore</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
