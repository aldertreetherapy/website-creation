type Faq = { id: string; q: string; a: string };

/** Expandable questions. Uses native <details>, so it's keyboard- and screen-reader-friendly with no script. */
export function FaqList({ items }: { items: readonly Faq[] }) {
  return (
    <div className="border-b border-line">
      {items.map((item) => (
        <details key={item.id} id={item.id} className="group border-t border-line">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
            <h3 className="font-display text-[1.25rem] leading-snug text-alder-deep md:text-[1.4rem]">{item.q}</h3>
            <span
              aria-hidden="true"
              className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line text-alder transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
            >
              +
            </span>
          </summary>
          <p className="max-w-[62ch] pb-7 text-ink-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
