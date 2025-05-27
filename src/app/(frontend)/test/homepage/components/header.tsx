'use client';

import { forwardRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils/index';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import Image from 'next/image';

import { ThemeSelector } from '@/components/ThemeProvider/Theme/ThemeSelector';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Logo from '@/components/Icons';
const navigationItems = [
  { label: 'БИЗНЕС ЗАКУПКА', href: '' },
  { label: 'НЕТУЪРКИНГ', href: '' },
  { label: 'ОБУЧЕНИЯ', href: '' },
  { label: 'КОНФЕРЕНЦИИ', href: '' },
];

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description: 'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description: 'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description: 'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background relative border-b shadow-sm">
      <div className="container py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center">
            <Logo  />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-6 xl:flex xl:space-x-8" aria-label="Main navigation">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>БИЗНЕС ЗАКУПКА</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md" href="/">
                            <Logo className="h-6 w-6" />
                            <div className="mt-4 mb-2 text-lg font-medium">shadcn/ui</div>
                            <p className="text-muted-foreground text-sm leading-tight">Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/docs" title="Introduction">
                        Re-usable components built using Radix UI and Tailwind CSS.
                      </ListItem>
                      <ListItem href="/docs/installation" title="Installation">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem href="/docs/primitives/typography" title="Typography">
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
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
                <NavigationMenuItem>
                  <NavigationMenuTrigger>КОНФЕРЕНЦИИ</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md" href="/">
                            <Logo className="h-6 w-6" />
                            <div className="mt-4 mb-2 text-lg font-medium">shadcn/ui</div>
                            <p className="text-muted-foreground text-sm leading-tight">Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/docs" title="Introduction">
                        Re-usable components built using Radix UI and Tailwind CSS.
                      </ListItem>
                      <ListItem href="/docs/installation" title="Installation">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem href="/docs/primitives/typography" title="Typography">
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>ОБУЧЕНИЯ</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
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
            <SheetContent className='rounded-l-md'>
              <SheetHeader>
                <SheetTitle>Logo here</SheetTitle>
                <SheetDescription>tuka e za slogan</SheetDescription>
              </SheetHeader>
              <nav className='flex flex-col'>
                {navigationItems.map(item => (
                  <Button className='w-full justify-start' key={item.label} asChild variant='link'>
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

const ListItem = forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a ref={ref} className={cn('hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none', className)} {...props}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
