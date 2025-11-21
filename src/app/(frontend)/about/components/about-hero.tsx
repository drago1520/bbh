import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentProps } from "react";

export default function AboutHero({
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <section className={cn("py-16", className)}>
      <div className="mb-8 flex flex-col items-center justify-center xl:mb-16">
        <h1 className="scroll-m-20 text-2xl font-bold lg:text-4xl">За Нас</h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">BBH</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/about">За нас</BreadcrumbLink>
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
            <h2 className="/80 scroll-m-20 text-lg tracking-tight">
              Нашата мисия
            </h2>
            <h3 className="text-h3-size">Създадохме Digital Sea защото...</h3>
            <p className="text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
              Намираме се в морски Бургас – където алтернатива на пълноценния ни
              екип липсва. С WebTact бизнесът избира дигитална агенция, в която
              зад всеки един процес стои поне един съответен професионалист,
              който знае много добре какво прави.
            </p>
            <p className="text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
              Работим ефективно дистанционно с клиенти от буквално цял свят.
              Заедно, ние сме дигитална сила, с която на своя страна получавате
              десетки дипломи, години опит, креативност, отдаденост – за вашата
              кауза и бизнес.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
