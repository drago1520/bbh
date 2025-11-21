import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  ContentSection,
  MediaSection,
  SectionWrapper,
} from "@/components/Sections/content-with-media-and-button";

export default function WhyAreNewcontactImportant({
  isImageRight = true,
  className,
  ...props
}: { isImageRight?: boolean } & ComponentProps<"section">) {
  return (
    <SectionWrapper
      className={cn("bg-teal-500/20 py-16", className)}
      aria-labelledby="networking-heading"
      {...props}
    >
      <MediaSection isImageRight={isImageRight}>
        <div className="relative aspect-[4/3]">
          <Image
            src="/section-1.avif"
            alt="Networking illustration showing people collaborating"
            fill
            className="object-contain"
          />
        </div>
      </MediaSection>
      <div>
        <ContentSection>
          {/* <Badge variant="brand">Нетуъркинг</Badge> */}
          <h3 id="networking-heading" className="text-h3-size mt-4">
            Защото новите контакти са важни
          </h3>
          <p>
            Като хора, организирали над 50 нетуъркинг събития, можем да ви
            споделим какви са ползите за вашия бизнес. Нетъркинг събитията са
            изключително важни, защото те предоставят възможности за създаване
            на нови бизнес контакти и партньорства. Освен това, тези събития
            позволяват обмен на идеи и опит между професионалисти в различни
            сфери, което може да вдъхнови иновации и подобрения в бизнеса.
            Участието в нетъркинг събития също така повишава видимостта на
            вашата компания и укрепва вашия бранд.
          </p>
          <p>
            Нетъркингът създава благоприятна среда за създаване на доверие и
            лоялност между партньорите. Той предоставя възможност за споделяне
            на ресурси и намиране на решения на общи проблеми. В дългосрочен
            план, тези събития могат да доведат до устойчив растеж и разширяване
            на вашата мрежа от професионални контакти.
          </p>
        </ContentSection>
        <Button className="mt-8" asChild>
          <Link href="#">
            ВИЖ КАЛЕНДАР <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
