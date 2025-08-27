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
    {
      url: `${DOMAIN_URL}/#reasons`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${DOMAIN_URL}/#financial`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${DOMAIN_URL}/#administrative`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${DOMAIN_URL}/#events`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${DOMAIN_URL}/#contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}
