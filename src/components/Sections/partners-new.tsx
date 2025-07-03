import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export default function PartnersMarquee({ className, ...props }: ComponentProps<'section'>) {
  return (
    <section className={cn('py-16', className)} aria-labelledby="partners-heading" {...props}>
      <div className="container text-center">
        <p className="text-brand-accent mb-2 text-sm font-semibold">СЕ ПОДКРЕПЯМЕ ВЗАИМНО</p>
        <h2 id="partners-heading" className="text-foreground mb-6 text-lg font-bold sm:text-xl lg:mb-8 lg:text-2xl">
          С подкрепата на
        </h2>
      </div>
      <Marquee pauseOnHover pauseOnClick autoFill speed={10} className="mt-12">
        <Image src="/cvetita-herbal.png" alt="cvetita-herbal" width={80} height={80} className="mx-12" />
      </Marquee>
    </section>
  );
}
