"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Mountain } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export function Header() {
  const { language, setLanguage, currency, setCurrency, t } = useAppContext();
  const navLinks = t("navLinks");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">{t('companyName')}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4 text-sm">
          {navLinks.map((link: { href: string; label: string }) => (
            <Link key={link.href} href={link.href} className="text-foreground/60 transition-colors hover:text-foreground/80">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <div className="hidden md:flex items-center gap-2">
            <Select value={language} onValueChange={(value) => setLanguage(value as 'id' | 'en')}>
              <SelectTrigger className="w-[70px] h-9">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="id">ID</SelectItem>
                <SelectItem value="en">EN</SelectItem>
              </SelectContent>
            </Select>
            <Select value={currency} onValueChange={(value) => setCurrency(value as 'id' | 'USD')}>
              <SelectTrigger className="w-[80px] h-9">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="IDR">IDR</SelectItem>
                <SelectItem value="USD">USD</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <Link href="/" className="mr-6 flex items-center gap-2 mb-6">
                  <Mountain className="h-6 w-6 text-primary" />
                  <span className="font-bold">{t('companyName')}</span>
                </Link>
                <nav className="flex flex-col gap-4 mb-6">
                  {navLinks.map((link: { href: string; label: string }) => (
                    <Link key={link.href} href={link.href} className="text-foreground/80 hover:text-foreground">
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col gap-4">
                  <Select value={language} onValueChange={(value) => setLanguage(value as 'id' | 'en')}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="id">Bahasa Indonesia</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={currency} onValueChange={(value) => setCurrency(value as 'id' | 'USD')}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="IDR">IDR</SelectItem>
                      <SelectItem value="USD">USD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
