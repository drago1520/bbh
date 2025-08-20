import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckIcon, SparklesIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import CountdownTimer from '../../networking/components/countdown';
import { PricingProps } from '@/payload-types';
import Link from 'next/link';

const plansDefault: PricingProps['plans'] = [
  {
    title: 'Basic',
    originalPrice: '$19',
    discountedPrice: '$15',
    description: 'Perfect for individuals and small projects',
    features: [{ feature: 'Up to 5 projects' }, { feature: 'Basic analytics' }, { feature: '24/7 email support' }, { feature: '10GB storage' }],
    discount: '20% off',
    active: false,
  },
  {
    title: 'Pro',
    originalPrice: '$49',
    discountedPrice: '$39',
    description: 'Ideal for professionals and small teams',
    features: [{ feature: 'Unlimited projects' }, { feature: 'Advanced analytics' }, { feature: 'Priority support' }, { feature: '50GB storage' }, { feature: 'API access' }, { feature: 'Team collaboration' }, { feature: 'Custom domains' }],
    discount: '20% off',
    active: true,
    bonus: 'Free onboarding call',
  },
  {
    title: 'Enterprise',
    originalPrice: '$99',
    discountedPrice: '$79',
    description: 'For large organizations with advanced needs',
    features: [{ feature: 'Unlimited projects' }, { feature: 'Enterprise analytics' }, { feature: '24/7 phone support' }, { feature: '500GB storage' }, { feature: 'Advanced API access' }, { feature: 'Team collaboration' }, { feature: 'Custom domains' }, { feature: 'SSO authentication' }, { feature: 'Custom integrations' }],
    discount: '20% off',
    active: false,
    bonus: 'Free migration assistance',
  },
];

const dataDefault: PricingProps = {
  label: 'Limited Time Offer',
  title: 'Summer Sale: 20% Off All Plans',
  subheading: 'Upgrade now and save big on all our plans. Offer ends soon!',
  plans: plansDefault,
  saleEnd: '2025-07-18T12:30:00.000Z', //UTC timestamp
  blockType: 'PricingWithCountdown',
};

export default function PricingWithCountdown({ pricingProps = dataDefault, stripeUrl }: { pricingProps: PricingProps; stripeUrl: string }) {
  const { plans, saleEnd, title, label, subheading } = pricingProps;

  return (
    <section className="from-primary/5 to-background w-full bg-gradient-to-b py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge variant="outline" className="px-3 py-1 text-sm">
            {label}
          </Badge>
          <div className="space-y-2">
            <h3 id="цени" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {title}
            </h3>
            <p className="text-muted-foreground mx-auto max-w-2xl md:text-xl/relaxed">{subheading}</p>
          </div>

          <div className="mt-4 w-full max-w-md">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-medium">Тази цена е актуална още:</span>
              <span className="text-muted-foreground">Местата са ограничени</span>
            </div>
            {/* <Progress value={70} className="h-2" indicatorProps={{ className: 'bg-primary-conference' }} /> */}
            <CountdownTimer className="mt-4" endDate={saleEnd} variant="conferencePricing" />
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {plans.map(({ active, title, discount, discountedPrice, features, originalPrice, bonus, description }, i) => (
            <Card key={i} className={cn('relative flex flex-col overflow-hidden', active && 'border-primary-conference shadow-md', !active && 'text-muted-foreground! hidden cursor-not-allowed')}>
              {active && <div className="bg-primary-conference text-primary-foreground-conference absolute top-0 right-0 rounded-bl-lg px-3 py-1 text-xs font-medium">Активен</div>}
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">{discountedPrice || originalPrice}</span>
                </div>
                {discountedPrice && (
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-muted-foreground text-sm line-through">{originalPrice}</span>
                    {discount && (
                      <Badge variant="secondary" className={cn('text-xs', !active && 'text-muted-foreground')}>
                        {discount}
                      </Badge>
                    )}
                  </div>
                )}
                <p className="text-muted-foreground mt-2 text-sm">{description}</p>
              </CardHeader>
              <CardContent className="flex-1">
                {bonus && (
                  <div className="bg-primary-conference/10 mb-4 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <SparklesIcon className="text-primary-conference h-4 w-4" />
                      <span className="text-sm font-medium">Бонус: {bonus}</span>
                    </div>
                  </div>
                )}
                {features && (
                  <ul className="space-y-2 text-sm">
                    {features.map(({ feature }, i) => (
                      <li key={feature + i} className="flex items-center">
                        <CheckIcon className="text-primary-conference mr-2 h-4 w-4" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
              <CardFooter>
                {active ? (
                  <Button variant={'conference'} asChild className="w-full">
                    <Link href={stripeUrl}>Запиши се</Link>
                  </Button>
                ) : (
                  <Button className="w-full" disabled={true} variant={'outline'}>
                    Запиши се
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
