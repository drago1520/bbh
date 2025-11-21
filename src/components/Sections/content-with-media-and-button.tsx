import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

/**
 * @description Image is the right (dekstop) & up (mobile) by default.
 */
export default function ContentWithMediaAndButtonExample({
  isImageRight = true,
  className,
  ...props
}: { isImageRight?: boolean } & ComponentProps<"section">) {
  return (
    <SectionWrapper className={cn(className)} {...props}>
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
          <h3 id="networking-heading" className="text-h3-size mt-4">
            Защото новите контакти са важни
          </h3>
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
            се свържеш на по-дълбоко ниво с останалите хора.{" "}
          </p>
          <p>
            Ти си само на една смислена среща разстояние от следващия си бизнес
            партньор или приятел за цял живот.
          </p>
        </ContentSection>
        <Button className="mt-8" asChild>
          <Link href="#">
            ПОДГОТВИ СЕ ЗА НЕТУЪРКИНГА <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}

export function SectionWrapper({
  className,
  children,
  containerProps,
  ...props
}: ComponentProps<"section"> & { containerProps?: ComponentProps<"div"> }) {
  return (
    <section
      className={cn("py-12", className)}
      aria-labelledby="networking-heading"
      {...props}
    >
      <div
        className={cn("container", containerProps?.className)}
        {...containerProps}
      >
        <div className="grid items-start gap-6 sm:gap-8 xl:grid-cols-2 xl:gap-12">
          {children}
        </div>
      </div>
    </section>
  );
}

////Image is the right (dekstop) & up (mobile) by default.
export function MediaSection({
  isImageRight = false,
  children,
  className,
  ...props
}: { isImageRight: boolean } & ComponentProps<"div">) {
  return (
    <div
      className={cn("h-fit w-full", isImageRight && "xl:order-last", className)}
      {...props}
    >
      {children}
    </div>
  );
}

//// Wrap this in a <div> you if you want other Components below the content.
export function ContentSection({
  className,
  children,
  ...props
}: ComponentProps<"article">) {
  return (
    <article className={cn("prose dark:prose-invert", className)} {...props}>
      {children}
    </article>
  );
}
