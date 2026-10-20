/** Sections shared by more than one page. */
import { faqs, outOfNetwork, type FaqId } from "@/content/site";
import { ArrowLink, BookingButton, Container, Section, SectionHeading } from "@/components/ui";
import { FaqList } from "@/components/FaqList";

export function pickFaqs(ids: readonly FaqId[]) {
  return ids.map((id) => faqs.find((f) => f.id === id)).filter((f): f is (typeof faqs)[number] => Boolean(f));
}

export function OutOfNetworkSection({ tone = "paper", id = "insurance" }: { tone?: "paper" | "linen"; id?: string }) {
  const o = outOfNetwork;
  return (
    <Section id={id} tone={tone} labelledBy={`${id}-heading`}>
      <SectionHeading id={`${id}-heading`} eyebrow={o.eyebrow} heading={o.heading} />
      <div className="mt-10 grid md:grid-cols-12 md:gap-8">
        <p className="max-w-[60ch] text-lead text-ink-muted md:col-span-8 md:col-start-4">{o.lead}</p>
      </div>
      <div className="mt-12 grid md:grid-cols-12 md:gap-8">
        <div className="md:col-span-8 md:col-start-4">
          <ol className="grid gap-8 md:grid-cols-3 md:gap-8">
            {o.steps.map((s, i) => (
              <li key={s.title} className="min-w-0 border-t border-line pt-5">
                <span aria-hidden="true" className="font-display text-[1.8rem] leading-none text-wood">
                  {i + 1}
                </span>
                <h3 className="mt-3 font-display text-[1.25rem] leading-snug text-alder-deep">{s.title}</h3>
                <p className="mt-2 text-ink-muted">{s.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-[0.9rem] text-ink-muted">{o.note}</p>
        </div>
      </div>
    </Section>
  );
}

export function FaqSection({
  eyebrow,
  heading,
  ids,
  tone = "linen",
  id = "faq",
  link,
}: {
  eyebrow: string;
  heading: string;
  ids: readonly FaqId[];
  tone?: "paper" | "linen";
  id?: string;
  link?: { label: string; href: string };
}) {
  return (
    <Section tone={tone} labelledBy={`${id}-heading`}>
      <SectionHeading id={`${id}-heading`} eyebrow={eyebrow} heading={heading} />
      <div className="mt-12 grid md:grid-cols-12 md:gap-8">
        <div className="md:col-span-9 md:col-start-4">
          <FaqList items={pickFaqs(ids)} />
          {link && (
            <ArrowLink href={link.href} className="mt-8">
              {link.label}
            </ArrowLink>
          )}
        </div>
      </div>
    </Section>
  );
}

export function ClosingCta({ heading, body }: { heading: string; body: string }) {
  return (
    <section aria-labelledby="closing-heading" className="bg-alder-deep text-on-alder">
      <Container className="grid items-end gap-10 py-20 md:grid-cols-12 md:gap-8 md:py-24">
        <div className="md:col-span-6 md:col-start-4">
          <h2 id="closing-heading" className="text-h2 !text-on-alder">
            {heading}
          </h2>
          <p className="mt-5 max-w-[46ch] text-lead text-on-alder-muted">{body}</p>
        </div>
        <div className="md:col-span-3 md:justify-self-end">
          <BookingButton variant="light" className="whitespace-nowrap" />
        </div>
      </Container>
    </section>
  );
}
