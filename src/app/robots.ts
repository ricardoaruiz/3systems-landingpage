import type { MetadataRoute } from 'next';

const DOMAIN_URL =
  process.env.DOMAIN_URL || 'https://cristallo-landing-page.vercel.app/';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${DOMAIN_URL}/sitemap.xml`,
  };
}
