import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ComponentProps } from "react";
import {
  ContentSection,
  MediaSection,
  SectionWrapper,
} from "@/components/Sections/content-with-media-and-button";
import { cn } from "@/lib/utils";

export default function NetworkingEvents({
  isImageRight = true,
  className,
  ...props
}: { isImageRight?: boolean } & ComponentProps<"section">) {
  return (
    <SectionWrapper className={cn("py-16", className)} {...props}>
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
          {/* <Badge variant="brand">ПРЕДСТОЯЩИ</Badge> */}
          <h3 id="networking-heading" className="text-h3-size mt-4">
            Нетуъркинг събития
          </h3>
          <p>
            Нетуъркинг събитията са специално създадени за хора, които искат да
            създават нови връзки и да развиват бизнеса си. Нетуъркинг събитията
            са организирани около тема, за да предоставят възможност за
            професионалисти от различни области да се срещнат и да обменят идеи.
          </p>
          <p>
            Нетуъркинг събитията благодарение на бранд за създаване на доверие и
            лоялност между участниците.
          </p>
        </ContentSection>
        <Button className="mt-8" asChild>
          <Link href="/networking">
            ВИЖ КАЛЕНДАРА <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
