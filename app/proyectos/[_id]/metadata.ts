import { getProjectData } from "@/lib/request";
import type { Metadata } from "next";

// Función para generar metadatos dinámicos basados en el ID del proyecto
export async function generateMetadata({
  params,
}: {
  params: { _id: string };
}): Promise<Metadata> {
  try {
    // Obtener datos del proyecto
    const projectData = await getProjectData(params?._id);
    const project = projectData?.data[0];

    if (!project) {
      return {
        title: "Proyecto no encontrado | MarcoSoluciones",
        description:
          "Lo sentimos, el proyecto que estás buscando no existe o ha sido eliminado.",
      };
    }

    // Construir metadatos dinámicos
    const title = `${project.title} | MarcoSoluciones`;
    const description =
      project.description ||
      "Detalles del proyecto realizado por MarcoSoluciones.";

    // Obtener la primera imagen del proyecto para Open Graph
    const ogImage = project.previewImage.url
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL_API}${project.previewImage.url}`
      : "/images/default-project.png";

    // Construir keywords basadas en las categorías del proyecto
    const categories = project.categories
      .map((cat: { categorie: string }) => cat.categorie)
      .join(", ");
    const keywords = `proyecto, ${categories}, MarcoSoluciones, Buenos Aires, Argentina`;

    return {
      title,
      description,
      keywords,
      openGraph: {
        title,
        description,
        type: "article",
        url: `${process.env.NEXT_PUBLIC_BASE_URL || ""}proyectos/${
          project.slug
        }`,
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: project.title,
          },
        ],
        publishedTime: project.createdAt,
        modifiedTime: project.updatedAt,
        authors: ["MarcoSoluciones"],
        section: "Proyectos",
        tags: project.categories.map(
          (cat: { categorie: string }) => cat.categorie
        ),
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImage],
      },
    };
  } catch (error) {
    console.error("Error al generar metadatos:", error);

    // Metadatos por defecto en caso de error
    return {
      title: "Detalle de Proyecto | MarcoSoluciones",
      description: "Detalles de un proyecto realizado por MarcoSoluciones.",
    };
  }
}
