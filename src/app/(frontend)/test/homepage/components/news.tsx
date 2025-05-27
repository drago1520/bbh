import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

const newsArticles = [
  {
    id: 1,
    title: "Пет съвета за оптимизиране на онлайн магазина",
    excerpt: "Научете съветите за подобряване на производителността на вашия онлайн магазин...",
    date: "2024-09-18",
    dateDisplay: "Пон, Септември 18",
    slug: "pet-saveta-za-optimizirane-na-onlajn-magazina",
  },
  {
    id: 2,
    title: "3 грешки при дигитален маркетинг за начинаещи имоти",
    excerpt: "Научете съветите за подобряване на производителността на вашия онлайн магазин...",
    date: "2024-09-18",
    dateDisplay: "Пон, Септември 18",
    slug: "3-greski-pri-digitalen-marketing-za-nachinaesti-imoti",
  },
  {
    id: 3,
    title: "7 съвета за дигитален маркетинг при стартиращи и малки бизнеси",
    excerpt: "Научете съветите за подобряване на производителността на вашия онлайн магазин...",
    date: "2024-09-18",
    dateDisplay: "Пон, Септември 18",
    slug: "7-saveta-za-digitalen-marketing-pri-startirasti-i-malki-biznesi",
  },
]

export default function News() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-muted/50" aria-labelledby="news-heading">
      <div className="container">
        <header className="text-center mb-8 sm:mb-12">
          <Badge variant="brand" className="mb-4">
            НОВИНИ
          </Badge>
          <h2 id="news-heading" className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground px-4">
            Най-актуалните дигитални теми и тенденции
          </h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {newsArticles.map((article) => (
            <article key={article.id}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full group">
                <div className="aspect-[3/2] relative">
                  <Image
                    src="/card.avif?height=200&width=300"
                    alt={`Featured image for ${article.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4 sm:p-6">
                  <time dateTime={article.date} className="text-brand-accent text-xs font-semibold mb-2 block">
                    {article.dateDisplay}
                  </time>
                  <h3 className="font-bold text-foreground mb-3 leading-tight text-sm sm:text-base">
                    <a href={`/news/${article.slug}`} className="hover:text-brand-accent transition-colors">
                      {article.title}
                    </a>
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-4">{article.excerpt}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs sm:text-sm hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={`/news/${article.slug}`}>
                      ПРОЧЕТИ ПОВЕЧЕ <ArrowRight className="w-3 h-3 ml-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
