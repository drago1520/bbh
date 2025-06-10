import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export default function Confrences({ isImageRight = false, className, ...props }: { isImageRight?: boolean } & ComponentProps<'section'>) {
  return (
    <section className={cn('dark:bg-background bg-red-100 py-8 sm:py-12 lg:py-16', className)}>
      <div className="container">
        <div className="grid items-center justify-start gap-6 sm:gap-8 xl:grid xl:grid-cols-2 xl:gap-12">
          <div
            className={cn({
              'relative w-full max-w-md lg:max-w-none': true,
              'xl:order-2': isImageRight,
            })}
          >
            <div className="relative aspect-[4/3]">
              <Image src="/section-1.avif?height=300&width=400" alt="Networking illustration showing people collaborating" fill className="object-contain" />
            </div>
          </div>
          <article className="prose order-2 xl:order-1">
            <Badge variant="brandOrange">Конференции</Badge>
            <h2 id="networking-heading" className="mt-4">
              Развитие и нови възможности
            </h2>
            <p>Нашата ежегодна конференция съчетава най-доброто от света на нетуъркинга и обученията, предоставяйки уникална възможност за развитие на вашия бизнес. Събитието е специално проектирано да обедини професионалисти от различни сектори, които да обменят идеи и опит, като същевременно разширяват своите мрежи от контакти.</p>
            <p>Ежегодната конференция е не само източник на нови знания, но и катализатор за иновации и успех. Присъединете се към нас и се възползвайте от всички предимства, които това уникално събитие може да предложи на вашия бизнес.</p>
            <p>Участниците в конференцията имат възможност да присъстват на разнообразни обучителни сесии, водени от експерти в техните области. Тези сесии предоставят ценни знания и умения, които могат да бъдат непосредствено приложени в работата. Освен това, социалните събития и дискусионните панели създават благоприятна среда за изграждане на дълготрайни бизнес връзки и партньорства.</p>
            <Button>
              НАУЧИ ПОВЕЧЕ <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
}
