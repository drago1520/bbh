import { Users, Briefcase, GraduationCap, Building, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils/index"

const services = [
  {
    id: "networking",
    title: "НЕТУЪРКИНГ",
    icon: Users,
    colorClass: "bg-brand-accent",
    textColorClass: "text-brand-accent",
    href: "/networking",
  },
  {
    id: "business-procurement",
    title: "БИЗНЕС ЗАКУПКА",
    icon: Briefcase,
    colorClass: "bg-brand-accent",
    textColorClass: "text-brand-accent",
    href: "/business-procurement",
  },
  {
    id: "training",
    title: "ОБУЧЕНИЯ",
    icon: GraduationCap,
    colorClass: "bg-brand-purple",
    textColorClass: "text-brand-purple",
    href: "/training",
  },
  {
    id: "conferences",
    title: "КОНФЕРЕНЦИИ",
    icon: Building,
    colorClass: "bg-brand-orange",
    textColorClass: "text-brand-orange",
    href: "/conferences",
  },
]

export default function ServiceCards() {
  return (
    <div className="w-full max-w-6xl px-2 sm:px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-3 xl:gap-4">
        {services.map((service) => {
          const IconComponent = service.icon
          return (
            <Card
              key={service.id}
              className="bg-background/95 backdrop-blur-sm border-0 hover:bg-background transition-all cursor-pointer group"
              
            >
              <a
                href={service.href}
                className="p-3 sm:p-4 flex items-center space-x-2 sm:space-x-3"
                aria-label={`Learn more about ${service.title}`}
              >
                <div
                  className={cn(
                    "aspect-square w-8 sm:w-10 rounded-full flex items-center justify-center flex-shrink-0",
                    service.colorClass,
                  )}
                >
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </div>
                <span className="font-semibold text-foreground flex-1 text-xs sm:text-sm lg:text-base">
                  {service.title}
                </span>
                <ArrowRight
                  className={cn(
                    "w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform",
                    service.textColorClass,
                  )}
                />
              </a>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
