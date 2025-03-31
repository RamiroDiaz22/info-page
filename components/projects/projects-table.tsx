"use client";

import { Dispatch, SetStateAction } from "react";
import { FilterCategories } from "./filter-categories";
import ProjectList from "./project-list";
import { ProfessionsEnum } from "@/enum/professions.enum";
import { Loader } from "@/components/ui/loader";
import { ProjectListType } from "@/types/components";

interface ClientProyectosProps {
  categories: { categorie: string; slug: string }[];
  activeCategory: ProfessionsEnum;
  setActiveCategory: Dispatch<SetStateAction<ProfessionsEnum>>;
  isLoading: boolean;
  projects: ProjectListType[];
}

export default function ProjectsTable({
  categories,
  activeCategory,
  setActiveCategory,
  isLoading,
  projects,
}: ClientProyectosProps) {
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
