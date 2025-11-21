import Marquee from "react-fast-marquee";
import Image from "next/image";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { errorMsgs } from "@/utils/error";
import { PartnersNProps } from "@/payload-types";

export default function PartnersMarquee({
  className,
  partners,
  ...props
}: ComponentProps<"section"> & { partners: PartnersNProps }) {
  return (
    <section
      className={cn("py-16", className)}
      aria-labelledby="partners-heading"
      {...props}
    >
      <div className="container text-center">
        <p className="text-brand-accent mb-2 text-sm font-semibold">
          СЕ ПОДКРЕПЯМЕ ВЗАИМНО
        </p>
        <h2
          id="partners-heading"
          className="text-foreground mb-6 text-lg font-bold sm:text-xl lg:mb-8 lg:text-2xl"
        >
          С подкрепата на
        </h2>
      </div>
      <Marquee pauseOnHover pauseOnClick autoFill speed={10} className="mt-12">
        {partners.images.map((partner, i) => {
          if (typeof partner === "string")
            throw new Error(errorMsgs.imgIsString);
          if (!partner.url)
            throw new Error(
              `Липсва url на снимка за партньорите:  ${partner.id}`,
            );
          return (
            <Image
              key={i}
              src={partner.url}
              alt={partner.alt || "cvetita-herbal"}
              width={partner.width || 80}
              height={partner.height || 80}
              className="mx-12"
            />
          );
        })}
      </Marquee>
    </section>
  );
}
