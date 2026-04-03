import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Keelio — Votre entreprise répond, même quand vous dormez.",
  description:
    "Keelio automatise les interactions clients de votre entreprise grâce à l'IA. Disponible 24h/24, 7j/7. Simple à mettre en place pour les TPE et PME françaises.",
  openGraph: {
    title: "Keelio — Automatisation IA pour TPE & PME",
    description:
      "Keelio automatise les interactions clients de votre entreprise grâce à l'IA. Disponible 24h/24, 7j/7.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keelio — Automatisation IA pour TPE & PME",
    description:
      "Keelio automatise les interactions clients de votre entreprise grâce à l'IA. Disponible 24h/24, 7j/7.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorantGaramond.variable} ${dmSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
