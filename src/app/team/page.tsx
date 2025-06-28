
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useAppContext } from "@/context/AppContext";
import { teamMembers } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Github, Instagram } from "lucide-react";
import Link from "next/link";

export default function TeamPage() {
  const { language, t } = useAppContext();

  return (
    <div className="bg-background">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">{t('team.badge')}</div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">{t('team.title')}</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {t('team.description')}
          </p>
        </div>
        <div className="mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member: any, index) => (
            <Card key={index} className="overflow-hidden text-center flex flex-col items-center pt-6 transform transition-transform duration-300 hover:-translate-y-2">
              <Avatar className="w-32 h-32 mb-4 border-4 border-primary/20">
                <AvatarImage src={member.imageUrl} alt={member[language].name} data-ai-hint={member.aiHint} />
                <AvatarFallback>{member[language].name.charAt(0)}</AvatarFallback>
              </Avatar>
              <CardHeader>
                <CardTitle>{member[language].name}</CardTitle>
                <CardDescription>{member[language].role}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <p className="text-sm text-muted-foreground mb-4">{member[language].bio}</p>
                <div className="flex justify-center gap-4 mt-auto">
                    {member.social.linkedin && (
                        <Button asChild variant="ghost" size="icon">
                            <Link href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
                            </Link>
                        </Button>
                    )}
                    {member.social.twitter && (
                        <Button asChild variant="ghost" size="icon">
                            <Link href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
                            </Link>
                        </Button>
                    )}
                    {member.social.github && (
                        <Button asChild variant="ghost" size="icon">
                            <Link href={member.social.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
                            </Link>
                        </Button>
                    )}
                    {member.social.instagram && (
                        <Button asChild variant="ghost" size="icon">
                            <Link href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                                <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary" />
                            </Link>
                        </Button>
                    )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
