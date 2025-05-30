import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

/**
 * @description The image should be 
 */
export default function ComingSoonHero() {
  return (
    <div className="h-svh max-h-[600px] flex justify-center relative px-4">
      <div className="px-4 sm:px-12 py-12 mt-12 h-fit bg-background/90 rounded-md">
        <h1 className="sm:text-3xl text-2xl mb-1 font-semibold">Очаквай скоро</h1>
        <p className="pb-8 text-muted-foreground">Заяви интерес предварително, за да си от първите, които ще получат известие.</p>
        <Label>
          Имейл 
          <span className="text-destructive">*</span>
          </Label>
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
          <Input type="email" className="sm:max-w-96 bg-muted mt-1" />
          <Button>Запиши ме</Button>
        </div>
      </div>
      <Image className="absolute -z-10 size-full object-cover" alt="Скоро ще правим обучения" src='/networking.avif' height={600} width={1920} />      
    </div>
  );
}