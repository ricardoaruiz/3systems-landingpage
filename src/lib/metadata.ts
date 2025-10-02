import type { Metadata } from 'next';
import { DOMAIN_URL } from '@/constants';

interface GenerateMetadataParams {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string[];
}

export function generateMetadata({
  title = '3 Systems - Gestão Ambiental',
  description = 'Soluções ambientais para o seu negócio',
  image = '/images/logo_300.webp',
  url = '/',
  keywords = ['gestão ambiental', 'consultoria ambiental'],
}: GenerateMetadataParams = {}): Metadata {
  const baseUrl = DOMAIN_URL;
  const fullUrl = `${baseUrl}${url}`;
  const fullImageUrl = `${baseUrl}${image}`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: '3 Systems - Gestão Ambiental' }],
    creator: '3 Systems - Gestão Ambiental',
    publisher: '3 Systems - Gestão Ambiental',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url: fullUrl,
      siteName: '3 Systems - Gestão Ambiental',
      title,
      description,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@cristallo', // Substitua pelo handle do Twitter se houver
      creator: '@cristallo',
      title,
      description,
      images: [fullImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      // google: 'seu-codigo-de-verificacao-aqui', // Adicione quando configurar o Google Search Console
    },
  };
}

// Função para gerar JSON-LD (structured data)
export function generateJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '3 Systems - Gestão Ambiental',
    description:
      'Transforme seu negócio com nossas soluções empresariais completas. Consultoria, gestão e serviços especializados para impulsionar sua empresa.',
    url: `${DOMAIN_URL}`, // Substitua pela URL real
    logo: `${DOMAIN_URL}/images/logo_300.svg`, // Substitua pela URL real
    sameAs: [
      // Adicione os links das redes sociais se houver
      // 'https://www.linkedin.com/company/cristallo',
      // 'https://www.instagram.com/cristallo',
      // 'https://twitter.com/cristallo',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      areaServed: 'BR',
      availableLanguage: 'Portuguese',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR',
      // Adicione endereço completo se apropriado
    },
  };
}
