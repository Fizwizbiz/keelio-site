import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
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
    <html lang="fr" className={`${poppins.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
