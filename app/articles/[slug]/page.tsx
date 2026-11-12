import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articleBySlug, articles } from "@/content/articles";
import { ArticleView } from "@/components/ArticleView";
import { articleGraph, jsonLd } from "@/lib/structured-data";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = articleBySlug(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: `/articles/${a.slug}` },
    openGraph: { type: "article", title: a.title, description: a.description, url: `/articles/${a.slug}`, publishedTime: a.published },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articleBySlug(slug);
  if (!article) notFound();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(articleGraph(article)) }} />
      <ArticleView article={article} />
    </>
  );
}
