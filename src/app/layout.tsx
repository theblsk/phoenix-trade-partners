import type { Metadata, Viewport } from "next";
import { Cinzel, Crimson_Text } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  openGraph: {
    title: "Phoenix Trade Partners",
    description:
      "Premium international trade intermediary for procurement and deal facilitation.",
    type: "website",
    images: [
      {
        url: "/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Phoenix banner",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${crimson.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
