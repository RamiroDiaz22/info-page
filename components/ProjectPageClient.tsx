"use client";

import { useEffect, useState } from "react";
import { Loader } from "@/components/ui/loader";
import { getLandingData, PARAMS_STRAPI } from "@/lib/request";
import { parseProjectsData, paseCategoriesData } from "@/lib/functions";
import { ErrorView } from "./ui/error-view";
import ProjectsTable from "./projects/projects-table";
import { TitleCustom } from "./ui/title";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function ProjectPageClient() {
  const [isLoading, setIsLoading] = useState(true);
  const [projectData, setprojectData] = useState<any>(null);
  const [categorieData, setCategorieData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getLandingData(PARAMS_STRAPI.PROJECT);
        const attributes = response?.data || null;

        const responseCategories = await getLandingData(
          PARAMS_STRAPI.CATEGORIES
        );
        const attributesCategories = responseCategories?.data || null;

        if (attributes) {
          const parsedData = parseProjectsData(attributes);
          setprojectData(parsedData);

          const parsedProjectData = paseCategoriesData(attributesCategories);
          setCategorieData(parsedProjectData);
        }
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <main className="flex-1 flex items-center justify-center">
        <Loader
          fullScreen={false}
          size="large"
          message="Cargando..."
          showOverlay={false}
        />
      </main>
    );
  }

  if (!projectData) {
    return (
      <ErrorView
        type="generic"
        title="Error al cargar datos"
        message="Lo sentimos, estamos presenciando problemas. Por favor, intente nuevamente más tarde."
      />
    );
  }

  const { description, title } = projectData;
  const { categories } = categorieData;

  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 relative">
            <Link
              href="/"
              className="flex items-center text-primary hover:text-primary/80 transition-colors mb-2 left-auto md:left-4 absolute"
            >
              <ChevronLeft className="h-5 w-5 mr-1" />
              <span>Volver al inicio</span>
            </Link>
            <TitleCustom title={title} className="pt-5" />
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              {description}
            </p>
          </div>
        </div>
      </section>

      <ProjectsTable
        categories={categories as { categorie: string; slug: string }[]}
      />
    </main>
  );
}
