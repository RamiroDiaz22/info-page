import type React from "react";
import type { Metadata } from "next/types";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getLandingData, PARAMS_STRAPI } from "@/lib/request";
import { parseConfigData } from "@/lib/functions";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";

import "@/lib/dayjs";
import { CTASection } from "@/components/sections/cta-section";
import { ErrorView } from "@/components/ui/error-view";
import { ScrollToHash } from "@/components/utils/scroll-to-hash";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MantenimientosPro - Servicios de mantenimiento profesional",
  description:
    "Servicios de mantenimiento y reparación para hogares y empresas con calidad garantizada",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getLandingData(PARAMS_STRAPI.CONFIG);

  const attributes = data?.data || null;

  const { name, socialMedia } = parseConfigData(attributes);

  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ScrollToHash />
          {attributes ? (
            <>
              <Header name={name} />
              {children}
              <CTASection />
              <Footer name={name} socialMedia={socialMedia} />
              <WhatsAppButton />
            </>
          ) : (
            <ErrorView
              type="generic"
              title="Error al cargar datos"
              message="Lo sentimos, estamos presenciando problemas. Por favor, intente nuevamente más tarde."
            />
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
