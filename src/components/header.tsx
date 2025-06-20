import { HTMLProps } from 'react';
import Link, { LinkProps } from 'next/link';
import { cn } from '@/lib/utils/index';

import { ThemeSelector } from '@/components/ThemeProvider/Theme/ThemeSelector';
import Logo from '@/components/Icons';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import NoWebpageYetAlertDialogWrapper from '../app/(frontend)/coming-soon/components/no-webpage-yet-modal';
import MobileNavMenu from './mobile-nav-menu';
import { Button } from './ui/button';

export type NavProps = { title: string; href: string; description: string; className?: string };
const navigationItems: NavProps[] = [
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
    title: 'КОНФЕРЕНЦИЙ',
    href: '#',
    description: 'Актуални знания от предприемачи за предприемачи',
    className: 'border-brand-orange',
  },
];

export default function Header() {
  return (
    <header className="bg-background relative border-b shadow-sm">
      <div className="container py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center">
            <Logo />
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden items-center xl:flex" aria-label="Main navigation">
            {navigationItems.map(({ title, href }) => (
              <Button variant="link" key={title}>
                <Link href={href}>{title}</Link>
              </Button>
            ))}
            {process.env.NODE_ENV === 'development' && <ThemeSelector />}
          </nav>

          <MobileNavMenu navigationItems={navigationItems} />
        </div>
      </div>
    </header>
  );
}

const ListItem = ({ className, title, children, ...props }: LinkProps & HTMLProps<HTMLAnchorElement>) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link className={cn('hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none', className)} {...props}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
