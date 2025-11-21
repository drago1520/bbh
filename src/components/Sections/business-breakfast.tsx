import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { ComponentProps } from "react";
import {
  SectionWrapper,
  MediaSection,
  ContentSection,
} from "./content-with-media-and-button";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export default function BusinessBreakfast({
  isImageRight = true,
  className,
  ...props
}: { isImageRight?: boolean } & ComponentProps<"section">) {
  return (
    <SectionWrapper className={cn("py-16", className)} {...props}>
      <MediaSection isImageRight={isImageRight}>
        <div className="relative aspect-[4/3]">
          <Image
            src="/section-1.avif"
            alt="business breakfast illustration showing people collaborating"
            fill
            className="object-contain"
          />
        </div>
      </MediaSection>
      <div>
        <ContentSection>
          {/* <Badge variant="brand">Конференции</Badge> */}
          <h3 id="business-breakfast-heading" className="text-h3-size mt-4">
            Бизнес на друго ниво
          </h3>
          <p>
            Нашата месечна бизнес закуска е перфектната възможност да започнете
            деня с полезни контакти и вдъхновяващи разговори. Докато се
            наслаждавате на закуската, ще имате шанса да се запознаете с хора от
            различни индустрии и да разширите професионалната си мрежа.
          </p>
          <p>
            Всяка бизнес закуска включва формат, където всеки участник има точно
            60 секунди да представи своя бизнес и да сподели какво търси -
            партньори, клиенти, доставчици или конкретни услуги. Това е
            най-интересната и динамична част от събитието, която създава
            истински възможности за бизнес. Форматът е специално създаден да
            бъде ефективен и достъпен - събитието продължава около 2 часа в
            удобно утринно време.
          </p>
        </ContentSection>
        <Button className="mt-8">
          НАУЧИ ПОВЕЧЕ <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </SectionWrapper>
  );
}
