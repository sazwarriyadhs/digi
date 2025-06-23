import Link from 'next/link';
import { Mountain } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="font-semibold">Digi Media Komunika</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Digi Media Komunika. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
