import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { errorMsgs } from '@/utils/error';
import { Media } from '@/payload-types';
import Logo from '@/components/Icons';
import { CalendarCheck2, MapPin } from 'lucide-react';

type HeroProps = {
  title?: string | null;
  subheading?: string | null;
  ctaText?: string | null;
  heroImg: Media | string;
  stripeUrl: string;
};

export default function Hero({ title, subheading, ctaText, heroImg, stripeUrl }: HeroProps) {
  if (typeof heroImg === 'string') throw new Error(errorMsgs.imgIsString);
  const heroImgFallBack = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3';

  return (
    <div className="relative h-full w-full overflow-hidden py-10">
      {/* Full screen background image */}
      <Image src={heroImg.url || heroImgFallBack} alt={heroImg.alt} fill className="object-cover object-top" priority />

      {/* Content container */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-start px-4 text-center">
        <div className="font-rubik max-w-3xl">
          {/* <Image src={'/logo.svg'} alt='logo BBH' width={144*0.8} height={72*0.8} className='fill-primary stroke-primary' /> */}
          <div>
            <Logo width={120} height={60} className="mx-auto mb-2 fill-white" />
            <span className="text-4xl font-extrabold text-[#66BE8D] text-shadow-black text-shadow-md sm:text-7xl md:text-7xl">CONFERENCE</span>
          </div>
          <div className="mt-20">
            <h1 className="text-4xl leading-tight font-bold tracking-tight break-words whitespace-normal text-white italic sm:text-5xl md:text-6xl">{title?.toUpperCase()}</h1>

            <p className="mt-2 text-xl font-bold break-words whitespace-normal text-white/90 italic">{subheading}</p>
          </div>
          <div className="mt-20 grid gap-4 text-xl font-bold text-white/90 sm:grid-cols-2">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="size-10" />
              Експо Флора, <br /> гр. Бургас
            </div>
            <div className="flex items-center justify-center gap-2">
              <CalendarCheck2 className="size-10" />
              27 Септември, <br /> 09:00 часа
            </div>
          </div>
          {/* {ctaText && (
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href={stripeUrl}>{ctaText}</Link>
              </Button>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
