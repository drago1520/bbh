import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Courses() {
  return (
    <section className="bg-purple-500/20 py-8 sm:py-12 lg:py-16" aria-labelledby="networking-heading">
      <div className="container">
        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:grid-cols-2 xl:grid xl:gap-12">
          <article className="order-2 xl:order-last">
            <Badge variant="brandPurle" className="mb-4">
              Обучения
            </Badge>
            <h2 id="networking-heading" className="text-foreground mb-4 text-xl font-bold sm:text-2xl lg:mb-6 lg:text-3xl">
              Всеки ден израстваме заедно
            </h2>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed sm:text-base lg:mb-6">Обученията са сърцето на всяка успешна организация. Те са ключови за развитието и успеха на всяка организация, защото предоставят нови знания и умения на служителите. Освен това, те насърчават професионалното развитие и повишават мотивацията и ангажираността на екипа.</p>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed sm:text-base lg:mb-8">Редовните обучения създават култура на непрекъснато усъвършенстване и иновации във фирмата. Те позволяват на служителите да се адаптират към нови технологии и методи на работа, което води до по-голяма ефективност и продуктивност. В дългосрочен план, инвестицията в обучения се отплаща чрез по-високи постижения и конкурентно предимство на пазара.</p>
            <Button asChild>
              <Link href="#">
                ВИЖ КАЛЕНДАРА <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
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
