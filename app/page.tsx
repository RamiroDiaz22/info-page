"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Wrench,
  Hammer,
  Zap,
  Paintbrush,
  Ruler,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  X,
  MessageCircle,
} from "lucide-react";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background shadow-sm">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Wrench className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">MantenimientosPro</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#servicios"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="#sobre-mi"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Sobre Mí
            </Link>
            <Link
              href="#testimonios"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Testimonios
            </Link>
            <Link
              href="/proyectos"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Proyectos
            </Link>
            <Link
              href="#contacto"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contacto
            </Link>
          </nav>
          <Button asChild className="hidden md:flex">
            <Link href="#contacto">Solicitar Presupuesto</Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle Menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-b shadow-lg">
            <div className="container py-4 flex flex-col space-y-4">
              <Link
                href="#servicios"
                className="text-lg font-medium hover:text-primary px-2 py-2 rounded-md hover:bg-muted transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="#sobre-mi"
                className="text-lg font-medium hover:text-primary px-2 py-2 rounded-md hover:bg-muted transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre Mí
              </Link>
              <Link
                href="#testimonios"
                className="text-lg font-medium hover:text-primary px-2 py-2 rounded-md hover:bg-muted transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonios
              </Link>
              <Link
                href="#contacto"
                className="text-lg font-medium hover:text-primary px-2 py-2 rounded-md hover:bg-muted transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </Link>
              <Link
                href="/proyectos"
                className="text-lg font-medium hover:text-primary px-2 py-2 rounded-md hover:bg-muted transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Proyectos
              </Link>
              <Button asChild className="w-full mt-2">
                <Link href="#contacto" onClick={() => setMobileMenuOpen(false)}>
                  Solicitar Presupuesto
                </Link>
              </Button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/10 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground shadow-lg animate-pulse">
                  Servicios Profesionales
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  <span className="text-primary">Soluciones</span> de
                  mantenimiento para su hogar y empresa
                </h1>
                <p className="text-xl text-muted-foreground md:text-2xl max-w-[600px]">
                  Electricidad, carpintería, albañilería, placas de yeso y todo
                  tipo de reparaciones con calidad garantizada.
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
                    <a
                      href="tel:+34600123456"
                      className="flex items-center gap-2"
                    >
                      <Phone className="h-5 w-5 group-hover:animate-pulse" />
                      <span>Llamar Ahora</span>
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02]">
                <Image
                  src="/placeholder.svg?height=500&width=800"
                  alt="Servicios de mantenimiento profesional"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <p className="font-bold text-xl">
                      Calidad y Profesionalidad
                    </p>
                    <p>Más de 10 años de experiencia a su servicio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="servicios"
          className="w-full py-12 md:py-24 lg:py-32 scroll-mt-16"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Nuestros Servicios
              </div>
              <div className="space-y-2 flex flex-col items-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Soluciones <span className="text-primary">Completas</span>{" "}
                  para su Hogar o Negocio
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Ofrezco una amplia gama de servicios de mantenimiento y mejora
                  con la máxima calidad y garantía.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Zap className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold">Electricidad</h3>
                <p className="text-center text-muted-foreground">
                  Instalaciones eléctricas, reparaciones, iluminación y solución
                  de problemas eléctricos.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Hammer className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold">Carpintería</h3>
                <p className="text-center text-muted-foreground">
                  Fabricación y reparación de muebles, puertas, ventanas y
                  estructuras de madera.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Ruler className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold">Albañilería</h3>
                <p className="text-center text-muted-foreground">
                  Construcción y reparación de muros, pisos, azulejos y trabajos
                  en concreto.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Paintbrush className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold">Placas de Yeso</h3>
                <p className="text-center text-muted-foreground">
                  Instalación y reparación de placas de yeso, cielos rasos y
                  divisiones interiores.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Wrench className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold">Plomería</h3>
                <p className="text-center text-muted-foreground">
                  Instalación y reparación de tuberías, grifos, inodoros y
                  sistemas de agua.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <CheckCircle className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold">Mantenimiento General</h3>
                <p className="text-center text-muted-foreground">
                  Servicios generales de mantenimiento preventivo y correctivo
                  para hogares y empresas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Preview Section */}
        <section className="w-full py-10 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Portafolio
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Algunos de mis <span className="text-primary">Proyectos</span>{" "}
                  Recientes
                </h2>
                <p className="max-w-[700px] text-muted-foreground">
                  Explore mi galería de trabajos realizados y descubra la
                  calidad que ofrezco en cada servicio.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {/* Preview project cards - just showing 3 */}
              <div className="group rounded-lg overflow-hidden border bg-background shadow-sm hover:shadow-md transition-all">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Renovación de Cocina"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">Renovación de Cocina</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group rounded-lg overflow-hidden border bg-background shadow-sm hover:shadow-md transition-all">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Instalación Eléctrica"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">Instalación Eléctrica</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group rounded-lg overflow-hidden border bg-background shadow-sm hover:shadow-md transition-all">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Reforma de Baño"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">Reforma de Baño</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button asChild size="lg" className="px-8">
                <Link href="/proyectos">Ver Todos los Proyectos</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="sobre-mi"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted scroll-mt-16"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Profesional de mantenimiento"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <p className="font-bold text-xl">
                      Experiencia y Compromiso
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Sobre Mí
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Más de 10 años{" "}
                  <span className="text-primary">resolviendo problemas</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  Con amplia experiencia en el sector de mantenimiento y
                  construcción, me especializo en ofrecer soluciones integrales
                  para todo tipo de necesidades en hogares y empresas.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 bg-background p-3 rounded-lg shadow-sm">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="font-medium">
                      Profesional certificado con amplia experiencia
                    </span>
                  </li>
                  <li className="flex items-center gap-3 bg-background p-3 rounded-lg shadow-sm">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="font-medium">
                      Materiales y herramientas de primera calidad
                    </span>
                  </li>
                  <li className="flex items-center gap-3 bg-background p-3 rounded-lg shadow-sm">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="font-medium">
                      Puntualidad y compromiso garantizados
                    </span>
                  </li>
                  <li className="flex items-center gap-3 bg-background p-3 rounded-lg shadow-sm">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="font-medium">
                      Presupuestos sin compromiso
                    </span>
                  </li>
                </ul>
                <Button asChild size="lg" className="mt-4">
                  <Link href="#contacto">Solicitar Información</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          id="testimonios"
          className="w-full py-12 md:py-24 lg:py-32 scroll-mt-16"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Testimonios
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Lo que dicen mis{" "}
                  <span className="text-primary">clientes</span>
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  La satisfacción de mis clientes es mi mejor carta de
                  presentación.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-md hover:shadow-lg transition-shadow bg-white">
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="fill-yellow-500 h-5 w-5" />
                  <Star className="fill-yellow-500 h-5 w-5" />
                  <Star className="fill-yellow-500 h-5 w-5" />
                  <Star className="fill-yellow-500 h-5 w-5" />
                  <Star className="fill-yellow-500 h-5 w-5" />
                </div>
                <p className="text-muted-foreground italic">
                  "Excelente trabajo en la renovación de mi cocina. Puntual,
                  profesional y con un acabado perfecto. Totalmente
                  recomendable."
                </p>
                <div className="flex items-center gap-2 mt-auto pt-4 border-t">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-medium text-primary">ML</span>
                  </div>
                  <div>
                    <p className="font-medium">María López</p>
                    <p className="text-sm text-muted-foreground">
                      Cliente Residencial
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-md hover:shadow-lg transition-shadow bg-white">
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="fill-yellow-500 h-5 w-5" />
                  <Star className="fill-yellow-500 h-5 w-5" />
                  <Star className="fill-yellow-500 h-5 w-5" />
                  <Star className="fill-yellow-500 h-5 w-5" />
                  <Star className="fill-yellow-500 h-5 w-5" />
                </div>
                <p className="text-muted-foreground italic">
                  "Contratamos sus servicios para el mantenimiento de nuestra
                  oficina y quedamos muy satisfechos. Trabajo rápido y de
                  calidad."
                </p>
                <div className="flex items-center gap-2 mt-auto pt-4 border-t">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-medium text-primary">JR</span>
                  </div>
                  <div>
                    <p className="font-medium">Juan Rodríguez</p>
                    <p className="text-sm text-muted-foreground">
                      Gerente de Empresa
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-md hover:shadow-lg transition-shadow bg-white">
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="fill-yellow-500 h-5 w-5" />
                  <Star className="fill-yellow-500 h-5 w-5" />
                  <Star className="fill-yellow-500 h-5 w-5" />
                  <Star className="fill-yellow-500 h-5 w-5" />
                  <Star className="fill-yellow-500 h-5 w-5" />
                </div>
                <p className="text-muted-foreground italic">
                  "Solucionó un problema eléctrico complejo que otros no
                  pudieron resolver. Muy profesional y a un precio justo."
                </p>
                <div className="flex items-center gap-2 mt-auto pt-4 border-t">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-medium text-primary">AG</span>
                  </div>
                  <div>
                    <p className="font-medium">Ana García</p>
                    <p className="text-sm text-muted-foreground">
                      Cliente Residencial
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contacto"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-primary/10 scroll-mt-16"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Contacto
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  ¿Necesita ayuda?{" "}
                  <span className="text-primary">Contácteme ahora</span>
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Solicite un presupuesto sin compromiso o contácteme para
                  cualquier consulta.
                </p>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center gap-3 rounded-lg border bg-background p-4 shadow-sm">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Teléfono</p>
                      <p className="font-medium">+34 600 123 456</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border bg-background p-4 shadow-sm">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">info@mantenimientospro.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border bg-background p-4 shadow-sm">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Ubicación</p>
                      <p className="font-medium">Madrid, España</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border bg-background p-4 shadow-sm">
                    <Clock className="h-6 w-6 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Horario</p>
                      <p className="font-medium">
                        Lunes a Viernes: 8:00 - 19:00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border bg-background p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4">¿Por qué elegirme?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p>Presupuestos detallados sin compromiso en 24 horas</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p>Garantía en todos los trabajos realizados</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p>Materiales de primera calidad</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p>Servicio de urgencia disponible</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4 rounded-lg border bg-background p-6 shadow-lg">
                <h3 className="text-xl font-bold">
                  Solicitar Presupuesto Gratis
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Nombre
                      </label>
                      <Input
                        id="name"
                        placeholder="Ingrese su nombre"
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Ingrese su email"
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      placeholder="Ingrese su teléfono"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="service"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Servicio que necesita
                    </label>
                    <select
                      id="service"
                      className="flex h-10 w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Seleccione un servicio</option>
                      <option value="electricidad">Electricidad</option>
                      <option value="carpinteria">Carpintería</option>
                      <option value="albañileria">Albañilería</option>
                      <option value="placas-yeso">Placas de Yeso</option>
                      <option value="plomeria">Plomería</option>
                      <option value="mantenimiento">
                        Mantenimiento General
                      </option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Describa el trabajo que necesita"
                      className="min-h-[120px] border-primary/20 focus:border-primary"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full text-lg py-6"
                    size="lg"
                  >
                    Enviar Solicitud
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    Le responderemos en menos de 24 horas con un presupuesto
                    detallado.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                ¿Listo para mejorar su hogar o negocio?
              </h2>
              <p className="max-w-[700px] text-xl">
                Contácteme hoy mismo para un presupuesto sin compromiso y
                descubra la calidad de mis servicios.
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
                  className="text-lg group "
                >
                  <a
                    href="tel:+34600123456"
                    className="flex items-center gap-2 "
                  >
                    <Phone className="h-5 w-5 group-hover:animate-pulse text-foreground" />
                    <span className="text-foreground">Llamar Ahora</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Wrench className="h-6 w-6 text-primary" />
            <span className="font-bold">MantenimientosPro</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} MantenimientosPro. Todos los
            derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/34600123456"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
        >
          <MessageCircle className="h-7 w-7" />
          <span className="sr-only">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
