"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Intersex-Inclusive Progress Pride Flag (Valentino Vecchietti, 2021),
 * adapted from Daniel Quasar's Progress Pride Flag (2018).
 *
 * Easter egg: hover over (or tap, or focus) the flag and a small black cat hops
 * out and hunts the pointer. It stalks, crouches with a butt wiggle, and pounces.
 * A catch earns a little heart; a miss means some casual paw-licking. When the
 * pointer goes quiet, the cat sits, blinks, yawns, and trots home.
 * Escape or a click sends it home right away. Reduced-motion visitors get a
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

type Pose = "walk" | "stand" | "prowl" | "crouch" | "leap" | "sit" | "groom";

const FUR = "#16130f";
const EYE = "#E8C33A";

function Ears({ x, y }: { x: number; y: number }) {
  return (
    <g className="cat-ears">
      <polygon points={`${x - 9},${y - 6} ${x - 7},${y - 18} ${x},${y - 10}`} fill={FUR} />
      <polygon points={`${x + 3},${y - 10} ${x + 9},${y - 18} ${x + 10},${y - 5}`} fill={FUR} />
    </g>
  );
}

function SideEyes({ x, y, wide }: { x: number; y: number; wide?: boolean }) {
  const pr = wide ? 2.1 : 0.9;
  return (
    <g className="cat-eyes">
      <ellipse cx={x - 3} cy={y} rx="2.6" ry="3.1" fill={EYE} />
      <ellipse cx={x + 5.5} cy={y} rx="2.6" ry="3.1" fill={EYE} />
      <ellipse cx={x - 2.6} cy={y + 0.2} rx={pr} ry="2.4" fill={FUR} />
      <ellipse cx={x + 5.9} cy={y + 0.2} rx={pr} ry="2.4" fill={FUR} />
    </g>
  );
}

/** An original little black cat, drawn facing right, with one group per pose. */
export function CatSvg({ pose }: { pose: Pose }) {
  return (
    <svg viewBox="-6 -4 76 56" width="76" height="56" aria-hidden="true" data-pose={pose} className="cat">
      {/* Standing and walking */}
      <g className="pose pose-walk pose-stand">
        <path className="cat-tail" d="M12 30 C2 28 2 14 9 10" stroke={FUR} strokeWidth="4.5" fill="none" strokeLinecap="round" />
        <ellipse cx="28" cy="31" rx="17" ry="10" fill={FUR} />
        <g className="cat-legs" fill={FUR}>
          <rect x="16" y="36" width="4.5" height="10" rx="2.2" />
          <rect x="23" y="36" width="4.5" height="10" rx="2.2" />
          <rect x="33" y="36" width="4.5" height="10" rx="2.2" />
          <rect x="40" y="36" width="4.5" height="10" rx="2.2" />
        </g>
        <circle cx="47" cy="20" r="11" fill={FUR} />
        <Ears x={47} y={20} />
        <SideEyes x={47} y={19} />
      </g>

      {/* Prowling and crouching: low to the ground, eyes wide */}
      <g className="pose pose-prowl pose-crouch">
        <g className="cat-wiggle">
          <path className="cat-tail cat-tail-twitch" d="M11 38 C3 38 -2 35 -3 30" stroke={FUR} strokeWidth="4.5" fill="none" strokeLinecap="round" />
          <ellipse cx="27" cy="39" rx="18" ry="7.5" fill={FUR} />
          <g className="cat-legs" fill={FUR}>
            <rect x="15" y="41" width="4.5" height="5" rx="2.2" />
            <rect x="22" y="41" width="4.5" height="5" rx="2.2" />
            <rect x="34" y="41" width="4.5" height="5" rx="2.2" />
            <rect x="41" y="41" width="4.5" height="5" rx="2.2" />
          </g>
        </g>
        <circle cx="49" cy="35" r="10" fill={FUR} />
        <Ears x={49} y={35} />
        <SideEyes x={49} y={34} wide />
      </g>

      {/* Mid-pounce: stretched out, paws forward */}
      <g className="pose pose-leap">
        <path d="M10 26 C2 25 -3 21 -5 15" stroke={FUR} strokeWidth="4.5" fill="none" strokeLinecap="round" />
        <ellipse cx="29" cy="27" rx="20" ry="7.5" fill={FUR} transform="rotate(-10 29 27)" />
        <path d="M42 26 L60 18 M44 29 L61 24" stroke={FUR} strokeWidth="4.2" strokeLinecap="round" />
        <path d="M15 31 L2 40 M18 32 L6 43" stroke={FUR} strokeWidth="4.2" strokeLinecap="round" />
        <circle cx="50" cy="18" r="9.5" fill={FUR} />
        <Ears x={50} y={18} />
        <SideEyes x={50} y={17} wide />
      </g>

      {/* Sitting (and grooming): upright, facing you */}
      <g className="pose pose-sit pose-groom">
        <path className="cat-tail-curl" d="M22 47 C30 52 46 50 45 44" stroke={FUR} strokeWidth="4.5" fill="none" strokeLinecap="round" />
        <ellipse cx="31" cy="34" rx="12" ry="14" fill={FUR} />
        <ellipse cx="27" cy="47" rx="3.4" ry="2.4" fill={FUR} />
        <ellipse cx="35" cy="47" rx="3.4" ry="2.4" fill={FUR} />
        <g className="cat-head-sit">
          <circle cx="31" cy="15" r="10" fill={FUR} />
          <Ears x={31} y={15} />
          <g className="cat-blink">
            <ellipse cx="27" cy="14" rx="2.6" ry="3.1" fill={EYE} />
            <ellipse cx="35" cy="14" rx="2.6" ry="3.1" fill={EYE} />
            <ellipse cx="27" cy="14.2" rx="0.9" ry="2.4" fill={FUR} />
            <ellipse cx="35" cy="14.2" rx="0.9" ry="2.4" fill={FUR} />
          </g>
          <path d="M29.6 18.2 L32.4 18.2 L31 19.7 Z" fill="#C97A8A" />
        </g>
        <ellipse className="cat-groom-tongue" cx="31" cy="21.4" rx="1.5" ry="1.1" fill="#E58FA0" />
        <ellipse className="cat-groom-paw" cx="37" cy="25" rx="3.2" ry="4.2" fill={FUR} stroke="#3a332b" strokeWidth="0.8" />
      </g>
    </svg>
  );
}

const W = 76; // cat box size, matches the SVG
const H = 56;

export function PrideFlag() {
  const [active, setActive] = useState(false);
  const [pose, setPose] = useState<Pose>("stand");
  const [facingLeft, setFacingLeft] = useState(false);
  const [hearts, setHearts] = useState<number[]>([]);
  const catRef = useRef<HTMLDivElement>(null);
  const flagRef = useRef<HTMLSpanElement>(null);
  const pointer = useRef({ x: 0, y: 0, movedAt: 0 });
  const feet = useRef({ x: 0, y: 0 }); // the point between the cat's paws
  const reduced = useRef(false);
  const startedAt = useRef(0);

  const start = useCallback((x?: number, y?: number) => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const r = flagRef.current?.getBoundingClientRect();
    const fx = r ? r.left + r.width / 2 : 0;
    const fy = r ? r.top + r.height : 0;
    feet.current = { x: fx, y: fy };
    pointer.current = { x: x ?? fx + 120, y: y ?? fy - 30, movedAt: performance.now() };
    startedAt.current = performance.now();
    setPose("stand");
    setActive(true);
  }, []);

  useEffect(() => {
    if (!active) return;
    if (reduced.current) {
      setPose("sit");
      const t = setTimeout(() => setActive(false), 2500);
      return () => clearTimeout(t);
    }

    let raf = 0;
    let last = performance.now();
    let state: "emerge" | "stalk" | "crouch" | "leap" | "land" | "sit" | "groom" | "leave" = "emerge";
    let stateAt = last;
    let crouchFor = 900;
    let leapFrom = { x: 0, y: 0 };
    let leapTo = { x: 0, y: 0 };
    let crouchPointer = { x: 0, y: 0 };
    let exitX = 0;
    let currentPose: Pose = "stand";
    let left = false;
    const emergeFrom = { ...feet.current };

    const go = (s: typeof state) => {
      state = s;
      stateAt = performance.now();
    };
    const show = (p: Pose) => {
      if (p !== currentPose) {
        currentPose = p;
        setPose(p);
      }
    };
    const face = (dx: number) => {
      if (Math.abs(dx) > 3 && dx < 0 !== left) {
        left = dx < 0;
        setFacingLeft(left);
      }
    };
    const place = () => {
      if (catRef.current) {
        catRef.current.style.transform = `translate3d(${feet.current.x - W / 2}px, ${feet.current.y - H + 4}px, 0)`;
      }
    };
    const leave = () => {
      exitX = feet.current.x < window.innerWidth / 2 ? -W : window.innerWidth + W;
      go("leave");
    };

    const onMove = (e: PointerEvent) => {
      pointer.current = { x: e.clientX, y: e.clientY, movedAt: performance.now() };
    };
    const stop = () => setActive(false);
    const onClick = () => performance.now() - startedAt.current > 500 && stop();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && stop();

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const t = now - stateAt;
      const f = feet.current;
      const p = pointer.current;
      const dx = p.x - f.x;
      const dy = p.y + 8 - f.y;
      const dist = Math.hypot(dx, dy);
      const still = now - p.movedAt;

      if (still > 9000 && state !== "leave") leave();

      switch (state) {
        case "emerge": {
          // A little hop up out of the flag.
          const k = Math.min(1, t / 420);
          f.x = emergeFrom.x + 18 * k;
          f.y = emergeFrom.y - 6 * k - Math.sin(Math.PI * k) * 34;
          show(k < 1 ? "leap" : "stand");
          if (k >= 1) go("stalk");
          break;
        }
        case "stalk": {
          face(dx);
          if (dist < 170 && still > 220) {
            crouchFor = 650 + Math.random() * 600;
            crouchPointer = { x: p.x, y: p.y };
            show("crouch");
            go("crouch");
            break;
          }
          const speed = dist > 240 ? 170 : 75; // trot when far, prowl when close
          const step = Math.min(dist, speed * dt);
          if (dist > 2) {
            f.x += (dx / dist) * step;
            f.y += (dy / dist) * step;
          }
          show(dist > 240 ? "walk" : "prowl");
          break;
        }
        case "crouch": {
          face(dx);
          // Pointer ran off? Give chase again.
          if (Math.hypot(p.x - crouchPointer.x, p.y - crouchPointer.y) > 70) {
            go("stalk");
            break;
          }
          if (t > crouchFor) {
            leapFrom = { ...f };
            leapTo = { x: p.x, y: p.y + 8 };
            show("leap");
            go("leap");
          }
          break;
        }
        case "leap": {
          const k = Math.min(1, t / 380);
          const e = 1 - Math.pow(1 - k, 2);
          f.x = leapFrom.x + (leapTo.x - leapFrom.x) * e;
          f.y = leapFrom.y + (leapTo.y - leapFrom.y) * e - Math.sin(Math.PI * k) * Math.min(70, 30 + dist * 0.25);
          if (k >= 1) {
            show("crouch");
            go("land");
          }
          break;
        }
        case "land": {
          if (t > 180) {
            if (dist < 30) {
              setHearts((h) => [...h.slice(-2), now]);
              show("sit");
              go("sit");
            } else {
              show("groom"); // Missed. Pretend that was the plan all along.
              go("groom");
            }
          }
          break;
        }
        case "groom": {
          if (t > 1300) go("stalk");
          break;
        }
        case "sit": {
          if (dist > 90 && t > 600) go("stalk");
          else if (t > 7000) leave();
          break;
        }
        case "leave": {
          const ldx = exitX - f.x;
          face(ldx);
          show("walk");
          f.x += Math.sign(ldx) * 220 * dt;
          if (Math.abs(ldx) < 8) return stop();
          break;
        }
      }
      place();
      raf = requestAnimationFrame(tick);
    };

    place();
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

  useEffect(() => {
    if (!active) setHearts([]);
  }, [active]);

  return (
    <>
      <span
        ref={flagRef}
        tabIndex={0}
        title="Intersex-Inclusive Progress Pride Flag by Valentino Vecchietti, adapted from Daniel Quasar’s Progress Pride Flag"
        onPointerEnter={(e) => !active && e.pointerType === "mouse" && start(e.clientX, e.clientY)}
        onFocus={() => !active && start()}
        onPointerDown={(e) => {
          // On touch screens there's no hover: the cat hops out and pounces on a spot nearby.
          if (e.pointerType !== "mouse" && !active) {
            const r = e.currentTarget.getBoundingClientRect();
            start(Math.min(r.left + 170, window.innerWidth - 50), r.top - 6);
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
          style={{ transform: `translate3d(${feet.current.x - W / 2}px, ${feet.current.y - H + 4}px, 0)` }}
        >
          <div className="relative" style={{ transform: facingLeft ? "scaleX(-1)" : undefined }}>
            <CatSvg pose={pose} />
          </div>
          {hearts.map((id) => (
            <span key={id} className="cat-heart absolute left-1/2 top-0 -translate-x-1/2 text-[18px] leading-none text-[#e0567a]">
              ♥
            </span>
          ))}
        </div>
      )}
    </>
  );
}
