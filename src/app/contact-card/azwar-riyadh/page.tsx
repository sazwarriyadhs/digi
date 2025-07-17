
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
             <Card className="w-full max-w-sm aspect-[9/16] bg-white text-gray-800 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                {/* Abstract purple background */}
                <div className="absolute -top-1/4 -left-1/4 w-full h-1/2 bg-primary rounded-br-full" style={{ transform: 'rotate(-15deg)' }}></div>
                <div className="absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-between z-10">
                    {/* Header with Logo */}
                    <header className="flex justify-start">
                        <Image src="/images/logo.png" alt="Company Logo" width={80} height={40} className="h-10 w-auto" />
                    </header>

                    {/* Main Content */}
                    <main className="flex flex-col items-center text-center -mt-8">
                        <Avatar className="w-28 h-28 mb-4 border-4 border-white shadow-lg">
                            <AvatarImage src={member.imageUrl} alt={member.en.name} />
                            <AvatarFallback>{member.en.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <h2 className="text-2xl font-bold text-gray-900">{member.en.name}</h2>
                        <p className="text-primary font-medium">{member.en.role}</p>

                        <div className="border-t border-gray-200 w-full my-6"></div>

                        <div className="space-y-3 text-left w-full text-sm text-gray-600">
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
                    </main>
                    
                    {/* Footer with QR and Socials */}
                    <footer className="text-center">
                        <div className="flex justify-center items-center gap-4">
                            <Image src="https://placehold.co/100x100.png" alt="QR Code" width={70} height={70} className="rounded-md" data-ai-hint="qr code" />
                            <div className="text-left">
                                <p className="text-xs text-gray-500">Pindai untuk menyimpan kontak.</p>
                                <div className="flex justify-start gap-3 mt-2">
                                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="w-5 h-5 text-gray-500 hover:text-primary transition-colors" /></a>
                                    <a href={member.social.github} target="_blank" rel="noopener noreferrer"><Github className="w-5 h-5 text-gray-500 hover:text-primary transition-colors" /></a>
                                    <a href={member.social.instagram} target="_blank" rel="noopener noreferrer"><Instagram className="w-5 h-5 text-gray-500 hover:text-primary transition-colors" /></a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
                 {/* Bottom purple wave */}
                <div className="absolute -bottom-1/4 -right-1/4 w-full h-1/2 bg-primary/10 rounded-tl-full" style={{ transform: 'rotate(-15deg)' }}></div>
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
