import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            ¿Listo para mejorar su hogar o negocio?
          </h2>
          <p className="max-w-[700px] text-xl">
            Contácteme hoy mismo para un presupuesto sin compromiso y descubra
            la calidad de mis servicios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-white/90 border-white"
            >
              <Link href="#contacto">Solicitar Presupuesto</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white hover:bg-white/10 text-foreground"
            >
              <a href="tel:+34600123456">
                <Phone className="h-5 w-5" />
                <span>Llamar Ahora</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
