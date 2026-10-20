import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/content/articles";
import { ArticleList } from "@/components/ArticleView";
import { Container } from "@/components/ui";
import { ClosingCta } from "@/components/sections";

export const metadata: Metadata = {
  title: "Articles for Working Parents and Professionals with ADHD",
  description:
    "Practical articles by Tanya Fridland, LCSW, on working parenthood, the mental load, returning from parental leave, adult ADHD, and using out-of-network benefits in New York.",
  alternates: { canonical: "/articles" },
};

export default function Page() {
  return (
    <>
      <section aria-labelledby="page-heading" className="bg-paper">
        <Container className="pb-16 pt-10 md:pt-14">
          <nav aria-label="Breadcrumb" className="text-[0.88rem] text-ink-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="link-underline">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">Articles</li>
            </ol>
          </nav>
          <p className="eyebrow mt-12">Articles</p>
          <h1 id="page-heading" className="mt-6 max-w-[18ch] text-display">Practical reading for full lives.</h1>
          <p className="mt-8 max-w-[60ch] text-lead text-ink-muted">
            Thoughts on working parenthood, ADHD, and the pressures of demanding careers, from my work with clients across New York State.
          </p>
          <div className="mt-14">
            <ArticleList items={articles} />
          </div>
        </Container>
      </section>
      <ClosingCta heading="Want to talk it through?" body="A free consultation is the simplest way to see whether working together makes sense." />
    </>
  );
}
