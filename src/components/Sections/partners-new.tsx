import Marquee from 'react-fast-marquee';
import Image from 'next/image';

export default function PartnersMarquee() {
  return (
    <section className="py-12" aria-labelledby="partners-heading">
      <div className="container text-center">
        <p className="text-brand-accent mb-2 text-sm font-semibold">СЕ ПОДКРЕПЯМЕ ВЗАИМНО</p>
        <h2 id="partners-heading" className="text-foreground mb-6 text-lg font-bold sm:text-xl lg:mb-8 lg:text-2xl">
          С подкрепата на
        </h2>
      </div>
      <Marquee pauseOnHover pauseOnClick autoFill speed={10} className="mt-12">
        <Image src="/cvetita-herbal.png" alt="cvetita-herbal" width={60} height={60} className="mx-12" />
      </Marquee>
    </section>
  );
}
