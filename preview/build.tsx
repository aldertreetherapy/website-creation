/**
 * PREVIEW BUILDER (not part of the website).
 * Renders the real page components to static HTML files so the design
 * can be reviewed before the site is deployed.
 */
import fs from "node:fs";
import path from "node:path";
import type { ReactElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { compile } from "tailwindcss";
import { imageMap } from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HomePage } from "@/components/HomePage";
import { ContentPage } from "@/components/ContentPage";
import { builtPages } from "@/content/pages";
import { site } from "@/content/site";

const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(__dirname, "out");
const TW = "/opt/npm-tools/node_modules/tailwindcss";

async function buildCss(html: string) {
  const input = fs.readFileSync(path.join(ROOT, "app/globals.css"), "utf8");
  const compiler = await compile(input, {
    base: ROOT,
    loadStylesheet: async (id: string, base: string) => {
      const file = id === "tailwindcss" ? path.join(TW, "index.css") : path.resolve(base, id);
      return { path: file, base: path.dirname(file), content: fs.readFileSync(file, "utf8") };
    },
  } as any);
  const candidates = new Set<string>();
  for (const m of html.matchAll(/class="([^"]*)"/g)) m[1].split(/\s+/).forEach((c) => c && candidates.add(c));
  return `:root{--font-newsreader:"Newsreader";--font-hanken:"Hanken Grotesk";}\n` + compiler.build([...candidates]);
}

function shell(main: ReactElement) {
  return renderToStaticMarkup(
    <div id="top">
      <SiteHeader />
      <main id="main">{main}</main>
      <SiteFooter />
    </div>
  );
}

const FONTS = `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,300..600;1,6..72,300..600&display=swap">`;

(async () => {
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(path.join(OUT, "images"), { recursive: true });
  fs.copyFileSync(path.join(ROOT, "public/images/tanya-fridland-lcsw.webp"), path.join(OUT, "images/tanya-fridland-lcsw.webp"));
  imageMap[site.clinician.headshot.src] = "images/tanya-fridland-lcsw.webp";

  const pages = [
    { file: "index.html", title: "Alder Tree Therapy", body: shell(<HomePage />) },
    ...builtPages.map((p) => ({
      file: p.slug.slice(1) + ".html",
      title: `${p.seoTitle} | Alder Tree Therapy`,
      body: shell(<ContentPage page={p} />),
    })),
  ];
  const css = await buildCss(pages.map((p) => p.body).join("\n"));

  for (const p of pages) {
    const head = `<title>${p.title}</title>
<meta name="claude:viewport-fit-sides" content="cover">
${FONTS}
<style>${css}</style>`;
    // The main page is wrapped by the preview host; the other pages need their own document shell.
    const doc =
      p.file === "index.html"
        ? `${head}\n${p.body}\n`
        : `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">${head}</head><body>${p.body}</body></html>`;
    fs.writeFileSync(path.join(OUT, p.file), doc);
    console.log("wrote", p.file, (Buffer.byteLength(doc) / 1024).toFixed(0) + "KB");
  }
})();
