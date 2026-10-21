"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Intersex-Inclusive Progress Pride Flag (Valentino Vecchietti, 2021),
 * adapted from Daniel Quasar's Progress Pride Flag (2018).
 *
 * Easter egg: hover over (or tap, or focus) the flag and a small black cat
 * hops out and follows the pointer. It goes home after a few quiet seconds,
 * or right away on Escape or a click. People who prefer reduced motion get a
 * brief, still peek instead.
 */

const RAINBOW = ["#E40303", "#FF8C00", "#FFED00", "#008026", "#24408E", "#732982"];
// Chevrons from the outside in: black, brown, light blue, pink, white.
const CHEVRONS: [number, string][] = [
  [33, "#000000"],
  [29, "#784F17"],
  [25, "#5BCEFA"],
  [21, "#F5A9B8"],
  [17, "#FFFFFF"],
];

export function FlagSvg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 36" className={className} role="img" aria-label="Intersex-inclusive Progress Pride flag">
      {RAINBOW.map((c, i) => (
        <rect key={c} x="0" y={i * 6} width="60" height="6" fill={c} />
      ))}
      {CHEVRONS.map(([tip, c]) => {
        const x0 = tip - 18;
        return <polygon key={c} points={`0,0 ${x0},0 ${tip},18 ${x0},36 0,36`} fill={c} />;
      })}
      <polygon points="0,5 13,18 0,31" fill="#FFD800" />
      <circle cx="4.6" cy="18" r="2.7" fill="none" stroke="#7902AA" strokeWidth="1.1" />
    </svg>
  );
}

/** An original little black cat, drawn facing right. */
function CatSvg({ walking }: { walking: boolean }) {
  return (
    <svg viewBox="0 0 64 48" width="64" height="48" aria-hidden="true" className={walking ? "cat-walk" : ""}>
      <path className="cat-tail" d="M12 30 C2 28 2 14 9 10" stroke="#16130f" strokeWidth="4.5" fill="none" strokeLinecap="round" />
      <ellipse cx="28" cy="31" rx="17" ry="10" fill="#16130f" />
      <g className="cat-legs" fill="#16130f">
        <rect x="16" y="36" width="4.5" height="10" rx="2.2" />
        <rect x="23" y="36" width="4.5" height="10" rx="2.2" />
        <rect x="33" y="36" width="4.5" height="10" rx="2.2" />
        <rect x="40" y="36" width="4.5" height="10" rx="2.2" />
      </g>
      <circle cx="47" cy="20" r="11" fill="#16130f" />
      <polygon points="38,14 40,2 47,10" fill="#16130f" />
      <polygon points="50,10 56,2 57,15" fill="#16130f" />
      <ellipse cx="44" cy="19" rx="2.6" ry="3.1" fill="#E8C33A" />
      <ellipse cx="52.5" cy="19" rx="2.6" ry="3.1" fill="#E8C33A" />
      <ellipse cx="44.4" cy="19.2" rx="0.9" ry="2.4" fill="#16130f" />
      <ellipse cx="52.9" cy="19.2" rx="0.9" ry="2.4" fill="#16130f" />
    </svg>
  );
}

export function PrideFlag() {
  const [active, setActive] = useState(false);
  const [walking, setWalking] = useState(false);
  const [facingLeft, setFacingLeft] = useState(false);
  const catRef = useRef<HTMLDivElement>(null);
  const flagRef = useRef<HTMLSpanElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const lastMove = useRef(0);
  const reduced = useRef(false);
  const startedAt = useRef(0);

  const start = useCallback((x?: number, y?: number) => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const r = flagRef.current?.getBoundingClientRect();
    const fx = r ? r.left + r.width / 2 : 0;
    const fy = r ? r.top : 0;
    pos.current = { x: fx - 32, y: fy - 44 };
    target.current = { x: (x ?? fx) - 32, y: (y ?? fy) - 44 };
    lastMove.current = performance.now();
    startedAt.current = performance.now();
    setActive(true);
  }, []);

  useEffect(() => {
    if (!active) return;
    if (reduced.current) {
      const t = setTimeout(() => setActive(false), 2500);
      return () => clearTimeout(t);
    }
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      target.current = { x: e.clientX + 14, y: e.clientY - 4 };
      lastMove.current = performance.now();
    };
    const stop = () => setActive(false);
    // Ignore the click that belongs to the tap that woke the cat up.
    const onClick = () => performance.now() - startedAt.current > 500 && stop();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && stop();
    const tick = (now: number) => {
      const p = pos.current;
      const t = target.current;
      const dx = t.x - p.x;
      const dy = t.y - p.y;
      p.x += dx * 0.08;
      p.y += dy * 0.08;
      const moving = Math.hypot(dx, dy) > 6;
      setWalking((w) => (w !== moving ? moving : w));
      if (Math.abs(dx) > 4) setFacingLeft((f) => (f !== dx < 0 ? dx < 0 : f));
      if (catRef.current) catRef.current.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
      if (now - lastMove.current > 6000) return stop();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("keydown", onKey);
    window.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("click", onClick);
    };
  }, [active]);

  return (
    <>
      <span
        ref={flagRef}
        tabIndex={0}
        title="Intersex-Inclusive Progress Pride Flag by Valentino Vecchietti, adapted from Daniel Quasar’s Progress Pride Flag"
        onPointerEnter={(e) => !active && start(e.clientX, e.clientY)}
        onFocus={() => !active && start()}
        onPointerDown={(e) => {
          // On touch screens there's no hover: the cat hops out and strolls across.
          if (e.pointerType !== "mouse" && !active) {
            const r = e.currentTarget.getBoundingClientRect();
            start(Math.min(r.left + 180, window.innerWidth - 40), r.top - 10);
          }
        }}
        className="inline-block shrink-0 cursor-default rounded-[2px] shadow-[0_0_0_1px_rgba(0,0,0,0.08)] focus-visible:outline-offset-4"
      >
        <FlagSvg className="block h-6 w-10" />
      </span>
      {active && (
        <div
          ref={catRef}
          aria-hidden="true"
          className={`pointer-events-none fixed left-0 top-0 z-50 ${reduced.current ? "cat-peek" : ""}`}
          style={{ transform: `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)` }}
        >
          <div style={{ transform: facingLeft ? "scaleX(-1)" : undefined }}>
            <CatSvg walking={walking} />
          </div>
        </div>
      )}
    </>
  );
}
