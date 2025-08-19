import type { MetadataRoute } from 'next';

const DOMAIN_URL =
  process.env.DOMAIN_URL || 'https://cristallo-landing-page.vercel.app/';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${DOMAIN_URL}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}
