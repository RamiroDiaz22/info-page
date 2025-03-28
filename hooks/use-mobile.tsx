"use client";

import { useState, useEffect } from "react";

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Función para verificar si es un dispositivo móvil
    const checkMobile = () => {
      // Verificar si está disponible navigator y userAgent
      if (typeof navigator !== "undefined" && navigator.userAgent) {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileRegex =
          /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
        setIsMobile(mobileRegex.test(userAgent) || window.innerWidth < 768);
      } else {
        setIsMobile(false);
      }
    };

    // Verificar al cargar
    checkMobile();

    // Verificar al cambiar el tamaño de la ventana
    window.addEventListener("resize", checkMobile);

    // Limpiar el evento
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}
