'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, MapPin, Plus } from 'lucide-react';
import { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import CountDownTimer from './countdown';
import SignUpDialog from './sign-up-modal';
import { GoogleMapsEmbed } from '@next/third-parties/google';
import { Event } from '@/payload-types';
import { formatToBulgarianDate } from '@/utils/format-bulgarian-datetime';
import RichText from '@/components/RichText';
import { MediaSection } from '@/components/Sections/content-with-media-and-button';
import CountdownTimer from './countdown';

/**
 * @description Image is the right (dekstop) & up (mobile) by default.
 */
export default function LatestNetworking({ isImageRight = false, event, className, ...props }: { isImageRight?: boolean; event: Event | undefined } & ComponentProps<'section'>) {
  if (!event) return;

  const { speakerName, title, date, maxGuests, thumbnail, description, location, locationImg, locationUrl } = event;
  if (typeof thumbnail === 'string' || typeof locationImg === 'string') throw new Error('Няма банер или снимка');
  const showLocation = location && (locationImg || location.toLowerCase().includes('gravity'));
  return (
    <section aria-labelledby="networking-heading" className={cn('pb-32', className)} {...props}>
      <div className="container py-32">
        <div className="relative aspect-[1920/1005]">
          <Image src={thumbnail.url || ''} alt={thumbnail.alt} width={thumbnail?.width || 1920} height={thumbnail.height || 1005} className="rounded-md object-contain shadow-xl" />
        </div>
        <div className="grid justify-center gap-6 sm:gap-8 xl:grid-cols-4 xl:gap-12">
          <MediaSection isImageRight={isImageRight} className="xl:bg-muted/40 space-y-16 rounded-md xl:col-span-4 xl:p-4">
            <CountdownTimer className="hidden xl:flex" endDate={date} />
          </MediaSection>
          <article className="xl:col-span-1">
            <h3 id="networking-heading" className="text-h3-size mb-2">
              {title}
            </h3>
            <div className="flex flex-col justify-start gap-4 font-semibold sm:flex-row sm:items-center">
              <Link href="#" className="prose dark:prose-invert flex items-center gap-1">
                <Calendar className="size-4" /> {formatToBulgarianDate(date)}
              </Link>
              <Link href="#" className="prose dark:prose-invert flex items-center gap-1">
                <MapPin className="size-4" /> {location}
              </Link>
            </div>
            <div className="mt-8">
              <RichText data={description} />
            </div>
            <div className="mt-12 xl:hidden">
              <CountDownTimer endDate={date} />
            </div>
            {maxGuests && (
              <span className="text-destructive mt-2 block text-sm italic sm:mt-4">
                Местата за събитието са ограничени до <span className="font-semibold">{maxGuests}</span>
              </span>
            )}
            <div className="mt-12">
              <SignUpDialog eventId={event.id}>
                <Button>
                  ЗАПИШИ СЕ <Plus />
                </Button>
              </SignUpDialog>
              <Button className="ml-4" variant="secondary" asChild>
                <Link href="#">
                  ПРОЧЕТИ ПОВЕЧЕ <ArrowRight />
                </Link>
              </Button>
            </div>
          </article>
        </div>
      </div>
      {showLocation && (
        <div className="container grid gap-16 xl:grid-cols-2">
          <Link target="_blank" href={locationUrl || '#'} className="text-background dark:text-foreground relative block h-96 w-full">
            <Image src={locationImg?.url || '/gravity-bar.jpg'} className="absolute top-0 left-0 h-full rounded-md object-cover" width={1920} height={160} alt={locationImg?.alt || 'Локация следващо бизнес събитие за нетуъркинг'} />
            <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4">
              <h4 className="text-stroke-md text-xl font-semibold">Локация</h4>
              <address className="text-stroke-sm flex items-center gap-1 text-sm">
                <MapPin className="size-4" /> {location}
              </address>
            </div>
          </Link>
          {/* Unauthorized bug fix: #https://www.perplexity.ai/search/i-am-running-localhost-with-go-4._UjgRMQTKQ4SlfyA2pXg */}
          <div className="overflow-hidden rounded-md grayscale-75">
            <GoogleMapsEmbed apiKey={'AIzaSyBqcwYbGqE3Uc6xg7scMXeWoeKzItrlWmw'} mode="place" width="100%" height={384} zoom="14" q={location} />
          </div>
        </div>
      )}
    </section>
  );
}

function Badges({ className }: ComponentProps<typeof Badge>) {
  return (
    <div className={cn('space-x-2', className)}>
      <Badge variant="secondary">Предстоящ нетуъркинг</Badge>
      <Badge variant="secondary">С Лектор</Badge>
    </div>
  );
}
