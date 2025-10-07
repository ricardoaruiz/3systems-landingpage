"use client";

import Script from "next/script";
import { generateJsonLd } from "@/lib/metadata";

export function StructuredData() {
  const jsonLd = generateJsonLd();

  return (
    <Script
      id="structured-data"
      strategy="afterInteractive"
      type="application/ld+json"
    >
      {JSON.stringify(jsonLd)}
    </Script>
  );
}
