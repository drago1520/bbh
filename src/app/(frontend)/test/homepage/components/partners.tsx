import { cn } from '@/lib/utils';
import { Marquee } from '@/components/magicui/marquee';
import Image from 'next/image';

const reviews = [
  {
    name: 'Jack',
    username: '@jack',
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: '/favicon.svg',
  },
  {
    name: 'Jill',
    username: '@jill',
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: '/favicon.svg',
  },
  {
    name: 'John',
    username: '@john',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: '/favicon.svg',
  },
  {
    name: 'Jane',
    username: '@jane',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: '/favicon.svg',
  },
  {
    name: 'Jenny',
    username: '@jenny',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: '/favicon.svg',
  },
  {
    name: 'James',
    username: '@james',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: '/favicon.svg',
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }: { img: string; name: string; username: string; body: string }) => {
  return (
    <figure
      className={cn(
        'relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};
export default function Partners() {
  const partners = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    name: `Partner ${i + 1}`,
  }));

  return (
    <section className="bg-muted/50 py-6 sm:py-8 lg:py-12" aria-labelledby="partners-heading">
      <div className="container text-center">
        <p className="text-brand-accent mb-2 text-sm font-semibold">СЕ ПОДКРЕПЯМЕ ВЗАИМНО</p>
        <h2 id="partners-heading" className="text-foreground mb-6 text-lg font-bold sm:text-xl lg:mb-8 lg:text-2xl">
          С подкрепата на
        </h2>
        {/* <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 lg:gap-12 opacity-60">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="aspect-[3/2] w-12 sm:w-16 lg:w-24 bg-muted rounded-md"
              role="img"
              aria-label={partner.name}
            />
          ))}
        </div> */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:60s]">
            {firstRow.map(review => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:60s]">
            {secondRow.map(review => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="from-muted pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r dark:from-transparent"></div>
          <div className="from-muted pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l dark:from-transparent"></div>
        </div>
      </div>
    </section>
  );
}
