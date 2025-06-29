import { Page } from '@/payload-types';
import ServiceCards from './service-cards-hero';
import { errorMsgs } from '@/utils/error';

export default function Hero({ heroImg }: { heroImg: Page['heroImg'] }) {
  if (typeof heroImg === 'string') throw new Error(errorMsgs.imgIsString);

  return (
    <section className="relative flex flex-col">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${heroImg ? heroImg.url : '/hero-bg.avif'}')`, //! Снимка на Бургас
          filter: 'blur(2px)',
        }}
        aria-hidden="true"
      ></div>

      {/* Gradient Overlay */}
      <div className="from-brand-primary/4 to-brand-secondary/8 absolute inset-0 bg-gradient-to-r" aria-hidden="true"></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/16 dark:bg-black/40" aria-hidden="true"></div>

      <div className="relative z-10 container flex flex-1 flex-col items-center justify-center py-8 text-center sm:py-12 lg:py-16">
        <div className="prose dark:prose-invert max-w-4xl">
          {/* <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-2 sm:px-4">
            Портал за бизнес решения, иновации и обучения, които ви помагат да развиете бизнеса си
          </h1> */}
          <h1 className="px-2 text-center text-5xl leading-normal sm:px-4">
            Бизнес общостта на <span className="text-brand-accent relative mt-4 inline-block [transform:perspective(500px)_rotateY(-15deg)] rounded bg-white px-1 py-2 text-6xl transition-all duration-500 hover:[transform:perspective(500px)_rotateY(0deg)]">Бургас</span>
          </h1>
        </div>
        <div className="mt-24">
          <ServiceCards />
        </div>
      </div>
    </section>
  );
}
