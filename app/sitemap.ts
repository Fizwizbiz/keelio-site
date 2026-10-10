import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Legal pages are intentionally noindex; only indexable routes belong here.
  return [{ url: `${SITE_URL}/`, priority: 1 }];
}
