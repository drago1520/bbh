import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { errorMsgs } from '@/utils/error';
import { Media } from '@/payload-types';

type HeroProps = {
  title?: string | null;
  subheading?: string | null;
  ctaText?: string | null;
  heroImg: Media | string;
};

export default function Hero({ title, subheading, ctaText, heroImg }: HeroProps) {
  if (typeof heroImg === 'string') throw new Error(errorMsgs.imgIsString);
  const heroImgFallBack = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3';

  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      {/* Full screen background image */}
      <Image src={heroImg.url || heroImgFallBack} alt={heroImg.alt} fill className="object-cover object-center" priority />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content container */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center">
        <div className="max-w-3xl">
          {/* <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">{title}</h1> */}

          <p className="mt-6 text-xl text-white/90">{subheading}</p>

          {ctaText && (
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="#цени">{ctaText}</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
