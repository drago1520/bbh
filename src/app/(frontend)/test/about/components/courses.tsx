import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ContentSection, MediaSection, SectionWrapper } from '@/components/Sections/content-with-media-and-button';
import { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export default function Courses({ isImageLeft = true, className, ...props }: { isImageLeft?: boolean } & ComponentProps<'section'>) {
  return (
    <SectionWrapper className={cn('bg-purple-500/20', className)} {...props}>
      <MediaSection isImageLeft={isImageLeft}>
        <div className="relative aspect-[4/3]">
          <Image src="/section-1.avif?height=300&width=400" alt="Networking illustration showing people collaborating" fill className="object-contain" />
        </div>
      </MediaSection>
      <div>
        <ContentSection>
          <Badge variant="brandPurle">Обучения</Badge>
          <h2 id="networking-heading" className="mt-4 text-xl font-bold lg:text-3xl">
            Всеки ден израстваме заедно
          </h2>
          <p>Обученията са сърцето на всяка успешна организация. Те са ключови за развитието и успеха на всяка организация, защото предоставят нови знания и умения на служителите. Освен това, те насърчават професионалното развитие и повишават мотивацията и ангажираността на екипа.</p>
          <p>Редовните обучения създават култура на непрекъснато усъвършенстване и иновации във фирмата. Те позволяват на служителите да се адаптират към нови технологии и методи на работа, което води до по-голяма ефективност и продуктивност. В дългосрочен план, инвестицията в обучения се отплаща чрез по-високи постижения и конкурентно предимство на пазара.</p>
        </ContentSection>
        <Button className="mt-8" asChild>
          <Link href="#">
            ВИЖ КАЛЕНДАРА <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
