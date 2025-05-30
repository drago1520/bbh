'use client';

import { HTMLProps, useState } from 'react';
import Link, { LinkProps } from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils/index';

import { ThemeSelector } from '@/components/ThemeProvider/Theme/ThemeSelector';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Logo from '@/components/Icons';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
const navigationItems = [
  { label: 'БИЗНЕС ЗАКУПКА', href: '#' },
  { label: 'НЕТУЪРКИНГ', href: '#' },
  { label: 'ОБУЧЕНИЯ', href: '#' },
  { label: 'КОНФЕРЕНЦИИ', href: '#' },
];

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Виж Страницата',
    href: '/test/networking',
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
    href: '/test/networking',
    description: 'Пиши си, когато ти е удобно с хора, 2 нива над теб в нашия Discord.',
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background relative border-b shadow-sm">
      <div className="container py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/test/homepage" className="group flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-6 xl:flex xl:space-x-8" aria-label="Main navigation">
            <NavigationMenu>
              <NavigationMenuList>
                {/* <NavigationMenuItem>
                  <NavigationMenuTrigger>БИЗНЕС ЗАКУПКА</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md" href="/test/homepage">
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
                </NavigationMenuItem> */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>НЕТУЪРКИНГ</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {components.map(component => (
                        <ListItem key={component.title} title={component.title} href={component.href}>
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {/* <NavigationMenuItem>
                  <NavigationMenuTrigger>КОНФЕРЕНЦИИ</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md">
                          <Link href="/test/homepage">
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
                </NavigationMenuItem> */}
                {/* <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/#">ОБУЧЕНИЯ</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem> */}
              </NavigationMenuList>
            </NavigationMenu>
            <ThemeSelector />
          </nav>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="xl:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle mobile menu" aria-expanded={isMobileMenuOpen}>
                {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="!size-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent className="rounded-l-md">
              <SheetHeader>
                <SheetTitle>Logo here</SheetTitle>
                <SheetDescription>tuka e za slogan</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col">
                {navigationItems.map(item => (
                  <Button className="w-full justify-start" key={item.label} asChild variant="link">
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                ))}
              </nav>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Затвори</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        {/* Mobile Navigation */}
        {/* {isMobileMenuOpen && (
          <nav className="bg-background absolute top-full right-0 left-0 z-50 border-t shadow-lg xl:hidden" aria-label="Mobile navigation">
            <ul className="flex flex-col space-y-4 p-4">
              {navigationItems.map((item, index) => (
                <li key={item.href}>
                  <Link href={item.href} className={cn('hover:text-brand-accent flex cursor-pointer items-center justify-between py-3 transition-colors', index < navigationItems.length - 1 && 'border-border border-b')} onClick={() => setIsMobileMenuOpen(false)}>
                    <span className="text-foreground font-medium">{item.label}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )} */}
        {/* Mobile Navigation */}
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
