
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { useAppContext } from "@/context/AppContext";
import { services as allServices } from "@/lib/data";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";

export function ProposalForm() {
  const { t, language } = useAppContext();
  const { toast } = useToast();
  const availableServices = allServices.map(s => s[language].title);
  const budgetRanges = t('proposal.form.budgets') || [];

  const formSchema = z.object({
    name: z.string().min(1, { message: t('proposal.validation.name') }),
    companyName: z.string().min(1, { message: t('proposal.validation.company') }),
    email: z.string().email({ message: t('proposal.validation.email') }),
    phone: z.string().min(1, { message: t('proposal.validation.phone') }),
    services: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: t('proposal.validation.services'),
    }),
    projectDescription: z.string().min(30, { message: t('proposal.validation.projectDescription') }),
    budget: z.string({ required_error: t('proposal.validation.budget') }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      companyName: "",
      email: "",
      phone: "",
      services: [],
      projectDescription: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: t('proposal.toast.title'),
      description: t('proposal.toast.description'),
    });
    form.reset();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('proposal.form.title')}</CardTitle>
        <CardDescription>{t('proposal.form.description')}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('proposal.form.name')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('proposal.form.namePlaceholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('proposal.form.company')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('proposal.form.companyPlaceholder')} {...field} />
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
                      <FormLabel>{t('proposal.form.email')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('proposal.form.emailPlaceholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('proposal.form.phone')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('proposal.form.phonePlaceholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
            </div>
            
            <FormField
              control={form.control}
              name="services"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">{t('proposal.form.services')}</FormLabel>
                    <FormDescription>{t('proposal.form.servicesDescription')}</FormDescription>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {availableServices.map((item) => (
                      <FormField
                        key={item}
                        control={form.control}
                        name="services"
                        render={({ field }) => {
                          return (
                            <FormItem key={item} className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...(field.value || []), item])
                                      : field.onChange(field.value?.filter((value) => value !== item));
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">{item}</FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="projectDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('proposal.form.projectDescription')}</FormLabel>
                  <FormControl>
                    <Textarea placeholder={t('proposal.form.projectDescriptionPlaceholder')} {...field} rows={6} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('proposal.form.budget')}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={t('proposal.form.budgetPlaceholder')} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {budgetRanges.map((range: string) => (
                            <SelectItem key={range} value={range}>{range}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

            <Button type="submit" className="w-full" size="lg">{t('proposal.form.submit')}</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

    