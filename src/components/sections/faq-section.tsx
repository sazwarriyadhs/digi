"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { handleFaq } from "@/app/actions";
import { Bot, Loader, User } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { useAppContext } from "@/context/AppContext";

export function FaqSection() {
  const { t, language } = useAppContext();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    setAnswer("");
    setError(null);

    const result = await handleFaq(question, language);

    if (result.error) {
      setError(result.answer);
    } else {
      setAnswer(result.answer);
    }

    setIsLoading(false);
  };

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">{t('faq.badge')}</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">{t('faq.title')}</h2>
          <p className="text-muted-foreground md:text-xl/relaxed">
            {t('faq.description')}
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>{t('faq.cardTitle')}</CardTitle>
            <CardDescription>{t('faq.cardDescription')}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Textarea
                placeholder={t('faq.placeholder')}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                disabled={isLoading}
                rows={3}
              />
              <Button type="submit" disabled={isLoading || !question.trim()} className="w-full bg-accent hover:bg-accent/90">
                {isLoading ? <><Loader className="mr-2 h-4 w-4 animate-spin" /> {t('faq.loading')}</> : t('faq.submit')}
              </Button>
            </form>
            {error && (
              <Alert variant="destructive" className="mt-4">
                <AlertTitle>{t('faq.errorTitle')}</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {isLoading && (
              <div className="mt-6 flex items-center space-x-4">
                <div className="p-2 bg-muted rounded-full">
                  <Loader className="w-6 h-6 animate-spin text-primary"/>
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground">{t('faq.thinking')}</p>
                </div>
              </div>
            )}
            {answer && !isLoading && (
              <div className="mt-6 space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <User className="w-6 h-6 text-primary"/>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg max-w-[85%]">
                    <p className="font-semibold text-primary">{t('faq.you')}</p>
                    <p className="text-sm text-primary/80">{question}</p>
                  </div>
                </div>
                 <div className="flex items-start space-x-4">
                  <div className="p-2 bg-accent/10 rounded-full">
                    <Bot className="w-6 h-6 text-accent"/>
                  </div>
                  <div className="bg-accent/10 p-3 rounded-lg max-w-[85%]">
                     <p className="font-semibold text-accent">{t('faq.aiAssistant')}</p>
                    <p className="text-sm text-accent/90">{answer}</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
