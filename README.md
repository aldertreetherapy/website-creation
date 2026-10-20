# Alder Tree Therapy website

Built with Next.js, TypeScript and Tailwind CSS.

## Changing the words on the site
Nearly all text lives in two files. Open one, change the words between the quotation marks, and save.
- **`content/site.ts`**: homepage, menu, FAQs, insurance steps, credentials, email and booking link
- **`content/pages.ts`**: every other page (Working Parents, ADHD, Approach, About, Insurance, FAQ, Book, For Clinicians, Accessibility)

## Where things are
| Folder | What's inside |
|---|---|
| `content/site.ts` | Homepage text, FAQs and practice details |
| `content/pages.ts` | Text for every page except the homepage |
| `components/ContentPage.tsx` | The shared layout those pages use |
| `public/_redirects` | Forwards old Google Sites addresses (e.g. `/faqs`) to the new pages |
| `public/_headers` | Security settings Cloudflare applies to every page |
| `app/globals.css` | Colors, fonts and type sizes (the "design tokens") |
| `components/` | Reusable building blocks: header, footer, buttons, FAQ list, the alder drawing |
| `components/home/` | The homepage sections |
| `lib/structured-data.ts` | Search-engine data (schema.org) built from `content/site.ts` |
| `public/images/` | Headshot and the image shown when the site is shared |
| `app/llms.txt/route.ts` | Builds /llms.txt, a plain-text summary for AI assistants, from the content files |
| `app/robots.txt/route.ts` | Builds /robots.txt, welcoming search engines and AI assistants |
| `functions/_middleware.js` | Redirects aldertreetherapy.com to www.aldertreetherapy.com |
| `next.config.ts` | Tells Next.js to export plain static files for Cloudflare Pages |
| `preview/` | Tool used only to make design previews; not part of the live site |

## Running it locally (for a developer)
```
npm install
npm run dev
```

## Privacy
- No analytics, cookies, tracking pixels or forms.
- Booking goes to Jane (aldertreetherapy.janeapp.com).
- Fonts are self-hosted at build time, so visitors' browsers don't contact Google.

## Hosting (Cloudflare Pages)
- Build command: `npm run build`
- Output folder: `out`
- Node version: 22 (set in `.node-version`)

## Launch checklist
- [x] All pages built
- [ ] Files in GitHub, connected to Cloudflare Pages
- [ ] Tested on the temporary `*.pages.dev` address
- [ ] `www.aldertreetherapy.com` connected in Cloudflare Pages (replaces the Google Sites CNAME)
- [ ] `aldertreetherapy.com` (no www) forwards to `www`
- [ ] Google Workspace email records left unchanged (MX, google._domainkey, site verification)
- [ ] Custom URL removed from Google Sites
