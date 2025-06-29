
"use client";

import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';
import { Logo } from '../logo';

export function Footer() {
  const { t } = useAppContext();
  
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Logo />
        </div>
        <p className="text-sm text-muted-foreground text-center md:text-left">
 Azwar Riyadh © 2024 PT Digi Media Komunika. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
            {t('footer.privacy')}
          </Link>
          <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
            {t('footer.terms')}
          </Link>
        </div>
      </div>
    </footer>
  );
}
