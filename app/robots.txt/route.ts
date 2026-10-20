import { site } from "@/content/site";

export const dynamic = "force-static";

// Search engines and AI assistants are all welcome to read the site.
// Named bots are listed explicitly so the intent is unambiguous.
const bots = [
  "Googlebot", "Bingbot", "Applebot", "DuckDuckBot",
  "OAI-SearchBot", "ChatGPT-User", "GPTBot",
  "Claude-SearchBot", "Claude-User", "ClaudeBot",
  "PerplexityBot", "Perplexity-User",
  "meta-webindexer", "meta-externalfetcher", "meta-externalagent",
  "xAI-SearchBot", "Google-Extended", "Applebot-Extended",
];

export function GET() {
  const body = [
    "# Content signals: this site may be used for search results and as a source for AI answers.",
    "Content-Signal: search=yes, ai-input=yes",
    "",
    ...bots.map((b) => `User-agent: ${b}`),
    "Allow: /",
    "",
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${site.url}/sitemap.xml`,
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
