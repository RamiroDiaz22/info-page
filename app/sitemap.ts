import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://marco-soluciones.vercel.app";

  // Páginas principales
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/proyectos`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sitemap`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  // Páginas de servicios de mantenimiento
  const maintenanceServices = [
    "electricidad",
    "carpinteria",
    "albañileria",
    "plomeria",
    "placas-yeso",
    "mantenimiento",
  ].map((service) => ({
    url: `${baseUrl}/servicios/${service}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Páginas de servicios de construcción
  const constructionServices = ["construccion", "reformas"].map((service) => ({
    url: `${baseUrl}/servicios/${service}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Páginas legales
  const legalPages = ["privacidad", "terminos", "cookies"].map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [
    ...mainPages,
    ...maintenanceServices,
    ...constructionServices,
    ...legalPages,
  ];
}
