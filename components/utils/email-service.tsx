"use client";

import { useEffect } from "react";
import emailjs from "@emailjs/browser";

interface EmailServiceProps {
  publicKey: string;
}

export function EmailService({ publicKey }: EmailServiceProps) {
  useEffect(() => {
    // Inicializar EmailJS con la clave pública
    emailjs.init(publicKey);
  }, [publicKey]);

  return null;
}
