import Image from 'next/image';
import Marquee from './marquee';
import { Logo01 } from './logos';

const Partners = () => {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="overflow-hidden">
        <p className="text-center text-xl font-medium">More than 2.2 million companies worldwide already trust us</p>

        <div className="mt-20 max-w-screen-lg space-y-8">
          <Marquee pauseOnHover className="[--duration:30s]">
            {Array(8)
              .fill(null)
              .map((_, i) => (
                <div key={i} className="mr-10 h-10 w-auto">
                  <Image src={`logo${i + 1}.svg`} alt="logo" height={48} width={120} className="size-full object-contain" />
                </div>
              ))}
          </Marquee>
          <Marquee pauseOnHover reverse className="[--duration:30s]">
            {Array(8)
              .fill(null)
              .map((_, i) => (
                <div key={i} className="mr-10 h-10 w-auto">
                  <Image src={`logo${i + 1}.svg`} alt="logo" height={48} width={120} className="size-full object-contain" />
                </div>
              ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Partners;
