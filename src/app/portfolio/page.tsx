
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAppContext } from "@/context/AppContext";
import { portfolioItems } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Clock, User } from "lucide-react";

export default function PortfolioPage() {
  const { language, t } = useAppContext();

  return (
    <div className="bg-background">
        <div className="container mx-auto py-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">{t('portfolioPage.badge')}</div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">{t('portfolioPage.title')}</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {t('portfolioPage.description')}
                </p>
            </div>

            {/* Client Projects Section */}
            <div>
                <h2 className="text-3xl font-bold tracking-tighter text-center mb-8 font-headline">{t('portfolioPage.clientProjectsTitle')}</h2>
                <div className="mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2">
                    {portfolioItems.map((item, index) => (
                        <Card key={index} className="overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 flex flex-col bg-card">
                            <Image
                                src={item.imageUrl}
                                alt={item[language].project}
                                width={600}
                                height={400}
                                className="w-full h-48 object-cover"
                                data-ai-hint={item.aiHint}
                            />
                            <CardHeader>
                                <Badge className="w-fit mb-2">{item[language].client}</Badge>
                                <CardTitle as="h3">{item[language].project}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-sm text-muted-foreground mb-4">{item[language].details}</p>
                                <div className="text-sm text-muted-foreground space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        <span><strong>{t('portfolioPage.duration')}:</strong> {item.duration[language]}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <User className="w-4 h-4" />
                                        <span><strong>{t('portfolioPage.projectOfficer')}:</strong> {item.projectOfficer}</span>
                                    </div>
                                </div>
                            </CardContent>
                             <CardFooter>
                                <Button asChild variant="secondary" className="mt-auto w-full">
                                    <Link href={item.href}>
                                        {t('portfolioPage.viewDetails')}
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
}
