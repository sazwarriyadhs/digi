"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Logo } from "../logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type NavLink = {
  href?: string;
  label: string;
  isExternal?: boolean;
  children?: NavLink[];
};

export function Header() {
  const { language, setLanguage, currency, setCurrency, t } = useAppContext();
  const navLinks: NavLink[] = t("navLinks") || [];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {navLinks.map((link, index) =>
            link.children ? (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-foreground/60 transition-colors hover:text-foreground/80 flex items-center gap-1 px-3 py-2"
                  >
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {link.children.map((childLink, childIndex) => (
                    <DropdownMenuItem key={childIndex} asChild>
                      <Link
                        href={childLink.href!}
                        target={childLink.isExternal ? "_blank" : undefined}
                        rel={
                          childLink.isExternal ? "noopener noreferrer" : undefined
                        }
                      >
                        {childLink.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                className="text-foreground/60 transition-colors hover:text-foreground/80 px-3 py-2"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <div className="hidden md:flex items-center gap-2">
            <Select
              value={language}
              onValueChange={(value) => setLanguage(value as "id" | "en")}
            >
              <SelectTrigger className="w-[70px] h-9">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="id">ID</SelectItem>
                <SelectItem value="en">EN</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={currency}
              onValueChange={(value) => setCurrency(value as "IDR" | "USD")}
            >
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
                <SheetHeader>
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                </SheetHeader>
                <Link href="/" className="mr-6 flex items-center mb-6">
                  <Logo />
                </Link>
                <nav className="flex flex-col gap-1 mb-6">
                  {navLinks.flatMap((link) =>
                    link.children
                      ? [
                          <h4
                            key={link.label}
                            className="font-semibold text-muted-foreground pt-4 pb-1 px-2 text-sm"
                          >
                            {link.label}
                          </h4>,
                          ...link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href!}
                              target={child.isExternal ? "_blank" : undefined}
                              rel={
                                child.isExternal
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className="text-foreground/80 hover:text-foreground p-2 rounded-md hover:bg-muted"
                            >
                              {child.label}
                            </Link>
                          )),
                        ]
                      : [
                          <Link
                            key={link.href}
                            href={link.href!}
                            target={link.isExternal ? "_blank" : undefined}
                            rel={
                              link.isExternal ? "noopener noreferrer" : undefined
                            }
                            className="font-semibold text-foreground/80 hover:text-foreground p-2 rounded-md hover:bg-muted text-base"
                          >
                            {link.label}
                          </Link>,
                        ]
                  )}
                </nav>
                <div className="flex flex-col gap-4">
                  <Select
                    value={language}
                    onValueChange={(value) => setLanguage(value as "id" | "en")}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="id">Bahasa Indonesia</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select
                    value={currency}
                    onValueChange={(value) => setCurrency(value as "IDR" | "USD")}
                  >
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
