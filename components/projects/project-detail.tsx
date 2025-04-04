"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  User,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import ImageCustom from "@/components/ui/imageCustom";
import { Project, RelatedProject } from "@/types/components";
import { useRouter } from "next/navigation";
import { PROFESSIONS_ICON } from "@/lib/const";
import { capitalizeFirstLetter } from "@/lib/functions";
import dayjs from "@/lib/dayjs";
import { useData } from "@/context/DataContext";
import { CallButton } from "@/components/ui/call-button";

interface ProjectDetailProps {
  project: Project;
  relatedProjects: RelatedProject[];
}

export default function ProjectDetail({
  project,
  relatedProjects,
}: ProjectDetailProps) {
  const { phone } = useData();
  const route = useRouter();
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [media, setMedia] = useState<
    {
      url: string;
      mime: string;
    }[]
  >([]);

  useEffect(() => {
    if (project?.media.length > 0) {
      setMedia(project?.media.filter((el) => el.mime.includes("image")));
    }
  }, [project]);

  const onBack = () => {
    route.push(`/proyectos`);
  };

  // TODO: add video support
  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % media.length);
    // setActiveImage((prev) => (prev + 1) % project?.media.length);
  };

  const prevImage = () => {
    setActiveImage(
      (prev) => (prev - 1 + media.length) % media.length
      // (prev) => (prev - 1 + project?.media.length) % project?.media.length
    );
  };

  const showMedia = (
    media: {
      url: string;
      mime: string;
    },
    index: number
  ) => {
    // if (media.mime.includes("video")) {
    //   return (
    //     <video
    //       className="object-cover transition-transform duration-500 hover:scale-105"
    //       src={`${process.env.NEXT_PUBLIC_STRAPI_URL_API}${media.url}`}
    //     />
    //   );
    // } else {
    return (
      <ImageCustom
        alt={`Miniatura ${index + 1}`}
        className="object-cover"
        image={media.url}
      />
    );
    // }
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Columna izquierda - Galería */}
        <div className="lg:col-span-3 space-y-4">
          {/* Imagen principal */}
          <div
            className={cn(
              "relative rounded-xl overflow-hidden transition-all duration-300 cursor-pointer",
              isZoomed ? "h-[600px]" : "h-[400px]"
            )}
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <ImageCustom
              alt={`${project.title} - Imagen ${activeImage + 1}`}
              className="object-cover transition-transform duration-500 hover:scale-105"
              image={media[activeImage]?.url}
            />

            {media.length > 1 && (
              // project?.media.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
              <p className="text-sm">
                Haga clic para {isZoomed ? "reducir" : "ampliar"} la imagen
              </p>
            </div>
          </div>

          {/* Miniaturas */}
          {/* {project?.media.length > 1 && ( */}
          {media.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {/* {project?.media.map((resource, idx) => ( */}
              {media.map((resource, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "relative h-20 w-20 flex-shrink-0 rounded-md overflow-hidden cursor-pointer border-2",
                    activeImage === idx
                      ? "border-primary"
                      : "border-transparent"
                  )}
                  onClick={() => setActiveImage(idx)}
                >
                  {/* <ImageCustom
                    alt={`Miniatura ${idx + 1}`}
                    className="object-cover"
                    image={resource.url}
                  /> */}
                  {showMedia(resource, idx)}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Columna derecha - Información */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            {/* Mostrar todas las categorías como etiquetas */}
            <div className="flex flex-wrap gap-2 mb-3">
              {project.categories.map((el) => {
                return (
                  <div
                    key={el.slug}
                    className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                  >
                    {PROFESSIONS_ICON[el.slug]?.({
                      className: "h-5 w-5",
                    })}
                    <span>{el.categorie}</span>
                  </div>
                );
              })}
            </div>

            <h1 className="text-3xl font-bold leading-tight">
              {project.title}
            </h1>
          </div>

          <div className="bg-muted/30 rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4 text-primary" />
              <span>
                {capitalizeFirstLetter(
                  dayjs(new Date(project.workingDate)).format("MMMM YYYY")
                )}
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <User className="h-4 w-4 text-primary" />
              <span>Cliente: {project.nameClient}</span>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">
              Descripción del Proyecto
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="pt-4 space-y-4">
            <Button asChild size="lg" className="w-full py-6 text-lg group">
              <Link href="/#contacto">
                Solicitar un proyecto similar
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            {phone && (
              <CallButton
                variant="outline"
                size="lg"
                className="w-full py-6 text-lg flex items-center justify-center gap-2 border-2 group"
              >
                Llamar para consultar
              </CallButton>
            )}
          </div>
        </div>
      </div>

      {/* Sección de características del proyecto */}
      <div className="mt-12 border-t pt-8 mb-20">
        <h2 className="text-2xl font-bold mb-6">
          Características del Proyecto
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-muted/30 p-4 rounded-lg">
            <h3 className="font-medium text-lg mb-2">Materiales utilizados</h3>
            <p className="text-muted-foreground">
              Materiales de primera calidad seleccionados específicamente para
              este proyecto.
            </p>
          </div>
          <div className="bg-muted/30 p-4 rounded-lg">
            <h3 className="font-medium text-lg mb-2">Tiempo de ejecución</h3>
            <p className="text-muted-foreground">
              Proyecto completado en el plazo acordado, cumpliendo con todas las
              especificaciones.
            </p>
          </div>
          <div className="bg-muted/30 p-4 rounded-lg">
            <h3 className="font-medium text-lg mb-2">Garantía</h3>
            <p className="text-muted-foreground">
              Todos nuestros trabajos cuentan con garantía de calidad y servicio
              post-venta.
            </p>
          </div>
        </div>
      </div>

      {/* Sección de proyectos relacionados - Opcional */}
      {relatedProjects.length > 0 && (
        <div className="mb-24 border-t pt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Proyectos Relacionados</h2>
            <Button
              variant="link"
              className="text-primary group"
              onClick={onBack}
            >
              Ver todos
              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedProjects.map((el, index) => (
              <div
                key={index}
                className="group relative h-48 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => route.push(`/proyectos/${el.slug}`)}
              >
                <ImageCustom
                  className="object-cover transition-transform group-hover:scale-105"
                  alt={`Proyecto relacionado ${index + 1}`}
                  image={el.previewImage.url}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-medium line-clamp-1">{el.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
