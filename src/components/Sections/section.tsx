import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  SectionWrapper,
  MediaSection,
  ContentSection,
} from "./content-with-media-and-button";

/**
 * @description Image is the right (dekstop) & up (mobile) by default.
 */
export default function Section2Paragraphs({
  isImageRight = false,
  className,
  ...props
}: { isImageRight?: boolean } & ComponentProps<"section">) {
  return (
    <SectionWrapper
      className={cn("bg-teal-500/20 py-16", className)}
      {...props}
    >
      <MediaSection isImageRight={isImageRight}>
        <div className="relative aspect-[4/3]">
          <Image
            src="/section-1.avif"
            alt="Networking illustration showing people collaborating"
            width={800}
            height={600}
            className="object-contain"
          />
        </div>
      </MediaSection>
      <div>
        <ContentSection>
          {/* <Badge variant="brand">Нетуъркинг</Badge> */}
          <h3
            id="networking-heading"
            className="mt-4 text-xl font-bold lg:text-3xl"
          >
            Защото новите контакти са важни
          </h3>
          <p className="pl-4 leading-relaxed italic">
            <Link
              className="decoration-brand-accent underline underline-offset-3"
              href="https://www.linkedin.com/pulse/study-reveals-85-jobs-filled-networking-sandy-hutchison/"
              target="_blank"
            >
              Проучване на LinkedIn
            </Link>{" "}
            показва, че 85% от всички работни позиции се запълват чрез
            нетуъркинг, а не чрез обяви или директни кандидатури.
          </p>
          <p>
            Ефективният нетуъркинг през 2025 г. се основава на правилната
            нагласа. Да бъдеш любопитен. На готовността да задаваш въпроси. Да
            слушаш внимателно, защото знаеш, че това е най-бързия начин да се
            интересуват от теб.
          </p>
          <p>
            Най-силните контакти не се създават с размяната на визитки, а със
            задълбочени разговори с цел помагане на отсрещния човек. Умението да
            даваш, преди да поискаш, е най-ценният актив, който можеш да носиш
            със себе си на всяко събитие. Защото само с тази нагласа ще можеш да
            се свържеш на по-дълбоко ниво с останалите хора. Ти си само на една
            смислена среща разстояние от следващия си бизнес партньор или
            приятел за цял живот.
          </p>
        </ContentSection>
        <Button className="mt-8" asChild>
          <Link href="#">
            ПОДГОТВИ СЕ ЗА НЕТУЪРКИНГА <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
