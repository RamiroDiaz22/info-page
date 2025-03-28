"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Copy, Check } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";
import { useToast } from "@/components/ui/toast";
import QRCode from "react-qr-code";
import { usePhone } from "../../context/PhoneContext";

interface CallButtonProps {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  children?: React.ReactNode;
}

export function CallButton({
  variant = "default",
  size = "default",
  className = "",
  children,
}: CallButtonProps) {
  const isMobile = useMobile();
  const { showToast } = useToast();
  const { phone } = usePhone();
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const formattedNumber = (phone || "").startsWith("+")
    ? phone || ""
    : `+${phone || ""}`;
  const displayNumber = formattedNumber.replace(
    /(\+\d{2})(\d{3})(\d{3})(\d{3})/,
    "$1 $2 $3 $4"
  );

  const handleClick = () => {
    if (isMobile) {
      // En dispositivos móviles, iniciar la llamada directamente
      window.location.href = `tel:${formattedNumber}`;
    } else {
      // En desktop, mostrar el modal
      setShowModal(true);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(formattedNumber)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        showToast("Número copiado al portapapeles");
      })
      .catch(() => {
        showToast("Error al copiar el número");
      });
  };

  return (
    <>
      <Button
        variant={variant}
        size={size}
        className={className}
        onClick={handleClick}
      >
        <Phone className="h-5 w-5 mr-2" />
        {children || "Llamar Ahora"}
      </Button>

      {/* Modal para desktop */}
      {showModal && !isMobile && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-background rounded-lg p-6 max-w-md w-full shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-4">Contactar por teléfono</h3>

            <div className="text-center mb-6">
              <p className="text-muted-foreground mb-2">Llámenos al:</p>
              <p className="text-3xl font-bold text-primary">{displayNumber}</p>
            </div>

            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white rounded-lg">
                <QRCode value={`tel:${formattedNumber}`} size={150} level="H" />
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                variant="outline"
                className="flex-1 text-foreground"
                onClick={copyToClipboard}
              >
                {copied ? (
                  <Check className="h-5 w-5 mr-2" />
                ) : (
                  <Copy className="h-5 w-5 mr-2" />
                )}
                {copied ? "¡Copiado!" : "Copiar número"}
              </Button>
              <Button
                variant="default"
                className="flex-1"
                onClick={() => setShowModal(false)}
              >
                Cerrar
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
