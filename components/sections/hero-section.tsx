import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { HeroProps } from "../../types/components";
import { TitleCustom } from "../ui/title";
import ImageCustom from "../ui/imageCustom";

export function HeroSection({
  data: { description, title, heroImage },
}: HeroProps) {
  return (
    //TODO FALTA IMAGEN
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/10 to-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground shadow-lg animate-pulse">
              Servicios Profesionales
            </div>
            <TitleCustom title={title} />
            <p className="text-xl text-muted-foreground md:text-2xl max-w-[600px]">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="#contacto">Solicitar Presupuesto GRATIS</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="text-lg group"
              >
                <a href="tel:+34600123456" className="flex items-center gap-2">
                  <Phone className="h-5 w-5 group-hover:animate-pulse" />
                  <span>Llamar Ahora</span>
                </a>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02]">
            <ImageCustom
              alt={heroImage.title}
              image={heroImage.image}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <p className="font-bold text-xl">{heroImage.title}</p>
                <p>{heroImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
