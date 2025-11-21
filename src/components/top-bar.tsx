"use client";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const navigationLinks = [
  { label: "ЗА НАС", href: "/about", showOnMobile: false },
  { label: "НОВИНИ", href: "#", showOnMobile: false },
  { label: "КОНТАКТИ", href: "#", showOnMobile: true },
];

export default function TopBar() {
  return (
    <div className="bg-brand-primary px-2 sm:px-4">
      <div className="container flex items-center justify-end text-sm">
        <nav aria-label="Secondary navigation">
          <ul className="flex items-center">
            {navigationLinks.map((link) => (
              <li
                key={link.href + link.label}
                className={!link.showOnMobile ? "hidden sm:inline" : ""}
              >
                <Button
                  asChild
                  variant="link"
                  size="sm"
                  className="text-primary-foreground"
                >
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className="flex items-center"
          role="list"
          aria-label="Social media links"
        >
          {socialLinks.map((social) => (
            <Button
              key={social.label}
              variant="link"
              asChild
              size="icon"
              className="text-primary-foreground"
            >
              <Link
                href={social.href}
                aria-label={social.label}
                className="underline"
              >
                <social.icon className="h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
