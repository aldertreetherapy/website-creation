import { home } from "@/content/site";
import { faqGraph, jsonLd, practiceGraph, videoGraph } from "@/lib/structured-data";
import { AboutPreview, Approach, Hero, Paths, PracticalDetails, Process, Recognition } from "@/components/home/HomeSections";
import { ClosingCta, FaqSection, OutOfNetworkSection } from "@/components/sections";

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
      <FaqSection tone="paper" eyebrow={home.faq.eyebrow} heading={home.faq.heading} ids={home.faq.ids} link={home.faq.link} />
      <ClosingCta heading={home.closing.heading} body={home.closing.body} />
    </>
  );
}
