
"use client";

import { AppointmentForm } from "@/components/sections/appointment-form";
import { useAppContext } from "@/context/AppContext";

export default function AppointmentPage() {
  const { t } = useAppContext();

  return (
    <div className="bg-background">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">{t('appointment.badge')}</div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">{t('appointment.title')}</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {t('appointment.description')}
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
            <AppointmentForm />
        </div>
      </div>
    </div>
  );
}
