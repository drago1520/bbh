/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Plus } from 'lucide-react';
import { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import CountDownTimer from './countdown';

/**
 * @description Image is the right (dekstop) & up (mobile) by default.
 */
export default function LatestNetworking({ isImageLeft = false, className, ...props }: { isImageLeft?: boolean } & ComponentProps<'section'>) {
  return (
    <section className={cn('py-24', className)} aria-labelledby="networking-heading" {...props}>
      <div className="container">
        <Badge className="mb-16" variant="secondary">
          Минал Неутъркинг с лектор
        </Badge>
        <div className="grid items-center justify-start gap-6 sm:gap-8 xl:grid xl:grid-cols-2 xl:gap-12">
          <article className={cn('order-2 mt-4', isImageLeft && 'order-2')}>
            <h2 id="networking-heading" className="text-foreground mb-2 text-xl font-bold sm:text-2xl lg:mb-4 lg:text-3xl">
              От 0 до 15 милиона лева
            </h2>
            <div className="text-muted-foreground mb-12 flex flex-col justify-start gap-4 sm:flex-row sm:items-center">
              <Link href="#" className="flex items-center gap-1">
                <Calendar className="size-4" /> 15 май, 19 часа
              </Link>
              <Link href="#" className="flex items-center gap-1">
                <MapPin className="size-4" /> Gravity Ruin Bar, ет.2, Бургас
              </Link>
            </div>
            <blockquote className="text-muted-foreground mb-3 border-l-4 border-teal-500 pl-4 text-sm leading-relaxed font-semibold italic sm:text-base">"TODO Любим цитат на лектора." - Георги Петров</blockquote>
            <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">За Георги Петров:</p>
            <ol className="text-muted-foreground mb-16 ml-6 list-decimal text-sm leading-relaxed sm:text-base [&>li]:mt-2">
              <li>
                Създател на фирмата за производство на добавки
                <Link href="#" className="ml-1 font-semibold italic underline underline-offset-2">
                  Cvetita Herbal
                </Link>
                , която е над 12 години на пазара.
              </li>
              <li>Човек на 3-те С-та: Спорт, Семейство, Самоусъвършенстване</li>
              <li>Вдъхновяващ пример за устойчиво предприемачество.</li>
            </ol>
            <CountDownTimer />
            <span className="text-destructive mt-2 mb-8 block italic">
              Местата за събитието са ограничени до <span className="font-semibold">60</span>
            </span>
            <Button asChild>
              <Link href="#">
                ЗАПИШИ СЕ <Plus />
              </Link>
            </Button>
          </article>
          <div className={cn('relative w-full max-w-md rounded-md xl:mx-auto xl:max-w-none', 'order-1 xl:order-2', isImageLeft && 'xl:order-1')}>
            <div className="relative size-fit rounded-full border-4 border-dashed shadow-2xl xl:mx-auto">
              <Image src="/joro.png" alt="Networking illustration showing people collaborating" width={288} height={288} className="bg-muted size-52 rounded-full object-cover saturate-80 xl:size-72" />
              <div className="absolute -bottom-2 left-0 flex w-full items-end justify-between">
                <span className="grow [transform:perspective(500px)_rotateY(15deg)] rounded bg-teal-200 px-4 py-1 text-sm font-semibold text-nowrap shadow-lg transition-all duration-500 hover:[transform:perspective(500px)_rotateY(0deg)] dark:bg-teal-800">
                  Георги <br />
                  Петров
                </span>
                <Image src="/cvetita-herbal.png" className="absolute -top-2.5 right-0 aspect-square size-16 rounded-full border-1 border-dashed bg-white object-contain shadow-lg saturate-25" alt="cvetita herbal" width={80} height={80} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
