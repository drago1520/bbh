import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'The rebrand completely transformed how our customers perceive us. The strategic insights combined with outstanding design execution delivered results beyond our expectations.',
      name: 'Jessica Rivera',
      title: 'Marketing VP, GreenTech Solutions',
      projectName: 'GreenTech Brand Transformation',
      projectType: 'Brand Identity',
      projectImage: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1000&auto=format&fit=crop',
      clientImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop',
    },
    {
      quote: 'The website redesign resulted in a 65% increase in user engagement and a 40% reduction in bounce rate. Their focus on user experience and conversion optimization was exactly what we needed.',
      name: 'Thomas Grant',
      title: 'CEO, Elevate Finance',
      projectName: 'Elevate Finance Platform',
      projectType: 'Web Design & Development',
      projectImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
      clientImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
    },
  ];

  return (
    <section className="w-full py-16">
      <div className="container">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h3 className="text-h3-size mb-2 text-center">
              Client Success <span className="text-primary">Stories</span>
            </h3>
            <p className="text-muted-foreground text-lg">Real feedback from real clients on real projects</p>
          </div>
        </div>

        <div className="mt-16 space-y-28">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
              <div className={`order-2 ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <blockquote className="border-primary relative border-l-4 py-2 pl-6">
                  <p className="mb-6 text-xl leading-relaxed italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image src={testimonial.clientImage} alt={testimonial.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-muted-foreground text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </blockquote>
              </div>

              <div className={`order-1 ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <Link href="#" className="group block overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-xl">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image src={testimonial.projectImage} alt={testimonial.projectName} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90"></div>
                    <div className="absolute bottom-0 left-0 z-10 p-6 text-white">
                      <Badge variant="secondary" className="mb-2">
                        {testimonial.projectType}
                      </Badge>
                      <h3 className="text-2xl font-bold">{testimonial.projectName}</h3>
                      <p className="mt-2 font-medium text-white/80">View Project &rarr;</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
