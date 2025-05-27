import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Logo from "@/components/Icons"

const menuLinks = [
  { label: "Бизнес закупка", href: "/business-procurement" },
  { label: "Нетуъркинг", href: "/networking" },
  { label: "Политика за поверителност", href: "/privacy-policy" },
  { label: "Политика за бисквитките", href: "/cookie-policy" },
]

export default function Footer() {
  return (
    <footer className="bg-brand-primary py-6 sm:py-8 lg:py-12 text-gray-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center mb-4 group">
              <Logo className="fill-gray-300" />
            </Link>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="font-semibold mb-4 text-sm sm:text-base">МЕНЮ</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brand-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="not-italic">
            <h3 className="font-semibold mb-4 text-sm sm:text-base">КОНТАКТИ</h3>
            <div className="text-xs sm:text-sm space-y-2 text-gray-400">
              <p>
                <a href="tel:+359878456939" className="hover:text-brand-accent transition-colors">
                  +359 878 456 939
                </a>
              </p>
              <p>
                <a href="mailto:contact@burgasbh.com" className="hover:text-brand-accent transition-colors">
                  contact@burgasbh.com
                </a>
              </p>
              <p>
                <a href="mailto:support@burgasbh.com" className="hover:text-brand-accent transition-colors">
                  support@burgasbh.com
                </a>
              </p>
            </div>
          </address>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-semibold mb-4 text-sm sm:text-base">ЗАПИШИ СЕ ЗА НАШИЯ ИМЕЙЛ БЮЛЕТИН</h3>
            <p className="text-xs sm:text-sm mb-4 text-gray-400">
              Получавай първи новости за предстоящи събития и обучения
            </p>
            <form className="flex flex-col sm:flex-row gap-2" aria-label="Newsletter signup">
              <Input
                type="email"
                placeholder="Имейл адрес"
                className="bg-primary-foreground text-foreground flex-1 text-sm border-0"
                required
                aria-label="Email address"
              />
              <Button
                type="submit"
                variant="secondary"
                className="whitespace-nowrap text-xs sm:text-sm bg-primary text-primary-foreground hover:bg-primary/90"
              >
                ЗАПИШИ МЕ
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-6 lg:mt-8 pt-6 lg:pt-8 text-center text-xs sm:text-sm">
          <p className="text-primary-foreground/80">
            &copy; 2024 Copyright Burgas Business Hub. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  )
}
