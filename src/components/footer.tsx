import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Icons";
import { Label } from "@/components/ui/label";
import payloadConfig from "@payload-config";
import { getPayload } from "payload";
import { SocialIconsOnly } from "./SocialLinks";

const menuLinks = [
  // { label: 'Бизнес закуска', href: '#' },
  { label: "Конференции", href: "/conference" },
  // { label: 'Обучения', href: '#' },
  { label: "Нетуъркинг", href: "#" },
  { label: "Политика за поверителност", href: "#" },
  { label: "Политика за бисквитките", href: "#" },
];

export default async function Footer() {
  const config = await payloadConfig;
  const payload = await getPayload({ config: config });
  const result = (await payload.find({ collection: "contacts" })).docs.find(
    (r) => r,
  );

  return (
    <footer className="text-foreground/80 bg-muted/80 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:gap-8 xl:grid-cols-4">
          <div className="sm:col-span-2 xl:col-span-1">
            <Link href="/" className="group mb-4 flex items-center">
              <Logo className="fill-foreground/80" />
            </Link>
            {result && result.socials && result.socials.length > 0 && (
              <div className="mt-6 border-t pt-6">
                <SocialIconsOnly
                  socials={result.socials
                    .filter((social) => social.platform && social.url)
                    .map((social) => ({
                      platform: social.platform!,
                      url: social.url!,
                    }))}
                  className="justify-start"
                />
              </div>
            )}
          </div>

          <nav aria-label="Footer navigation">
            <h5 className="mb-4 text-sm font-semibold sm:text-base">МЕНЮ</h5>
            <ul className="text-muted-foreground space-y-2 text-xs sm:text-sm">
              {menuLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="dark:hover:text-brand-accent hover:text-brand-primary transition-colors hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="not-italic">
            <h5 className="mb-4 text-sm font-semibold sm:text-base">
              КОНТАКТИ
            </h5>
            <div className="text-muted-foreground space-y-2 text-xs sm:text-sm">
              <p>
                <Link
                  href="tel:+359878456939"
                  className="dark:hover:text-brand-accent hover:text-brand-primary transition-colors hover:underline"
                >
                  +359 878 456 939
                </Link>
              </p>
              <p>
                <Link
                  href="mailto:contact@burgasbh.com"
                  className="dark:hover:text-brand-accent hover:text-brand-primary transition-colors hover:underline"
                >
                  contact@burgasbh.com
                </Link>
              </p>
              <p>
                <Link
                  href="mailto:support@burgasbh.com"
                  className="dark:hover:text-brand-accent hover:text-brand-primary transition-colors hover:underline"
                >
                  support@burgasbh.com
                </Link>
              </p>
            </div>
          </address>

          <div className="sm:col-span-2 xl:col-span-1">
            <h3 className="mb-1 text-sm font-semibold sm:text-base">
              ЗАПИШИ СЕ ЗА НАШИЯ ИМЕЙЛ БЮЛЕТИН
            </h3>
            <p className="text-muted-foreground mb-4 text-xs sm:text-sm">
              Получавай първи новости за предстоящи събития и обучения
            </p>
            <form aria-label="Newsletter signup">
              <Label className="text-muted-foreground">Имейл</Label>
              <div className="mt-1 flex flex-col gap-2 sm:flex-row">
                <Input
                  type="email"
                  placeholder="nanov@corp.bg"
                  className="placeholder:text-muted-foreground text-sm inset-shadow-sm"
                  required
                  aria-label="Email address"
                />
                <Button type="submit">ЗАПИШИ МЕ</Button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-primary-foreground/20 mt-6 border-t pt-6 text-center text-xs sm:text-sm lg:mt-8 lg:pt-8">
          <p className="text-muted-foreground">
            &copy; 2024 Copyright Burgas Business Hub. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  );
}
