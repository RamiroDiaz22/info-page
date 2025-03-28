"use client";

import type React from "react";

import { createContext, useContext, useState } from "react";
import { cn } from "@/lib/utils";

type ToastContextType = {
  showToast: (message: string) => void;
};

const ToastContext = createContext<ToastContextType>({
  showToast: () => {},
});

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  const showToast = (message: string) => {
    setMessage(message);
    setVisible(true);

    // Ocultar el toast después de 3 segundos
    setTimeout(() => {
      setVisible(false);
      // Limpiar el mensaje después de que termine la animación
      setTimeout(() => setMessage(null), 300);
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {message && (
        <div
          className={cn(
            "fixed bottom-4 right-4 z-50 rounded-md bg-primary px-4 py-3 text-white shadow-lg transition-all duration-300",
            visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          )}
        >
          {message}
        </div>
      )}
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
