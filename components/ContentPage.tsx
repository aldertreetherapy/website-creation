import Image from "next/image";
import Link from "next/link";
import type { PageContent, PageSection } from "@/content/pages";
import { home, site } from "@/content/site";
import { Credentials } from "@/components/home/HomeSections";
import { IntroVideo } from "@/components/IntroVideo";
import { jsonLd, pageGraph } from "@/lib/structured-data";
import { ArrowLink, BookingButton, Container, Section, SectionHeading } from "@/components/ui";
import { ClosingCta, FaqSection, OutOfNetworkSection } from "@/components/sections";

/** Renders any service page (ADHD, Working Parents, For Clinicians) from its content in content/pages.ts. */
export function ContentPage({ page }: { page: PageContent }) {
  // Alternate band colors down the page, starting after the paper-colored hero.
  let n = 0;
  const nextTone = () => (n++ % 2 === 0 ? "linen" : "paper") as "linen" | "paper";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(pageGraph(page)) }} />
      <PageHero page={page} />
      {page.sections.map((s, i) => (
        <SectionRenderer key={i} section={s} index={i} tone={nextTone()} />
      ))}
      {page.related && page.related.length > 0 && (
        <section aria-label="Related" className="border-t border-line bg-paper">
          <Container className="flex flex-wrap items-center gap-x-8 gap-y-3 py-10">
            <span className="eyebrow">Also see</span>
            {page.related.map((r) => (
              <ArrowLink key={r.href} href={r.href}>
                {r.label}
              </ArrowLink>
            ))}
          </Container>
        </section>
      )}
      {page.closing && <ClosingCta heading={page.closing.heading} body={page.closing.body} />}
    </>
  );
}

function PageHero({ page }: { page: PageContent }) {
  const shot = page.hero.portraitVariant === "seated" ? site.clinician.seatedPhoto : site.clinician.headshot;
  const showPortrait = page.hero.portrait !== false;
  const showBooking = page.hero.booking !== false;
  return (
    <section aria-labelledby="page-heading" className="bg-paper">
      <Container className="pb-20 pt-10 md:pb-24 md:pt-14">
        <nav aria-label="Breadcrumb" className="text-[0.88rem] text-ink-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="link-underline">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-ink">
              {page.breadcrumb}
            </li>
          </ol>
        </nav>
        <div className="mt-12 grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
          <div className={showPortrait ? "lg:col-span-8" : "lg:col-span-10"}>
            <p className="eyebrow">{page.hero.eyebrow}</p>
            <h1 id="page-heading" className="mt-6 max-w-[18ch] text-display">
              {page.hero.heading}
            </h1>
            {page.lastUpdated && (
              <p className="mt-6 text-[0.9rem] text-ink-muted">Last updated {page.lastUpdated}</p>
            )}
            <p className="mt-8 max-w-[60ch] text-lead text-ink-muted">{page.hero.lead}</p>
            {showBooking && (
              <div className="mt-10">
                <BookingButton />
              </div>
            )}
          </div>
          {showPortrait && (
          <figure className="flex items-center gap-5 lg:col-span-4 lg:flex-col lg:items-start">
            <Image
              src={shot.src}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
              sizes="(min-width: 1024px) 14rem, 6rem"
              className="block h-auto w-28 max-w-full lg:w-64"
            />
            <figcaption className="text-[0.9rem] leading-relaxed text-ink-muted">
              <span className="font-semibold text-ink">
                {site.clinician.name}, {site.clinician.credentials}
              </span>
              <br />
              {home.hero.credentialLine}
            </figcaption>
          </figure>
          )}
        </div>
      </Container>
    </section>
  );
}

function SectionRenderer({ section, index, tone }: { section: PageSection; index: number; tone: "paper" | "linen" }) {
  const id = `s${index}`;
  switch (section.kind) {
    case "prose":
      return (
        <Section tone={tone} labelledBy={`${id}-heading`}>
          <SectionHeading id={`${id}-heading`} eyebrow={section.eyebrow} heading={section.heading} />
          <div className="mt-10 grid md:grid-cols-12 md:gap-8">
            <div className="max-w-[62ch] space-y-5 text-[1.08rem] text-ink-muted md:col-span-8 md:col-start-4">
              {section.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </Section>
      );
    case "list":
      return (
        <Section tone={tone} labelledBy={`${id}-heading`}>
          <SectionHeading id={`${id}-heading`} eyebrow={section.eyebrow} heading={section.heading} />
          <div className="mt-10 grid md:grid-cols-12 md:gap-8">
            <div className="md:col-span-9 md:col-start-4">
              {section.intro && <p className="max-w-[62ch] text-lead text-ink-muted">{section.intro}</p>}
              <ul className={`mt-8 grid gap-x-10 ${section.columns === 2 ? "md:grid-cols-2" : ""}`}>
                {section.items.map((item) => (
                  <li key={item} className="flex min-w-0 gap-3 border-t border-line py-4 text-ink">
                    <span aria-hidden="true" className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rotate-45 bg-wood" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      );
    case "pairs":
      return (
        <Section tone={tone} labelledBy={`${id}-heading`}>
          <SectionHeading id={`${id}-heading`} eyebrow={section.eyebrow} heading={section.heading} />
          <div className="mt-12 grid md:grid-cols-12 md:gap-8">
            <dl className="grid gap-x-12 gap-y-9 md:col-span-9 md:col-start-4 md:grid-cols-2">
              {section.items.map((item) => (
                <div key={item.title} className="min-w-0 border-t border-line pt-5">
                  <dt className="font-display text-[1.3rem] leading-tight text-alder-deep">{item.title}</dt>
                  <dd className="mt-2 text-ink-muted">{item.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>
      );
    case "quote":
      return (
        <section className={tone === "linen" ? "bg-linen" : "bg-paper"}>
          <Container className="grid py-20 md:grid-cols-12 md:gap-8 md:py-24">
            <figure className="md:col-span-8 md:col-start-4">
              <blockquote className="font-display text-[1.9rem] italic leading-[1.2] text-alder-deep md:text-[2.5rem]">
                {section.text}
              </blockquote>
              <figcaption className="mt-8 max-w-[58ch] text-lead text-ink-muted">{section.followUp}</figcaption>
            </figure>
          </Container>
        </section>
      );
    case "credentials":
      return (
        <Section tone={tone} labelledBy={`${id}-heading`}>
          <SectionHeading id={`${id}-heading`} eyebrow={section.eyebrow} heading={section.heading} />
          <div className="mt-10 grid md:grid-cols-12 md:gap-8">
            <div className="max-w-[62ch] md:col-span-8 md:col-start-4">
              <Credentials showLabel={false} />
            </div>
          </div>
        </Section>
      );
    case "photos":
      return (
        <Section tone={tone} labelledBy={`${id}-heading`}>
          <SectionHeading id={`${id}-heading`} eyebrow={section.eyebrow} heading={section.heading} />
          <div className="mt-10 grid md:grid-cols-12 md:gap-8">
            <figure className="md:col-span-8 md:col-start-4">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {section.images.map((img) => (
                  <Image
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    sizes="(min-width: 768px) 22rem, 45vw"
                    className="block h-auto w-full max-w-full"
                  />
                ))}
              </div>
              <figcaption className="mt-5 max-w-[56ch] font-display text-[1.15rem] italic leading-snug text-ink-muted">
                {section.caption}
              </figcaption>
            </figure>
          </div>
        </Section>
      );
    case "video":
      return (
        <Section tone={tone} labelledBy={`${id}-heading`}>
          <SectionHeading id={`${id}-heading`} eyebrow={section.eyebrow} heading={section.heading} />
          <div className="mt-10 grid md:grid-cols-12 md:gap-8">
            <IntroVideo className="md:col-span-7 md:col-start-4" />
          </div>
        </Section>
      );
    case "contact":
      return (
        <Section tone={tone} labelledBy={`${id}-heading`}>
          <SectionHeading id={`${id}-heading`} eyebrow={section.eyebrow} heading={section.heading} />
          <div className="mt-10 grid md:grid-cols-12 md:gap-8">
            <div className="max-w-[62ch] space-y-4 md:col-span-8 md:col-start-4">
              <p className="text-[1.08rem] text-ink-muted">{section.intro}</p>
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="font-display text-[1.5rem] text-alder-deep link-underline select-all break-all"
                >
                  {site.email}
                </a>
              </p>
              <p className="text-[0.95rem] text-ink-muted">{section.note}</p>
            </div>
          </div>
        </Section>
      );
    case "outOfNetwork":
      return <OutOfNetworkSection tone={tone} id={`${id}-insurance`} />;
    case "faq":
      return <FaqSection tone={tone} id={`${id}-faq`} eyebrow={section.eyebrow} heading={section.heading} ids={section.ids} />;
  }
}
