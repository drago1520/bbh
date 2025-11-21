"use client";
import { ArrowLeft, ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import { ComponentProps, useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { errorMsgs } from "@/utils/error";
import { formatToBulgarianDate } from "@/utils/format-bulgarian-datetime";
import { EventProps } from "@/payload-types";

interface DatItem {
  id: string;
  title: string;
  description: string;
  image: string;
  hoverImage: string;
  tag: string;
}

const DATA: DatItem[] = [
  {
    id: "1",
    title: "Бизнес закуска",
    description:
      "Започнете деня с вдъхновяващи разговори и професионални контакти. Всяка бизнес закуска включва презентация на успешни предприемачи и възможност за networking.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    hoverImage:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-5oYbG-sEImY-unsplash.jpg",
    tag: "Networking",
  },
  {
    id: "2",
    title: "Нетуъркинг събития",
    description:
      "Срещайте единомишленици, обменяйте идеи и изградете ценни бизнес връзки в непринудена атмосфера. Идеално за разширяване на професионалната мрежа.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    hoverImage:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-duxeKbu9FDE-unsplash.jpg",
    tag: "Професионални контакти",
  },
  {
    id: "3",
    title: "Бизнес конференция",
    description:
      "Участвайте в мащабни събития с водещи експерти в индустрията. Получете актуална информация за пазарни тенденции и иновативни бизнес стратегии.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
    hoverImage:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-majMgWtrF48-unsplash.jpg",
    tag: "Образование",
  },
  {
    id: "4",
    title: "Бизнес обучения",
    description:
      "Развийте практически умения с нашите специализирани курсове. От дигитален маркетинг до финансово планиране - всичко за успешния бизнес.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-6.svg",
    hoverImage:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-xYFl3Q9am1E-unsplash.jpg",
    tag: "Професионално развитие",
  },
  {
    id: "5",
    title: "Предприемачески workshop",
    description:
      "Интерактивни работилници за стартъп ентусиасти и млади предприемачи. Научете как да превърнете идеите си в успешен бизнес.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    hoverImage:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-9__Q24sJqKg-unsplash.jpg",
    tag: "Стартъпи",
  },
  {
    id: "6",
    title: "Инвестиционен форум",
    description:
      "Срещи между инвеститори и предприемачи. Представете своя проект пред потенциални инвеститори или открийте нови възможности за финансиране.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
    hoverImage:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-5oYbG-sEImY-unsplash.jpg",
    tag: "Финансиране",
  },
];

const UpcomingEvents = ({
  className,
  events,
  ...props
}: ComponentProps<"section"> & { events: EventProps[] }) => {
  events = events.map((event) => {
    if (typeof event.thumbnail === "string")
      throw new Error(errorMsgs.imgIsString);
    return event;
  });
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentIndex(carouselApi.selectedScrollSnap());
    };

    updateSelection();
    carouselApi.on("select", updateSelection);

    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  // Calculate the progress bar width and position
  const progressWidth = 240;
  const progressIndicatorWidth = progressWidth / DATA.length;
  const _progressOffset = currentIndex * progressIndicatorWidth;

  return (
    <section className={cn("relative py-16", className)} {...props}>
      <div className="relative container">
        <div className="mb-12 flex max-w-[600px] flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Link
              href="#"
              className="no-underline underline-offset-8 hover:underline"
            >
              <h3 className="text-h3-size mt-0 mb-0">Предстоящи събития</h3>
            </Link>
          </div>
        </div>
        {/* <div className="absolute flex shrink-0 items-center justify-start gap-2">
            <Button size="icon" variant="outline" onClick={() => carouselApi?.scrollPrev()} disabled={!canScrollPrev} className="rounded-full">
              <ArrowLeft className="size-5" />
            </Button>
            <Button size="icon" variant="outline" onClick={() => carouselApi?.scrollNext()} disabled={!canScrollNext} className="rounded-full">
              <ArrowRight className="size-5" />
            </Button>
          </div> */}

        <div className="relative w-full">
          {/* <div className="absolute top-[50%] -left-2 z-10 md:-left-20">
            <Button size="icon" onClick={() => carouselApi?.scrollPrev()} disabled={!canScrollPrev} variant={'outline'}>
              <ArrowLeft />
            </Button>
          </div>
          <div className="absolute top-[50%] -right-4 z-10 md:-right-20">
            <Button onClick={() => carouselApi?.scrollNext()} disabled={!canScrollNext} size="icon" variant={'outline'}>
              <ArrowRight />
            </Button>
          </div> */}
          <Carousel
            setApi={setCarouselApi}
            opts={{
              align: "start",
            }}
          >
            <CarouselPrevious className="top-[50%] -left-2 z-10 size-10 md:-left-12" />
            <CarouselNext className="top-[50%] -right-2 z-10 size-10 md:-right-12" />
            <CarouselContent className="-ml-1 pb-10 xl:-ml-15">
              {events.map(
                ({
                  id,
                  thumbnail,
                  title,
                  type,
                  date,
                  locationUrl,
                  location,
                }) => (
                  <CarouselItem
                    key={id}
                    className={cn(
                      "h-full max-w-[650px] min-w-[350px] flex-1 pl-8 sm:min-w-[416px] xl:min-w-[420px] xl:pl-16",
                    )}
                  >
                    {/* prettier-ignore */}
                    <div className={
                    cn("bg-background/50 flex min-h-[480px] flex-col justify-between rounded-md border border-b-6 border-b-teal-500 p-4 shadow-md backdrop-blur-xs",
                      type == 'businessBreakfast' && 'border-b-brand-accent-light',
                      type == 'conference' && 'border-b-brand-orange',
                      type == 'courses' && 'border-b-brand-purple',
                      type == 'networking' && 'border-b-brand-accent' //courses - lila, conf - orange, networking - green
                  )}>
                    <div className="relative flex h-full flex-col items-start justify-start gap-2">
                      <div className="w-full">
                        <div className="group relative z-10 overflow-hidden rounded-2xl">
                          <Link href={`/services/${id}`}>
                            <Image width={500} height={260} src={(typeof thumbnail !== 'string' && thumbnail.url) || ''} alt={title} className="group-hover:opacity-0-OLD aspect-[1.91/1] h-full w-full object-cover transition-opacity duration-500" />
                          </Link>
                          {/* <Image width={800} height={800} src={image} alt={title} className="absolute top-0 left-0 z-10 aspect-square h-full w-full rounded-2xl object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" /> */}

                          <Badge className="bg-background absolute top-4 left-4 px-4 py-1" variant="outline">
                            {type == 'businessBreakfast' ? 'Бизнес закуска' : type == 'networking' ? 'Нетуъркинг' : null}
                          </Badge>
                        </div>
                      </div>
                      <div className="prose dark:prose-invert">
                        <h4 className="mt-2 text-xl">{title}</h4>
                        <div className="flex flex-wrap gap-2 space-x-2">
                          <div className="flex items-center gap-2">
                            <Calendar className="text-brand-accent h-4 w-4" />
                            <span className="text-muted-foreground font-medium">{formatToBulgarianDate(date)}</span>
                          </div>
                          <Button variant={'link'} asChild className="px-0">
                            <Link href={locationUrl || '#'} className="flex items-center gap-2 px-0">
                              <MapPin className="text-brand-accent h-4 w-4" />
                              <span className="text-muted-foreground font-medium">{location}</span>
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 flex w-full flex-col gap-4 pb-2 xl:flex-row">
                      <Button size="lg">Запиши се</Button>
                      <Button size="lg" variant="secondary">
                        Разгледай
                      </Button>
                    </div>
                  </div>
                  </CarouselItem>
                ),
              )}
            </CarouselContent>
          </Carousel>

          {/* Progress Indicator */}
          {/* <div className="bg-muted absolute -bottom-6 left-1/2 h-[2px] w-[240px] -translate-x-1/2 rounded dark:top-0">
            <div
              className="bg-foreground h-[2px] rounded transition-transform duration-300 ease-out"
              style={{
                width: `${progressIndicatorWidth}px`,
                transform: `translateX(${progressOffset}px)`,
              }}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export { UpcomingEvents };
