import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export default function Confrences() {
  return (
    <section className="bg-red-100 dark:bg-background py-8 sm:py-12 lg:py-16" aria-labelledby="networking-heading" >
      <div className="container">
        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:grid-cols-2 xl:grid xl:gap-12">
          <article className="order-2 xl:order-1">
            <Badge variant="brandOrange" className="mb-4">
              Конференции
            </Badge>
            <h2 id="networking-heading" className="text-foreground mb-4 text-xl font-bold sm:text-2xl lg:mb-6 lg:text-3xl">
              Развитие и нови възможности
            </h2>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed sm:text-base lg:mb-6">Нашата ежегодна конференция съчетава най-доброто от света на нетуъркинга и обученията, предоставяйки уникална възможност за развитие на вашия бизнес. Събитието е специално проектирано да обедини професионалисти от различни сектори, които да обменят идеи и опит, като същевременно разширяват своите мрежи от контакти.</p>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed sm:text-base lg:mb-6">Ежегодната конференция е не само източник на нови знания, но и катализатор за иновации и успех. Присъединете се към нас и се възползвайте от всички предимства, които това уникално събитие може да предложи на вашия бизнес.</p>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed sm:text-base lg:mb-8">Участниците в конференцията имат възможност да присъстват на разнообразни обучителни сесии, водени от експерти в техните области. Тези сесии предоставят ценни знания и умения, които могат да бъдат непосредствено приложени в работата. Освен това, социалните събития и дискусионните панели създават благоприятна среда за изграждане на дълготрайни бизнес връзки и партньорства.</p>
            <Button>
              НАУЧИ ПОВЕЧЕ <ArrowRight className="ml-2 h-4 w-4" />
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
