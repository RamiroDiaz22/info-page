import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin/",
        "/private/",
        "/ejemplo-error/",
        "/ejemplo-proyecto-no-encontrado/",
      ],
    },
    sitemap: "https://marco-soluciones.vercel.app/sitemap.xml",
  };
}
