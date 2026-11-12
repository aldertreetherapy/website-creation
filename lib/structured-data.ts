import { faqs, home, site } from "@/content/site";
import type { PageContent } from "@/content/pages";
import { nyCounties } from "@/content/regions";
import type { Article } from "@/content/articles";

/**
 * Structured data (JSON-LD) tells search engines and AI assistants, in a
 * machine-readable way, who you are and what the practice offers.
 * Every fact here comes from the content files. Nothing is added that isn't on the site.
 */

const ORG_ID = `${site.url}/#practice`;
const PERSON_ID = `${site.url}/#tanya-fridland`;

export function practiceGraph() {
  return [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.practiceName,
      publisher: { "@id": ORG_ID },
      inLanguage: "en-US",
    },
    {
      "@type": ["MedicalBusiness", "ProfessionalService"],
      "@id": ORG_ID,
      name: site.legalName,
      alternateName: site.practiceName,
      url: site.url,
      email: site.email,
      description: site.description,
      image: `${site.url}${site.clinician.headshot.src}`,
      founder: { "@id": PERSON_ID },
      sameAs: [...site.profiles],
      employee: { "@id": PERSON_ID },
      areaServed: [
        { "@type": "State", name: "New York", containedInPlace: { "@type": "Country", name: "United States" } },
        ...nyCounties.map((c) => ({
          "@type": "AdministrativeArea",
          name: `${c} County, New York`,
          containedInPlace: { "@type": "State", name: "New York" },
        })),
      ],
      medicalSpecialty: "Psychiatric",
      knowsAbout: [
        "Working parents",
        "Balancing career and family",
        "ADHD in adults",
        "Executive functioning",
        "Burnout",
        "Anxiety",
        "Depression",
      ],
      availableService: [
        {
          "@type": "MedicalTherapy",
          name: "Individual psychotherapy for adults (telehealth)",
          description: "Individual psychotherapy by video for adults located in New York State.",
        },
        {
          "@type": "MedicalTherapy",
          name: "Therapy for working parents",
          url: `${site.url}/working-parents`,
        },
        {
          "@type": "MedicalTherapy",
          name: "Therapy for adults with ADHD",
          url: `${site.url}/adhd-therapy`,
        },
        ...home.approach.methods.map((m) => ({ "@type": "MedicalTherapy", name: m.name })),
      ],
      potentialAction: {
        "@type": "ReserveAction",
        name: site.bookingLabel,
        target: site.bookingUrl,
      },
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: site.clinician.name,
      honorificSuffix: site.clinician.credentials,
      jobTitle: site.clinician.title,
      image: `${site.url}${site.clinician.headshot.src}`,
      worksFor: { "@id": ORG_ID },
      sameAs: [...site.profiles],
      alumniOf: site.clinician.education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.school })),
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "license",
          name: "Licensed Clinical Social Worker (LCSW)",
          recognizedBy: { "@type": "GovernmentOrganization", name: "New York State Education Department" },
        },
        ...site.clinician.education.map((e) => ({
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: e.degree,
          recognizedBy: { "@type": "CollegeOrUniversity", name: e.school },
        })),
      ],
      hasOccupation: [{ "@type": "Occupation", name: "Psychotherapist" }],
      description:
        "Licensed clinical social worker in New York and former BigLaw attorney who works with working parents in demanding careers and professionals with ADHD.",
    },
  ];
}

export function videoGraph() {
  const v = site.clinician.video;
  return {
    "@type": "VideoObject",
    "@id": `${site.url}/#intro-video`,
    name: v.title,
    description: "A short introduction from Tanya Fridland, LCSW, of Alder Tree Therapy.",
    thumbnailUrl: `${site.url}${v.poster}`,
    contentUrl: `${site.url}${v.src}`,
    uploadDate: v.uploadDate,
    duration: v.duration,
    publisher: { "@id": ORG_ID },
  };
}

export function faqGraph(ids: readonly string[]) {
  const items = ids.map((id) => faqs.find((f) => f.id === id)).filter(Boolean) as (typeof faqs)[number][];
  return {
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Structured data for a service page: the page, its breadcrumb trail, and its FAQs. */
export function pageGraph(page: PageContent) {
  const url = `${site.url}${page.slug}`;
  const graph: object[] = [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.seoTitle,
      description: page.seoDescription,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": ORG_ID },
      author: { "@id": PERSON_ID },
      breadcrumb: { "@id": `${url}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: page.breadcrumb, item: url },
      ],
    },
  ];
  const faqIds = page.sections.flatMap((s) => (s.kind === "faq" ? s.ids : []));
  if (faqIds.length) graph.push(faqGraph(faqIds));
  return graph;
}

export function articleGraph(a: Article) {
  const url = `${site.url}/articles/${a.slug}`;
  return [
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: a.title,
      description: a.description,
      datePublished: a.published,
      dateModified: a.published,
      url,
      mainEntityOfPage: url,
      image: `${site.url}/images/og-alder-tree-therapy.jpg`,
      author: {
        "@type": "Person",
        "@id": PERSON_ID,
        name: site.clinician.name,
        honorificSuffix: site.clinician.credentials,
        url: `${site.url}/about`,
      },
      publisher: { "@id": ORG_ID, "@type": "Organization", name: site.legalName },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Articles", item: `${site.url}/articles` },
        { "@type": "ListItem", position: 3, name: a.title, item: url },
      ],
    },
  ];
}

export function jsonLd(graph: object[]) {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
}
