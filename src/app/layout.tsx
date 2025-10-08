import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Cinzel, Crimson_Text } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const crimson = Crimson_Text({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Phoenix Trade Partners — International Trade Intermediary",
  description:
    "Phoenix Trade Partners — premium international trade intermediary for procurement and deal facilitation. Trusted partnerships.",
  metadataBase: new URL("https://phoenixtradepartners.com"),
  keywords: [
    "international trade",
    "procurement",
    "deal facilitation",
    "quality assurance",
    "sourcing",
    "trade intermediary",
  ],
  authors: [{ name: "Phoenix Trade Partners" }],
  creator: "Phoenix Trade Partners",
  publisher: "Phoenix Trade Partners",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Phoenix Trade Partners",
    description:
      "Premium international trade intermediary for procurement and deal facilitation.",
    type: "website",
    images: [
      {
        url: "/phoenix.jpg",
        width: 1200,
        height: 630,
        alt: "Phoenix Trade Partners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phoenix Trade Partners",
    description:
      "Premium international trade intermediary for procurement and deal facilitation.",
    images: ["/phoenix.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="org-jsonld" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Phoenix Trade Partners",
            url: "https://phoenixtradepartners.com",
            logo: "https://phoenixtradepartners.com/logo.webp",
            sameAs: [],
            description:
              "Premium international trade intermediary for procurement and deal facilitation.",
          })}
        </Script>
      </head>
      <body className={`${cinzel.variable} ${crimson.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
