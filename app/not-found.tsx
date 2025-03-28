"use client";

import { ErrorView } from "@/components/ui/error-view";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ErrorView
        type="404"
        title="Página no encontrada"
        message="Lo sentimos, la página que está buscando no existe o ha sido movida. Puede volver a la página de inicio o revisar nuestros servicios."
      />
    </div>
  );
}
