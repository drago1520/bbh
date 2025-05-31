import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function NetworkingEvents() {
  return (
    <section className="bg-background py-8 sm:py-12 lg:py-16" aria-labelledby="networking-heading">
      <div className="container">
        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:grid lg:grid-cols-2 lg:gap-12">
          <article className="order-2 lg:order-1">
            <Badge variant="brand" className="mb-4">
              ПРЕДСТОЯЩИ
            </Badge>
            <h2 id="networking-heading" className="text-foreground mb-4 text-xl font-bold sm:text-2xl lg:mb-6 lg:text-3xl">
              Нетуъркинг събития
            </h2>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed sm:text-base lg:mb-6">Нетуъркинг събитията са специално създадени за хора, които искат да създават нови връзки и да развиват бизнеса си. Нетуъркинг събитията са организирани около тема, за да предоставят възможност за професионалисти от различни области да се срещнат и да обменят идеи.</p>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed sm:text-base lg:mb-8">Нетуъркинг събитията благодарение на бранд за създаване на доверие и лоялност между участниците.</p>
            <Button asChild>
              <Link href="/test/networking">
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
