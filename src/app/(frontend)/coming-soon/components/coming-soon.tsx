import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

/**
 * @description The image should be
 */
export default function ComingSoonHero() {
  return (
    <div className="relative flex h-svh max-h-[600px] justify-center px-4">
      <div className="bg-background/90 mt-12 h-fit rounded-md px-4 py-12 sm:px-12">
        <h1 className="mb-1 text-2xl font-semibold sm:text-3xl">
          Очаквай скоро
        </h1>
        <p className="text-muted-foreground pb-8">
          Заяви интерес предварително, за да си от първите, които ще получат
          известие.
        </p>
        <Label>
          Имейл
          <span className="text-destructive">*</span>
        </Label>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Input type="email" className="bg-muted mt-1 sm:max-w-96" />
          <Button>Запиши ме</Button>
        </div>
      </div>
      <Image
        className="absolute -z-10 size-full object-cover"
        alt="Скоро ще правим обучения"
        src="/networking.avif"
        height={600}
        width={1920}
      />
    </div>
  );
}
