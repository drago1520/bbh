import { WhoIsTheConfForProps } from '@/payload-types';
import Image from 'next/image';

export default function WhoIsTheConfFor({ data }: { data: WhoIsTheConfForProps }) {
  return (
    <section className="py-16 md:pt-24">
      <div className="container mx-auto">
        {/* Mission Statement Header */}
        <div className="mb-16 text-center">
          <h2 className="text-h3-size mb-2 text-center">{data.title}</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">{data.subheading}</p>
        </div>

        {/* Three Pillars */}
        <div className="grid gap-8 md:grid-cols-3">
          {data.items.map(({ title, icon, description }, i) => (
            <div key={title + i} className="bg-card flex flex-col items-center rounded-lg border p-8 text-center shadow-sm transition-all hover:shadow-md">
              {icon && typeof icon !== 'string' && (
                <div className="bg-primary/10 text-primary flex h-14 w-14 items-center justify-center rounded-full">
                  <Image className="size-7" width={28} height={28} src={icon.url || ''} alt={icon.alt} />
                </div>
              )}
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="text-muted-foreground mt-3">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
