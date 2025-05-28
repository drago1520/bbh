import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export default function Conference() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-background" aria-labelledby="conference-heading">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <div className="relative w-full max-w-md lg:max-w-none mx-auto">
            <div className="aspect-[4/3] relative">
              <Image
                src="/section-1.avif"
                alt="Conference illustration showing digital innovation"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <article>
            <Badge className="mb-4 bg-brand-orange text-primary-foreground hover:bg-brand-orange/80">
              ДИГИТАЛНИ КОНФЕРЕНЦИИ
            </Badge>
            <h2
              id="conference-heading"
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6"
            >
              Развитие и нови възможности
            </h2>
            <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Нашите конференции събитията са създадени най-добро от света на нетуъркинга и обучението, предоставяйки
              уникална възможност за развитие на вашия бизнес.
            </p>
            <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Участниците в конференциите имат възможност да представят на експерти от различни области в България и
              чужбина в различни области.
            </p>
            <Button>
              НАУЧИ ПОВЕЧЕ <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </article>
        </div>
      </div>
    </section>
  )
}
