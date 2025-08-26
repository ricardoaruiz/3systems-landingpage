/** biome-ignore-all lint/style/noNonNullAssertion: <explanation> */
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <StructuredData />
        <AOS />
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID!} />
    </html>
  );
}
