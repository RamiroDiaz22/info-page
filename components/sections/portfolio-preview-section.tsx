"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PortfolioProps, PreviewProject } from "../../types/components";
import { SubTitleCustom } from "../ui/title";
import ImageCustom from "../ui/imageCustom";
import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function PortfolioPreviewSection({
  data: { description, projects, title },
}: PortfolioProps) {
  const router = useRouter();
  const [previewProject, setPreviewProyect] = useState<PreviewProject[]>([]);

  useEffect(() => {
    if (projects.length) {
      setPreviewProyect(projects.slice(0, 3));
    }
  }, [projects]);

  return (
    <section className="w-full py-10 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Portafolio
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <SubTitleCustom title={title} />
            <p className="max-w-[700px] text-muted-foreground">{description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {previewProject?.map((project, index) => (
            <div
              key={index}
              className="group rounded-lg overflow-hidden border bg-background shadow-sm hover:shadow-md transition-all cursor-pointer"
              onClick={() => router.push(`/proyectos/${project.slug}`)}
            >
              <div className="relative h-48 overflow-hidden">
                <ImageCustom
                  alt={project.title}
                  className="object-cover transition-transform group-hover:scale-105"
                  image={project.previewImage.url}
                />

                <div className="z-[100] absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-primary/90 rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end duration-75">
                  <div className="z-[100] p-4 text-white">
                    <p className="font-medium">{project.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button asChild size="lg" className="px-8">
            <Link href="/proyectos">Ver Todos los Proyectos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
