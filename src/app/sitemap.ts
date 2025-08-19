import type { MetadataRoute } from 'next';
import { DOMAIN_URL } from '@/constants';

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
