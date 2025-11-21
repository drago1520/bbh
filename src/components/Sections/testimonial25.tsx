import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Testimonial25CardProps, Testimonial25Props } from "@/payload-types";
import Link from "next/link";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const Testimonial25 = ({
  data,
  className,
  ...props
}: ComponentProps<"section"> & { data: Testimonial25Props }) => {
  const { title, helperText, ctaText, ctaHref, cards } = data;
  return (
    <section className={cn("py-16", className)} {...props}>
      <div className="container">
        <div className="space-y-4">
          <div className="prose dark:prose-invert">
            <h3 className="text-h3-size">{title}</h3>
            <p className="text-muted-foreground">{helperText}</p>
          </div>
          {ctaHref && ctaText && (
            <Button asChild variant="outline">
              <Link href={ctaHref || ""}>
                {ctaText} <ArrowRight className="size-4" />
              </Link>
            </Button>
          )}
        </div>

        <div className="relative mt-8 md:mt-12 lg:mt-20">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            {/* <div className="mt-8 flex gap-3">
              <CarouselPrevious className="static size-10 translate-x-0 translate-y-0" />
              <CarouselNext className="static size-10 translate-x-0 translate-y-0" />
            </div> */}
            <CarouselPrevious className="top-[50%] -left-2 z-10 size-10 md:-left-12" />
            <CarouselNext className="top-[50%] -right-2 z-10 size-10 md:-right-12" />
            <CarouselContent>
              {cards.map((testimonialBlock, index) => (
                <Testimonial25Card {...testimonialBlock} key={index} />
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Testimonial25 };

export function Testimonial25Card({
  author,
  image,
  quote,
  role,
  company,
}: Testimonial25CardProps) {
  if (typeof image === "string") {
    console.error(
      'Image found for Testimonial Card is type "string". Increase the query depth!',
    );
    return <div>Server Error</div>;
  }
  return (
    <CarouselItem className="max-w-96 grow basis-4/5 md:basis-3/5 lg:basis-[40%] xl:basis-1/4">
      <Card className="bg-muted h-full overflow-hidden border-none">
        <CardContent className="flex h-full flex-col p-0">
          <Image
            src={image.url || ""}
            alt={image.alt}
            height={image.height || 328}
            width={image.width || 384}
            className="h-[288px] object-cover object-top lg:h-[328px]"
          />
          <div className="flex flex-1 flex-col justify-between gap-10 p-6">
            <blockquote className="text-primary quote-teal text-lg leading-none! font-medium md:text-xl">
              {quote}
            </blockquote>
            <div className="space-y-0.5">
              <div className="text-sm font-semibold">{author}</div>
              <div className="text-muted-foreground text-xs">
                {role}, {company}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </CarouselItem>
  );
}
