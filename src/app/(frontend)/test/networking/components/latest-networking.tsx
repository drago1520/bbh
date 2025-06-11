'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import CountDownTimer from './countdown';
import SignUpDialog from './sign-up-modal';
import { GoogleMapsEmbed } from '@next/third-parties/google';
import { Event } from '@/payload-types';
import { formatToBulgarianDate } from '@/utils/format-bulgarian-datetime';
import RichTextCustom from '@/components/RichText';

/**
 * @description Image is the right (dekstop) & up (mobile) by default.
 */
export default function LatestNetworking({ isImageRight = false, className, latestEvent, ...props }: { isImageRight?: boolean; latestEvent: Event | undefined } & ComponentProps<'section'>) {
  if (!latestEvent) return;

  const { location, speakerName, title, date, maxGuests, thumbnail, description } = latestEvent;
  if (typeof thumbnail === 'string') throw new Error('Няма банер или снимка на лектор');
  return (
    <section className={className} aria-labelledby="networking-heading" {...props}>
      <div className="container pt-12">
        <div className="grid items-center justify-start gap-6 sm:gap-8 xl:grid xl:grid-cols-2 xl:gap-12">
          <div className={cn('relative w-full max-w-md rounded-md xl:mx-auto xl:max-w-none', isImageRight && 'xl:order-2')}>
            <Badges className="xl:hidden" />
            <div className="relative size-fit rounded-full border-4 border-dashed shadow-2xl xl:mx-auto">
              <Image src={thumbnail.url || ''} alt={thumbnail.alt || 'Снимка на лектора'} width={288} height={288} className="bg-muted size-52 rounded-full object-cover saturate-80 xl:size-72" />
              <div className="absolute -bottom-2 left-0 flex w-full items-end justify-between">
                <span className="grow [transform:perspective(500px)_rotateY(15deg)] rounded bg-teal-200 px-4 py-1 text-sm font-semibold text-nowrap shadow-lg transition-all duration-500 hover:[transform:perspective(500px)_rotateY(0deg)] dark:bg-teal-800">
                  {speakerName.split(' ')[0]} <br />
                  {speakerName.split(' ')[1]}
                </span>
                <Image src="/cvetita-herbal.png" className="absolute -top-2.5 right-0 aspect-square size-16 rounded-full border-1 border-dashed bg-white object-contain shadow-lg saturate-25" alt="cvetita herbal" width={80} height={80} />
              </div>
            </div>
          </div>
          <article className={cn('mt-4')}>
            <Badges className="hidden xl:block" />
            <h2 id="networking-heading" className="text-foreground mb-2 text-xl font-bold sm:text-2xl lg:mb-4 lg:text-3xl">
              {title}
            </h2>
            <div className="text-muted-foreground flex flex-col justify-start gap-4 font-semibold sm:flex-row sm:items-center">
              <Link href="#" className="flex items-center gap-1">
                <Calendar className="size-4" /> {formatToBulgarianDate(date)}
              </Link>
              <Link href="#" className="flex items-center gap-1">
                <MapPin className="size-4" /> {location}
              </Link>
            </div>
            <div className="text-muted-foreground mt-8">
              <RichTextCustom data={description} />
            </div>
            <div className="mt-8">
              <CountDownTimer endDate={date} />
            </div>
            {maxGuests && (
              <span className="text-destructive mt-2 block text-sm italic">
                Местата за събитието са ограничени до <span className="font-semibold">{maxGuests}</span>
              </span>
            )}
            <div className="mt-12">
              <SignUpDialog eventId="fwefwefwefwegfwefw" />
              <Button className="ml-4" variant="secondary" asChild>
                <Link href="#">
                  ПРОЧЕТИ ПОВЕЧЕ <ArrowRight />
                </Link>
              </Button>
            </div>
          </article>
        </div>
      </div>
      <Link href="#" className="text-background dark:text-foreground relative mt-16 block h-40 w-full">
        <Image src="/location-bg-2.jpg" className="absolute top-0 left-0 h-full object-cover" width={1920} height={160} alt="Локация следващо бизнес събитие за нетуъркинг" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4">
          <h4 className="text-xl font-semibold">Локация</h4>
          <address className="flex items-center gap-1 text-sm">
            <MapPin className="size-4" /> {location}
          </address>
        </div>
      </Link>
      {/* Unauthorized bug fix: #https://www.perplexity.ai/search/i-am-running-localhost-with-go-4._UjgRMQTKQ4SlfyA2pXg */}
      <GoogleMapsEmbed apiKey={'AIzaSyBqcwYbGqE3Uc6xg7scMXeWoeKzItrlWmw'} mode="place" width="100%" height={208} zoom="14" q={location} />
    </section>
  );
}

function Badges({ className }: ComponentProps<typeof Badge>) {
  return (
    <div className={cn('mb-12 space-x-2', className)}>
      <Badge variant="secondary">Предстоящ нетуъркинг</Badge>
      <Badge variant="secondary">С Лектор</Badge>
    </div>
  );
}
