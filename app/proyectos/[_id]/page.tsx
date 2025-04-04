import { Suspense } from "react";
import { getProjectData } from "@/lib/request";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { Loader } from "@/components/ui/loader";
import ProjectDetailClient from "../../../components/projectDetailClient";

// Exportar la función generateMetadata para metadatos dinámicos
export { generateMetadata } from "./metadata";

export default async function ProjectPage({
  params,
}: {
  params: { _id: string };
}) {
  // Obtener datos del proyecto en el servidor
  const projectData = await getProjectData(params?._id);
  const project = projectData?.data[0] || null;

  return (
    <div className="flex min-h-screen flex-col">
      {/* Agregar BreadcrumbJsonLd para SEO */}
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", item: process.env.NEXT_PUBLIC_BASE_URL || "" },
          {
            name: "Proyectos",
            item: `${process.env.NEXT_PUBLIC_BASE_URL || ""}proyectos`,
          },
          {
            name: project?.title || "Detalle de Proyecto",
            item: `${process.env.NEXT_PUBLIC_BASE_URL || ""}proyectos/${
              params._id
            }`,
          },
        ]}
      />

      {/* Renderizar el componente cliente con los datos del proyecto */}
      <Suspense fallback={<Loader message="Cargando proyecto..." />}>
        {params?._id && (
          <ProjectDetailClient
            projectId={params._id || ""}
            initialProject={project}
          />
        )}
      </Suspense>
    </div>
  );
}
