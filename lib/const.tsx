import { ContactEnum } from "../enum/contact.enum";
import { ProfessionsEnum } from "../enum/professions.enum";
import {
  CheckCircle,
  Clock,
  Hammer,
  Home,
  Mail,
  MapPin,
  Paintbrush,
  Phone,
  Ruler,
  Wrench,
  Zap,
} from "lucide-react";
import { SocialMediaTypeEnum } from "../enum/socialMedia.enum";
import { Metadata } from "next";

export const daysInSpanish = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];
export const monthsInSpanish = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

export const PROFESSIONS_ICON = {
  [ProfessionsEnum.ALL]: (props: React.SVGProps<SVGSVGElement>) => (
    <Wrench {...props} />
  ),
  [ProfessionsEnum.ALBAÑILERIA]: (props: React.SVGProps<SVGSVGElement>) => (
    <Ruler {...props} />
  ),
  [ProfessionsEnum.CARPINTERIA]: (props: React.SVGProps<SVGSVGElement>) => (
    <Hammer {...props} />
  ),
  [ProfessionsEnum.ELECTRICIDAD]: (props: React.SVGProps<SVGSVGElement>) => (
    <Zap {...props} />
  ),
  [ProfessionsEnum.MANTENIMIENTO]: (props: React.SVGProps<SVGSVGElement>) => (
    <CheckCircle {...props} />
  ),
  [ProfessionsEnum.PLACAS]: (props: React.SVGProps<SVGSVGElement>) => (
    <Paintbrush {...props} />
  ),
  [ProfessionsEnum.PLOMERIA]: (props: React.SVGProps<SVGSVGElement>) => (
    <Wrench {...props} />
  ),
  [ProfessionsEnum.REFORMAS]: (props: React.SVGProps<SVGSVGElement>) => (
    <CheckCircle {...props} />
  ),
  [ProfessionsEnum.CONSTRUCCION]: (props: React.SVGProps<SVGSVGElement>) => (
    <Home {...props} />
  ),
};

export const CONTACT_ICON = {
  [ContactEnum.EMAIL]: <Mail className="h-6 w-6 text-primary" />,
  [ContactEnum.LOCATION]: <MapPin className="h-6 w-6 text-primary" />,
  [ContactEnum.PHONE]: <Phone className="h-6 w-6 text-primary" />,
  [ContactEnum.TIMETABLE]: <Clock className="h-6 w-6 text-primary" />,
};

export const SOCIAL_MEDIA_ICON = {
  [SocialMediaTypeEnum.FACEBOOCK]: (
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
  ),
  [SocialMediaTypeEnum.TWITTER]: (
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
  ),
  [SocialMediaTypeEnum.INSTAGRAM]: (
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
  ),
};

export const METADATA: Metadata = {
  title: "MarcoSoluciones - Servicios de Mantenimiento y Construcción",
  description:
    "Servicios profesionales de mantenimiento general y construcción para hogares y empresas. Electricidad, carpintería, albañilería, reformas y proyectos de construcción en Buenos Aires, Argentina.",
  keywords:
    "mantenimiento, construcción, reformas, electricidad, carpintería, albañilería, plomería, placas de yeso, construcción de viviendas, proyectos comerciales, Buenos Aires, Argentina",
  authors: [{ name: "MarcoSoluciones" }],
  creator: "MarcoSoluciones",
  publisher: "MarcoSoluciones",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || ""),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: process.env.NEXT_PUBLIC_BASE_URL || "",
    title: "MarcoSoluciones - Servicios de Mantenimiento y Construcción",
    description:
      "Servicios profesionales de mantenimiento general y construcción para hogares y empresas en Buenos Aires, Argentina.",
    siteName: "MarcoSoluciones",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MarcoSoluciones - Servicios de Mantenimiento y Construcción",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MarcoSoluciones - Servicios de Mantenimiento y Construcción",
    description:
      "Servicios profesionales de mantenimiento general y construcción para hogares y empresas en Buenos Aires, Argentina.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
