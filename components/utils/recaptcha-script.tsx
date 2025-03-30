"use client";
import Script from "next/script";

export function RecaptchaScript() {
  return (
    <Script
      src="https://www.google.com/recaptcha/api.js"
      strategy="lazyOnload"
      id="recaptcha-script"
    />
  );
}
