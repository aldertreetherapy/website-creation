import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/content/articles";
import { articles } from "@/content/articles";
import { home, site } from "@/content/site";
import { ArrowLink, BookingButton, Container } from "@/components/ui";
import { ClosingCta } from "@/components/sections";

export function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

/** A single article page. */
export function ArticleView({ article }: { article: Article }) {
  const shot = site.clinician.headshot;
  const related = articles.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 2);
  return (
    <>
      <article className="bg-paper">
        <Container className="pb-20 pt-10 md:pb-24 md:pt-14">
          <nav aria-label="Breadcrumb" className="text-[0.88rem] text-ink-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="link-underline">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/articles" className="link-underline">Articles</Link></li>
            </ol>
          </nav>
          <div className="mt-12 grid md:grid-cols-12 md:gap-8">
            <header className="md:col-span-9 md:col-start-2 lg:col-span-8 lg:col-start-3">
              <p className="eyebrow">{article.category}</p>
              <h1 className="mt-5 text-[clamp(2.1rem,1.5rem+2.4vw,3.4rem)] leading-[1.08]">{article.title}</h1>
              <div className="mt-8 flex items-center gap-4 border-y border-line py-4">
                <Image src={shot.src} alt="" width={shot.width} height={shot.height} className="h-12 w-12 rounded-full object-cover" />
                <p className="text-[0.92rem] leading-snug text-ink-muted">
                  <span className="font-semibold text-ink">{site.clinician.name}, {site.clinician.credentials}</span> ({site.clinician.pronouns})
                  <br />
                  <time dateTime={article.published}>{formatDate(article.published)}</time> · {article.readingMinutes} min read
                </p>
              </div>
              <p className="mt-10 text-lead text-ink">{article.intro}</p>
            </header>
            <div className="md:col-span-9 md:col-start-2 lg:col-span-8 lg:col-start-3">
              {article.sections.map((s, i) => (
                <section key={i} className="mt-12">
                  {s.heading && <h2 className="text-[1.75rem] leading-tight">{s.heading}</h2>}
                  <div className="mt-5 space-y-5 text-[1.08rem] leading-[1.75] text-ink-muted">
                    {s.paragraphs?.map((p) => <p key={p}>{p}</p>)}
                    {s.list && (
                      <ul className="space-y-3">
                        {s.list.map((li) => (
                          <li key={li} className="flex gap-3">
                            <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rotate-45 bg-wood" />
                            <span>{li}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {s.after?.map((p) => <p key={p}>{p}</p>)}
                  </div>
                </section>
              ))}

              <aside className="mt-14 border border-line bg-linen/60 p-7">
                <p className="font-display text-[1.35rem] leading-snug text-alder-deep">
                  {site.clinician.name}, {site.clinician.credentials}, is a New York licensed clinical social worker and former BigLaw attorney. She provides telehealth therapy across New York State for working parents and professionals with ADHD.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <BookingButton />
                  <ArrowLink href="/about">About Tanya</ArrowLink>
                </div>
              </aside>

              {article.sources && article.sources.length > 0 && (
                <section className="mt-10 text-[0.9rem] text-ink-muted">
                  <h2 className="eyebrow">Sources</h2>
                  <ul className="mt-3 space-y-2">
                    {article.sources.map((src) => (
                      <li key={src.url}>
                        <a href={src.url} className="link-underline" rel="noopener">{src.label}</a>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
              <p className="mt-10 text-[0.85rem] text-ink-muted">
                This article is for general information and isn’t a substitute for individual care. {home.closing.body}
              </p>
            </div>
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="border-t border-line bg-linen">
          <Container className="py-16">
            <h2 id="related-heading" className="eyebrow">Keep reading</h2>
            <ul className="mt-6 grid gap-6 md:grid-cols-2">
              {related.map((a) => (
                <li key={a.slug} className="min-w-0 border-t border-line pt-5">
                  <Link href={`/articles/${a.slug}`} className="group">
                    <span className="block font-display text-[1.3rem] leading-snug text-alder-deep group-hover:text-wood">{a.title}</span>
                    <span className="mt-2 block text-ink-muted">{a.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}
      <ClosingCta heading="Ready to talk it through?" body="A free consultation is the simplest way to see whether working together makes sense." />
    </>
  );
}

/** List of articles, used on the Articles page and the homepage. */
export function ArticleList({ items, headingLevel = "h2" }: { items: Article[]; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <ul className="border-b border-line">
      {items.map((a) => (
        <li key={a.slug} className="border-t border-line">
          <Link href={`/articles/${a.slug}`} className="group grid gap-2 py-7 md:grid-cols-12 md:gap-8">
            <span className="eyebrow md:col-span-3 md:pt-1.5">{a.category}</span>
            <span className="md:col-span-9">
              <H className="font-display text-[1.45rem] leading-snug text-alder-deep transition-colors group-hover:text-wood">{a.title}</H>
              <span className="mt-2 block max-w-[62ch] text-ink-muted">{a.description}</span>
              <span className="mt-3 block text-[0.85rem] text-ink-muted">{a.readingMinutes} min read</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
