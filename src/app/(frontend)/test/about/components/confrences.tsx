import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import { ContentSection, MediaSection, SectionWrapper } from '@/components/Sections/content-with-media-and-button';

export default function Confrences({ isImageLeft = true, className, ...props }: { isImageLeft?: boolean } & ComponentProps<'section'>) {
  return (
    <SectionWrapper className={cn('dark:bg-background bg-red-100', className)} {...props}>
      <MediaSection isImageLeft={isImageLeft}>
        <div className="relative aspect-[4/3]">
          <Image src="/section-1.avif?height=300&width=400" alt="Networking illustration showing people collaborating" fill className="object-contain" />
        </div>
      </MediaSection>
      <ContentSection>
        <Badge variant="brandOrange">Конференции</Badge>
        <h2 id="networking-heading" className="mt-4">
          Развитие и нови възможности
        </h2>
        <p>Нашата ежегодна конференция съчетава най-доброто от света на нетуъркинга и обученията, предоставяйки уникална възможност за развитие на вашия бизнес. Събитието е специално проектирано да обедини професионалисти от различни сектори, които да обменят идеи и опит, като същевременно разширяват своите мрежи от контакти.</p>
        <p>Ежегодната конференция е не само източник на нови знания, но и катализатор за иновации и успех. Присъединете се към нас и се възползвайте от всички предимства, които това уникално събитие може да предложи на вашия бизнес.</p>
        <p>Участниците в конференцията имат възможност да присъстват на разнообразни обучителни сесии, водени от експерти в техните области. Тези сесии предоставят ценни знания и умения, които могат да бъдат непосредствено приложени в работата. Освен това, социалните събития и дискусионните панели създават благоприятна среда за изграждане на дълготрайни бизнес връзки и партньорства.</p>
        <Button className="mt-8">
          НАУЧИ ПОВЕЧЕ <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </ContentSection>
    </SectionWrapper>
  );
}
