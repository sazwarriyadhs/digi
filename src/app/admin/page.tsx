
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { handleGenerateArticle } from "../actions";
import { Loader } from "lucide-react";

export default function AdminPage() {
    const [topic, setTopic] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!topic.trim()) {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Please enter a topic.",
            });
            return;
        }

        setIsLoading(true);
        const result = await handleGenerateArticle(topic);
        setIsLoading(false);

        if (result.success) {
            toast({
                title: "Success!",
                description: result.message,
            });
            setTopic("");
        } else {
            toast({
                variant: "destructive",
                title: "Error",
                description: result.message,
            });
        }
    };

    return (
        <div className="container mx-auto py-12 px-4 md:px-6">
            <div className="max-w-2xl mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle>Generate AI Article</CardTitle>
                        <CardDescription>
                            Enter a topic, and the AI will generate a complete, bilingual article and save it to Firestore.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <Input
                                placeholder="Enter article topic (e.g., 'Digital Transformation Trends')"
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                                disabled={isLoading}
                            />
                            <Button type="submit" disabled={isLoading} className="w-full">
                                {isLoading ? (
                                    <>
                                        <Loader className="mr-2 h-4 w-4 animate-spin" />
                                        Generating...
                                    </>
                                ) : (
                                    "Generate and Save Article"
                                )}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
