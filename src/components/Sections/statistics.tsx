"use client";
import { cn } from "@/lib/utils";
import { StatisticsProps } from "@/payload-types";
import { errorMsgs } from "@/utils/error";
import Image from "next/image";
import { ComponentProps } from "react";
import CountUp from "react-countup";

export default function Statistics({
  className,
  withTitle = true,
  data,
  ...props
}: ComponentProps<"section"> & { withTitle?: boolean } & {
  data: StatisticsProps;
}) {
  if (!data) {
    console.error("Няма данни за статистиките на главната страница");
    return;
  }
  const { title, statisticsData } = data;
  if (statisticsData.length !== 3)
    throw new Error(`Няма 3 статистики, а ${statisticsData.length}`);
  statisticsData.forEach((statistic) => {
    if (typeof statistic.icon === "string")
      throw new Error(errorMsgs.imgIsString);
  });
  return (
    <section
      className={cn("py-16", className)}
      aria-labelledby="statistics-heading"
      {...props}
    >
      <div className="container text-7xl sm:text-6xl">
        {withTitle && (
          <h3
            id="statistics-heading"
            className="text-h3-size mb-12 text-center"
          >
            {title || "Статистики за компанията"}
          </h3>
        )}
        <dl className="mt-8 grid justify-center gap-16 text-center min-[480px]:grid-cols-2 min-[480px]:gap-8 lg:grid-cols-3">
          {statisticsData.map(({ id, icon, value, suffix, description }) => (
            <div
              key={id}
              className="dark:bg-accent bg-background z-10 flex w-full max-w-80 flex-col items-center justify-center gap-4 rounded p-8 shadow-xl dark:border-2"
            >
              {icon && typeof icon !== "string" && icon.url && (
                <Image
                  src={icon.url}
                  alt={icon.alt}
                  className="size-12"
                  width={48}
                  height={48}
                />
              )}
              <dd className="mt-2 font-bold">
                <CountUp
                  end={value}
                  suffix={suffix || undefined}
                  duration={8}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </dd>
              <dt className="text-muted-foreground text-base">{description}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
