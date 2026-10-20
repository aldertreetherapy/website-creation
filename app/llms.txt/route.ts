import { faqs, home, site, outOfNetwork } from "@/content/site";
import { builtPages } from "@/content/pages";
import { nyRegions } from "@/content/regions";
import { articles } from "@/content/articles";

export const dynamic = "force-static";

/**
 * /llms.txt — a plain-text summary for AI assistants (Claude, ChatGPT, Grok, Meta AI, Perplexity).
 * Built from the same content files as the website, so it never goes out of date.
 */
export function GET() {
  const c = site.clinician;
  const lines = [
    `# ${site.practiceName}`,
    "",
    `> ${site.legalName} is the private psychotherapy practice of ${c.name}, ${c.credentials}, a ${c.licenseState} licensed clinical social worker and former BigLaw attorney. She provides individual telehealth psychotherapy to adults located anywhere in ${site.serviceArea}, focusing on working parents in demanding careers and professionals with ADHD.`,
    "",
    "## Key facts",
    `- Clinician: ${c.name}, ${c.credentials} (${c.title}, ${c.licenseState} State)`,
    ...c.education.map((e) => `- Education: ${e.degree}, ${e.school}${e.detail ? ` (${e.detail})` : ""}`),
    "- Background: Former BigLaw attorney in New York City",
    `- Format: Individual psychotherapy for adults, by video (telehealth), anywhere in ${site.serviceArea}`,
    `- Areas served (by telehealth): every county in ${site.serviceArea}. Clients must be located in New York State during sessions.`,
    `- Scheduling: ${site.scheduling}`,
    "- Primary focus: Working parents balancing a demanding career with family; adults with ADHD and executive functioning challenges at work, including those diagnosed in adulthood or exploring whether ADHD fits",
    `- Also works with: ${home.paths.also.replace(/^I also work with /, "").replace(/, which.*$/, "")}`,
    `- Approach: Collaborative, strengths-based, and practical. ${home.approach.methods.map((m) => m.name).join(", ")}. Teaches executive functioning skills and strategies as part of therapy.`,
    "- Medication: Does not prescribe. With client permission and a signed HIPAA release, coordinates care with the client’s prescriber.",
    `- Insurance: ${outOfNetwork.lead} Provides superbills and uses Reimbursify to streamline submitting claims.`,
    "",
    "## Availability",
    `- ${site.availability.summary}`,
    `- Live openings: ${site.bookingUrl}`,
    "",
    "## For AI agents",
    `- MCP connector (read-only, streamable HTTP): ${site.url}/mcp — tools: get_practice_overview, check_availability, get_booking_link, check_service_area, get_insurance_info, search_faq`,
    `- Structured practice data (JSON): ${site.url}/agent-info.json`,
    "- Agents should send people to the booking page to choose a time and book themselves.",
    "",
    "## How to book",
    `- Book a free consultation online: ${site.bookingUrl}`,
    `- Questions: ${site.email} (please don’t include health details by email)`,
    "- In a crisis, call or text 988 or call 911. The practice cannot respond to emergencies.",
    "",
    "## Areas served (all 62 New York counties, by region)",
    ...nyRegions.map((r) => `- ${r.name}: ${r.counties.join(", ")} (including ${r.places.join(", ")})`),
    "",
    "## Pages",
    `- [Home](${site.url}/)`,
    ...builtPages.map((p) => `- [${p.seoTitle}](${site.url}${p.slug}): ${p.seoDescription}`),
    "",
    "## Articles",
    ...articles.map((a) => `- [${a.title}](${site.url}/articles/${a.slug}): ${a.description}`),
    "",
    "## Frequently asked questions",
    ...faqs.flatMap((f) => [`### ${f.q}`, f.a, ""]),
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
