import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Icons';
import { Label } from '@/components/ui/label';

const menuLinks = [
  { label: 'Бизнес закупка', href: '/business-procurement' },
  { label: 'Нетуъркинг', href: '/networking' },
  { label: 'Политика за поверителност', href: '/privacy-policy' },
  { label: 'Политика за бисквитките', href: '/cookie-policy' },
];

export default function Footer() {
  return (
    <footer className="dark:bg-brand-primary bg-brand-accent/80 text-foreground/80 py-6 sm:py-8 lg:py-12">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8 xl:grid-cols-4">
          <div className="sm:col-span-2 xl:col-span-1">
            <Link href="/" className="group mb-4 flex items-center">
              <Logo className="fill-foreground/80" />
            </Link>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="mb-4 text-sm font-semibold sm:text-base">МЕНЮ</h3>
            <ul className="text-foreground/60 space-y-2 text-xs sm:text-sm">
              {menuLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="dark:hover:text-brand-accent hover:text-brand-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="not-italic">
            <h3 className="mb-4 text-sm font-semibold sm:text-base">КОНТАКТИ</h3>
            <div className="text-foreground/60 space-y-2 text-xs sm:text-sm">
              <p>
                <Link href="tel:+359878456939" className="dark:hover:text-brand-accent hover:text-brand-primary transition-colors">
                  +359 878 456 939
                </Link>
              </p>
              <p>
                <Link href="mailto:contact@burgasbh.com" className="dark:hover:text-brand-accent hover:text-brand-primary transition-colors">
                  contact@burgasbh.com
                </Link>
              </p>
              <p>
                <Link href="mailto:support@burgasbh.com" className="dark:hover:text-brand-accent hover:text-brand-primary transition-colors">
                  support@burgasbh.com
                </Link>
              </p>
            </div>
          </address>

          <div className="sm:col-span-2 xl:col-span-1">
            <h3 className="mb-1 text-sm font-semibold sm:text-base">ЗАПИШИ СЕ ЗА НАШИЯ ИМЕЙЛ БЮЛЕТИН</h3>
            <p className="text-foreground/60 mb-4 text-xs sm:text-sm">Получавай първи новости за предстоящи събития и обучения</p>
            <form aria-label="Newsletter signup">
              <Label className="text-foreground/80">Имейл</Label>
              <div className="mt-1 flex flex-col gap-2 sm:flex-row">
                <Input type="email" placeholder="nanov@corp.bg" className="bg-brand-accent/12 placeholder:text-foreground/60 text-sm" required aria-label="Email address" />
                <Button type="submit" variant="secondary">
                  ЗАПИШИ МЕ
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-primary-foreground/20 mt-6 border-t pt-6 text-center text-xs sm:text-sm lg:mt-8 lg:pt-8">
          <p className="text-foreground/60">&copy; 2024 Copyright Burgas Business Hub. Всички права запазени.</p>
        </div>
      </div>
    </footer>
  );
}
