import type { Metadata } from "next";
import { DOMAIN_URL } from "@/constants";

type GenerateMetadataParams = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string[];
};

export function generateMetadata({
  title = "3 Systems - Gestão Ambiental",
  description = "Soluções ambientais para o seu negócio",
  image = "/images/logo_300.webp",
  url = "/",
  keywords = [
    "Angela Machado",
    "3 Systems",
    "gestão ambiental",
    "Áreas Contaminadas",
    "consultoria ambiental",
    "resíduos sólidos",
    "efluentes líquidos",
    "emergências químicas",
    "Perito Ambiental",
    "Gerenciamento de Processos em Áreas Contaminadas",
    "CETESB",
  ],
}: GenerateMetadataParams = {}): Metadata {
  const domain = DOMAIN_URL.endsWith("/")
    ? DOMAIN_URL.slice(0, -1)
    : DOMAIN_URL;

  const baseUrl = domain;
  const fullUrl = `${baseUrl}${url}`;
  const fullImageUrl = `${baseUrl}${image}`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: "3 Systems - Gestão Ambiental" }],
    creator: "3 Systems - Gestão Ambiental",
    publisher: "3 Systems - Gestão Ambiental",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: fullUrl,
      siteName: "3 Systems - Gestão Ambiental",
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
      card: "summary_large_image",
      site: "@3systems",
      creator: "@3systems",
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
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      // google: process.env.GOOGLE_SEARCH_CONSOLE_VERIFICATION_ID, // Adicione quando configurar o Google Search Console
    },
  };
}

// Função para gerar JSON-LD (structured data)
export function generateJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "3 Systems - Gestão Ambiental",
    description:
      "Soluções ambientais para o seu negócio. Especialistas em gestão de áreas contaminadas, resíduos sólidos, efluentes líquidos e emergências químicas.",
    url: `${DOMAIN_URL}`,
    logo: `${DOMAIN_URL}/images/logo_300.svg`,
    sameAs: ["https://www.linkedin.com/in/angela-machado-bb789330/"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      areaServed: "BR",
      availableLanguage: "Portuguese",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
      // Adicione endereço completo se apropriado
    },
  };
}
