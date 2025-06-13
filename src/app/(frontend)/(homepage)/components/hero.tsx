'use client';
import ServiceCards from './service-cards';

export default function Hero() {
  return (
    <section className="relative flex min-h-[60vh] flex-col sm:min-h-[70vh] lg:min-h-[80vh]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.avif')", //! Снимка на Бургас
          filter: 'blur(2px)',
        }}
        aria-hidden="true"
      ></div>

      {/* Gradient Overlay */}
      <div className="from-brand-primary/4 to-brand-secondary/8 absolute inset-0 bg-gradient-to-r" aria-hidden="true"></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/16 dark:bg-black/40" aria-hidden="true"></div>

      <div className="relative z-10 container flex flex-1 flex-col items-center justify-center py-8 text-center sm:py-12 lg:py-16">
        <div className="mb-8 max-w-4xl sm:mb-12 lg:mb-16">
          {/* <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-2 sm:px-4">
            Портал за бизнес решения, иновации и обучения, които ви помагат да развиете бизнеса си
          </h1> */}
          <h1 className="mb-4 px-2 text-left text-xl leading-tight font-bold sm:mb-6 sm:px-4 sm:text-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Бизнес общостта на <span className="text-brand-accent relative inline-block [transform:perspective(500px)_rotateY(-15deg)] rounded bg-white px-1 transition-all duration-500 hover:[transform:perspective(500px)_rotateY(0deg)]">Бургас</span>
          </h1>
          <p className="mb-6 text-sm sm:text-base lg:mb-8 lg:text-lg">ПРИ НАС ЩЕ ОТКРИЕТЕ</p>
        </div>
        <ServiceCards />
      </div>
    </section>
  );
}
