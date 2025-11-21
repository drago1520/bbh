"use client";
import { Menu, X } from "lucide-react";
import Logo from "./Icons";
import { Button } from "./ui/button";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
  Sheet,
} from "./ui/sheet";
import Link from "next/link";
import { useState } from "react";
import { NavProps } from "./header";
import { cn } from "@/lib/utils";
import { ThemeSelector } from "./ThemeProvider/Theme/ThemeSelector";

export default function MobileNavMenu({
  navigationItems,
}: {
  navigationItems: NavProps[];
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="xl:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="size-6" />
          ) : (
            <Menu className="!size-6" />
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="rounded-l-md">
        <SheetHeader>
          <SheetTitle>
            <Link href="/" className="group flex items-center">
              <Logo />
            </Link>
          </SheetTitle>
          <SheetDescription>Бизнес общонстта на Бургас</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4">
          {navigationItems.map(({ title, description, href, className }) => (
            <nav key={title}>
              <Button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full justify-start"
                asChild
                variant="link"
              >
                <Link href={href}>{title}</Link>
              </Button>
              <p
                className={cn(
                  "text-muted-foreground mx-4 border-l px-4",
                  className,
                )}
              >
                {description}
              </p>
            </nav>
          ))}
        </div>
        {process.env.NODE_ENV === "development" && <ThemeSelector />}
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Затвори</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
