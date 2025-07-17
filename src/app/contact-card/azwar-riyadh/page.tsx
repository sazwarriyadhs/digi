
"use client";

import { useState } from "react";
import { useForm, zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { handleContactCardRequest } from "@/app/actions";
import { Loader, Mail, Linkedin, Github, Instagram, Globe, Phone } from "lucide-react";
import { teamMembers } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const emailSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export default function AzwarRiyadhContactCardPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const member = teamMembers.find(m => m.id.name.includes("Azwar Riyadh"));

  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: "" },
  });

  async function onSubmit(values: z.infer<typeof emailSchema>) {
    setIsSubmitting(true);
    const result = await handleContactCardRequest(values.email);
    setIsSubmitting(false);

    if (result.success) {
      toast({
        title: "Email Sent!",
        description: result.message,
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.message,
      });
    }
  }

  if (!member) return null;

  return (
    <div className="bg-background min-h-screen py-12 px-4 md:px-6 flex items-center justify-center">
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
        {/* Contact Card Preview */}
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold tracking-tighter text-center mb-6 font-headline">Digital vCard Preview</h2>
            <Card className="w-full max-w-sm aspect-[9/16] flex flex-col items-center justify-between p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm"></div>
                <div className="relative z-10 flex flex-col items-center text-center w-full">
                    <Avatar className="w-28 h-28 mb-4 border-4 border-primary">
                        <AvatarImage src={member.imageUrl} alt={member.en.name} />
                        <AvatarFallback>{member.en.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-2xl font-bold">{member.en.name}</CardTitle>
                    <CardDescription className="text-primary font-medium text-lg mt-1">{member.en.role}</CardDescription>
                    
                    <div className="border-t border-primary/30 w-full my-4"></div>

                    <div className="space-y-3 text-left w-full text-sm">
                        <div className="flex items-center gap-3">
                            <Phone className="w-4 h-4 text-primary" />
                            <span>{member.social.phone}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-primary" />
                            <span>{member.social.email}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Globe className="w-4 h-4 text-primary" />
                            <span>digimediakomunika.cloud</span>
                        </div>
                    </div>
                </div>
                <div className="relative z-10 text-center w-full mt-4">
                   <div className="border-t border-primary/30 w-full mb-4"></div>
                    <p className="text-xs text-white/70">Tersedia untuk diskusi layanan & peluang kerja sama strategis.</p>
                     <div className="flex justify-center gap-5 mt-4">
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="w-5 h-5 hover:text-primary transition-colors" /></a>
                        <a href={member.social.github} target="_blank" rel="noopener noreferrer"><Github className="w-5 h-5 hover:text-primary transition-colors" /></a>
                        <a href={member.social.instagram} target="_blank" rel="noopener noreferrer"><Instagram className="w-5 h-5 hover:text-primary transition-colors" /></a>
                    </div>
                </div>
            </Card>
        </div>

        {/* Download Form */}
        <div className="flex flex-col justify-center">
            <Card>
                <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold tracking-tighter font-headline">Download vCard</CardTitle>
                <CardDescription>Enter your email below to receive a link to download the digital contact card (PDF).</CardDescription>
                </CardHeader>
                <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Your Email Address</FormLabel>
                            <FormControl>
                            <Input 
                                placeholder="you@example.com" 
                                {...field} 
                                disabled={isSubmitting} 
                                type="email"
                            />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                        <>
                            <Loader className="mr-2 h-4 w-4 animate-spin" /> Sending...
                        </>
                        ) : (
                        "Send Download Link"
                        )}
                    </Button>
                    </form>
                </Form>
                </CardContent>
                <CardFooter>
                    <p className="text-xs text-muted-foreground text-center w-full">We respect your privacy. Your email will only be used to send the download link.</p>
                </CardFooter>
            </Card>
        </div>
      </div>
    </div>
  );
}
