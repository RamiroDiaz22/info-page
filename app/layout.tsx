import type React from "react";
import type { Metadata } from "next/types";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getLandingData, PARAMS_STRAPI } from "@/lib/request";
import { parseConfigData } from "@/lib/functions";
import { CTASection } from "@/components/sections/cta-section";
import { ScrollToHash } from "@/components/utils/scroll-to-hash";
import { DataProvider } from "@/context/DataContext";
import { WhatsAppButtonAlt } from "@/components/layout/whatsapp-button-alt";

import "@/lib/dayjs";
import { EmailService } from "@/components/utils/email-service";
import { RecaptchaScript } from "@/components/utils/recaptcha-script";
import { METADATA } from "@/lib/const";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = METADATA;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getLandingData(PARAMS_STRAPI.CONFIG);

  const attributes = data?.data || null;

  const { socialMedia, phone, email } = parseConfigData(attributes);

  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {/* <Suspense fallback={null}>
            <ScrollToHash />
          </Suspense> */}
          <DataProvider phone={phone} email={email}>
            <Header />
            <EmailService
              publicKey={process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY || ""}
            />
            {children}
            <CTASection />
            <Footer socialMedia={socialMedia} />
            {/* <WhatsAppButton /> */}

            <WhatsAppButtonAlt
              tooltipTitle="¡Respuesta inmediata!"
              tooltipText="Contáctanos por WhatsApp y le responderemos en menos de 15 minutos."
              message="Hola, estoy interesado en sus servicios de mantenimiento. ¿Podría darme más información?"
            />
            <RecaptchaScript />
          </DataProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
