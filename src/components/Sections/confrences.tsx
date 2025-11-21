import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import {
  ContentSection,
  MediaSection,
  SectionWrapper,
} from "@/components/Sections/content-with-media-and-button";

export default function Confrences({
  isImageRight = true,
  className,
  ...props
}: { isImageRight?: boolean } & ComponentProps<"section">) {
  return (
    <SectionWrapper
      className={cn("dark:bg-background bg-red-100 py-16", className)}
      {...props}
    >
      <MediaSection isImageRight={isImageRight}>
        <div className="relative aspect-[4/3]">
          <Image
            src="/section-1.avif"
            alt="confrences illustration showing people collaborating"
            fill
            className="object-contain"
          />
        </div>
      </MediaSection>
      <div>
        <ContentSection>
          {/* <Badge variant="brandOrange">Конференции</Badge> */}
          <h3 id="confrences-heading" className="text-h3-size mt-4">
            Развитие и нови възможности
          </h3>
          <p>
            Нашата ежегодна конференция съчетава най-доброто от света на
            нетуъркинга и обученията, предоставяйки уникална възможност за
            развитие на вашия бизнес. Събитието е специално проектирано да
            обедини професионалисти от различни сектори, които да обменят идеи и
            опит, като същевременно разширяват своите мрежи от контакти.
          </p>
          <p>
            Ежегодната конференция е не само източник на нови знания, но и
            катализатор за иновации и успех. Присъединете се към нас и се
            възползвайте от всички предимства, които това уникално събитие може
            да предложи на вашия бизнес.
          </p>
          <p>
            Участниците в конференцията имат възможност да присъстват на
            разнообразни обучителни сесии, водени от експерти в техните области.
            Тези сесии предоставят ценни знания и умения, които могат да бъдат
            непосредствено приложени в работата. Освен това, социалните събития
            и дискусионните панели създават благоприятна среда за изграждане на
            дълготрайни бизнес връзки и партньорства.
          </p>
        </ContentSection>
        <Button className="mt-8">
          НАУЧИ ПОВЕЧЕ <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </SectionWrapper>
  );
}
