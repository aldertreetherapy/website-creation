import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

// Search engines and AI assistants are all welcome to read the site.
// Named bots are listed explicitly so the intent is unambiguous.
const aiAndSearchBots = [
  "Googlebot", "Bingbot", "Applebot", "DuckDuckBot",
  "OAI-SearchBot", "ChatGPT-User", "GPTBot",
  "Claude-SearchBot", "Claude-User", "ClaudeBot",
  "PerplexityBot", "Perplexity-User",
  "meta-webindexer", "meta-externalfetcher", "meta-externalagent",
  "xAI-SearchBot", "Google-Extended", "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: aiAndSearchBots, allow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
