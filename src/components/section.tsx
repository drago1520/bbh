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
        <div className="grid items-center gap-6 sm:gap-8 xl:grid-cols-2 xl:gap-12">
          <div className={cn('w-full', isImageLeft && 'xl:order-2')}>
            <div className="relative aspect-[4/3]">
              <Image src="/section-1.avif?height=300&width=400" alt="Networking illustration showing people collaborating" width={800} height={600} className="object-contain" />
            </div>
          </div>
          <article>
            <div className="prose">
              <Badge variant="brand">Нетуъркинг</Badge>
              <h3 id="networking-heading" className="text-xl font-bold lg:text-3xl">
                Защото новите контакти са важни
              </h3>
              <p className="pl-4 leading-relaxed italic">
                <Link className="decoration-brand-accent underline underline-offset-3" href="https://www.linkedin.com/pulse/study-reveals-85-jobs-filled-networking-sandy-hutchison/" target="_blank">
                  Проучване на LinkedIn
                </Link>{' '}
                показва, че 85% от всички работни позиции се запълват чрез нетуъркинг, а не чрез обяви или директни кандидатури.
              </p>
              <p>Ефективният нетуъркинг през 2025 г. се основава на правилната нагласа. Да бъдеш любопитен. На готовността да задаваш въпроси. Да слушаш внимателно, защото знаеш, че това е най-бързия начин да се интересуват от теб.</p>
              <p>Най-силните контакти не се създават с размяната на визитки, а със задълбочени разговори с цел помагане на отсрещния човек. Умението да даваш, преди да поискаш, е най-ценният актив, който можеш да носиш със себе си на всяко събитие. Защото само с тази нагласа ще можеш да се свържеш на по-дълбоко ниво с останалите хора. Ти си само на една смислена среща разстояние от следващия си бизнес партньор или приятел за цял живот.</p>
            </div>
            <Button className="mt-8" asChild>
              <Link href="#">
                ПОДГОТВИ СЕ ЗА НЕТУЪРКИНГА <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
}
