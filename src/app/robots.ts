import type { MetadataRoute } from "next";
import { DOMAIN_URL } from "@/constants";

const domain = DOMAIN_URL.endsWith("/") ? DOMAIN_URL.slice(0, -1) : DOMAIN_URL;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${domain}/sitemap.xml`,
  };
}
