const DEFAULT_SITE_URL = "https://www.keelio.fr";

function getSiteUrl(): string {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (configuredUrl) {
    try {
      const url = new URL(configuredUrl);

      if (
        (url.protocol === "https:" || url.protocol === "http:") &&
        !url.username &&
        !url.password
      ) {
        return url.origin;
      }
    } catch {
      // Keep a stable public canonical URL when configuration is missing or invalid.
    }
  }

  return DEFAULT_SITE_URL;
}

export const SITE_URL = getSiteUrl();

export const siteConfig = {
  name: "Keelio",
  url: SITE_URL,
  title: "Assistant vocal IA pour votre entreprise | Keelio",
  description:
    "Keelio accueille vos clients, qualifie leurs demandes et prend leurs rendez-vous. Découvrez un assistant vocal IA configuré pour votre entreprise.",
  email: "contact@keelio.fr",
} as const;
