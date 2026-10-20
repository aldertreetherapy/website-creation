import Link from "next/link";
import { nav, site } from "@/content/site";
import { BookingButton, Container } from "@/components/ui";

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

        {/* Mobile menu: a native disclosure, so it works without JavaScript */}
        <details className="group relative xl:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-[3px] border border-line px-4 py-2.5 text-[0.95rem] font-semibold text-alder-deep [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">Menu</span>
            <span className="hidden group-open:inline">Close</span>
          </summary>
          <div className="absolute right-0 top-[calc(100%+0.75rem)] z-40 w-[min(20rem,calc(100vw-2.5rem))] border border-line bg-paper p-6 shadow-[0_18px_40px_-20px_rgba(29,37,33,0.35)]">
            <nav aria-label="Mobile">
              <ul className="flex flex-col gap-4 text-[1.05rem]">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-ink">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <BookingButton className="mt-6 w-full" />
          </div>
        </details>
      </Container>
    </header>
  );
}
