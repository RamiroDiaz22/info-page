"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CallButton } from "@/components/ui/call-button";
import { useData } from "@/context/DataContext";

export function CTASection() {
  const { phone } = useData();

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            ¿Listo para mejorar su hogar o negocio?
          </h2>
          <p className="max-w-[700px] text-xl">
            Contáctanos hoy mismo para un presupuesto sin compromiso y descubra
            la calidad de nuestros servicios.
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
            {phone && (
              <CallButton
                variant="outline"
                size="lg"
                className="border-white hover:bg-white/10 text-foreground"
              >
                Llamar Ahora
              </CallButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
