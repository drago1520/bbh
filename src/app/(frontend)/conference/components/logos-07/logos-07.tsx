import { Logo01, Logo02, Logo03, Logo04, Logo05, Logo06, Logo07, Logo08 } from './logos';
import Marquee from './marquee';

const Logos07Page = () => {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="overflow-hidden">
        <p className="text-center text-xl font-medium">More than 2.2 million companies worldwide already trust us</p>

        <div className="mt-20 max-w-screen-lg space-y-8">
          <Marquee pauseOnHover className="[--duration:30s] [&_svg]:mr-10">
            <Logo01 />
            <Logo02 />
            <Logo03 />
            <Logo04 />
            <Logo05 />
            <Logo06 />
            <Logo07 />
            <Logo08 />
          </Marquee>
          <Marquee pauseOnHover reverse className="[--duration:30s] [&_svg]:mr-10">
            <Logo01 />
            <Logo02 />
            <Logo03 />
            <Logo04 />
            <Logo05 />
            <Logo06 />
            <Logo07 />
            <Logo08 />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Logos07Page;
