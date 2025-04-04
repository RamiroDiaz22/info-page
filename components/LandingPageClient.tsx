"use client";

import { useEffect, useState } from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { PortfolioPreviewSection } from "@/components/sections/portfolio-preview-section";
import { AboutSection } from "@/components/sections/about-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Loader } from "@/components/ui/loader";
import { getLandingData, PARAMS_STRAPI } from "@/lib/request";
import { parseHomeData } from "@/lib/functions";
import { ErrorView } from "./ui/error-view";
import { FAQJsonLd, LocalBusinessJsonLd } from "./seo/json-ld";
import { useData } from "@/context/DataContext";
import { ScrollToHash } from "./utils/scroll-to-hash";

export default function LandingPageClient() {
  const { phone } = useData();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getLandingData(PARAMS_STRAPI.HOME);
        const attributes = response?.data || null;

        if (attributes) {
          const parsedData = parseHomeData(attributes);
          setData(parsedData);
        }
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <main className="flex-1 flex items-center justify-center">
        <Loader
          fullScreen={false}
          size="large"
          message="Cargando..."
          showOverlay={false}
        />
      </main>
    );
  }

  if (!data) {
    return (
      <ErrorView
        type="generic"
        title="Error al cargar datos"
        message="Lo sentimos, estamos presenciando problemas. Por favor, intente nuevamente más tarde."
      />
    );
  }

  const { hero, services, portfolio, aboutMe, testimonials, contractMe } = data;

  return (
    <>
      <LocalBusinessJsonLd telephone={phone || ""} />
      <FAQJsonLd />
      <ScrollToHash isLoading={isLoading} />
      <main className="flex-1">
        {hero && <HeroSection data={hero} />}
        {services && <ServicesSection data={services} />}
        {portfolio && <PortfolioPreviewSection data={portfolio} />}
        {aboutMe && <AboutSection data={aboutMe} />}
        {testimonials && <TestimonialsSection data={testimonials} />}
        {contractMe && <ContactSection data={contractMe} />}
      </main>
    </>
  );
}
