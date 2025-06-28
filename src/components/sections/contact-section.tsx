
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";

export function ContactSection() {
  const { t } = useAppContext();
  const { toast } = useToast();

  const formSchema = z.object({
    name: z.string().min(2, { message: t('contact.validation.name') }),
    email: z.string().email({ message: t('contact.validation.email') }),
    message: z.string().min(10, { message: t('contact.validation.message') }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: t('contact.toast.title'),
      description: t('contact.toast.description'),
    });
    form.reset();
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">{t('contact.badge')}</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">{t('contact.title')}</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-lg">
              {t('contact.description')}
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-muted rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{t('contact.phoneTitle')}</h3>
                  <p className="text-muted-foreground">{t('contact.phoneText')}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-muted rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{t('contact.emailTitle')}</h3>
                  <p className="text-muted-foreground">{t('contact.emailText')}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-muted rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{t('contact.financeEmailTitle')}</h3>
                  <p className="text-muted-foreground">{t('contact.financeEmailText')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-muted rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{t('contact.addressTitle')}</h3>
                  <p className="text-muted-foreground">{t('contact.addressText')}</p>
                </div>
              </div>
            </div>
             <Card className="mt-8">
                <CardHeader>
                    <CardTitle>{t('contact.mapTitle')}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="aspect-video w-full rounded-lg overflow-hidden border">
                    <Image
                        src="/images/kantor.jpg"
                        alt={t('contact.mapAlt')}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                    </div>
                </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>{t('contact.form.title')}</CardTitle>
              <CardDescription>{t('contact.form.description')}</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.form.name')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('contact.form.namePlaceholder')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.form.email')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('contact.form.emailPlaceholder')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.form.message')}</FormLabel>
                        <FormControl>
                          <Textarea placeholder={t('contact.form.messagePlaceholder')} {...field} rows={5} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">{t('contact.form.submit')}</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
