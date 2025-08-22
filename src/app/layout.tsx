import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { AOS } from '@/components/aos';
import { StructuredData } from '@/components/structured-data';
import { generateMetadata } from '@/lib/metadata';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="pt-BR">
      <head>
        <meta content="Cristallo Empresarial" name="application-name" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta content="default" name="apple-mobile-web-app-status-bar-style" />
        <meta content="Cristallo" name="apple-mobile-web-app-title" />
        <meta
          content="Cristallo Empresarial - Soluções empresariais de qualidade"
          name="description"
        />
        <meta content="telephone=no" name="format-detection" />
        <meta content="yes" name="mobile-web-app-capable" />
        <meta content="/icons/browserconfig.xml" name="msapplication-config" />
        <meta content="#000000" name="msapplication-TileColor" />
        <meta content="no" name="msapplication-tap-highlight" />
        <meta content="#000000" name="theme-color" />

        <link href="/icons/icon-152x152.png" rel="apple-touch-icon" />
        <link
          href="/icons/icon-152x152.png"
          rel="apple-touch-icon"
          sizes="152x152"
        />
        <link
          href="/icons/icon-152x152.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />

        <link
          href="/icons/icon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/icons/icon-72x72.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link href="/manifest.json" rel="manifest" />
        <link
          color="#000000"
          href="/icons/safari-pinned-tab.svg"
          rel="mask-icon"
        />
        <link href="/favicon.ico" rel="shortcut icon" />

        <meta content="summary" name="twitter:card" />
        <meta content="https://cristallo.com.br" name="twitter:url" />
        <meta content="Cristallo Empresarial" name="twitter:title" />
        <meta
          content="Cristallo Empresarial - Soluções empresariais de qualidade"
          name="twitter:description"
        />
        <meta
          content="https://cristallo.com.br/icons/icon-192x192.png"
          name="twitter:image"
        />
        <meta content="@cristallo" name="twitter:creator" />
        <meta content="website" property="og:type" />
        <meta content="Cristallo Empresarial" property="og:title" />
        <meta
          content="Cristallo Empresarial - Soluções empresariais de qualidade"
          property="og:description"
        />
        <meta content="Cristallo Empresarial" property="og:site_name" />
        <meta content="https://cristallo.com.br" property="og:url" />
        <meta
          content="https://cristallo.com.br/icons/icon-192x192.png"
          property="og:image"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <StructuredData />
        <AOS />
      </body>
    </html>
  );
}
