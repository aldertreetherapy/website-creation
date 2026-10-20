import Image from "next/image";
import Link from "next/link";
import { home, site } from "@/content/site";
import { IntroVideo } from "@/components/IntroVideo";
import { Arrow, ArrowLink, BookingButton, Container, Section, SectionHeading } from "@/components/ui";

export function Hero() {
  const h = home.hero;
  const shot = site.clinician.headshot;
  return (
    <section aria-labelledby="hero-heading" className="overflow-hidden bg-paper">
      <Container className="grid items-center gap-14 pb-20 pt-14 md:pb-28 md:pt-20 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="eyebrow">{h.eyebrow}</p>
          <h1 id="hero-heading" className="mt-6 max-w-[16ch] text-display">
            {h.heading}
          </h1>
          <p className="mt-8 max-w-[58ch] text-lead text-ink-muted">{h.lead}</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <BookingButton />
            <ArrowLink href={h.secondaryCta.href}>{h.secondaryCta.label}</ArrowLink>
          </div>
          <ul className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-[0.95rem] text-ink-muted sm:flex-row sm:flex-wrap sm:gap-x-8">
            {h.facts.map((f) => (
              <li key={f} className="flex items-center gap-2.5">
                <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-wood" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative mx-auto w-full max-w-[22rem] lg:col-span-5 lg:max-w-[26rem] lg:justify-self-end">
          <div className="relative">
            <span aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 border border-wood/50" />
            <Image
              src={shot.src}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
              priority
              sizes="(min-width: 1024px) 26rem, 22rem"
              className="relative block h-auto w-full max-w-full"
            />
          </div>
          <figcaption className="mt-6 text-[0.9rem] leading-relaxed text-ink-muted">
            <span className="font-semibold text-ink">
              {site.clinician.name}, {site.clinician.credentials}
            </span>
            <br />
            {h.credentialLine}
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}

export function Recognition() {
  const r = home.recognition;
  return (
    <Section tone="linen" labelledBy="recognition-heading">
      <SectionHeading id="recognition-heading" eyebrow={r.eyebrow} heading={r.heading} />
      <div className="mt-12 grid md:grid-cols-12 md:gap-8">
        <ul className="md:col-span-9 md:col-start-4">
          {r.items.map((item) => (
            <li
              key={item}
              className="border-t border-line py-5 font-display text-[1.3rem] leading-snug text-ink md:text-[1.45rem]"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-[56ch] border-t border-line pt-6 text-lead text-ink-muted md:col-span-9 md:col-start-4 md:mt-0">
          {r.closing}
        </p>
      </div>
    </Section>
  );
}

/** The two main audiences, each leading to its own page. */
export function Paths() {
  const p = home.paths;
  return (
    <Section id="who-i-work-with" labelledBy="paths-heading">
      <SectionHeading id="paths-heading" eyebrow={p.eyebrow} heading={p.heading} />
      <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
        {p.items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex min-w-0 flex-col border border-line bg-paper p-7 transition-colors hover:border-alder md:p-10"
          >
            <span className="eyebrow">{item.label}</span>
            <h3 className="mt-5 font-display text-[1.75rem] leading-[1.15] text-alder-deep md:text-[2.1rem]">
              {item.title}
            </h3>
            <p className="mt-5 max-w-[48ch] flex-1 text-ink-muted">{item.body}</p>
            <span className="mt-8 inline-flex items-center gap-2 font-semibold text-alder">
              {item.cta}
              <Arrow className="transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-10 grid md:grid-cols-12 md:gap-8">
        <div className="space-y-2 text-ink-muted md:col-span-8 md:col-start-4">
          <p>{p.also}</p>
          <p>{p.scope}</p>
        </div>
      </div>
    </Section>
  );
}

export function Approach() {
  const a = home.approach;
  return (
    <Section id="approach" tone="linen" labelledBy="approach-heading">
      <SectionHeading id="approach-heading" eyebrow={a.eyebrow} heading={a.heading} />
      <div className="mt-10 grid md:grid-cols-12 md:gap-8">
        <p className="max-w-[60ch] text-lead text-ink-muted md:col-span-8 md:col-start-4">{a.lead}</p>
      </div>
      <div className="mt-14 grid md:grid-cols-12 md:gap-8">
        <dl className="grid gap-x-12 gap-y-10 md:col-span-9 md:col-start-4 md:grid-cols-2">
          {a.methods.map((m) => (
            <div key={m.abbr} className="min-w-0 border-t border-line pt-5">
              <dt>
                <span className="block text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-wood">{m.abbr}</span>
                <span className="mt-2 block font-display text-[1.3rem] leading-tight text-alder-deep">{m.name}</span>
              </dt>
              <dd className="mt-2 text-ink-muted">{m.plain}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="mt-14 grid md:grid-cols-12 md:gap-8">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-5 md:col-span-9 md:col-start-4">
          <BookingButton />
          <ArrowLink href={a.link.href}>{a.link.label}</ArrowLink>
        </div>
      </div>
    </Section>
  );
}

export function Credentials({ showLabel = true }: { showLabel?: boolean }) {
  const a = home.about;
  return (
    <div className="border-t border-line pt-6">
      {showLabel && <p className="eyebrow">{a.credentialsHeading}</p>}
      <ul className={`flex flex-col gap-4 ${showLabel ? "mt-4" : ""}`}>
        <li>
          <span className="block font-semibold text-ink">{a.credential}</span>
        </li>
        {site.clinician.education.map((e) => (
          <li key={e.degree}>
            <span className="block font-semibold text-ink">
              {e.degree}, {e.school}
            </span>
            {e.detail && <span className="block text-[0.95rem] text-ink-muted">{e.detail}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AboutPreview() {
  const a = home.about;
  return (
    <Section labelledBy="about-heading">
      <div className="grid items-start gap-12 md:grid-cols-12 md:gap-8">
        <IntroVideo className="order-2 md:order-1 md:col-span-5 md:col-start-1 md:mt-2" />
        <div className="order-1 md:order-2 md:col-span-6 md:col-start-7">
          <p className="eyebrow">{a.eyebrow}</p>
          <h2 id="about-heading" className="mt-4 max-w-[20ch] text-h2">
            {a.heading}
          </h2>
          <div className="mt-8 max-w-[60ch] space-y-5 text-[1.08rem] text-ink-muted">
            {a.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-10 max-w-[60ch]">
            <Credentials />
          </div>
          <ArrowLink href={a.link.href} className="mt-8">
            {a.link.label}
          </ArrowLink>
        </div>
      </div>
    </Section>
  );
}

export function Process() {
  const p = home.process;
  return (
    <Section tone="linen" labelledBy="process-heading">
      <SectionHeading id="process-heading" eyebrow={p.eyebrow} heading={p.heading} />
      <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        {p.steps.map((s, i) => (
          <li key={s.title} className="min-w-0 border-t border-alder pt-6">
            <span aria-hidden="true" className="font-display text-[2.6rem] leading-none text-wood">
              {i + 1}
            </span>
            <h3 className="mt-4 text-h3">{s.title}</h3>
            <p className="mt-3 max-w-[38ch] text-ink-muted">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function PracticalDetails() {
  const d = home.details;
  return (
    <Section labelledBy="details-heading">
      <SectionHeading id="details-heading" eyebrow={d.eyebrow} heading={d.heading} />
      <dl className="mt-12 border-b border-line">
        {d.items.map((item) => (
          <div key={item.term} className="grid gap-1 border-t border-line py-6 md:grid-cols-12 md:gap-8">
            <dt className="font-semibold text-ink md:col-span-2 md:col-start-4">{item.term}</dt>
            <dd className="max-w-[60ch] text-ink-muted md:col-span-7">{item.detail}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
