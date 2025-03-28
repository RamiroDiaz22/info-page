"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Share2, Check } from "lucide-react";
import { getProjectData, getRelatedProjects } from "@/lib/request";
import { Project as ProjectData, RelatedProject } from "@/types/components";
import { useMobile } from "@/hooks/use-mobile";
import ProjectDetail from "@/components/projects/project-detail";
import { SimpleToast } from "@/components/ui/simple-toast";
import { Loader } from "@/components/ui/loader";
import { ErrorView } from "@/components/ui/error-view";

export default function Project() {
  const router = useRouter();
  const params = useParams();
  const projectId = params._id;

  const [project, setProject] = useState<ProjectData | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<RelatedProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [showShareTooltip, setShowShareTooltip] = useState(false);

  const shareButtonRef = useRef<HTMLButtonElement>(null);
  const isMobile = useMobile();

  // Fetch project data
  useEffect(() => {
    const fetchProject = async () => {
      setIsLoading(true);
      try {
        if (projectId) {
          const id = Array.isArray(projectId) ? projectId[0] : projectId;
          const data = await getProjectData(id);
          setProject(data?.data[0] || null);
        }
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  // Fetch related projects
  useEffect(() => {
    const fetchRelatedProjects = async () => {
      if (project?.categories?.length) {
        try {
          const data = await getRelatedProjects(
            project.slug,
            project.categories.map((el) => el.slug)
          );
          setRelatedProjects(data?.data.data || []);
        } catch (error) {
          console.error("Error fetching related projects:", error);
        }
      }
    };

    fetchRelatedProjects();
  }, [project]);

  // Handle back navigation
  const handleBack = () => {
    router.push(`/proyectos`);
  };

  // Handle sharing
  const handleShare = async () => {
    const url = window.location.href;

    if (isMobile && navigator.share) {
      try {
        await navigator.share({
          title: project?.title || "Proyecto",
          text: `Mira este proyecto: ${project?.title}`,
          url,
        });
      } catch (error) {
        console.error("Error al compartir:", error);
      }
    } else {
      copyToClipboard(url);
    }
  };

  // Copy URL to clipboard
  const copyToClipboard = (url: string) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        showToast("¡URL copiada al portapapeles!");
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch(() => showToast("Error al copiar la URL"));
  };

  // Show toast message
  const showToast = (message: string) => {
    setToastMessage(message);
    setToastVisible(true);
  };

  // Close toast message
  const closeToast = () => {
    setToastVisible(false);
  };

  // Render loader
  if (isLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <Loader message="Cargando proyecto..." />
      </main>
    );
  }

  // Render error view if project is not found
  if (!project) {
    return (
      <section className="w-full py-12 md:py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex justify-center mt-8">
            <Button onClick={handleBack} className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              <span>Volver a proyectos</span>
            </Button>
          </div>
          <ErrorView
            type="404"
            title="Proyecto no encontrado"
            message={`Lo sentimos, el proyecto con ID ${projectId} no existe o ha sido eliminado.`}
          />
        </div>
      </section>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-16 px-4">
      <Header
        onBack={handleBack}
        onShare={handleShare}
        isCopied={isCopied}
        showShareTooltip={showShareTooltip}
        setShowShareTooltip={setShowShareTooltip}
        shareButtonRef={shareButtonRef as any}
        isMobile={isMobile}
      />
      <ProjectDetail project={project} relatedProjects={relatedProjects} />
      <SimpleToast
        message={toastMessage}
        visible={toastVisible}
        onClose={closeToast}
      />
    </div>
  );
}

// Header component for back and share buttons
function Header({
  onBack,
  onShare,
  isCopied,
  showShareTooltip,
  setShowShareTooltip,
  shareButtonRef,
  isMobile,
}: {
  onBack: () => void;
  onShare: () => void;
  isCopied: boolean;
  showShareTooltip: boolean;
  setShowShareTooltip: (value: boolean) => void;
  shareButtonRef: React.RefObject<HTMLButtonElement>;
  isMobile: boolean;
}) {
  return (
    <div className="flex justify-between items-center mb-8">
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-1 hover:bg-primary/10 transition-colors"
        onClick={onBack}
      >
        <ChevronLeft className="h-4 w-4" />
        <span>Volver a proyectos</span>
      </Button>
      <div className="flex gap-2">
        <div className="relative">
          <Button
            ref={shareButtonRef}
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={onShare}
            onMouseEnter={() => !isMobile && setShowShareTooltip(true)}
            onMouseLeave={() =>
              !isMobile && !isCopied && setShowShareTooltip(false)
            }
          >
            {isCopied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Share2 className="h-4 w-4" />
            )}
            <span className="sr-only">Compartir</span>
          </Button>
          {!isMobile && showShareTooltip && (
            <Tooltip message={isCopied ? "¡Copiado!" : "Copiar enlace"} />
          )}
        </div>
      </div>
    </div>
  );
}

// Tooltip component
function Tooltip({ message }: { message: string }) {
  return (
    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap z-50">
      {message}
      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rotate-45"></div>
    </div>
  );
}
