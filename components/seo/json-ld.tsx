import Script from "next/script";

interface LocalBusinessProps {
  name?: string;
  description?: string;
  url?: string;
  telephone?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  geo?: {
    latitude?: number;
    longitude?: number;
  };
  images?: string[];
  priceRange?: string;
  openingHours?: string[];
  serviceArea?: string[];
  services?: string[];
}

export function LocalBusinessJsonLd({
  name = "MarcoSoluciones",
  description = "Servicios profesionales de mantenimiento general y construcción para hogares y empresas.",
  url = process.env.NEXT_PUBLIC_BASE_URL || "",
  telephone = "+5491112345678", // TODO: personalData
  address = {
    streetAddress: "Calle Principal 123", // TODO: locations
    addressLocality: "Buenos Aires", // TODO: locations
    addressRegion: "Buenos Aires", // TODO: locations
    postalCode: "C1000AAA", // TODO: locations
    addressCountry: "AR",
  },
  geo = {
    latitude: -34.603722, // TODO: locations
    longitude: -58.381592, // TODO: locations
  },
  images = [
    `${process.env.NEXT_PUBLIC_BASE_URL || ""}images/logo.jpg`, // TODO: add
    `${process.env.NEXT_PUBLIC_BASE_URL || ""}images/building.jpg`, // TODO: add
  ],
  priceRange = "$$",
  openingHours = ["Mo-Fr 08:00-19:00", "Sa 09:00-14:00"],
  serviceArea = [
    "Buenos Aires", // TODO: locations
    "Gran Buenos Aires", // TODO: locations
    "Provincia de Buenos Aires", // TODO: locations
  ],
  services = [
    "Mantenimiento",
    "Mantenimiento general",
    "Mantenimiento empresarial",
    "Electricidad",
    "Carpintería",
    "Albañilería",
    "Plomería",
    "Placas de yeso",
    "durlock",
    "Construcción",
    "Construcción de viviendas",
    "Reformas",
    "Reformas integrales",
    "Proyectos comerciales",
  ],
}: LocalBusinessProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: name,
    description: description,
    url: url,
    telephone: telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      postalCode: address.postalCode,
      addressCountry: address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    image: images,
    priceRange: priceRange,
    openingHoursSpecification: openingHours.map((hours) => {
      const [days, timeRange] = hours.split(" ");
      const [opens, closes] = timeRange.split("-");
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: days,
        opens: opens,
        closes: closes,
      };
    }),
    areaServed: serviceArea.map((area) => ({
      "@type": "City",
      name: area,
    })),
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
      },
    })),
  };

  return (
    <Script
      id="json-ld-local-business"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface FAQProps {
  questions?: Array<{
    question: string;
    answer: string;
  }>;
}

export function FAQJsonLd({
  questions = [
    {
      question: "¿Qué servicios de mantenimiento ofrece MarcoSoluciones?",
      answer:
        "Ofrecemos servicios completos de mantenimiento incluyendo electricidad, carpintería, albañilería, plomería, instalación de placas de yeso y mantenimiento general para hogares y empresas.",
    },
    {
      question: "¿Realizan proyectos de construcción?",
      answer:
        "Sí, además de servicios de mantenimiento, realizamos proyectos de construcción residencial y comercial, desde pequeñas reformas hasta construcciones completas.",
    },
    {
      question: "¿Cuál es el área de servicio de MarcoSoluciones?",
      answer:
        "Nuestros servicios están disponibles principalmente en Buenos Aires y toda la provincia.", // TODO: locations
    },
    {
      question: "¿Ofrecen presupuestos gratuitos?",
      answer:
        "Sí, ofrecemos presupuestos detallados sin compromiso en un plazo de 24 horas.",
    },
    {
      question: "¿Sus trabajos tienen garantía?",
      answer:
        "Todos nuestros trabajos cuentan con garantía de calidad y ofrecemos servicio post-venta para asegurar su completa satisfacción.",
    },
  ],
}: FAQProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };

  return (
    <Script
      id="json-ld-faq"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// Actualizar la interfaz BreadcrumbProps para que los items sean requeridos y tengan el tipo correcto
interface BreadcrumbProps {
  items: Array<{
    name: string;
    item: string;
  }>;
}

export function BreadcrumbJsonLd({ items }: BreadcrumbProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };

  return (
    <Script
      id="json-ld-breadcrumb"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
