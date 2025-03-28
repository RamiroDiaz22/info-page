"use client";

import { useRouter } from "next/navigation";
import { ProjectCard } from "./project-card";
import { SubTitleCustom } from "../ui/title";

interface ProjectListProps {
  projects: {
    id: string;
    project: {
      slug: number;
      title: string;
      categories: {
        categorie: string;
        slug: string;
      }[];
      description: string;
      workingDate: string;
      location: string;
      previewImage: {
        url: string;
      };
    };
  }[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  const route = useRouter();

  const onClick = (slug: string) => {
    route.push(`/proyectos/${slug}`);
  };

  if (!projects.length) {
    return (
      <SubTitleCustom title="No se encontraron proyectos en esta categoría." />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((proyecto: any) => (
        <ProjectCard key={proyecto.id} project={proyecto} onClick={onClick} />
      ))}
    </div>
  );
}
