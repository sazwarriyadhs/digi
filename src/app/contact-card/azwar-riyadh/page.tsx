
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
import { Loader, Mail, Linkedin, Github, Instagram, Globe, Phone, Download, Building, Handshake, Bot } from "lucide-react";
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
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl w-full">
        {/* Contact Card Previews */}
        <div className="md:col-span-2">
            <h2 className="text-2xl font-bold tracking-tighter text-center mb-6 font-headline">Digital vCard Preview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Front Side */}
                <Card className="w-full max-w-sm mx-auto aspect-[9/16] bg-card text-card-foreground shadow-2xl relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 left-0 w-full h-1/3 bg-primary/10"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-primary/10"></div>
                    <div className="relative z-10 p-6 flex flex-col h-full">
                        <header className="flex justify-start mb-6">
                            <Image src="/images/logo.png" alt="Company Logo" width={100} height={50} className="h-12 w-auto" />
                        </header>
                        <main className="flex flex-col items-center text-center flex-grow justify-center">
                            <Avatar className="w-28 h-28 mb-4 border-4 border-background shadow-lg">
                                <AvatarImage src={member.imageUrl} alt={member.en.name} />
                                <AvatarFallback>{member.en.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <h2 className="text-2xl font-bold">{member.en.name}</h2>
                            <p className="text-primary font-medium">{member.en.role}</p>
                            <div className="border-t border-border w-full my-6"></div>
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
                        </main>
                        <footer className="text-center mt-6">
                            <div className="flex justify-center items-center gap-4">
                                <Image src="https://placehold.co/100x100.png" alt="QR Code for Company Profile" width={70} height={70} className="rounded-md" data-ai-hint="qr code" />
                                <div className="text-left">
                                    <p className="text-xs text-muted-foreground">Pindai untuk profil perusahaan.</p>
                                    <div className="flex justify-start gap-3 mt-2">
                                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" /></a>
                                        <a href={member.social.github} target="_blank" rel="noopener noreferrer"><Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" /></a>
                                        <a href={member.social.instagram} target="_blank" rel="noopener noreferrer"><Instagram className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" /></a>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </Card>

                {/* Back Side */}
                <Card className="w-full max-w-sm mx-auto aspect-[9/16] bg-card text-card-foreground shadow-2xl relative overflow-hidden flex flex-col justify-center items-center p-8 text-center">
                    <div className="absolute top-0 left-0 w-full h-full bg-primary/5"></div>
                    <div className="relative z-10 flex flex-col items-center gap-8">
                        <div>
                            <div className="p-3 bg-primary/10 rounded-full inline-block mb-3">
                                <Building className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold font-headline">Layanan Kami</h3>
                            <p className="text-sm text-muted-foreground mt-1">Pengembangan Web & Mobile, Cloud & DevOps, Keamanan Siber, Konsultasi AI.</p>
                        </div>
                        <div className="border-t border-border w-2/3 my-2"></div>
                        <div>
                             <div className="p-3 bg-primary/10 rounded-full inline-block mb-3">
                                <Handshake className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold font-headline">Info Kemitraan</h3>
                            <p className="text-sm text-muted-foreground mt-1">Kami terbuka untuk kemitraan strategis dan peluang investasi. Hubungi kami untuk diskusi lebih lanjut.</p>
                        </div>
                         <div className="border-t border-border w-2/3 my-2"></div>
                        <div>
                             <div className="p-3 bg-primary/10 rounded-full inline-block mb-3">
                                <Bot className="w-8 h-8 text-primary" />
                            </div>
                             <h3 className="text-lg font-bold font-headline">Butuh Bantuan Cepat?</h3>
                            <p className="text-sm text-muted-foreground mt-1">Gunakan Bantuan AI kami untuk jawaban instan tentang layanan dan perusahaan kami.</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>

        {/* Download Form */}
        <div className="flex flex-col justify-center">
            <Card>
                <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold tracking-tighter font-headline">Download vCard</CardTitle>
                <CardDescription>Masukkan email Anda di bawah untuk menerima tautan unduhan kartu nama digital (PDF).</CardDescription>
                </CardHeader>
                <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Alamat Email Anda</FormLabel>
                            <FormControl>
                            <Input 
                                placeholder="anda@contoh.com" 
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
                            <Loader className="mr-2 h-4 w-4 animate-spin" /> Mengirim...
                        </>
                        ) : (
                        "Kirim Tautan Unduhan"
                        )}
                    </Button>
                    </form>
                </Form>
                </CardContent>
                <CardFooter>
                    <p className="text-xs text-muted-foreground text-center w-full">Kami menghargai privasi Anda. Email Anda hanya akan digunakan untuk mengirim tautan unduhan.</p>
                </CardFooter>
            </Card>
        </div>
      </div>
    </div>
  );
}
