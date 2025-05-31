import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

/**
 * @description Image is the right (dekstop) & up (mobile) by default.
 */
export default function Section2Paragraphs({ isImageLeft = false, className, ...props }: { isImageLeft?: boolean } & ComponentProps<'section'>) {
  return (
    <section className={cn('bg-teal-500/20 py-8 sm:py-12 lg:py-16', className)} aria-labelledby="networking-heading" {...props}>
      <div className="container">
        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:grid-cols-2 xl:grid xl:gap-12">
          <article className={cn('order-2', isImageLeft && 'order-2')}>
            <Badge variant="brand" className="mb-4">
              Нетуъркинг
            </Badge>
            <h2 id="networking-heading" className="text-foreground mb-4 text-xl font-bold sm:text-2xl lg:mb-6 lg:text-3xl">
              Защото новите контакти са важни
            </h2>
            <p className="text-muted-foreground mb-4 pl-4 text-sm leading-relaxed font-semibold italic sm:text-base lg:mb-6">
              <Link className="decoration-brand-accent underline underline-offset-3" href="https://www.linkedin.com/pulse/study-reveals-85-jobs-filled-networking-sandy-hutchison/" target="_blank">
                Проучване на LinkedIn
              </Link>{' '}
              показва, че 85% от всички работни позиции се запълват чрез нетуъркинг, а не чрез обяви или директни кандидатури.
            </p>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed sm:text-base lg:mb-6">Ефективният нетуъркинг през 2025 г. се основава на правилната нагласа. Да бъдеш любопитен. На готовността да задаваш въпроси. Да слушаш внимателно, защото знаеш, че това е най-бързия начин да се интересуват от теб.</p>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed sm:text-base lg:mb-8">Най-силните контакти не се създават с размяната на визитки, а със задълбочени разговори с цел помагане на отсрещния човек. Умението да даваш, преди да поискаш, е най-ценният актив, който можеш да носиш със себе си на всяко събитие. Защото само с тази нагласа ще можеш да се свържеш на по-дълбоко ниво с останалите хора. Ти си само на една смислена среща разстояние от следващия си бизнес партньор или приятел за цял живот.</p>
            <Button asChild>
              <Link href="#">
                ПОДГОТВИ СЕ ЗА НЕТУЪРКИНГА <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </article>
          <div className={cn('relative mx-auto w-full max-w-md lg:max-w-none', 'order-1 lg:order-2', isImageLeft && 'lg:order-1')}>
            <div className="relative aspect-[4/3]">
              <Image src="/section-1.avif?height=300&width=400" alt="Networking illustration showing people collaborating" width={800} height={600} className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
