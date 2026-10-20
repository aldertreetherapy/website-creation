import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/content/site";

/** Centers content and applies the page's side margins. */
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`gutter mx-auto w-full max-w-[76rem] ${className}`}>{children}</div>;
}

type Tone = "paper" | "linen" | "alder";
const toneClass: Record<Tone, string> = {
  paper: "bg-paper",
  linen: "bg-linen",
  alder: "bg-alder-deep text-on-alder",
};

/** A full-width band of the page. `labelledBy` points at the section's heading id. */
export function Section({
  id,
  tone = "paper",
  labelledBy,
  children,
  className = "",
}: {
  id?: string;
  tone?: Tone;
  labelledBy?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${toneClass[tone]} py-20 md:py-28 scroll-mt-6 ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

/**
 * Section opener: small label + heading. On wide screens the label sits in a
 * left margin column, like a sidenote, and the heading takes the main column.
 */
export function SectionHeading({
  id,
  eyebrow,
  heading,
  onDark = false,
}: {
  id: string;
  eyebrow: string;
  heading: string;
  onDark?: boolean;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-12 md:gap-8">
      <p className={`eyebrow md:col-span-3 md:pt-3 ${onDark ? "!text-on-alder-muted" : ""}`}>{eyebrow}</p>
      <h2
        id={id}
        className={`text-h2 md:col-span-9 max-w-[22ch] ${onDark ? "!text-on-alder" : ""}`}
      >
        {heading}
      </h2>
    </div>
  );
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-[3px] px-6 py-3.5 text-[0.98rem] font-semibold leading-none transition-colors duration-150";

/** The main call to action. Always points to the Jane booking page. */
export function BookingButton({
  variant = "solid",
  className = "",
  label = site.bookingLabel,
}: {
  variant?: "solid" | "light";
  className?: string;
  label?: string;
}) {
  const styles =
    variant === "solid"
      ? "bg-alder text-on-alder hover:bg-alder-deep"
      : "bg-paper text-alder-deep hover:bg-linen";
  return (
    <a href={site.bookingUrl} className={`${buttonBase} ${styles} ${className}`}>
      {label}
      <Arrow />
    </a>
  );
}

/** Quiet text link with an arrow, for "read more" style links. */
export function ArrowLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 font-semibold text-alder link-underline ${className}`}
    >
      {children}
      <Arrow className="transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transition-none" />
    </Link>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
