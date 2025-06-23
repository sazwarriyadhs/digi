"use client";

import Link from 'next/link';
import { Mountain } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';

export function Footer() {
  const { t } = useAppContext();
  
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="font-semibold">{t('companyName')}</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {t('companyName')}. {t('footer.rights')}
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            {t('footer.privacy')}
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            {t('footer.terms')}
          </Link>
        </div>
      </div>
    </footer>
  );
}
