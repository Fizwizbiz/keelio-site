import type { Metadata } from "next";
import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import UseCases from "@/components/sections/UseCases";
import HowItWorks from "@/components/sections/HowItWorks";
import QuoteCTA from "@/components/sections/QuoteCTA";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { SITE_URL } from "@/lib/site";
export const metadata: Metadata = { alternates: { canonical: "/" } };
export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": SITE_URL + "/#organization",
        name: "Keelio",
        url: SITE_URL,
        email: "contact@keelio.fr",
        logo: SITE_URL + "/icon.svg",
      },
      {
        "@type": "WebSite",
        "@id": SITE_URL + "/#website",
        url: SITE_URL,
        name: "Keelio",
        inLanguage: "fr-FR",
        publisher: { "@id": SITE_URL + "/#organization" },
      },
      {
        "@type": "Service",
        name: "Assistant vocal IA pour les entreprises",
        serviceType:
          "Accueil téléphonique et prise de rendez-vous par assistant vocal IA",
        provider: { "@id": SITE_URL + "/#organization" },
        url: SITE_URL,
        description:
          "Un assistant vocal configuré pour accueillir les appels, répondre aux questions courantes et organiser les rendez-vous de votre entreprise.",
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <a href="#main-content" className="skip-link">
        Aller au contenu
      </a>
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Features />
        <UseCases />
        <HowItWorks />
        <QuoteCTA />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
