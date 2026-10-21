"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { nav } from "@/content/site";
import { BookingButton } from "@/components/ui";

/**
 * Phone and tablet menu. Built on a native <details> element so it opens even
 * without JavaScript; with JavaScript it also closes after a link is tapped,
 * when the page changes, when Escape is pressed, or when tapping outside it.
 */
export function MobileMenu() {
  const ref = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();
  const close = () => ref.current?.removeAttribute("open");

  useEffect(close, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const onPointer = (e: PointerEvent) => {
      if (ref.current?.open && !ref.current.contains(e.target as Node)) close();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  return (
    <details ref={ref} className="group relative xl:hidden">
      <summary className="flex cursor-pointer list-none items-center gap-2 rounded-[3px] border border-line px-4 py-2.5 text-[0.95rem] font-semibold text-alder-deep [&::-webkit-details-marker]:hidden">
        <span className="group-open:hidden">Menu</span>
        <span className="hidden group-open:inline">Close</span>
      </summary>
      <div className="absolute right-0 top-[calc(100%+0.75rem)] z-40 w-[min(20rem,calc(100vw-2.5rem))] border border-line bg-paper p-6 shadow-[0_18px_40px_-20px_rgba(29,37,33,0.35)]">
        <nav aria-label="Mobile">
          <ul className="flex flex-col gap-4 text-[1.05rem]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink" onClick={close}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div onClick={close}>
          <BookingButton className="mt-6 w-full" />
        </div>
      </div>
    </details>
  );
}
