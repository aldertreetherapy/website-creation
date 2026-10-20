import type { Metadata } from "next";
import { insurancePage as page } from "@/content/pages";
import { ContentPage } from "@/components/ContentPage";

export const metadata: Metadata = {
  title: page.seoTitle,
  description: page.seoDescription,
  alternates: { canonical: page.slug },
  openGraph: { title: page.seoTitle, description: page.seoDescription, url: page.slug },
};

export default function Page() {
  return <ContentPage page={page} />;
}
