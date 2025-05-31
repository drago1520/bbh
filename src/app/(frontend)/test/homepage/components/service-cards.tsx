import { Users, Briefcase, GraduationCap, Building, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils/index';
import Link from 'next/link';

const services = [
  {
    id: 'networking',
    title: 'НЕТУЪРКИНГ',
    icon: Users,
    colorClass: 'bg-brand-accent',
    textColorClass: 'text-brand-accent',
    href: '#',
  },
  {
    id: 'business-procurement',
    title: 'БИЗНЕС ЗАКУСКА',
    icon: Briefcase,
    colorClass: 'bg-brand-accent',
    textColorClass: 'text-brand-accent',
    href: '#',
  },
  {
    id: 'training',
    title: 'ОБУЧЕНИЯ',
    icon: GraduationCap,
    colorClass: 'bg-brand-purple',
    textColorClass: 'text-brand-purple',
    href: '#',
  },
  {
    id: 'conferences',
    title: 'КОНФЕРЕНЦИИ',
    icon: Building,
    colorClass: 'bg-brand-orange',
    textColorClass: 'text-brand-orange',
    href: '#',
  },
];

export default function ServiceCards() {
  return (
    <div className="w-full max-w-6xl px-2 sm:px-4">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 xl:grid-cols-4 xl:gap-4">
        {services.map(service => {
          const IconComponent = service.icon;
          return (
            <Card key={service.id} className="bg-background/95 hover:bg-background group cursor-pointer border-0 backdrop-blur-sm transition-all">
              <Link href={service.href} className="flex items-center space-x-2 p-3 sm:space-x-3 sm:p-4" aria-label={`Learn more about ${service.title}`}>
                <div className={cn('flex aspect-square w-8 flex-shrink-0 items-center justify-center rounded-full sm:w-10', service.colorClass)}>
                  <IconComponent className="text-primary-foreground h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <span className="text-foreground flex-1 text-xs font-semibold sm:text-sm lg:text-base">{service.title}</span>
                <ArrowRight className={cn('h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5', service.textColorClass)} />
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
