import Image from 'next/image';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';

const newsArticles = [
  {
    id: 1,
    title: 'Пет съвета за оптимизиране на онлайн магазина',
    excerpt: 'Научете съветите за подобряване на производителността на вашия онлайн магазин...',
    date: 'преди 3 мин.',
    dateDisplay: 'Пон, Септември 18',
    slug: 'pet-saveta-za-optimizirane-na-onlajn-magazina',
  },
  {
    id: 2,
    title: '3 грешки при дигитален маркетинг за начинаещи имоти',
    excerpt: 'Научете съветите за подобряване на производителността на вашия онлайн магазин...',
    date: 'вчера',
    dateDisplay: 'Пон, Септември 18',
    slug: '3-greski-pri-digitalen-marketing-za-nachinaesti-imoti',
  },
  {
    id: 3,
    title: '7 съвета за дигитален маркетинг при стартиращи и малки бизнеси',
    excerpt: 'Научете съветите за подобряване на производителността на вашия онлайн магазин...',
    date: 'преди 1 месец',
    dateDisplay: 'Пон, Септември 18',
    slug: '7-saveta-za-digitalen-marketing-pri-startirasti-i-malki-biznesi',
  },
];

export default function News() {
  return (
    <section className="bg-muted/50 py-8 sm:py-12 lg:py-16" aria-labelledby="news-heading">
      <div className="container">
        <header className="mb-8 text-center sm:mb-12">
          <Badge variant="brand" className="mb-4">
            НОВИНИ
          </Badge>
          <h2 id="news-heading" className="text-foreground px-4 text-xl font-bold sm:text-2xl lg:text-3xl">
            Най-актуалните дигитални теми и тенденции
          </h2>
        </header>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {newsArticles.map(article => (
            <article key={article.id}>
              <Card className="group relative h-full cursor-pointer overflow-hidden transition-shadow hover:shadow-lg">
                <Link href="#">
                  <div className="relative aspect-[3/2]">
                    <Image src="/card.avif?height=200&width=300" alt={`Featured image for ${article.title}`} fill className="object-cover transition-all duration-500 group-hover:scale-105" />
                    <div className="group-hover:bg-background/80 dark:bg-background/20 absolute top-0 left-0 h-full w-full transition-all duration-500 group-hover:scale-105"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3>
                      <Button variant="link" className="text-foreground mb-8 justify-start p-0 text-start text-sm font-bold whitespace-normal sm:text-base">
                        {article.title}
                      </Button>
                    </h3>
                    <p className="text-muted-foreground mb-4 text-xs">{article.excerpt}</p>
                    <time dateTime={article.date} className="text-muted-foreground mb-2 flex items-center gap-2 text-xs">
                      <Calendar className="size-3.5" /> {article.dateDisplay}
                    </time>
                  </CardContent>
                </Link>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
