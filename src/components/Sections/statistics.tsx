'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ComponentProps } from 'react';
import CountUp from 'react-countup';

export default function Statistics({ className, withTitle = true, ...props }: ComponentProps<'section'> & { withTitle?: boolean }) {
  return (
    <section className={cn('py-32', className)} aria-labelledby="statistics-heading" {...props}>
      <div className="container text-7xl sm:text-6xl">
        {withTitle && (
          <h3 id="statistics-heading" className="text-h3-size mb-12 text-center">
            Статистики за компанията
          </h3>
        )}
        <dl className="mt-8 grid justify-center gap-16 text-center min-[480px]:grid-cols-2 min-[480px]:gap-8 lg:grid-cols-3">
          <div className="dark:bg-accent bg-background z-10 flex w-full max-w-80 flex-col items-center justify-center gap-4 rounded p-8 shadow-xl dark:border-2">
            <Image src="/networking.svg" alt="networking icon" width={48} height={48} />
            <dd className="mt-2 font-bold">
              <CountUp end={50} duration={8} enableScrollSpy scrollSpyOnce />
            </dd>
            <dt className="text-muted-foreground text-base">Нетуъркинг събития</dt>
          </div>
          <div className="dark:bg-accent bg-background z-10 flex w-full max-w-80 flex-col items-center justify-center gap-4 rounded p-8 shadow-xl dark:border-2">
            <Image src="/gear.svg" alt="networking icon" width={48} height={48} />
            <dd className="mt-2 font-bold">
              <CountUp end={100} duration={8} enableScrollSpy scrollSpyOnce />
            </dd>
            <dt className="text-muted-foreground text-base">Души</dt>
          </div>
          <div className="dark:bg-accent bg-background z-10 flex w-full max-w-80 flex-col items-center justify-center gap-4 rounded p-8 shadow-xl min-[480px]:col-span-full min-[480px]:justify-self-center lg:col-span-1 dark:border-2">
            <Image src="/conf.svg" alt="networking icon" width={48} height={48} />
            <dd className="mt-2 font-bold">
              <CountUp enableScrollSpy end={3} duration={8} scrollSpyOnce />
            </dd>
            <dt className="text-muted-foreground text-base">Ежегодни конференции</dt>
          </div>
        </dl>
      </div>
    </section>
  );
}
