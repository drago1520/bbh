import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export default function NetworkingEvents() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-background" aria-labelledby="networking-heading">
      <div className="container">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <article className="order-2 lg:order-1">
            <Badge variant="brand" className="mb-4">
              ПРЕДСТОЯЩИ
            </Badge>
            <h2
              id="networking-heading"
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 lg:mb-6"
            >
              Нетуъркинг събития
            </h2>
            <p className="text-muted-foreground mb-4 lg:mb-6 leading-relaxed text-sm sm:text-base">
              Нетуъркинг събитията са специално създадени за хора, които искат да създават нови връзки и да развиват
              бизнеса си. Нетуъркинг събитията са организирани около тема, за да предоставят възможност за
              професионалисти от различни области да се срещнат и да обменят идеи.
            </p>
            <p className="text-muted-foreground mb-6 lg:mb-8 leading-relaxed text-sm sm:text-base">
              Нетуъркинг събитията благодарение на бранд за създаване на доверие и лоялност между участниците.
            </p>
            <Button>
              ВИЖ КАЛЕНДАР <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </article>
          <div className="relative order-1 lg:order-2 w-full max-w-md lg:max-w-none mx-auto">
            <div className="aspect-[4/3] relative">
              <Image
                src="/section-1.avif?height=300&width=400"
                alt="Networking illustration showing people collaborating"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
