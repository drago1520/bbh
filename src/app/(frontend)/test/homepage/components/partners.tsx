export default function Partners() {
  const partners = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    name: `Partner ${i + 1}`,
  }))

  return (
    <section className="py-6 sm:py-8 lg:py-12 bg-muted/50" aria-labelledby="partners-heading">
      <div className="container text-center">
        <p className="text-brand-accent text-sm font-semibold mb-2">СЕ ПОДКРЕПЯМЕ ВЗАИМНО</p>
        <h2 id="partners-heading" className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-6 lg:mb-8">
          С подкрепата на
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 lg:gap-12 opacity-60">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="aspect-[3/2] w-12 sm:w-16 lg:w-24 bg-muted rounded-md"
              role="img"
              aria-label={partner.name}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
