import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos | MarcoSoluciones",
  description:
    "Explore nuestra galería de proyectos de mantenimiento y construcción. Cada proyecto refleja nuestro compromiso con la calidad y la atención al detalle.",
  keywords:
    "proyectos, mantenimiento, construcción, reformas, electricidad, carpintería, albañilería, plomería, Buenos Aires, Argentina",
  openGraph: {
    title: "Proyectos | MarcoSoluciones",
    description:
      "Explore nuestra galería de proyectos de mantenimiento y construcción. Cada proyecto refleja nuestro compromiso con la calidad y la atención al detalle.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL || ""}proyectos`, // TODO
    siteName: "MarcoSoluciones",
    images: [
      {
        url: "/images/og-projects.jpg", // TODO: Puedes crear una imagen específica para la sección de proyectos
        width: 1200,
        height: 630,
        alt: "Proyectos de MarcoSoluciones",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proyectos | MarcoSoluciones",
    description:
      "Explore nuestra galería de proyectos de mantenimiento y construcción. Cada proyecto refleja nuestro compromiso con la calidad y la atención al detalle.",
    images: ["/images/og-projects.jpg"],
  },
};
