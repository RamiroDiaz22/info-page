import Script from "next/script";
import type { Project, RelatedProject } from "@/types/components";

interface ProjectDetailJsonLdProps {
  project: Project;
  relatedProjects?: RelatedProject[];
  baseUrl?: string;
}

export function ProjectDetailJsonLd({
  project,
  relatedProjects = [],
  baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "",
}: ProjectDetailJsonLdProps) {
  // Crear un objeto JSON-LD para la página de detalle de proyecto
  const jsonLd: any = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.description,
    image:
      project.media && project.media.length > 0
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL_API}${project.media[0].url}`
        : `${baseUrl}/images/default-project.jpg`,
    datePublished: project.createdAt || new Date().toISOString(),
    dateModified: project.updatedAt || new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: "MarcoSoluciones",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "MarcoSoluciones",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/logo.jpg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/proyectos/${project.slug}`,
    },
    // Agregar información adicional específica del proyecto
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Cliente",
        value: project.nameClient,
      },
      {
        "@type": "PropertyValue",
        name: "Ubicación",
        value: project.location,
      },
      {
        "@type": "PropertyValue",
        name: "Fecha",
        value: project.workingDate,
      },
      {
        "@type": "PropertyValue",
        name: "Categorías",
        value: project.categories.map((cat) => cat.categorie).join(", "),
      },
    ],
  };

  // Si hay proyectos relacionados, agregarlos como sugerencias
  if (relatedProjects && relatedProjects.length > 0) {
    jsonLd["suggestedAnswer"] = relatedProjects.map((related) => ({
      "@type": "Article",
      name: related.title,
      url: `${baseUrl}/proyectos/${related.slug}`,
    }));
  }

  return (
    <Script
      id="json-ld-project-detail"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
