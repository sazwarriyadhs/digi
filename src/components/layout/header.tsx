
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '../logo';
import { useAppContext } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, DollarSign, ChevronDown, Languages } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from '../ui/separator';
import { cn } from '@/lib/utils';

function NavLinks({
  navLinks,
  isMobile = false,
  onLinkClick
}: {
  navLinks: any[];
  isMobile?: boolean;
  onLinkClick?: () => void;
}) {
  const commonLinkClass = "text-sm font-medium transition-colors";
  const mobileLinkClass = "py-2 px-4 block w-full text-left";
  const desktopLinkClass = "px-3 py-2 rounded-md hover:bg-primary/80 hover:text-primary-foreground";
  const linkClass = isMobile ? `${commonLinkClass} ${mobileLinkClass}` : `${commonLinkClass} ${desktopLinkClass}`;

  const renderLink = (link: any) => (
    <Link href={link.href} className={linkClass} onClick={onLinkClick}>
      {link.label}
    </Link>
  );

  const renderDropdown = (item: any) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={`${linkClass} flex items-center`}>
          {item.label} <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {item.children.map((child: any) => (
          <DropdownMenuItem key={child.label} asChild>
            <Link href={child.href} onClick={onLinkClick}>{child.label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const renderMobileAccordion = (item: any) => (
     <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={item.label} className="border-b-0">
          <AccordionTrigger className={`${linkClass} hover:no-underline`}>{item.label}</AccordionTrigger>
          <AccordionContent className="pl-8">
            {item.children.map((child: any, index: number) => (
              <Link key={index} href={child.href} className="block py-2 text-muted-foreground hover:text-foreground" onClick={onLinkClick}>
                {child.label}
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
  );


  return navLinks.map((item) => (
    <div key={item.label}>
      {item.children ? (
        isMobile ? renderMobileAccordion(item) : renderDropdown(item)
      ) : (
        renderLink(item)
      )}
    </div>
  ));
}


export function Header() {
  const { language, setLanguage, currency, setCurrency, t } = useAppContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const navLinks = t('navLinks') || [];

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        // Show/hide navbar
        if (currentScrollY > lastScrollY && currentScrollY > 140) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }

        // Add background on scroll
        if (currentScrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);


  return (
    <header className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 ease-in-out",
        isScrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md" : "bg-transparent",
        isHidden ? "-translate-y-full" : "translate-y-0"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex h-[140px] items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-6">
            <Logo />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          <NavLinks navLinks={navLinks} />
        </nav>

        <div className="flex items-center gap-2">
          {/* Language and Currency Switchers */}
          <div className="hidden md:flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Languages className="h-5 w-5" />
                  <span className="sr-only">Change language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('id')} disabled={language === 'id'}>
                  Bahasa Indonesia
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')} disabled={language === 'en'}>
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <DollarSign className="h-5 w-5" />
                  <span className="sr-only">Change currency</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setCurrency('IDR')} disabled={currency === 'IDR'}>
                  IDR
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCurrency('USD')} disabled={currency === 'USD'}>
                  USD
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-sm">
                <div className="flex justify-between items-center p-4 border-b">
                   <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                      <Logo />
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                        <X className="h-6 w-6" />
                    </Button>
                </div>
                <div className="py-4">
                  <NavLinks navLinks={navLinks} isMobile={true} onLinkClick={() => setIsMobileMenuOpen(false)} />
                  <Separator className="my-4" />
                   <div className="flex flex-col space-y-2 px-4">
                        <h3 className="font-medium">Pengaturan</h3>
                        <div className="flex items-center justify-between">
                            <span>Bahasa</span>
                            <div className="flex gap-1">
                                <Button variant={language === 'id' ? 'secondary' : 'ghost'} size="sm" onClick={() => setLanguage('id')}>ID</Button>
                                <Button variant={language === 'en' ? 'secondary' : 'ghost'} size="sm" onClick={() => setLanguage('en')}>EN</Button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <span>Mata Uang</span>
                             <div className="flex gap-1">
                                <Button variant={currency === 'IDR' ? 'secondary' : 'ghost'} size="sm" onClick={() => setCurrency('IDR')}>IDR</Button>
                                <Button variant={currency === 'USD' ? 'secondary' : 'ghost'} size="sm" onClick={() => setCurrency('USD')}>USD</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
