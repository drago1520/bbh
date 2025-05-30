import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import { cn } from "@/lib/utils/index"
import { ThemeSelector } from "@/components/ThemeProvider/Theme/ThemeSelector"
import Link from "next/link"

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

const navigationLinks = [
  { label: "ЗА НАС", href: "/about", showOnMobile: false },
  { label: "НОВИНИ", href: "/news", showOnMobile: false },
  { label: "КОНТАКТИ", href: "/contact", showOnMobile: true },
]

export default function TopBar() {
  return (
    <div className="bg-brand-primary text-primary-foreground py-2 px-4">
      <div className="container flex justify-end gap-8 items-center text-sm">
        <nav aria-label="Secondary navigation">
          <ul className="flex items-center space-x-3 sm:space-x-6">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn("hover:text-brand-accent transition-colors", !link.showOnMobile && "hidden sm:inline")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-2 sm:space-x-3" role="list" aria-label="Social media links">
          {socialLinks.map((social) => {
            const IconComponent = social.icon
            return (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="hover:text-brand-accent transition-colors"
              >
                <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
            )
          })}
          <Link href="#" aria-label="Additional social platform" className="hover:text-brand-accent transition-colors">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-primary-foreground rounded-sm"></div>
          </Link>
        </div>
      </div>
    </div>
  )
}
