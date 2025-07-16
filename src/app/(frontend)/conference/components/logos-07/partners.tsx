import Image from 'next/image';
import Marquee from './marquee';
import { Media } from '@/payload-types';

const urlsDefault = ['logo1.svg', 'logo2.svg', 'logo3.svg', 'logo4.svg', 'logo5.svg', 'logo6.svg', 'logo7.svg', 'logo8.svg'];

type PartnersProps = {
  subtitle?: string | null;
  images: (string | Media)[];
};
const Partners = ({ partnersProps }: { partnersProps: PartnersProps }) => {
  const { subtitle = 'More than 2.2 million companies worldwide already trust us', images = urlsDefault } = partnersProps;
  return (
    <div className="flex items-center justify-center py-16">
      <div className="overflow-hidden">
        <p className="text-center text-xl font-medium">{subtitle}</p>

        <div className="mt-20 max-w-screen-lg space-y-8">
          <Marquee pauseOnHover className="[--duration:30s]">
            {images.map((url, i) => (
              <div key={i} className="mr-10 h-10 w-auto">
                <Image src={typeof url === 'string' ? url : url.url ? url.url : ''} alt="logo" height={48} width={120} className="size-full object-contain" />
              </div>
            ))}
          </Marquee>
          <Marquee pauseOnHover reverse className="[--duration:30s]">
            {images.map((url, i) => (
              <div key={i} className="mr-10 h-10 w-auto">
                <Image src={typeof url === 'string' ? url : url.url ? url.url : ''} alt="logo" height={48} width={120} className="size-full object-contain" />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Partners;
