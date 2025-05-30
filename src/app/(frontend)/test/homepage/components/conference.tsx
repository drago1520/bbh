import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export default function Conference() {
  return (
    <section className="bg-background py-8 sm:py-12 lg:py-16" aria-labelledby="conference-heading">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/3]">
              <Image src="/section-1.avif" alt="Conference illustration showing digital innovation" fill className="object-contain" />
            </div>
          </div>
          <article>
            <Badge className="bg-brand-orange text-primary-foreground hover:bg-brand-orange/80 mb-4">ДИГИТАЛНИ КОНФЕРЕНЦИИ</Badge>
            <h2 id="conference-heading" className="text-foreground mb-4 text-xl font-bold sm:mb-6 sm:text-2xl lg:text-3xl">
              Развитие и нови възможности
            </h2>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed sm:mb-6 sm:text-base">Нашите конференции събитията са създадени най-добро от света на нетуъркинга и обучението, предоставяйки уникална възможност за развитие на вашия бизнес.</p>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed sm:mb-8 sm:text-base">Участниците в конференциите имат възможност да представят на експерти от различни области в България и чужбина в различни области.</p>
            <Button>
              НАУЧИ ПОВЕЧЕ <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
}
