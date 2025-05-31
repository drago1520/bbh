'use client';
import Countdown from 'react-countdown';

function UI({ days, hours, minutes, seconds }: { days: number; hours: number; minutes: number; seconds: number }) {
  const format = (time: number) => time.toString().padStart(2, '0');
  return (
    <time className="text-foreground bg-accent flex w-fit rounded-md text-xl shadow-lg sm:text-3xl xl:text-7xl dark:border dark:bg-transparent">
      <div className="border-r px-4 py-8">
        <span className="flex w-8 items-center justify-center sm:w-9.5 xl:w-24">{format(days)}</span>
      </div>
      <div className="border-r px-4 py-8">
        <span className="flex w-8 items-center justify-center sm:w-9.5 xl:w-24">{format(hours)}</span>
      </div>
      <div className="border-r px-4 py-8">
        <span className="flex w-8 items-center justify-center sm:w-9.5 xl:w-24">{format(minutes)}</span>
      </div>
      <div className="px-4 py-8">
        <span className="flex w-8 items-center justify-center sm:w-9.5 xl:w-24">{format(seconds)}</span>
      </div>
    </time>
  );
}
export default function CountdownTimer() {
  return <Countdown date={Date.now() + 1000 * 60 * 60 * 24} renderer={UI} />;
}
