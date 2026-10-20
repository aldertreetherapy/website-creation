import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { builtPages } from "@/content/pages";

export const dynamic = "force-static";

// New pages added to builtPages in content/pages.ts appear here automatically.
export default function sitemap(): MetadataRoute.Sitemap {
  const legal = new Set(["/accessibility"]);
  return [
    { url: `${site.url}/`, changeFrequency: "monthly", priority: 1 },
    ...builtPages.map((p) => ({
      url: `${site.url}${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: legal.has(p.slug) ? 0.3 : 0.8,
    })),
  ];
}
