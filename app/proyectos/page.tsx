import ProjectPageClient from "@/components/ProjectPageClient";
import type { Metadata } from "next";
import { getLandingData, PARAMS_STRAPI } from "@/lib/request";
import { parseProjectsData } from "@/lib/functions";

// Esta función se ejecutará en el servidor para generar metadatos dinámicos
export async function generateMetadata(): Promise<Metadata> {
  try {
    // Intentamos obtener los datos de Strapi
    const response = await getLandingData(PARAMS_STRAPI.PROJECT);
    const attributes = response?.data || null;

    if (attributes) {
      const parsedData = parseProjectsData(attributes);
      const { title, description } = parsedData;

      const clearTitle = title?.replaceAll(/{{|}}/g, "");

      // Devolvemos metadatos dinámicos basados en los datos de Strapi
      return {
        title: `${clearTitle} | MarcoSoluciones`,
        description: description,
        openGraph: {
          title: `${clearTitle} | MarcoSoluciones`,
          description: description,
        },
        twitter: {
          title: `${clearTitle} | MarcoSoluciones`,
          description: description,
        },
      };
    }
  } catch (error) {
    console.error("Error al cargar los metadatos:", error);
  }

  // Si hay un error o no hay datos, usamos los metadatos estáticos
  return {
    title: "Proyectos | MarcoSoluciones",
    description:
      "Explore nuestra galería de proyectos de mantenimiento y construcción.",
  };
}

export default function ProyectosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ProjectPageClient />
    </div>
  );
}
