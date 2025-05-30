import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export default function WhyAreNewcontactImportant() {
  return (
    <section className="bg-teal-500/20 py-8 sm:py-12 lg:py-16" aria-labelledby="networking-heading">
      <div className="container">
        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:grid-cols-2 xl:grid xl:gap-12">
          <article className="order-2 xl:order-1">
            <Badge variant="brand" className="mb-4">
              Нетуъркинг
            </Badge>
            <h2 id="networking-heading" className="text-foreground mb-4 text-xl font-bold sm:text-2xl lg:mb-6 lg:text-3xl">
              Защото новите контакти са важни
            </h2>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed sm:text-base lg:mb-6">Като хора, организирали над 50 нетуъркинг събития, можем да ви споделим какви са ползите за вашия бизнес. Нетъркинг събитията са изключително важни, защото те предоставят възможности за създаване на нови бизнес контакти и партньорства. Освен това, тези събития позволяват обмен на идеи и опит между професионалисти в различни сфери, което може да вдъхнови иновации и подобрения в бизнеса. Участието в нетъркинг събития също така повишава видимостта на вашата компания и укрепва вашия бранд.</p>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed sm:text-base lg:mb-8">Нетъркингът създава благоприятна среда за създаване на доверие и лоялност между партньорите. Той предоставя възможност за споделяне на ресурси и намиране на решения на общи проблеми. В дългосрочен план, тези събития могат да доведат до устойчив растеж и разширяване на вашата мрежа от професионални контакти.</p>
            <Button>
              ВИЖ КАЛЕНДАР <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </article>
          <div className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
            <div className="relative aspect-[4/3]">
              <Image src="/section-1.avif?height=300&width=400" alt="Networking illustration showing people collaborating" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
