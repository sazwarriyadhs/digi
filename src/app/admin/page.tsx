"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { handleSaveArticle, handlePreviewArticle } from "../actions";
import { Loader } from "lucide-react";
import type { ArticleData } from "@/ai/flows/generate-article";

export default function AdminPage() {
    const [topic, setTopic] = useState("");
    const [style, setStyle] = useState("Profesional");
    const [isGenerating, setIsGenerating] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [generatedArticle, setGeneratedArticle] = useState<ArticleData | null>(null);

    const { toast } = useToast();

    const handleGenerateClick = async () => {
        if (!topic.trim()) {
            toast({ variant: "destructive", title: "Error", description: "Please enter a topic." });
            return;
        }

        setIsGenerating(true);
        setGeneratedArticle(null);
        
        try {
            const result = await handlePreviewArticle({ topic, style });

            if (result.success && result.article) {
                setGeneratedArticle(result.article);
                toast({ title: "Success!", description: "Article preview has been generated." });
            } else {
                toast({ variant: "destructive", title: "Error", description: result.message });
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
            toast({ variant: "destructive", title: "Error", description: errorMessage });
        } finally {
            setIsGenerating(false);
        }
    };

    const handleSaveClick = async () => {
        if (!generatedArticle) return;

        setIsSaving(true);
        const result = await handleSaveArticle(generatedArticle);
        setIsSaving(false);

        if (result.success) {
            toast({ title: "Success!", description: result.message });
            setTopic("");
            setStyle("Profesional");
            setGeneratedArticle(null);
        } else {
            toast({ variant: "destructive", title: "Error", description: result.message });
        }
    };
    
    const handleArticleChange = (field: keyof ArticleData, value: string) => {
        if (generatedArticle) {
            setGeneratedArticle({ ...generatedArticle, [field]: value });
        }
    };

    return (
        <div className="container mx-auto py-12 px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle>AI Article Generator</CardTitle>
                        <CardDescription>
                            Enter a topic and select a writing style to generate a draft article with AI. You can review and edit it before saving.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="topic">Topic</Label>
                            <Input
                                id="topic"
                                placeholder="e.g., 'Digital Transformation Trends'"
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                                disabled={isGenerating || isSaving}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="style">Writing Style</Label>
                             <Select value={style} onValueChange={setStyle} disabled={isGenerating || isSaving}>
                                <SelectTrigger id="style">
                                    <SelectValue placeholder="Select a style" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Profesional">Profesional</SelectItem>
                                    <SelectItem value="Santai">Santai</SelectItem>
                                    <SelectItem value="Persuasif">Persuasif</SelectItem>
                                    <SelectItem value="Gaya Berita">Gaya Berita</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                    <CardFooter>
                         <Button onClick={handleGenerateClick} disabled={isGenerating || isSaving || !topic} className="w-full">
                            {isGenerating ? <><Loader className="mr-2 h-4 w-4 animate-spin" /> Generating...</> : "Generate Article"}
                        </Button>
                    </CardFooter>
                </Card>

                {generatedArticle && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Article Preview & Editor</CardTitle>
                            <CardDescription>Review and edit the generated content below before saving.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                             <div className="space-y-2">
                                <Label htmlFor="edit-title">Title</Label>
                                <Input id="edit-title" value={generatedArticle.title} onChange={e => handleArticleChange('title', e.target.value)} disabled={isSaving} />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="edit-summary">Summary</Label>
                                <Textarea id="edit-summary" value={generatedArticle.summary} onChange={e => handleArticleChange('summary', e.target.value)} disabled={isSaving} rows={3} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="edit-content">Content (HTML)</Label>
                                <Textarea id="edit-content" value={generatedArticle.content} onChange={e => handleArticleChange('content', e.target.value)} disabled={isSaving} rows={15} />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="edit-image">Image URL</Label>
                                <Input id="edit-image" value={generatedArticle.image} onChange={e => handleArticleChange('image', e.target.value)} disabled={isSaving} />
                            </div>
                        </CardContent>
                        <CardFooter>
                             <Button onClick={handleSaveClick} disabled={isSaving} className="w-full">
                                {isSaving ? <><Loader className="mr-2 h-4 w-4 animate-spin" /> Saving...</> : "Save to Firestore"}
                            </Button>
                        </CardFooter>
                    </Card>
                )}
            </div>
        </div>
    );
}