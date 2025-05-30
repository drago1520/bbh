import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { CalendarCheck2, Fan, Users } from 'lucide-react';
import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="my-12">
      <div className="mb-8 flex flex-col items-center justify-center xl:mb-16">
        <h1 className="scroll-m-20 text-2xl font-bold lg:text-4xl">За Нас</h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/test">BBH</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/test/about">За нас</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="container grid grid-cols-1 items-center gap-6 sm:gap-12 xl:grid-cols-2 xl:gap-12">
        <div className="relative mx-auto aspect-[4/3] w-full max-w-md xl:max-w-none">
          <Image src="/about.avif" alt="BBH team photo" fill />
        </div>
        <div className="flex h-full items-center">
          <div className="bg-muted p-12">
            <h2 className="text-foreground/80 scroll-m-20 text-lg tracking-tight">Нашата мисия</h2>
            <h3 className="text-foreground mb-4 text-xl font-bold sm:text-2xl lg:mb-6 lg:text-3xl">Създадохме Digital Sea защото...</h3>
            <p className="text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">Намираме се в морски Бургас – където алтернатива на пълноценния ни екип липсва. С WebTact бизнесът избира дигитална агенция, в която зад всеки един процес стои поне един съответен професионалист, който знае много добре какво прави.</p>
            <p className="text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">Работим ефективно дистанционно с клиенти от буквално цял свят. Заедно, ние сме дигитална сила, с която на своя страна получавате десетки дипломи, години опит, креативност, отдаденост – за вашата кауза и бизнес.</p>
          </div>
        </div>
      </div>
      <div className="container mt-12 grid justify-center gap-16 text-center min-[480px]:grid-cols-2 min-[480px]:gap-8 lg:grid-cols-3">
        <div className="flex w-full max-w-80 flex-col items-center justify-center rounded p-8 shadow-lg">
          <Fan className="mb-2" />
          <span className="text-foreground text-xl font-bold sm:text-2xl lg:text-3xl">50+</span>
          <span className="text-muted-foreground">Нетуъркинг събития</span>
        </div>
        <div className="flex w-full max-w-80 flex-col items-center justify-center rounded p-8 shadow-lg">
          <Users className="mb-2" />
          <span className="text-foreground text-xl font-bold sm:text-2xl lg:text-3xl">100+</span>
          <span className="text-muted-foreground">Души</span>
        </div>
        <div className="lg:col-span flex w-full max-w-80 flex-col items-center justify-center rounded p-8 shadow-lg min-[480px]:col-span-full min-[480px]:justify-self-center lg:col-span-1">
          <CalendarCheck2 className="mb-2" />
          <span className="text-foreground text-xl font-bold sm:text-2xl lg:text-3xl">3</span>
          <span className="text-muted-foreground">Ежегодни конференции</span>
        </div>
      </div>
    </section>
  );
}
