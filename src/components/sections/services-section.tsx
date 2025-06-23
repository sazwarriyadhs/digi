"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { services, packages } from "@/lib/data";

export function ServicesSection() {
  const { language, formatCurrency, t } = useAppContext();

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">{t('services.badge')}</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">{t('services.title')}</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {t('services.description')}
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl gap-4 mt-12">
          <Accordion type="single" collapsible className="w-full">
            {services.map((service, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="border-b">
                <AccordionTrigger className="text-lg hover:no-underline py-6">
                  <div className="flex items-center gap-4">
                    {service.icon}
                    <span className="text-left">{service[language].title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-6 pl-14">
                  <p className="text-muted-foreground mb-6">{service[language].description}</p>
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">{t('services.pricingDetails')}</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {service.prices.map((price, i) => (
                          <li key={i} className="flex justify-between gap-2">
                            <span>{price[language].item}</span>
                            <span className="font-medium text-foreground text-right">
                              {price.prefix && `${t(`services.prefixes.${price.prefix}`)} `}
                              {formatCurrency(price.idr)}
                              {price.suffix && ` / ${t(`services.suffixes.${price.suffix}`)}`}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {service.includes[language] && service.includes[language].length > 0 && (
                       <div>
                        <h4 className="font-semibold mb-2 text-primary">{t('services.includes')}</h4>
                        <ul className="space-y-2 text-sm">
                          {service.includes[language].map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-muted-foreground">
                              <Check className="w-4 h-4 text-primary" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-4xl font-headline">{t('services.packages.title')}</h3>
            <p className="max-w-2xl mx-auto mt-2 text-muted-foreground md:text-lg">{t('services.packages.description')}</p>
        </div>

        <div className="mx-auto grid sm:grid-cols-1 lg:grid-cols-2 gap-8 mt-12 max-w-4xl">
            {packages.map((pkg, index) => (
                <Card key={index} className={pkg.highlight ? "border-primary border-2 shadow-lg" : ""}>
                    <CardHeader>
                        {pkg.highlight && <Badge className="w-fit self-start bg-primary">{t('services.packages.popular')}</Badge>}
                        <CardTitle className="mt-2 text-2xl">{pkg.title}</CardTitle>
                        <CardDescription>
                            <span className="text-3xl font-bold text-foreground">{formatCurrency(pkg.priceIdr)}</span>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-2">
                        <ul className="space-y-3">
                           {pkg.features[language].map((feature, i) => (
                               <li key={i} className="flex items-center gap-3">
                                   <Check className="w-5 h-5 text-primary"/>
                                   <span className="text-muted-foreground">{feature}</span>
                               </li>
                           ))}
                        </ul>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
