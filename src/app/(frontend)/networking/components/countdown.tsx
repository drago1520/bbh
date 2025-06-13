'use client';
import Countdown from 'react-countdown';

function UI({ days, hours, minutes, seconds }: { days: number; hours: number; minutes: number; seconds: number }) {
  const format = (time: number) => time.toString().padStart(2, '0');
  return (
    <time className="text-foreground bg-accent dark:bg-accent flex w-fit rounded-md text-xl shadow-lg sm:text-3xl xl:text-7xl dark:border">
      <div className="flex flex-col border-r px-4 py-8 text-center">
        <span className="flex w-8 items-center justify-center sm:w-9.5 xl:w-24">{format(days)}</span>
        <span className="text-muted-foreground text-xs sm:text-sm">Дена</span>
      </div>
      <div className="flex flex-col border-r px-4 py-8 text-center">
        <span className="flex w-8 items-center justify-center sm:w-9.5 xl:w-24">{format(hours)}</span>
        <span className="text-muted-foreground text-xs sm:text-sm">часа</span>
      </div>
      <div className="flex flex-col border-r px-4 py-8 text-center">
        <span className="flex w-8 items-center justify-center sm:w-9.5 xl:w-24">{format(minutes)}</span>
        <span className="text-muted-foreground text-xs sm:text-sm">мин</span>
      </div>
      <div className="flex flex-col px-4 py-8 text-center">
        <span className="flex w-8 items-center justify-center sm:w-9.5 xl:w-24">{format(seconds)}</span>
        <span className="text-muted-foreground text-xs sm:text-sm">сек</span>
      </div>
    </time>
  );
}
export default function CountdownTimer({ endDate }: { endDate: string | number | Date | undefined }) {
  return <Countdown date={endDate} renderer={UI} />;
}
