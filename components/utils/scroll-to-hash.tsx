"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function ScrollToHash({ isLoading }: { isLoading?: boolean }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (isLoading) {
      return window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Función para manejar el scroll a la sección
    const handleScrollToHash = () => {
      // Obtener el hash de la URL
      const hash = window.location.hash;

      if (hash) {
        // Dar un pequeño retraso para asegurar que el DOM esté completamente cargado
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            // Scroll a la sección con un pequeño offset para el header fijo
            const headerOffset = 0; // Ajustar según la altura del header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 100);
      }
    };

    // Ejecutar el scroll cuando cambia la ruta o los parámetros
    handleScrollToHash();
  }, [isLoading, pathname, searchParams]);

  return null;
}
