import { HTMLProps } from 'react';
import Link, { LinkProps } from 'next/link';
import { cn } from '@/lib/utils/index';

import { ThemeSelector } from '@/components/ThemeProvider/Theme/ThemeSelector';
import Logo from '@/components/Icons';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import NoWebpageYetAlertDialogWrapper from '../app/(frontend)/coming-soon/components/no-webpage-yet-modal';
import MobileNavMenu from './mobile-nav-menu';

export type NavProps = { title: string; href: string; description: string; className?: string };
const navigationItems: NavProps[] = [
  {
    title: 'БИЗНЕС ЗАКУСКА',
    href: '#',
    description: 'Закуска с малка група предприемачи от Бургас',
    className: 'border-brand-accent',
  },
  {
    title: 'НЕТУЪРКИНГ',
    href: '#',
    description: 'Разшири контактите си. Спечели нови партньори, клиенти и служители',
    className: 'border-brand-accent',
  },
  {
    title: 'ОБУЧЕНИЯ',
    href: '#',
    description: 'Скалирай бизнеса си и придобии десетилетия опит за 3 месеца',
    className: 'border-brand-purple',
  },
  {
    title: 'КОНФЕРЕНЦИЙ',
    href: '#',
    description: 'Участвай в уъркшоп за скалиране и чуй какво имат да кажат лекторите за резултата ти',
    className: 'border-brand-orange',
  },
];
const networkingTabs: NavProps[] = [
  {
    title: 'Виж Страницата',
    href: '/networking',
    description: 'Отиди на страницата за нетуъркинг. Всичко свързано за нетуъркинга.',
  },
  {
    title: 'Предстоящи събития',
    href: '#',
    description: '<TODO Заглавие на събитието>',
  },
  {
    title: 'Запиши се',
    href: '#',
    description: 'Ще ти изпраим имейл с покана за Google и Apple calendar.',
  },
  {
    title: 'Минали събития',
    href: '#',
    description: '<TODO заглавие на миналото събитие>',
  },
  {
    title: 'Как ние нетуъркваме?',
    href: '#',
    description: 'Интересувай се от хората. Кого изобщо искаш да срещнеш? Давай стойност, която би струвала пари.',
  },
  {
    title: 'Не ти стига веднъж в месеца?',
    href: '/networking',
    description: 'Пиши си, когато ти е удобно с хора, 2 нива над теб в нашия Discord.',
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
          <nav className="hidden items-center space-x-6 xl:flex xl:space-x-8" aria-label="Main navigation">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>НЕТУЪРКИНГ</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {networkingTabs.map(component => (
                        <ListItem key={component.title} title={component.title} href={component.href}>
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {/* <NavigationMenuItem>
                  <NavigationMenuTrigger>БИЗНЕС ЗАКУСКА</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md" href="#">
                            <Logo className='size-full' />
                            <div className="mb-2 text-lg font-medium">Главна страница</div>
                            <p className="text-muted-foreground text-sm leading-tight">Открий нови клиенти и партньори на следващата ни бизнес закуска.</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="#" title="Запиши се">
                        TODO детайли за следващата закуска
                      </ListItem>
                      <ListItem href="#" title="Какво е Бизнес Закуската?">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem href="#" title="Минали събития">
                        Разгледай участници, мнения и какво се е случило.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem> */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="#">БИЗНЕС ЗАКУСКА</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>КОНФЕРЕНЦИИ</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md">
                          <Link href="/">
                            <Logo className="h-6 w-6" />
                            <div className="mt-4 mb-2 text-lg font-medium">shadcn/ui</div>
                            <p className="text-muted-foreground text-sm leading-tight">Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="#" title="Introduction">
                        Re-usable components built using Radix UI and Tailwind CSS.
                      </ListItem>
                      <ListItem href="#" title="Installation">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem href="#" title="Typography">
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="#">ОБУЧЕНИЯ</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <ThemeSelector />
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
