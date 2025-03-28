"use client";

import { Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoaderProps {
  fullScreen?: boolean;
  message?: string;
  size?: "small" | "medium" | "large";
  className?: string;
  showOverlay?: boolean;
}

export function Loader({
  fullScreen = false,
  message = "Cargando...",
  size = "medium",
  className,
  showOverlay = true,
}: LoaderProps) {
  // Determinar el tamaño del icono y el texto
  const iconSize = {
    small: "h-6 w-6",
    medium: "h-10 w-10",
    large: "h-16 w-16",
  };

  const textSize = {
    small: "text-sm",
    medium: "text-base",
    large: "text-xl",
  };

  // Componente interno del loader
  const LoaderContent = () => (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <div className="relative">
        <Wrench
          className={cn(
            iconSize[size],
            "text-primary animate-spin-slow",
            "transform rotate-45"
          )}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={cn(
              "rounded-full bg-primary/20",
              size === "small"
                ? "h-3 w-3"
                : size === "medium"
                ? "h-5 w-5"
                : "h-8 w-8",
              "animate-pulse"
            )}
          />
        </div>
      </div>
      {message && (
        <p
          className={cn(
            "mt-4 text-muted-foreground font-medium",
            textSize[size]
          )}
        >
          {message}
        </p>
      )}
    </div>
  );

  // Si es pantalla completa, centrar en la pantalla
  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
        <LoaderContent />
      </div>
    );
  }

  // Si tiene overlay pero no es pantalla completa
  if (showOverlay) {
    return (
      <div className="relative w-full h-full min-h-[200px] flex items-center justify-center">
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] z-10" />
        <div className="z-20">
          <LoaderContent />
        </div>
      </div>
    );
  }

  // Sin overlay, solo el loader
  return <LoaderContent />;
}

// Añadir keyframes para la animación personalizada
import "./loader.css";
