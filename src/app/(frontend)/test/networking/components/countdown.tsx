'use client';
import Countdown from 'react-countdown';

function UI({ days, hours, minutes, seconds }: { days: number; hours: number; minutes: number; seconds: number }) {
  const format = (time: number) => time.toString().padStart(2, '0')
  return (
    <time className="text-foreground flex w-fit rounded-md dark:border dark:bg-transparent shadow-lg bg-accent xl:text-7xl text-xl sm:text-3xl">
      <div className='py-8 px-4 border-r'>
        <span className="xl:w-24 sm:w-9.5 w-8 flex justify-center items-center">{format(days)}</span>
      </div>
      <div className='py-8 px-4 border-r'>
        <span className="xl:w-24 sm:w-9.5 w-8 flex justify-center items-center">{format(hours)}</span>
      </div>
      <div className='py-8 px-4 border-r'>
        <span className="xl:w-24 sm:w-9.5 w-8 flex justify-center items-center">{format(minutes)}</span>
      </div>
      <div className='py-8 px-4'>
        <span className="xl:w-24 sm:w-9.5 w-8 flex justify-center items-center">{format(seconds)}</span>
      </div>
    </time>
  );
}
export default function CountdownTimer() {
  return <Countdown date={Date.now() + 1000 * 60 * 60 * 24} renderer={UI} />;
}
