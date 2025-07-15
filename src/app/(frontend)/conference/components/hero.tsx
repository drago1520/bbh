import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Full screen background image */}
      <Image src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Design portfolio showcase" fill className="object-cover object-center" priority />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content container */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Creative Design Solutions That Stand Out</h1>

          <p className="mt-6 text-xl text-white/90">Showcasing a collection of thoughtfully crafted designs and artistic expressions that blend creativity with functionality.</p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg">View Portfolio</Button>

            <Button variant="secondary" size="lg">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
