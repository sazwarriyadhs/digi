
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useToast } from '@/hooks/use-toast';
import { Loader } from 'lucide-react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from '@/lib/firebaseClient';

export default function AdminArtikel() {
  const [topic, setTopic] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push('/admin/login');
      }
      setAuthLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [router]);

  async function generateArtikel() {
    if (!topic.trim()) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Please enter a topic.',
      });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/genkit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || `API error: ${res.statusText}`);
      }

      setResult(data.result);
      toast({
        title: 'Content Generated!',
        description: 'The article content has been generated below.',
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      toast({
        variant: 'destructive',
        title: 'Error',
        description: `Failed to generate content: ${errorMessage}`,
      });
    }
    setLoading(false);
  }

  async function saveArtikel() {
    if (!topic || !result) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Title and content cannot be empty.',
      });
      return;
    }
    try {
      await addDoc(collection(db, 'artikel'), {
        title: topic,
        content: result,
        createdAt: Timestamp.now(),
      });
      toast({
        title: 'Success!',
        description: 'Artikel berhasil disimpan!',
      });
      setTopic('');
      setResult('');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      toast({
        variant: 'destructive',
        title: 'Error',
        description: `Failed to save article: ${errorMessage}`,
      });
    }
  }

  async function handleLogout() {
    try {
      await signOut(auth);
      router.push('/admin/login');
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Logout Failed',
        description: 'An error occurred while logging out.',
      });
    }
  }

  if (authLoading || !user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Admin Artikel Generator</CardTitle>
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Judul Artikel"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              disabled={loading}
            />
            <Button onClick={generateArtikel} disabled={loading} className="w-full">
              {loading ? 'Memproses...' : 'Generate Artikel'}
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
  );
}
