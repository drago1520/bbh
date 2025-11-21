"use client";
import { cn } from "@/lib/utils";
import Countdown, { CountdownRenderProps } from "react-countdown";

function UI({ days, hours, minutes, seconds, props }: CountdownRenderProps) {
  const { className } = props;
  const format = (time: number) => time.toString().padStart(2, "0");
  return (
    <time
      className={cn(
        "text-foreground bg-accent dark:bg-accent flex w-fit rounded-md text-5xl shadow-md sm:text-7xl dark:border",
        className,
      )}
    >
      <div className="flex flex-col border-r px-4 py-8 text-center">
        <span className="flex w-12 items-center justify-center sm:w-24">
          {format(days)}
        </span>
        <span className="text-muted-foreground text-xs sm:text-sm">Дена</span>
      </div>
      <div className="flex flex-col border-r px-4 py-8 text-center">
        <span className="flex w-12 items-center justify-center sm:w-24">
          {format(hours)}
        </span>
        <span className="text-muted-foreground text-xs sm:text-sm">часа</span>
      </div>
      <div className="flex flex-col border-r px-4 py-8 text-center">
        <span className="flex w-12 items-center justify-center sm:w-24">
          {format(minutes)}
        </span>
        <span className="text-muted-foreground text-xs sm:text-sm">мин</span>
      </div>
      <div className="flex flex-col px-4 py-8 text-center">
        <span className="flex w-12 items-center justify-center sm:w-24">
          {format(seconds)}
        </span>
        <span className="text-muted-foreground text-xs sm:text-sm">сек</span>
      </div>
    </time>
  );
}
function UIConferencePricing({
  days,
  hours,
  minutes,
  seconds,
  props,
}: CountdownRenderProps) {
  const { className } = props;
  const format = (time: number) => time.toString().padStart(2, "0");
  return (
    <div className={cn("mt-4 grid grid-cols-4 gap-2 text-center", className)}>
      <div className="bg-muted rounded-lg p-2">
        <div className="text-2xl font-bold">{format(days)}</div>
        <div className="text-muted-foreground text-xs">Дни</div>
      </div>
      <div className="bg-muted rounded-lg p-2">
        <div className="text-2xl font-bold">{format(hours)}</div>
        <div className="text-muted-foreground text-xs">Часа</div>
      </div>
      <div className="bg-muted rounded-lg p-2">
        <div className="text-2xl font-bold">{format(minutes)}</div>
        <div className="text-muted-foreground text-xs">Мин.</div>
      </div>
      <div className="bg-muted rounded-lg p-2">
        <div className="text-2xl font-bold">{format(seconds)}</div>
        <div className="text-muted-foreground text-xs">Сек.</div>
      </div>
    </div>
  );
}
export default function CountdownTimer({
  endDate,
  variant = "default",
  className,
}: {
  endDate: string | number | Date | undefined;
  className?: string;
  variant?: "default" | "conferencePricing";
}) {
  return (
    <Countdown
      date={endDate}
      className={className}
      renderer={variant === "conferencePricing" ? UIConferencePricing : UI}
    />
  );
}
