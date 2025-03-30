import ProjectPageClient from "@/components/ProjectPageClient";
import { BreadcrumbJsonLd } from "../../components/seo/json-ld";

export default async function ProyectosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", item: "https://marco-soluciones.vercel.app/" },
          {
            name: "Proyectos",
            item: "https://marco-soluciones.vercel.app/proyectos",
          },
        ]}
      />
      <ProjectPageClient />
    </div>
  );
}
