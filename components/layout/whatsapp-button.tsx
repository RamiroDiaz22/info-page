"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipClosed, setTooltipClosed] = useState(false);

  // Comprobar si el tooltip ya ha sido cerrado en esta sesión
  useEffect(() => {
    const hasBeenClosed = localStorage.getItem("whatsappTooltipClosed");
    if (!hasBeenClosed) {
      // Mostrar el tooltip después de 3 segundos
      const timer = setTimeout(() => {
        setShowTooltip(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  // Cerrar el tooltip y guardar la preferencia
  const closeTooltip = () => {
    setShowTooltip(false);
    setTooltipClosed(true);
    localStorage.setItem("whatsappTooltipClosed", "true");
  };

  // Reiniciar el tooltip después de 1 minuto si no se ha cerrado manualmente
  useEffect(() => {
    if (showTooltip && !tooltipClosed) {
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 60000);

      return () => clearTimeout(timer);
    }
  }, [showTooltip, tooltipClosed]);

  return (
    <div className="fixed bottom-6 lg:bottom-20 right-6 z-50">
      {/* Tooltip/Mini Modal */}
      {showTooltip && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-3 w-64 animate-bounce-slow mb-2">
          <button
            onClick={closeTooltip}
            className="absolute -top-2 -right-2 bg-gray-200 rounded-full p-1 hover:bg-gray-300 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex items-start gap-3">
            <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
              <MessageCircle className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-sm">
                ¿Necesita ayuda rápida?
              </h4>
              <p className="text-gray-600 text-xs mt-1">
                ¡Contácteme por WhatsApp para una respuesta inmediata!
              </p>
            </div>
          </div>

          {/* Flecha indicadora */}
          <div className="absolute bottom-[-8px] right-6 w-4 h-4 bg-white transform rotate-45"></div>

          {/* Indicador pulsante */}
          <div className="absolute -top-1 -left-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
        </div>
      )}

      {/* Botón de WhatsApp con efecto pulsante */}
      <a
        href="https://wa.me/34600123456"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors",
          showTooltip && "ring-4 ring-green-300 ring-opacity-50"
        )}
        onClick={() => {
          if (showTooltip) {
            closeTooltip();
          }
        }}
      >
        <MessageCircle className="h-7 w-7" />
        <span className="sr-only">WhatsApp</span>

        {/* Efecto pulsante cuando no se muestra el tooltip */}
        {!showTooltip && (
          <span className="absolute w-full h-full rounded-full bg-green-500 animate-ping opacity-75"></span>
        )}
      </a>
    </div>
  );
}
