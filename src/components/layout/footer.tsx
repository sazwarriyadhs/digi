
"use client";

import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';
import { Logo } from '../logo';

export function Footer() {
  const { t } = useAppContext();
  
  return (
    <footer className="bg-muted py-8 text-sm text-muted-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
                <Logo />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 text-center">
                 <p>&copy; {new Date().getFullYear()} PT Digi Media Komunika. All rights reserved.</p>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
                <Link href="/privacy" className="hover:text-foreground">
                    {t('footer.privacy')}
                </Link>
                <Link href="/terms" className="hover:text-foreground">
                    {t('footer.terms')}
                </Link>
            </div>
        </div>
        <div className="mt-4 pt-4 border-t border-border/50 text-center text-xs">
            <p>
                Supported by <a href="https://aws.amazon.com/" target="_blank" rel="noopener nofollow" className="underline hover:text-foreground">AWS</a> and <a href="https://www.cloudflare.com/" target="_blank" rel="noopener nofollow" className="underline hover:text-foreground">Cloudflare</a>.
            </p>
        </div>
      </div>
    </footer>
  );
}
