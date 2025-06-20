'use client';
//TODO add border color based on the event
import { ArrowLeft, ArrowRight, Calendar, Clock, MapPin } from 'lucide-react';
import { ComponentProps, useEffect, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { CarouselApi } from '@/components/ui/carousel';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

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
    id: '1',
    title: 'Бизнес закуска',
    description: 'Започнете деня с вдъхновяващи разговори и професионални контакти. Всяка бизнес закуска включва презентация на успешни предприемачи и възможност за networking.',
    image: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg',
    hoverImage: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-5oYbG-sEImY-unsplash.jpg',
    tag: 'Networking',
  },
  {
    id: '2',
    title: 'Нетуъркинг събития',
    description: 'Срещайте единомишленици, обменяйте идеи и изградете ценни бизнес връзки в непринудена атмосфера. Идеално за разширяване на професионалната мрежа.',
    image: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg',
    hoverImage: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-duxeKbu9FDE-unsplash.jpg',
    tag: 'Професионални контакти',
  },
  {
    id: '3',
    title: 'Бизнес конференция',
    description: 'Участвайте в мащабни събития с водещи експерти в индустрията. Получете актуална информация за пазарни тенденции и иновативни бизнес стратегии.',
    image: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg',
    hoverImage: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-majMgWtrF48-unsplash.jpg',
    tag: 'Образование',
  },
  {
    id: '4',
    title: 'Бизнес обучения',
    description: 'Развийте практически умения с нашите специализирани курсове. От дигитален маркетинг до финансово планиране - всичко за успешния бизнес.',
    image: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-6.svg',
    hoverImage: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-xYFl3Q9am1E-unsplash.jpg',
    tag: 'Професионално развитие',
  },
  {
    id: '5',
    title: 'Предприемачески workshop',
    description: 'Интерактивни работилници за стартъп ентусиасти и млади предприемачи. Научете как да превърнете идеите си в успешен бизнес.',
    image: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg',
    hoverImage: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-9__Q24sJqKg-unsplash.jpg',
    tag: 'Стартъпи',
  },
  {
    id: '6',
    title: 'Инвестиционен форум',
    description: 'Срещи между инвеститори и предприемачи. Представете своя проект пред потенциални инвеститори или открийте нови възможности за финансиране.',
    image: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg',
    hoverImage: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-5oYbG-sEImY-unsplash.jpg',
    tag: 'Финансиране',
  },
];

const UpcomingEvents = ({ className, ...props }: ComponentProps<'section'>) => {
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
    carouselApi.on('select', updateSelection);

    return () => {
      carouselApi.off('select', updateSelection);
    };
  }, [carouselApi]);

  // Calculate the progress bar width and position
  const progressWidth = 240;
  const progressIndicatorWidth = progressWidth / DATA.length;
  const progressOffset = currentIndex * progressIndicatorWidth;

  return (
    <section className={cn('relative py-12', className)} {...props}>
      <div className="relative container">
        <div className="mb-6 flex flex-col justify-between md:flex-row md:items-end">
          <div className="prose dark:prose-invert">
            <Link href="#" className="no-underline underline-offset-4 hover:underline">
              <h3 className="text-h3-size">Предстоящи събития</h3>
            </Link>
          </div>
          <div className="mt-8 flex shrink-0 items-center justify-start gap-2">
            <Button size="icon" variant="outline" onClick={() => carouselApi?.scrollPrev()} disabled={!canScrollPrev} className="rounded-full">
              <ArrowLeft className="size-5" />
            </Button>
            <Button size="icon" variant="outline" onClick={() => carouselApi?.scrollNext()} disabled={!canScrollNext} className="rounded-full">
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>

        <div className="relative w-full">
          <Carousel
            setApi={setCarouselApi}
            opts={{
              align: 'start',
            }}
          >
            <CarouselContent className="-ml-1 pb-10 xl:-ml-15">
              {DATA.map(({ id, hoverImage, title, tag }) => (
                <CarouselItem key={id} className={cn('h-full min-w-[334px] flex-1 sm:min-w-[400px] xl:min-w-[420px] xl:pl-16')}>
                  <div className="bg-background/50 rounded-md border border-b-6 border-b-teal-500 p-4 shadow-md backdrop-blur-xs">
                    <div className="relative flex h-full flex-col items-start justify-start gap-2">
                      <div className="w-full">
                        <div className="group relative z-10 overflow-hidden rounded-2xl">
                          <Link href={`/services/${id}`}>
                            <Image width={800} height={800} src={hoverImage} alt={title} className="group-hover:opacity-0-OLD aspect-square h-full w-full object-cover transition-opacity duration-500" />
                          </Link>
                          {/* <Image width={800} height={800} src={image} alt={title} className="absolute top-0 left-0 z-10 aspect-square h-full w-full rounded-2xl object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" /> */}

                          <Badge className="bg-background absolute top-4 left-4 px-4 py-1" variant="outline">
                            {tag}
                          </Badge>
                        </div>
                      </div>
                      <div className="prose dark:prose-invert flex flex-col gap-1">
                        <h4 className="mt-2">{title}</h4>
                        <div className="flex flex-wrap gap-2 space-x-2">
                          <div className="flex items-center gap-2">
                            <Calendar className="text-brand-accent h-4 w-4" />
                            <span className="font-medium">19.06.2025</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Clock className="text-brand-accent h-4 w-4" />
                            <span className="font-medium">19:00 ч.</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <MapPin className="text-brand-accent h-4 w-4" />
                            <span className="font-medium">Burgas Gravity Bar</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 flex w-full flex-col gap-4 xl:flex-row">
                      <Button size="lg">Запиши се</Button>
                      <Button size="lg" variant="secondary">
                        Разгледай
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Progress Indicator */}
          <div className="bg-muted absolute -bottom-6 left-1/2 h-[2px] w-[240px] -translate-x-1/2 rounded dark:top-0">
            <div
              className="bg-foreground h-[2px] rounded transition-transform duration-300 ease-out"
              style={{
                width: `${progressIndicatorWidth}px`,
                transform: `translateX(${progressOffset}px)`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { UpcomingEvents };
