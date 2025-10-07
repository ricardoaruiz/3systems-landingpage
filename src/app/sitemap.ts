import type { MetadataRoute } from "next";
import { DOMAIN_URL } from "@/constants";

const pages = [
  "",
  "/#reasons",
  "/#financial",
  "/#technical",
  "/#events",
  "/#contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = DOMAIN_URL.endsWith("/")
    ? DOMAIN_URL.slice(0, -1)
    : DOMAIN_URL;

  return pages.map((page) => ({
    url: `${domain}${page}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 1,
  }));
}
