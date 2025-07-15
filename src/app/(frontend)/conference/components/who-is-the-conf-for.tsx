import { ShieldCheck, Lightbulb, Users } from 'lucide-react';

export default function WhoIsTheConfFor() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        {/* Mission Statement Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Mission</h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg md:text-xl">We strive to create meaningful digital experiences that transform businesses and enrich lives through innovative design and technology solutions.</p>
        </div>

        {/* Three Pillars */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Pillar 1 */}
          <div className="bg-card flex flex-col items-center rounded-lg border p-8 text-center shadow-sm transition-all hover:shadow-md">
            <div className="bg-primary/10 text-primary flex h-14 w-14 items-center justify-center rounded-full">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">Integrity</h3>
            <p className="text-muted-foreground mt-3">We hold ourselves to the highest ethical standards in all interactions. Honesty and transparency guide our relationships with clients and teammates.</p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-card flex flex-col items-center rounded-lg border p-8 text-center shadow-sm transition-all hover:shadow-md">
            <div className="bg-primary/10 text-primary flex h-14 w-14 items-center justify-center rounded-full">
              <Lightbulb className="h-7 w-7" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">Innovation</h3>
            <p className="text-muted-foreground mt-3">We continuously explore new possibilities and challenge conventional thinking to create solutions that are ahead of their time.</p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-card flex flex-col items-center rounded-lg border p-8 text-center shadow-sm transition-all hover:shadow-md">
            <div className="bg-primary/10 text-primary flex h-14 w-14 items-center justify-center rounded-full">
              <Users className="h-7 w-7" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">Collaboration</h3>
            <p className="text-muted-foreground mt-3">We believe in the power of diverse perspectives and foster an environment where teamwork and open communication drive our success.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
