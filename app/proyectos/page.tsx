"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Wrench, Hammer, Zap, Paintbrush, Ruler, Phone, X, ChevronLeft, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

// Datos de ejemplo para los proyectos
const proyectos = [
  {
    id: 1,
    titulo: "Renovación de Cocina Completa",
    categoria: "carpinteria",
    descripcion:
      "Renovación completa de cocina incluyendo instalación de muebles a medida, encimera de granito, iluminación LED y fontanería.",
    imagenes: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    cliente: "Familia Rodríguez",
    ubicacion: "Madrid",
    fecha: "Enero 2023",
  },
  {
    id: 2,
    titulo: "Instalación Eléctrica Comercial",
    categoria: "electricidad",
    descripcion:
      "Instalación eléctrica completa para local comercial, incluyendo cuadro eléctrico, iluminación LED, tomas de corriente y sistemas de emergencia.",
    imagenes: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
    cliente: "Cafetería El Rincón",
    ubicacion: "Madrid",
    fecha: "Marzo 2023",
  },
  {
    id: 3,
    titulo: "Reforma de Baño",
    categoria: "albañileria",
    descripcion:
      "Reforma completa de baño con instalación de plato de ducha, mampara, sanitarios, mueble de baño y alicatado completo.",
    imagenes: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    cliente: "Familia Martínez",
    ubicacion: "Toledo",
    fecha: "Mayo 2023",
  },
  {
    id: 4,
    titulo: "Construcción de Tabiques",
    categoria: "placas-yeso",
    descripcion:
      "Construcción de tabiques de pladur para dividir espacio en oficina, incluyendo aislamiento acústico e instalación de puertas.",
    imagenes: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
    cliente: "Consultora Legal S.L.",
    ubicacion: "Madrid",
    fecha: "Julio 2023",
  },
  {
    id: 5,
    titulo: "Reparación de Fugas",
    categoria: "plomeria",
    descripcion:
      "Detección y reparación de fugas en sistema de fontanería de vivienda, incluyendo sustitución de tuberías dañadas.",
    imagenes: ["/placeholder.svg?height=600&width=800"],
    cliente: "Sr. García",
    ubicacion: "Alcalá de Henares",
    fecha: "Agosto 2023",
  },
  {
    id: 6,
    titulo: "Mantenimiento Edificio",
    categoria: "mantenimiento",
    descripcion:
      "Servicio de mantenimiento general para comunidad de vecinos, incluyendo reparaciones eléctricas, fontanería y carpintería.",
    imagenes: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
    cliente: "Comunidad Residencial Los Pinos",
    ubicacion: "Madrid",
    fecha: "Contrato Anual 2023",
  },
  {
    id: 7,
    titulo: "Instalación de Suelo Laminado",
    categoria: "carpinteria",
    descripcion:
      "Instalación de suelo laminado en vivienda completa de 90m², incluyendo zócalos y perfiles de transición.",
    imagenes: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    cliente: "Familia López",
    ubicacion: "Getafe",
    fecha: "Septiembre 2023",
  },
  {
    id: 8,
    titulo: "Renovación de Iluminación",
    categoria: "electricidad",
    descripcion:
      "Sustitución completa de sistema de iluminación en restaurante por tecnología LED, incluyendo instalación de reguladores.",
    imagenes: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
    cliente: "Restaurante La Terraza",
    ubicacion: "Madrid",
    fecha: "Octubre 2023",
  },
  {
    id: 9,
    titulo: "Construcción de Pérgola",
    categoria: "carpinteria",
    descripcion:
      "Diseño y construcción de pérgola de madera para terraza, incluyendo tratamiento protector e instalación de toldo.",
    imagenes: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
    cliente: "Sr. y Sra. Fernández",
    ubicacion: "Pozuelo",
    fecha: "Noviembre 2023",
  },
]

// Categorías para el filtro
const categorias = [
  { id: "todos", nombre: "Todos", icono: <Wrench className="h-5 w-5" /> },
  { id: "electricidad", nombre: "Electricidad", icono: <Zap className="h-5 w-5" /> },
  { id: "carpinteria", nombre: "Carpintería", icono: <Hammer className="h-5 w-5" /> },
  { id: "albañileria", nombre: "Albañilería", icono: <Ruler className="h-5 w-5" /> },
  { id: "placas-yeso", nombre: "Placas de Yeso", icono: <Paintbrush className="h-5 w-5" /> },
  { id: "plomeria", nombre: "Plomería", icono: <Wrench className="h-5 w-5" /> },
  { id: "mantenimiento", nombre: "Mantenimiento", icono: <Wrench className="h-5 w-5" /> },
]

export default function ProyectosPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [categoriaActiva, setCategoriaActiva] = useState("todos")
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState<number | null>(null)

  // Filtrar proyectos por categoría
  const proyectosFiltrados =
    categoriaActiva === "todos" ? proyectos : proyectos.filter((proyecto) => proyecto.categoria === categoriaActiva)

  // Obtener proyecto seleccionado
  const detalleProyecto = proyectoSeleccionado !== null ? proyectos.find((p) => p.id === proyectoSeleccionado) : null

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
            <Link href="/#servicios" className="text-sm font-medium hover:text-primary transition-colors">
              Servicios
            </Link>
            <Link href="/#sobre-mi" className="text-sm font-medium hover:text-primary transition-colors">
              Sobre Mí
            </Link>
            <Link href="/#testimonios" className="text-sm font-medium hover:text-primary transition-colors">
              Testimonios
            </Link>
            <Link href="/proyectos" className="text-sm font-medium text-primary transition-colors">
              Proyectos
            </Link>
            <Link href="/#contacto" className="text-sm font-medium hover:text-primary transition-colors">
              Contacto
            </Link>
          </nav>
          <Button asChild className="hidden md:flex">
            <Link href="/#contacto">Solicitar Presupuesto</Link>
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
                href="/#servicios"
                className="text-lg font-medium hover:text-primary px-2 py-2 rounded-md hover:bg-muted transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="/#sobre-mi"
                className="text-lg font-medium hover:text-primary px-2 py-2 rounded-md hover:bg-muted transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre Mí
              </Link>
              <Link
                href="/#testimonios"
                className="text-lg font-medium hover:text-primary px-2 py-2 rounded-md hover:bg-muted transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonios
              </Link>
              <Link
                href="/proyectos"
                className="text-lg font-medium text-primary px-2 py-2 rounded-md hover:bg-muted transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Proyectos
              </Link>
              <Link
                href="/#contacto"
                className="text-lg font-medium hover:text-primary px-2 py-2 rounded-md hover:bg-muted transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </Link>
              <Button asChild className="w-full mt-2">
                <Link href="/#contacto" onClick={() => setMobileMenuOpen(false)}>
                  Solicitar Presupuesto
                </Link>
              </Button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <Link href="/" className="flex items-center text-primary hover:text-primary/80 transition-colors mb-2">
                <ChevronLeft className="h-5 w-5 mr-1" />
                <span>Volver al inicio</span>
              </Link>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Mis <span className="text-primary">Proyectos</span> Realizados
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Explore algunos de los trabajos que he realizado para clientes satisfechos. Cada proyecto refleja mi
                compromiso con la calidad y la atención al detalle.
              </p>
            </div>
          </div>
        </section>

        {/* Filtros - Collapsible on scroll */}
        <section
          className={cn(
            "w-full py-6 border-b sticky top-16 bg-background z-30 shadow-sm transition-all duration-300",
            proyectoSeleccionado !== null ? "py-0 h-0 overflow-hidden opacity-0" : "",
          )}
          ref={(el) => {
            if (el) {
              const handleScroll = () => {
                const scrollY = window.scrollY
                if (scrollY > 300 && !proyectoSeleccionado) {
                  el.classList.add("py-2", "h-16", "overflow-hidden")
                  el.classList.add("hover:py-6", "hover:h-auto", "hover:overflow-visible")
                } else {
                  el.classList.remove("py-2", "h-16", "overflow-hidden")
                  el.classList.remove("hover:py-6", "hover:h-auto", "hover:overflow-visible")
                }
              }

              window.addEventListener("scroll", handleScroll)
              return () => window.removeEventListener("scroll", handleScroll)
            }
          }}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {categorias.map((categoria) => (
                <Button
                  key={categoria.id}
                  variant={categoriaActiva === categoria.id ? "default" : "outline"}
                  size="sm"
                  className="flex items-center gap-2"
                  onClick={() => setCategoriaActiva(categoria.id)}
                >
                  {categoria.icono}
                  <span>{categoria.nombre}</span>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Proyectos Grid */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            {proyectoSeleccionado === null ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {proyectosFiltrados.map((proyecto) => (
                    <div
                      key={proyecto.id}
                      className="group rounded-lg overflow-hidden border bg-background shadow-sm hover:shadow-md transition-all cursor-pointer"
                      onClick={() => setProyectoSeleccionado(proyecto.id)}
                    >
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={proyecto.imagenes[0] || "/placeholder.svg"}
                          alt={proyecto.titulo}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                          <div className="p-4 text-white">
                            <p className="font-medium">Ver detalles</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          {(() => {
                            switch (proyecto.categoria) {
                              case "electricidad":
                                return <Zap className="h-5 w-5 text-primary" />
                              case "carpinteria":
                                return <Hammer className="h-5 w-5 text-primary" />
                              case "albañileria":
                                return <Ruler className="h-5 w-5 text-primary" />
                              case "placas-yeso":
                                return <Paintbrush className="h-5 w-5 text-primary" />
                              default:
                                return <Wrench className="h-5 w-5 text-primary" />
                            }
                          })()}
                          <span className="text-sm text-muted-foreground">
                            {categorias.find((c) => c.id === proyecto.categoria)?.nombre}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold">{proyecto.titulo}</h3>
                        <p className="text-muted-foreground line-clamp-2 mt-1">{proyecto.descripcion}</p>
                        <div className="flex justify-between items-center mt-4">
                          <span className="text-sm text-muted-foreground">{proyecto.ubicacion}</span>
                          <span className="text-sm text-muted-foreground">{proyecto.fecha}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {proyectosFiltrados.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">No se encontraron proyectos en esta categoría.</p>
                    <Button variant="outline" className="mt-4" onClick={() => setCategoriaActiva("todos")}>
                      Ver todos los proyectos
                    </Button>
                  </div>
                )}
              </>
            ) : (
              // Detalle del proyecto
              detalleProyecto && (
                <div className="max-w-4xl mx-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="mb-6 flex items-center gap-1"
                    onClick={() => setProyectoSeleccionado(null)}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Volver a proyectos</span>
                  </Button>

                  <h2 className="text-3xl font-bold mb-4">{detalleProyecto.titulo}</h2>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <div className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                      {(() => {
                        switch (detalleProyecto.categoria) {
                          case "electricidad":
                            return <Zap className="h-4 w-4" />
                          case "carpinteria":
                            return <Hammer className="h-4 w-4" />
                          case "albañileria":
                            return <Ruler className="h-4 w-4" />
                          case "placas-yeso":
                            return <Paintbrush className="h-4 w-4" />
                          default:
                            return <Wrench className="h-4 w-4" />
                        }
                      })()}
                      <span>{categorias.find((c) => c.id === detalleProyecto.categoria)?.nombre}</span>
                    </div>
                    <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">
                      {detalleProyecto.ubicacion}
                    </div>
                    <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">
                      {detalleProyecto.fecha}
                    </div>
                  </div>

                  <p className="text-lg mb-8">{detalleProyecto.descripcion}</p>

                  <div className="space-y-6">
                    <h3 className="text-xl font-medium">Galería de imágenes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {detalleProyecto.imagenes.map((imagen, index) => (
                        <div key={index} className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
                          <Image
                            src={imagen || "/placeholder.svg"}
                            alt={`${detalleProyecto.titulo} - Imagen ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 border-t pt-6">
                    <h3 className="text-xl font-medium mb-2">Cliente</h3>
                    <p className="text-muted-foreground">{detalleProyecto.cliente}</p>
                  </div>

                  <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="flex-1 py-6 text-lg">
                      <Link href="/#contacto">Solicitar un proyecto similar</Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="flex-1 py-6 text-lg flex items-center justify-center gap-2 border-2"
                    >
                      <a href="tel:+34600123456">
                        <Phone className="h-5 w-5" />
                        <span>Llamar para consultar</span>
                      </a>
                    </Button>
                  </div>
                </div>
              )
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">¿Le gustaría un proyecto como estos?</h2>
              <p className="max-w-[700px] text-xl">
                Contácteme hoy mismo para un presupuesto sin compromiso y hagamos realidad su proyecto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white text-primary hover:bg-white/90 border-white border-2 py-6 text-lg font-bold"
                >
                  <Link href="/#contacto">Solicitar Presupuesto</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-white hover:bg-white/10 border-2 py-6 text-lg font-bold flex items-center gap-2"
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
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Wrench className="h-6 w-6 text-primary" />
            <span className="font-bold">MantenimientosPro</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} MantenimientosPro. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
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
            <Link href="#" className="text-muted-foreground hover:text-foreground">
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
            <Link href="#" className="text-muted-foreground hover:text-foreground">
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
  )
}

