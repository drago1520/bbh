import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  ContentSection,
  MediaSection,
  SectionWrapper,
} from "@/components/Sections/content-with-media-and-button";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export default function Courses({
  isImageRight = true,
  className,
  ...props
}: { isImageRight?: boolean } & ComponentProps<"section">) {
  return (
    <SectionWrapper
      className={cn("bg-purple-500/20 py-16", className)}
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
          {/* <Badge variant="brandPurle">Обучения</Badge> */}
          <h3 id="networking-heading" className="text-h3-size mt-4">
            Всеки ден израстваме заедно
          </h3>
          <p>
            Обученията са сърцето на всяка успешна организация. Те са ключови за
            развитието и успеха на всяка организация, защото предоставят нови
            знания и умения на служителите. Освен това, те насърчават
            професионалното развитие и повишават мотивацията и ангажираността на
            екипа.
          </p>
          <p>
            Редовните обучения създават култура на непрекъснато усъвършенстване
            и иновации във фирмата. Те позволяват на служителите да се адаптират
            към нови технологии и методи на работа, което води до по-голяма
            ефективност и продуктивност. В дългосрочен план, инвестицията в
            обучения се отплаща чрез по-високи постижения и конкурентно
            предимство на пазара.
          </p>
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
