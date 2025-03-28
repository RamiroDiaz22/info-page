"use client";

import { useEffect, useState } from "react";
import { getLandingData, PARAMS_STRAPI } from "../../lib/request";
import { FilterCategories } from "./filter-categories";
import ProjectList from "./project-list";
import { ProfessionsEnum } from "../../enum/professions.enum";
import { Loader } from "../ui/loader";

interface ClientProyectosProps {
  categories: { categorie: string; slug: string }[];
}

export default function ProjectsTable({ categories }: ClientProyectosProps) {
  const [activeCategory, setActiveCategory] = useState(ProfessionsEnum.ALL);
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const data = await getLandingData(
          PARAMS_STRAPI.WORKS,
          activeCategory !== ProfessionsEnum.ALL
            ? `&filters[categories][slug][$eq]=${activeCategory}`
            : ""
        );

        setProjects(data?.data || []);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, [activeCategory]);

  return (
    <div>
      {/* Filtros */}
      <section className="w-full py-6 border-b sticky top-16 bg-background z-30 shadow-sm transition-all duration-300">
        <div className="container px-4 md:px-6">
          <FilterCategories
            activeCategory={activeCategory}
            categories={categories}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </section>

      {/* Lista de proyectos */}
      <section className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          {isLoading ? (
            <Loader
              fullScreen={false}
              size="large"
              message="Cargando proyectos..."
              showOverlay={false}
            />
          ) : (
            <ProjectList projects={projects} />
          )}
        </div>
      </section>
    </div>
  );
}
