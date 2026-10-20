import { home } from "@/content/site";
import { faqGraph, jsonLd, practiceGraph, videoGraph } from "@/lib/structured-data";
import { AboutPreview, Approach, Hero, Paths, PracticalDetails, Process, Recognition } from "@/components/home/HomeSections";
import { ClosingCta, FaqSection, OutOfNetworkSection } from "@/components/sections";
import { ArticleList } from "@/components/ArticleView";
import { articles } from "@/content/articles";
import { ArrowLink, Section, SectionHeading } from "@/components/ui";

/** The homepage, assembled from sections. Reorder or remove lines here to change the page. */
export function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd([...practiceGraph(), videoGraph(), faqGraph(home.faq.ids)]) }}
      />
      <Hero />
      <Recognition />
      <Paths />
      <Approach />
      <AboutPreview />
      <Process />
      <PracticalDetails />
      <OutOfNetworkSection tone="linen" />
      <Section tone="paper" labelledBy="articles-heading">
        <SectionHeading id="articles-heading" eyebrow="Articles" heading="Practical reading for full lives." />
        <div className="mt-12 grid md:grid-cols-12 md:gap-8">
          <div className="md:col-span-9 md:col-start-4">
            <ArticleList items={articles.slice(0, 3)} headingLevel="h3" />
            <ArrowLink href="/articles" className="mt-8">All articles</ArrowLink>
          </div>
        </div>
      </Section>
      <FaqSection tone="linen" eyebrow={home.faq.eyebrow} heading={home.faq.heading} ids={home.faq.ids} link={home.faq.link} />
      <ClosingCta heading={home.closing.heading} body={home.closing.body} />
    </>
  );
}
