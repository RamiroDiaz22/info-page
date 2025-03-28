"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Home, RefreshCw, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface ErrorViewProps {
  type?: "404" | "500" | "offline" | "generic";
  title?: string;
  message?: string;
  showHomeButton?: boolean;
  showBackButton?: boolean;
  showRetryButton?: boolean;
}

export function ErrorView({
  type = "generic",
  title,
  message,
  showHomeButton = true,
  showBackButton = true,
  showRetryButton = true,
}: ErrorViewProps) {
  const route = useRouter();

  const onRetry = () => {
    route.refresh();
  };

  // Configurar contenido según el tipo de error
  let errorTitle = title;
  let errorMessage = message;

  if (!errorTitle || !errorMessage) {
    switch (type) {
      case "404":
        errorTitle = errorTitle || "Página no encontrada";
        errorMessage =
          errorMessage ||
          "Lo sentimos, la página que está buscando no existe o ha sido movida.";
        break;
      case "500":
        errorTitle = errorTitle || "Error del servidor";
        errorMessage =
          errorMessage ||
          "Ha ocurrido un error en nuestro servidor. Por favor, inténtelo de nuevo más tarde.";
        break;
      case "offline":
        errorTitle = errorTitle || "Sin conexión";
        errorMessage =
          errorMessage ||
          "Parece que no tiene conexión a internet. Verifique su conexión e inténtelo de nuevo.";
        break;
      default:
        errorTitle = errorTitle || "Algo salió mal";
        errorMessage =
          errorMessage ||
          "Ha ocurrido un error inesperado. Por favor, inténtelo de nuevo.";
    }
  }

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <div className="max-w-md space-y-4">
        <div className="flex items-center justify-center">
          <AlertTriangle className="h-6 w-6 text-destructive mr-2" />
          <h1 className="text-2xl font-bold">{errorTitle}</h1>
        </div>
        <p className="text-muted-foreground">{errorMessage}</p>

        <div className="flex flex-wrap gap-4 justify-center pt-4">
          {showRetryButton && (
            <Button onClick={onRetry} className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4" />
              <span>Intentar de nuevo</span>
            </Button>
          )}
          {showHomeButton && (
            <Button
              variant="outline"
              asChild
              className="flex items-center gap-2"
            >
              <Link href="/">
                <Home className="h-4 w-4" />
                <span>Ir al inicio</span>
              </Link>
            </Button>
          )}
          {showBackButton && (
            <Button
              variant="ghost"
              onClick={() => window.history.back()}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Volver atrás</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
