import Link from "next/link";
import { Wrench } from "lucide-react";
import { FooterProps } from "../../types/components";
import { SOCIAL_MEDIA_ICON } from "../../lib/const";

export function Footer({ name, socialMedia }: FooterProps) {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <Link href="/" className="flex items-center gap-2">
          <Wrench className="h-6 w-6 text-primary" />
          <span className="font-bold">{name}</span>
        </Link>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} {name}. Todos los derechos
          reservados.
        </p>
        <div className="flex gap-4">
          {socialMedia.map((el, index) => (
            <Link
              href={el.url}
              className="text-muted-foreground hover:text-foreground"
              key={index}
            >
              {SOCIAL_MEDIA_ICON[el.type]}
              <span className="sr-only">{el.type}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
