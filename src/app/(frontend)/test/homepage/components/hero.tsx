import ServiceCards from "./service-cards";

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('/hero-bg.avif')", 
          filter: "blur(2px)",
        }}
        aria-hidden="true"
      ></div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-brand-primary/4 to-brand-secondary/8"
        aria-hidden="true"
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>

      <div className="relative z-10 container py-8 sm:py-12 lg:py-16 flex-1 flex flex-col justify-center items-center text-center text-white">
        <div className="mb-8 sm:mb-12 lg:mb-16 max-w-4xl">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-2 sm:px-4">
            Портал за бизнес решения, иновации и обучения, които ви помагат да развиете бизнеса си
          </h1>
          <p className="text-sm sm:text-base lg:text-lg mb-6 lg:mb-8">ПРИ НАС ЩЕ ОТКРИЕТЕ</p>
        </div>
        <ServiceCards />
      </div>
    </section>
  )
}
