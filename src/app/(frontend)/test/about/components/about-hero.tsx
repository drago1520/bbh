import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { CalendarCheck2, Fan, Users } from 'lucide-react';
import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className='my-12'>
      <div className='flex flex-col items-center justify-center mb-8 xl:mb-16'>
        <h1 className='text-2xl lg:text-4xl font-bold scroll-m-20'>За Нас</h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/test">BBH</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href='/test/about'>За нас</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="container grid grid-cols-1 items-center gap-6 sm:gap-12 xl:grid-cols-2 xl:gap-12">
        <div className="relative mx-auto aspect-[4/3] w-full max-w-md xl:max-w-none">
          <Image src="/about.avif" alt="BBH team photo" fill />
        </div>
          <div className='h-full flex items-center '>
            <div className='bg-muted p-12'>
              <h2 className='text-foreground/80 text-lg tracking-tight scroll-m-20'>Нашата мисия</h2>
              <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 lg:mb-6'>Създадохме Digital Sea защото...</h3>
              <p className="text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">Намираме се в морски Бургас – където алтернатива на пълноценния ни екип липсва. С WebTact бизнесът избира дигитална агенция, в която зад всеки един процес стои поне един съответен професионалист, който знае много добре какво прави.</p>
              <p className="text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">Работим ефективно дистанционно с клиенти от буквално цял свят. Заедно, ние сме дигитална сила, с която на своя страна получавате десетки дипломи, години опит, креативност, отдаденост – за вашата кауза и бизнес.</p>
            </div>
          </div>
      </div>
      <div className='container grid lg:grid-cols-3 gap-16 mt-12 text-center justify-center min-[480px]:grid-cols-2 min-[480px]:gap-8'>
        <div className='shadow-lg rounded max-w-80 w-full flex flex-col items-center justify-center p-8'>
          <Fan className='mb-2'/>
          <span className='text-xl sm:text-2xl lg:text-3xl font-bold text-foreground'>50+</span>
          <span className='text-muted-foreground'>Нетуъркинг събития</span>
        </div>
        <div className='shadow-lg rounded max-w-80 w-full flex flex-col items-center justify-center p-8'>
          <Users className='mb-2'/>
          <span className='text-xl sm:text-2xl lg:text-3xl font-bold text-foreground'>100+</span>
          <span className='text-muted-foreground'>Души</span>
        </div>
        <div className='shadow-lg rounded max-w-80 w-full flex flex-col items-center justify-center p-8 lg:col-span-1 min-[480px]:col-span-full lg:col-span min-[480px]:justify-self-center'>
          <CalendarCheck2 className='mb-2'/>
          <span className='text-xl sm:text-2xl lg:text-3xl font-bold text-foreground'>3</span>
          <span className='text-muted-foreground'>Ежегодни конференции</span>
        </div>
      </div>
    </section>
  );
}
