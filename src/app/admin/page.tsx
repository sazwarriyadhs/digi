'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { collection, addDoc, Timestamp } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { useToast } from "@/hooks/use-toast"

export default function AdminArtikel() {
  const [topic, setTopic] = useState("")
  const [result, setResult] = useState("")
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
      setResult(data.result)
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
    if (!topic || !result) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Title and content cannot be empty.",
      })
      return
    }
    try {
      await addDoc(collection(db, "artikel"), {
        title: topic,
        content: result,
        createdAt: Timestamp.now(),
      })
      toast({
        title: "Success!",
        description: "Artikel berhasil disimpan!",
      })
      setTopic("")
      setResult("")
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
                </CardHeader>
                <CardContent className="space-y-4">
                <Input
                    placeholder="Judul Artikel"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    disabled={loading}
                />
                <Button onClick={generateArtikel} disabled={loading} className="w-full">
                    {loading ? "Memproses..." : "Generate Artikel"}
                </Button>
                {result && (
                    <div className="space-y-4 pt-4">
                    <Textarea
                        className="min-h-[300px]"
                        value={result}
                        onChange={(e) => setResult(e.target.value)}
                    />
                    <Button variant="secondary" onClick={saveArtikel} className="w-full">
                        Simpan ke Firestore
                    </Button>
                    </div>
                )}
                </CardContent>
            </Card>
        </div>
    </div>
  )
}
