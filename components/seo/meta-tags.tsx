import Head from "next/head";

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

export function MetaTags({
  title = "MarcoSoluciones - Servicios de Mantenimiento y Construcción",
  description = "Servicios profesionales de mantenimiento general y construcción para hogares y empresas. Electricidad, carpintería, albañilería, reformas y proyectos de construcción.",
  keywords = "mantenimiento, construcción, reformas, electricidad, carpintería, albañilería, plomería, placas de yeso, construcción de viviendas, proyectos comerciales, Buenos Aires, Argentina",
  ogImage = "/images/og-image.jpg",
  ogType = "website",
  canonical,
}: MetaTagsProps) {
  // Asegurarse de que el título siempre incluya el nombre de la empresa
  const fullTitle = title.includes("MarcoSoluciones")
    ? title
    : `${title} | MarcoSoluciones`;

  // URL canónica por defecto es la URL actual
  const canonicalUrl =
    canonical || (typeof window !== "undefined" ? window.location.href : "");

  return (
    <Head>
      {/* Metadatos básicos */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Metadatos adicionales */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Spanish" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="MarcoSoluciones" />
    </Head>
  );
}
