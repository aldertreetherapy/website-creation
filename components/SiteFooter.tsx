import Link from "next/link";
import { footer, nav, site } from "@/content/site";
import { Container } from "@/components/ui";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-paper text-[0.95rem]">
      <Container className="grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-[1.5rem] text-alder-deep">
            Alder Tree <span className="italic">Therapy</span>
          </p>
          <p className="mt-3 max-w-[36ch] text-ink-muted">
            {site.clinician.name}, {site.clinician.credentials}. Individual psychotherapy for adults by telehealth,
            anywhere in {site.serviceArea}. {site.scheduling}
          </p>
          <p className="mt-6">
            <a href={site.bookingUrl} className="font-semibold text-alder link-underline">
              {site.bookingLabel}
            </a>
          </p>
          <p className="mt-3">
            <a href={`mailto:${site.email}`} className="text-ink link-underline select-all">
              {site.email}
            </a>
          </p>
          <p className="mt-2 max-w-[40ch] text-[0.85rem] text-ink-muted">{footer.emailNote}</p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <p className="eyebrow">Pages</p>
          <ul className="mt-4 flex flex-col gap-2.5">
            {[...nav, ...footer.extraLinks].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink hover:text-alder link-underline decoration-transparent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="eyebrow">In an emergency</p>
          <p className="mt-4 text-ink-muted">{footer.crisis}</p>
        </div>
      </Container>

      <Container className="flex flex-col gap-3 border-t border-line py-6 text-[0.82rem] text-ink-muted md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {site.legalName}
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {footer.legalLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="link-underline decoration-transparent hover:text-ink">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
