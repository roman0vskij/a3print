import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/ru", "/kz"],
      disallow: ["/ru/login", "/kz/login", "/ru/dashboard", "/kz/dashboard"],
    },
    sitemap: ["https://a3print.kz/sitemap.xml"],
  };
}
