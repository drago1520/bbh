'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckIcon, TimerIcon, SparklesIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const plans = [
  {
    name: 'Basic',
    originalPrice: '$19',
    discountedPrice: '$15',
    description: 'Perfect for individuals and small projects',
    features: ['Up to 5 projects', 'Basic analytics', '24/7 email support', '10GB storage'],
    discount: '20% off',
    popular: false,
  },
  {
    name: 'Pro',
    originalPrice: '$49',
    discountedPrice: '$39',
    description: 'Ideal for professionals and small teams',
    features: ['Unlimited projects', 'Advanced analytics', 'Priority support', '50GB storage', 'API access', 'Team collaboration', 'Custom domains'],
    discount: '20% off',
    popular: true,
    bonus: 'Free onboarding call',
  },
  {
    name: 'Enterprise',
    originalPrice: '$99',
    discountedPrice: '$79',
    description: 'For large organizations with advanced needs',
    features: ['Unlimited projects', 'Enterprise analytics', '24/7 phone support', '500GB storage', 'Advanced API access', 'Team collaboration', 'Custom domains', 'SSO authentication', 'Custom integrations'],
    discount: '20% off',
    popular: false,
    bonus: 'Free migration assistance',
  },
];

// Format time as days, hours, minutes, seconds
function formatTime(seconds: number) {
  const days = Math.floor(seconds / (24 * 60 * 60));
  const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((seconds % (60 * 60)) / 60);
  const secs = Math.floor(seconds % 60);

  return {
    days,
    hours,
    minutes,
    seconds: secs,
  };
}

export default function PricingWithCountdown() {
  // Set countdown to 3 days from now
  const [timeLeft, setTimeLeft] = useState(3 * 24 * 60 * 60);
  const [progress, setProgress] = useState(100);

  // Update countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Update progress bar
  useEffect(() => {
    const totalTime = 3 * 24 * 60 * 60;
    const progressValue = (timeLeft / totalTime) * 100;
    setProgress(progressValue);
  }, [timeLeft]);

  const formattedTime = formatTime(timeLeft);

  return (
    <section className="from-primary/5 to-background w-full bg-gradient-to-b py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge variant="outline" className="px-3 py-1 text-sm">
            Limited Time Offer
          </Badge>
          <div className="space-y-2">
            <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Summer Sale: 20% Off All Plans</h3>
            <p className="text-muted-foreground mx-auto max-w-2xl md:text-xl/relaxed">Upgrade now and save big on all our plans. Offer ends soon!</p>
          </div>

          <div className="mt-4 w-full max-w-md">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-medium">Sale ends in:</span>
              <span className="text-muted-foreground">Limited spots available</span>
            </div>
            <Progress value={progress} className="h-2" />
            <div className="mt-4 grid grid-cols-4 gap-2 text-center">
              <div className="bg-muted rounded-lg p-2">
                <div className="text-2xl font-bold">{formattedTime.days}</div>
                <div className="text-muted-foreground text-xs">Days</div>
              </div>
              <div className="bg-muted rounded-lg p-2">
                <div className="text-2xl font-bold">{formattedTime.hours}</div>
                <div className="text-muted-foreground text-xs">Hours</div>
              </div>
              <div className="bg-muted rounded-lg p-2">
                <div className="text-2xl font-bold">{formattedTime.minutes}</div>
                <div className="text-muted-foreground text-xs">Minutes</div>
              </div>
              <div className="bg-muted rounded-lg p-2">
                <div className="text-2xl font-bold">{formattedTime.seconds}</div>
                <div className="text-muted-foreground text-xs">Seconds</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {plans.map(plan => (
            <Card key={plan.name} className={cn('relative flex flex-col overflow-hidden', plan.popular && 'border-primary shadow-md')}>
              {plan.popular && <div className="bg-primary text-primary-foreground absolute top-0 right-0 rounded-bl-lg px-3 py-1 text-xs font-medium">Most Popular</div>}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">{plan.discountedPrice}</span>
                  <span className="text-muted-foreground ml-1 text-sm">/month</span>
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-muted-foreground text-sm line-through">{plan.originalPrice}</span>
                  <Badge variant="secondary" className="text-xs">
                    {plan.discount}
                  </Badge>
                </div>
                <p className="text-muted-foreground mt-2 text-sm">{plan.description}</p>
              </CardHeader>
              <CardContent className="flex-1">
                {plan.bonus && (
                  <div className="bg-primary/10 mb-4 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <SparklesIcon className="text-primary h-4 w-4" />
                      <span className="text-sm font-medium">Bonus: {plan.bonus}</span>
                    </div>
                  </div>
                )}
                <ul className="space-y-2 text-sm">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-center">
                      <CheckIcon className="text-primary mr-2 h-4 w-4" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.popular ? 'default' : 'outline'} asChild>
                  <Link href="/signup">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
