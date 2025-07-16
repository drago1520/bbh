import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type HeroProps = {
  title?: string;
  description?: string;
  ctaText?: string;
  secondaryText?: string;
  backgroundImage?: string;
};

export default function Hero({ title = 'Creative Design Solutions That Stand Out', description = 'Showcasing a collection of thoughtfully crafted designs and artistic expressions that blend creativity with functionality.', ctaText = 'View Portfolio', secondaryText = 'Contact Me', backgroundImage = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3' }: HeroProps) {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Full screen background image */}
      <Image src={backgroundImage} alt="Design portfolio showcase" fill className="object-cover object-center" priority />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content container */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">{title}</h1>

          <p className="mt-6 text-xl text-white/90">{description}</p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="#цени">{ctaText}</Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href="#локация">{secondaryText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
