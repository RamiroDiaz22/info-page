"use client";

import { useEffect } from "react";

export function SimpleToast({
  message,
  visible,
  onClose,
}: {
  message: string;
  visible: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[999] rounded-md bg-primary px-4 py-3 text-white shadow-lg animate-in fade-in slide-in-from-bottom-5">
      {message}
    </div>
  );
}
