import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SITE_URL } from "@/lib/site";
import "./globals.css";
const display = localFont({
  src: "./fonts/manrope-latin.woff2",
  weight: "400 700",
  variable: "--font-display",
  display: "swap",
});
const body = localFont({
  src: "./fonts/dm-sans-latin.woff2",
  weight: "400 700",
  variable: "--font-body",
  display: "swap",
});
const title = "Assistant vocal IA pour votre entreprise | Keelio";
const description =
  "Keelio accueille vos appels, répond aux questions de vos clients et organise vos rendez-vous. Un assistant vocal IA adapté à votre entreprise. Demandez une démo.";
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: "%s | Keelio" },
  description,
  applicationName: "Keelio",
  openGraph: {
    title,
    description,
    type: "website",
    locale: "fr_FR",
    siteName: "Keelio",
    url: SITE_URL,
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#091d24",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={display.variable + " " + body.variable}>
      <body>{children}</body>
    </html>
  );
}
