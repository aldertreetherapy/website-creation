import type { AnchorHTMLAttributes, ReactNode } from "react";
import { builtPages } from "@/content/pages";
// Preview-only stand-in for next/link. Built pages map to their .html files.
const BUILT: Record<string, string> = { "/": "./" };
for (const p of builtPages) BUILT[p.slug] = p.slug.slice(1) + ".html";
export function previewHref(href: string) {
  if (!href.startsWith("/")) return href;
  if (href.startsWith("/#")) return "./" + href.slice(1);
  return BUILT[href] ?? "#top";
}
export default function Link({ href, children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children: ReactNode }) {
  const out = previewHref(href);
  return (
    <a href={out} data-page={out === "#top" ? href : undefined} {...rest}>
      {children}
    </a>
  );
}
