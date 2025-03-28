"use client";

import Image from "next/image";
import { Zap, Hammer, Ruler, Paintbrush, Wrench, Eye } from "lucide-react";
import ImageCustom from "../ui/imageCustom";
import { PROFESSIONS_ICON } from "../../lib/const";
import { ProfessionsEnum } from "../../enum/professions.enum";
import dayjs from "@/lib/dayjs";
import { capitalizeFirstLetter } from "../../lib/functions";

interface ProjectCardProps {
  project: {
    slug: string;
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
  onClick: (slug: string) => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const mainCategory = project.categories[0];

  return (
    <div
      className="group rounded-lg overflow-hidden border bg-background shadow-sm hover:shadow-lg transition-all cursor-pointer"
      onClick={() => onClick(project.slug)}
    >
      <div className="relative h-64 overflow-hidden">
        <ImageCustom
          alt={project.title}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          image={project.previewImage.url}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-primary/90 rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <Eye className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="absolute top-3 left-3">
          <div className="inline-flex items-center gap-1 rounded-full bg-primary/90 px-3 py-1 text-sm text-white shadow-md">
            {PROFESSIONS_ICON[mainCategory.slug as ProfessionsEnum]?.({
              className: "h-5 w-5",
            })}
            <span>{mainCategory.categorie}</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
        </div>
      </div>
      <div className="p-4">
        <p className="text-muted-foreground line-clamp-2 mb-3">
          {project.description}
        </p>

        {/* Mostrar todas las categorías como etiquetas */}
        <div className="flex flex-wrap gap-1 mb-3">
          {project.categories.map((el) => {
            return (
              <span
                key={el.slug}
                className="inline-flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded-full"
              >
                {PROFESSIONS_ICON[el.slug as ProfessionsEnum]?.({
                  className: "h-5 w-5",
                })}
                <span>{el.categorie}</span>
              </span>
            );
          })}
        </div>

        <div className="flex justify-between items-center text-sm text-muted-foreground border-t pt-3">
          <span>{project.location}</span>
          <span>{project.workingDate}</span>
        </div>
      </div>
    </div>
  );
}
