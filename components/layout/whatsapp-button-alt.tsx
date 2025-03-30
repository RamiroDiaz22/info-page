"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useData } from "@/context/DataContext";
import Image from "next/image";
import wp from "@/assets/whatsapp.svg";

interface WhatsAppButtonProps {
  message?: string;
  tooltipTitle?: string;
  tooltipText?: string;
  tooltipDelay?: number;
  tooltipDuration?: number;
}

export function WhatsAppButtonAlt({
  message = "Hola, me gustaría recibir más información sobre sus servicios.",
  tooltipTitle = "¿Necesita ayuda rápida?",
  tooltipText = "Contáctanos por WhatsApp para una respuesta inmediata!",
  tooltipDelay = 3000,
  tooltipDuration = 60000,
}: WhatsAppButtonProps) {
  const { phone } = useData();
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipClosed, setTooltipClosed] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const phoneNumber = (phone || "").replaceAll(" ", "");

  // Comprobar si el tooltip ya ha sido cerrado en esta sesión
  useEffect(() => {
    const hasBeenClosed = localStorage.getItem("whatsappTooltipClosed");
    if (!hasBeenClosed) {
      // Mostrar el tooltip después del retraso especificado
      const timer = setTimeout(() => {
        setShowTooltip(true);
      }, tooltipDelay);

      return () => clearTimeout(timer);
    }
  }, [tooltipDelay]);

  // Cerrar el tooltip y guardar la preferencia
  const closeTooltip = () => {
    setShowTooltip(false);
    setTooltipClosed(true);
    localStorage.setItem("whatsappTooltipClosed", "true");
  };

  // Reiniciar el tooltip después del tiempo especificado si no se ha cerrado manualmente
  useEffect(() => {
    if (showTooltip && !tooltipClosed) {
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, tooltipDuration);

      return () => clearTimeout(timer);
    }
  }, [showTooltip, tooltipClosed, tooltipDuration]);

  // Construir la URL de WhatsApp con el mensaje
  const whatsappUrl = `https://wa.me/+54${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-24 right-2 lg:right-4 z-50">
      {/* Tooltip/Mini Modal */}
      {showTooltip && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 w-72 animate-bounce-slow mb-3 border-l-4 border-green-500">
          <button
            onClick={closeTooltip}
            className="absolute -top-2 -right-2 bg-gray-200 rounded-full p-1 transition-colors"
            aria-label="Cerrar"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex items-start gap-3">
            <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
              <MessageCircle className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-sm">
                {tooltipTitle}
              </h4>
              <p className="text-gray-600 text-xs mt-1">{tooltipText}</p>
              <Button
                size="sm"
                className="mt-2 bg-green-500 text-xs h-8 w-full"
                onClick={() => {
                  window.open(whatsappUrl, "_blank");
                  closeTooltip();
                }}
              >
                Contactar ahora
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
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
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg transition-all",
          showTooltip || isHovering
            ? "ring-4 ring-transparent scale-110"
            : "hover:scale-105"
        )}
        onClick={() => {
          if (showTooltip) {
            closeTooltip();
          }
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* <MessageCircle className="h-7 w-7" /> */}
        <Image alt="" src={wp} className="w-8 h-8" />
        <span className="sr-only">WhatsApp</span>

        {/* Efecto pulsante cuando no se muestra el tooltip */}
        {!showTooltip && !isHovering && (
          <span className="absolute w-full h-full rounded-full bg-green-500 animate-ping opacity-75"></span>
        )}
      </a>
    </div>
  );
}
