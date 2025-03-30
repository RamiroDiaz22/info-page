import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { AboutMeProps } from "../../types/components";
import { SubTitleCustom } from "../ui/title";
import ImageCustom from "../ui/imageCustom";

export function AboutSection({
  data: { desciptionImage, description, image, services, title },
}: AboutMeProps) {
  return (
    <section
      id="nosotros"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted scroll-mt-16"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-xl">
            <ImageCustom
              alt={desciptionImage}
              className="object-cover"
              image={image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <p className="font-bold text-xl">{desciptionImage}</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Nosotros
            </div>
            <SubTitleCustom title={title} />

            <p className="text-muted-foreground text-lg">{description}</p>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 bg-background p-3 rounded-lg shadow-sm"
                >
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="font-medium">{service.title}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-4">
              <Link href="#contacto">Solicitar Información</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
