import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const newsArticles = [
  {
    id: 1,
    title: "Пет съвета за оптимизиране на онлайн магазина",
    excerpt:
      "Научете съветите за подобряване на производителността на вашия онлайн магазин...",
    date: "преди 3 мин.",
    dateDisplay: "Пон, Септември 18",
    slug: "pet-saveta-za-optimizirane-na-onlajn-magazina",
  },
  {
    id: 2,
    title: "3 грешки при дигитален маркетинг за начинаещи имоти",
    excerpt:
      "Научете съветите за подобряване на производителността на вашия онлайн магазин...",
    date: "вчера",
    dateDisplay: "Пон, Септември 18",
    slug: "3-greski-pri-digitalen-marketing-za-nachinaesti-imoti",
  },
  {
    id: 3,
    title: "7 съвета за дигитален маркетинг при стартиращи и малки бизнеси",
    excerpt:
      "Научете съветите за подобряване на производителността на вашия онлайн магазин...",
    date: "преди 1 месец",
    dateDisplay: "Пон, Септември 18",
    slug: "7-saveta-za-digitalen-marketing-pri-startirasti-i-malki-biznesi",
  },
];

export default function News({
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <section
      className={cn("py-16", className)}
      aria-labelledby="news-heading"
      {...props}
    >
      <div className="container">
        <header className="mb-8 text-center sm:mb-12">
          <Badge variant="brand" className="mb-4">
            НОВИНИ
          </Badge>
          <h3 id="news-heading" className="text-h3-size px-4">
            Най-актуалните дигитални теми и тенденции
          </h3>
        </header>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 xl:grid-cols-3">
          {newsArticles.map((article) => (
            <article key={article.id}>
              <Card className="group relative h-full cursor-pointer overflow-hidden transition-shadow hover:shadow-lg">
                <Link href="#">
                  <div className="relative aspect-3/2">
                    <Image
                      src="/card.avif"
                      alt={`Featured image for ${article.title}`}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="dark:bg-background/20 absolute top-0 left-0 h-full w-full transition-all duration-500 group-hover:scale-105"></div>
                  </div>
                  <CardHeader>
                    <CardTitle>
                      <h4>
                        <Button
                          variant="link"
                          className="mb-4 justify-start p-0 text-start text-lg font-bold whitespace-normal"
                        >
                          {article.title}
                        </Button>
                      </h4>
                    </CardTitle>
                    <CardDescription className="text-xs">
                      <p>{article.excerpt}</p>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-8 flex items-center justify-between">
                    <time
                      dateTime={article.date}
                      className="text-muted-foreground flex items-center gap-2 text-xs"
                    >
                      <Calendar className="size-3.5" /> {article.dateDisplay}
                    </time>
                  </CardContent>
                </Link>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
