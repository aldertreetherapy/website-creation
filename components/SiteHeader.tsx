import Link from "next/link";
import { nav, site } from "@/content/site";
import { BookingButton, Container } from "@/components/ui";
import { MobileMenu } from "@/components/MobileMenu";

export function Wordmark() {
  return (
    <Link href="/" className="group flex flex-col leading-none" aria-label={`${site.practiceName}, home`}>
      <span className="font-display text-[1.6rem] tracking-[-0.01em] text-alder-deep">
        Alder Tree <span className="italic">Therapy</span>
      </span>
      <span className="mt-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
        {site.clinician.name}, {site.clinician.credentials}
      </span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="border-b border-line bg-paper">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-4 focus:py-2"
      >
        Skip to main content
      </a>
      <Container className="flex items-center justify-between gap-6 py-5">
        <Wordmark />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-7 whitespace-nowrap text-[0.95rem]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink hover:text-alder link-underline decoration-transparent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto hidden md:block xl:ml-0">
          <BookingButton label="Book a free consultation" className="!px-5 !py-3 text-[0.92rem]" />
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
