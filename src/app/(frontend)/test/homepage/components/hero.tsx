'use client'
import ServiceCards from './service-cards';
import { FlipWords } from '@/components/ui/flip-words';

export default function Hero() {
  return (
    <section className="relative flex min-h-[60vh] flex-col sm:min-h-[70vh] lg:min-h-[80vh]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.avif')",
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
          <h1 className="mb-4 px-2 text-xl leading-tight font-bold sm:mb-6 sm:px-4 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl sm:text-center text-left">
              Портал за <br className='min-[380px]:hidden' />
              {/* prettier-ignore */}
              <FlipWords className='text-brand-accent dark:text-foreground bg-foreground dark:bg-brand-accent rounded sm:mx-2 px-2 text-center sm:min-w-60' words={['бизнес решения', 'иновации', 'обучения']} /> <br />
            които ви помагат да развиете бизнеса си
          </h1>
          <p className="mb-6 text-sm sm:text-base lg:mb-8 lg:text-lg">ПРИ НАС ЩЕ ОТКРИЕТЕ</p>
        </div>
        <ServiceCards />
      </div>
    </section>
  );
}
