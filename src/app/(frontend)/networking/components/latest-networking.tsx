"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, ExternalLink, MapPin, Plus } from "lucide-react";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import CountDownTimer from "./countdown";
import SignUpDialog from "./sign-up-modal";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { formatToBulgarianDate } from "@/utils/format-bulgarian-datetime";
import { MediaSection } from "@/components/Sections/content-with-media-and-button";
import CountdownTimer from "./countdown";
import RichText from "@/components/rich-text";
import { EventProps } from "@/payload-types";

/**
 * @description Image is the right (dekstop) & up (mobile) by default.
 */
export default function LatestNetworking({
  isImageRight = false,
  event,
  className,
  ...props
}: {
  isImageRight?: boolean;
  event: EventProps | undefined;
} & ComponentProps<"section">) {
  if (!event) return;

  const {
    title,
    date,
    maxGuests,
    thumbnail,
    description,
    location,
    locationImg,
    locationUrl,
  } = event;
  if (typeof thumbnail === "string" || typeof locationImg === "string")
    throw new Error("Няма банер или снимка");
  const showLocation =
    location && (locationImg || location.toLowerCase().includes("gravity"));
  return (
    <section
      aria-labelledby="networking-heading"
      className={cn("pb-16", className)}
      {...props}
    >
      <div className="container space-y-8 py-16 sm:space-y-16 xl:space-y-20">
        <div className="relative aspect-square sm:aspect-video">
          <Image
            src={thumbnail.url || ""}
            alt={thumbnail.alt}
            fill
            priority
            className="size-full rounded-md object-cover shadow-xl"
          />
        </div>
        <div className="grid justify-center gap-6 sm:gap-8 xl:grid-cols-2 xl:gap-12">
          <MediaSection
            isImageRight={isImageRight}
            className="xl:bg-muted/20 order-last space-y-16 rounded-md xl:order-first xl:p-8"
          >
            {showLocation && (
              <div className="flex h-60 justify-between gap-8">
                <Link
                  target="_blank"
                  href={locationUrl || "#"}
                  className="relative w-full rounded-md text-gray-50 shadow-md"
                >
                  <Image
                    src={locationImg?.url || "/gravity-bar.jpg"}
                    className="absolute top-0 left-0 h-full rounded-md object-cover"
                    width={1920}
                    height={160}
                    alt={
                      locationImg?.alt ||
                      "Локация следващо бизнес събитие за нетуъркинг"
                    }
                  />
                  <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4">
                    <h4 className="text-stroke-md text-xl font-semibold">
                      Локация
                    </h4>
                    <address className="text-stroke-sm flex items-center gap-1 text-sm">
                      <MapPin className="size-4" /> <span>{location}</span>
                    </address>
                  </div>
                </Link>
                {/* Unauthorized bug fix: #https://www.perplexity.ai/search/i-am-running-localhost-with-go-4._UjgRMQTKQ4SlfyA2pXg */}
                <div className="hidden overflow-hidden rounded-md shadow-md grayscale-75 sm:block">
                  <GoogleMapsEmbed
                    apiKey={"AIzaSyBqcwYbGqE3Uc6xg7scMXeWoeKzItrlWmw"}
                    mode="place"
                    width="100%"
                    height={384}
                    zoom="14"
                    q={location}
                  />
                </div>
              </div>
            )}
            <CountdownTimer className="hidden xl:flex" endDate={date} />
          </MediaSection>
          <article className="xl:col-span-1">
            <h3 id="networking-heading" className="text-h3-size mb-2">
              {title}
            </h3>
            <div className="flex flex-col justify-start gap-4 font-semibold sm:flex-row sm:items-center">
              <Button variant={"link"} asChild className="pl-0">
                <Link
                  href="#"
                  className="prose dark:prose-invert flex items-center justify-start gap-1"
                >
                  <Calendar className="size-4" /> {formatToBulgarianDate(date)}
                </Link>
              </Button>
              <Button variant={"link"} asChild>
                <Link
                  href="#"
                  className="prose dark:prose-invert flex items-center justify-start gap-1 pl-0"
                >
                  <MapPin className="size-4" /> <span>{location}</span>
                </Link>
              </Button>
            </div>
            <div className="mt-6">
              <RichText data={description} />
            </div>
            <div className="mt-12 xl:hidden">
              <CountDownTimer endDate={date} />
            </div>
            <div className="mt-8">
              {maxGuests && (
                <span className="text-destructive block text-sm italic">
                  Местата за събитието са ограничени до{" "}
                  <span className="font-semibold">{maxGuests}</span>
                </span>
              )}
              <div className="mt-3 flex flex-col gap-4">
                <SignUpDialog eventId={event.id}>
                  <Button size="lg">
                    ЗАПИШИ СЕ <Plus />
                  </Button>
                </SignUpDialog>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="#">
                    ПРОЧЕТИ ПОВЕЧЕ <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Badges({ className }: ComponentProps<typeof Badge>) {
  return (
    <div className={cn("space-x-2", className)}>
      <Badge variant="secondary">Предстоящ нетуъркинг</Badge>
      <Badge variant="secondary">С Лектор</Badge>
    </div>
  );
}
