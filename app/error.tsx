"use client";

import { useEffect } from "react";
import { ErrorView } from "@/components/ui/error-view";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Opcionalmente, registrar el error en un servicio de monitoreo
    console.error("Error en la aplicación:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col">
      <ErrorView
        type="500"
        title="Error inesperado"
        message="Ha ocurrido un error inesperado. Nuestro equipo ha sido notificado y estamos trabajando para solucionarlo."
      />
    </div>
  );
}
