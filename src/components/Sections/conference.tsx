import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { ComponentProps } from "react";
import {
  ContentSection,
  MediaSection,
  SectionWrapper,
} from "@/components/Sections/content-with-media-and-button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Conference({
  isImageRight = true,
  className,
  ...props
}: { isImageRight?: boolean } & ComponentProps<"section">) {
  return (
    <SectionWrapper
      aria-labelledby="conference-heading"
      {...props}
      className={cn("py-16", className)}
    >
      <MediaSection isImageRight={isImageRight}>
        <div className="relative aspect-[4/3]">
          <Image
            src="/section-1.avif"
            alt="Conference illustration showing digital innovation"
            fill
            className="object-contain"
          />
        </div>
      </MediaSection>
      <div>
        <ContentSection>
          {/* <Badge variant="brandOrange">ДИГИТАЛНИ КОНФЕРЕНЦИИ</Badge> */}
          <h3 id="conference-heading" className="text-h3-size mt-4">
            Развитие и нови възможности
          </h3>
          <p>
            Нашите конференции събитията са създадени най-добро от света на
            нетуъркинга и обучението, предоставяйки уникална възможност за
            развитие на вашия бизнес.
          </p>
          <p>
            Участниците в конференциите имат възможност да представят на
            експерти от различни области в България и чужбина в различни
            области.
          </p>
        </ContentSection>
        <Button asChild className="mt-8">
          <Link href="#">
            НАУЧИ ПОВЕЧЕ <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
