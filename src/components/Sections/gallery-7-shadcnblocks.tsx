'use client';

import AutoScroll from 'embla-carousel-auto-scroll';
import { MoveRight } from 'lucide-react';

import { cn } from '@/lib/utils';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';
import RichText from '../RichText';
import { Gallery7Props } from '@/payload-types';
import { ComponentProps } from 'react';

// export type Gallery7Props = {
//   heading: string;
//   descr?: SerializedEditorState | string;
//   cta: {
//     text: string;
//     href: string;
//   };
//   images: Media[] | string[];
//   rotateSpeed?: number
// };
export default function Gallery7({ data, className, ...props }: ComponentProps<'section'> & { data: Gallery7Props }) {
  const { ctaText, ctaHref, heading, descr, images, rotateSpeed } = data;
  return (
    //py е по-голям заради заместените карти
    <section className={cn('py-46', className)} {...props}>
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-x-12 gap-y-6 md:mb-16 md:grid-cols-2 md:gap-x-24">
          <div className="prose dark:prose-invert flex flex-col gap-8 md:gap-12">
            <h3 className="text-h3-size">{heading}</h3>
          </div>
          {descr && <RichText data={descr} />}
          {ctaHref && ctaText && (
            <Button variant="link" asChild className="justify-start px-0">
              <Link href={ctaHref || '#'} className="font-medium hover:underline">
                {ctaText} <MoveRight className="ml-2 inline size-5" />
              </Link>
            </Button>
          )}
        </div>
      </div>
      <div className="w-full">
        <div className="max-w-[100vw] overflow-x-hidden">
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[
              AutoScroll({
                speed: rotateSpeed || 0.4,
                direction: 'backward',
              }),
            ]}
            className="pointer-events-none"
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="basis-auto">
                  <div className="max-h-80 max-w-60">
                    {/* prettier-ignore */}
                    {typeof image == 'string' ? <Image src={image} alt="минали събития снимка" className={cn('mt-7 h-full w-full rounded-md object-cover', index % 2 === 0 && 'mt-16')} width={400} height={400} /> : <Image src={image.url || ''} alt={image.alt || 'минали събития снимка'} className={cn('mt-7 h-full w-full rounded-md object-cover', index % 2 === 0 && 'mt-16')} width={image.width || 400} height={image.height || 400} />}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
