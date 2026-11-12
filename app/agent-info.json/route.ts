import { faqs, home, outOfNetwork, site } from "@/content/site";
import { builtPages } from "@/content/pages";
import { nyRegions } from "@/content/regions";
import { articles } from "@/content/articles";

export const dynamic = "force-static";

/**
 * /agent-info.json — structured facts about the practice for AI agents.
 * The MCP connector at /mcp reads this file, so it always matches the website.
 */
export function GET() {
  const c = site.clinician;
  const data = {
    practice: {
      name: site.practiceName,
      legalName: site.legalName,
      website: site.url,
      email: site.email,
      emailNote: "Please don’t include health details by email.",
      description: site.description,
    },
    clinician: {
      name: c.name,
      credentials: c.credentials,
      title: c.title,
      license: `${c.title} (${c.credentials}), ${c.licenseState} State`,
      education: c.education.map((e) => ({ degree: e.degree, school: e.school, focus: e.detail || undefined })),
      background: "Former BigLaw attorney in New York City",
    },
    services: {
      format: "Individual psychotherapy for adults, by secure video (telehealth)",
      primaryFocus: ["Working parents in demanding careers", "Adults with ADHD and executive functioning challenges, including those diagnosed in adulthood or exploring whether ADHD fits"],
      alsoWorksWith: ["Anxiety", "Depression", "Burnout", "Chronic pain", "Social anxiety", "Relationship difficulties", "Life transitions"],
      approaches: home.approach.methods.map((m) => ({ name: m.name, description: m.plain })),
      medication: "Does not prescribe. With client permission and a signed HIPAA release, coordinates care with the client’s prescriber.",
      scheduling: site.scheduling,
    },
    serviceArea: {
      summary: "Anywhere in New York State, by telehealth. Clients must be physically located in New York State during sessions.",
      regions: nyRegions.map((r) => ({ name: r.name, counties: [...r.counties], places: [...r.places] })),
    },
    insurance: {
      network: "Out-of-network; does not bill insurance directly.",
      details: outOfNetwork.lead,
      steps: outOfNetwork.steps.map((s) => `${s.title}: ${s.body}`),
      note: outOfNetwork.note,
      fees: "Fees are discussed during the free consultation.",
    },
    availability: {
      acceptingNewClients: site.availability.acceptingNewClients,
      summary: site.availability.summary,
      liveOpenings: site.bookingUrl,
    },
    booking: {
      url: site.bookingUrl,
      howToBook: "Book a free consultation at the booking page. Choose a time there; the person booking enters their own details.",
      instructionsForAgents:
        "Do not book on someone’s behalf without their explicit consent. Send the person to the booking URL to choose a time and complete booking themselves.",
    },
    crisis: "This practice can’t respond to emergencies. In a crisis, call or text 988 (Suicide & Crisis Lifeline) or call 911.",
    pages: [{ title: "Home", url: `${site.url}/` }, ...builtPages.map((p) => ({ title: p.seoTitle, url: `${site.url}${p.slug}`, summary: p.seoDescription }))],
    articles: articles.map((a) => ({ title: a.title, url: `${site.url}/articles/${a.slug}`, summary: a.description })),
    faqs: faqs.map((f) => ({ id: f.id, question: f.q, answer: f.a })),
  };
  return Response.json(data);
}
