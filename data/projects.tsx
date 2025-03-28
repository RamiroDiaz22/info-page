import { Wrench, Zap, Hammer, Ruler, Paintbrush } from "lucide-react";

export const proyectos = [
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
    imagenes: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
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
    imagenes: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
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
    imagenes: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
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
    imagenes: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
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
    imagenes: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    cliente: "Sr. y Sra. Fernández",
    ubicacion: "Pozuelo",
    fecha: "Noviembre 2023",
  },
];

export const categorias = [
  { id: "todos", nombre: "Todos", icono: <Wrench className="h-5 w-5" /> },
  {
    id: "electricidad",
    nombre: "Electricidad",
    icono: <Zap className="h-5 w-5" />,
  },
  {
    id: "carpinteria",
    nombre: "Carpintería",
    icono: <Hammer className="h-5 w-5" />,
  },
  {
    id: "albañileria",
    nombre: "Albañilería",
    icono: <Ruler className="h-5 w-5" />,
  },
  {
    id: "placas-yeso",
    nombre: "Placas de Yeso",
    icono: <Paintbrush className="h-5 w-5" />,
  },
  { id: "plomeria", nombre: "Plomería", icono: <Wrench className="h-5 w-5" /> },
  {
    id: "mantenimiento",
    nombre: "Mantenimiento",
    icono: <Wrench className="h-5 w-5" />,
  },
];
