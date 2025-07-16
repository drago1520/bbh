import Link from 'next/link';

import { ThemeSelector } from '@/components/ThemeProvider/Theme/ThemeSelector';
import Logo from '@/components/Icons';
// import NoWebpageYetAlertDialogWrapper from '../app/(frontend)/coming-soon/components/no-webpage-yet-modal';
import MobileNavMenu from './mobile-nav-menu';
import { Button } from './ui/button';
import { ReactNode } from 'react';

export type NavProps = { title: string; href: string; description?: string; className?: string };
const navItemsDefault: NavProps[] = [
  {
    title: 'БИЗНЕС ЗАКУСКА',
    href: '#',
    description: 'Представете бизнеса си на друго ниво пред избрана аудитория',
    className: 'border-brand-accent',
  },
  {
    title: 'НЕТУЪРКИНГ',
    href: '/networking',
    description: 'Мястото, където ще срещнете предприемачи като вас',
    className: 'border-brand-accent',
  },
  {
    title: 'ОБУЧЕНИЯ',
    href: '#',
    description: 'Прекият път към успешния бизнес',
    className: 'border-brand-purple',
  },
  {
    title: 'КОНФЕРЕНЦИИ',
    href: '/conference',
    description: 'Актуални знания от предприемачи за предприемачи',
    className: 'border-brand-orange',
  },
];

export default function Header({ cta, navItems }: { cta?: ReactNode; navItems?: NavProps[] }) {
  navItems = navItems ? navItems : navItemsDefault;
  return (
    <header className="bg-background relative border-b shadow-sm">
      <div className="container py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center">
            <Logo />
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden items-center xl:flex" aria-label="Main navigation">
            {navItems.map(({ title, href }) => (
              <Button variant="link" key={title}>
                <Link href={href}>{title}</Link>
              </Button>
            ))}
            {process.env.NODE_ENV === 'development' && <ThemeSelector />}
          </nav>

          <div className="flex items-center gap-4">
            {cta}
            <MobileNavMenu navigationItems={navItems} />
          </div>
        </div>
      </div>
    </header>
  );
}
