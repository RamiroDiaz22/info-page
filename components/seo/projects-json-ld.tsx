import Script from "next/script";

interface ProjectsPageJsonLdProps {
  title?: string;
  description?: string;
  url?: string;
  projects?: Array<{
    name: string;
    description: string;
    image?: string;
    category?: string;
  }>;
}

export function ProjectsPageJsonLd({
  title = "Proyectos de MarcoSoluciones",
  description = "Explore nuestra galería de proyectos de mantenimiento y construcción.",
  url = `${process.env.NEXT_PUBLIC_BASE_URL || ""}proyectos`,
  projects = [],
}: ProjectsPageJsonLdProps) {
  // Crear un objeto JSON-LD para la página de colección de proyectos
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description: description,
    url: url,
    // Si tenemos proyectos, los incluimos como elementos de la colección
    ...(projects.length > 0 && {
      mainEntity: {
        "@type": "ItemList",
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Project",
            name: project.name,
            description: project.description,
            ...(project.image && { image: project.image }),
            ...(project.category && { category: project.category }),
          },
        })),
      },
    }),
  };

  return (
    <Script
      id="json-ld-projects-page"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
