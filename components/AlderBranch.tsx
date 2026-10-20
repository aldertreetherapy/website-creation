/**
 * Fine-line drawing of a common alder branch (Alnus glutinosa): obovate
 * leaves with the notched tip alders are known for, woody cones, and
 * hanging catkins. Generated from a few parameters so it stays crisp at any size.
 */

type Pt = [number, number];

const P0: Pt = [64, 548];
const P1: Pt = [150, 400];
const P2: Pt = [250, 250];
const P3: Pt = [404, 60];

function bez(t: number): Pt {
  const u = 1 - t;
  return [
    u ** 3 * P0[0] + 3 * u * u * t * P1[0] + 3 * u * t * t * P2[0] + t ** 3 * P3[0],
    u ** 3 * P0[1] + 3 * u * u * t * P1[1] + 3 * u * t * t * P2[1] + t ** 3 * P3[1],
  ];
}
function tangentDeg(t: number): number {
  const a = bez(Math.max(0, t - 0.01));
  const b = bez(Math.min(1, t + 0.01));
  return (Math.atan2(b[1] - a[1], b[0] - a[0]) * 180) / Math.PI;
}
const r = (n: number) => Math.round(n * 10) / 10;

/** Leaf outline, base at (0,0), pointing toward -y. */
function leafPath(L: number, W: number) {
  return [
    `M0 0`,
    `C${r(W * 0.45)} ${r(-L * 0.08)} ${r(W * 1.08)} ${r(-L * 0.42)} ${r(W * 0.9)} ${r(-L * 0.78)}`,
    `C${r(W * 0.76)} ${r(-L * 0.98)} ${r(W * 0.28)} ${r(-L * 1.02)} 0 ${r(-L * 0.93)}`,
    `C${r(-W * 0.28)} ${r(-L * 1.02)} ${r(-W * 0.76)} ${r(-L * 0.98)} ${r(-W * 0.9)} ${r(-L * 0.78)}`,
    `C${r(-W * 1.08)} ${r(-L * 0.42)} ${r(-W * 0.45)} ${r(-L * 0.08)} 0 0Z`,
  ].join(" ");
}
function veinPath(L: number, W: number) {
  const d = [`M0 0V${r(-L * 0.92)}`];
  for (let i = 1; i <= 5; i++) {
    const y = -L * (0.12 + i * 0.13);
    const reach = W * (0.78 - Math.abs(i - 2.6) * 0.07);
    const lift = -L * 0.11;
    d.push(`M0 ${r(y)}Q${r(reach * 0.5)} ${r(y + lift * 0.4)} ${r(reach)} ${r(y + lift)}`);
    d.push(`M0 ${r(y)}Q${r(-reach * 0.5)} ${r(y + lift * 0.4)} ${r(-reach)} ${r(y + lift)}`);
  }
  return d.join("");
}

const leaves = [
  { t: 0.16, side: 1, L: 118, W: 50 },
  { t: 0.28, side: -1, L: 128, W: 54 },
  { t: 0.42, side: 1, L: 120, W: 51 },
  { t: 0.55, side: -1, L: 108, W: 46 },
  { t: 0.68, side: 1, L: 92, W: 40 },
  { t: 0.8, side: -1, L: 74, W: 32 },
];

function Leaf({ t, side, L, W }: (typeof leaves)[number]) {
  const [x, y] = bez(t);
  const angle = tangentDeg(t) + 90 + side * -58; // leaf axis relative to stem
  const stalk = 16;
  return (
    <g transform={`translate(${r(x)} ${r(y)}) rotate(${r(angle)})`}>
      <path d={`M0 0V${-stalk}`} />
      <g transform={`translate(0 ${-stalk})`}>
        <path d={leafPath(L, W)} className="fill-leaf" />
        <path d={veinPath(L, W)} strokeWidth="0.75" fill="none" />
      </g>
    </g>
  );
}

function Cone({ x, y, rot, s = 1 }: { x: number; y: number; rot: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
      <path d="M0 0V-14" />
      <ellipse cx="0" cy="-26" rx="9" ry="13" className="fill-leaf" />
      <path d="M-8 -30Q0 -25 8 -30M-9 -23Q0 -18 9 -23M-6 -16Q0 -12 6 -16M0 -39V-13" fill="none" strokeWidth="0.75" />
    </g>
  );
}

function Catkin({ x, y, rot, len }: { x: number; y: number; rot: number; len: number }) {
  const segs = Math.floor(len / 7);
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <path d={`M0 0C2 ${len * 0.35} -2 ${len * 0.7} 1 ${len}`} strokeWidth="5.5" strokeLinecap="round" className="stroke-leaf" />
      <path d={`M0 0C2 ${len * 0.35} -2 ${len * 0.7} 1 ${len}`} fill="none" />
      {Array.from({ length: segs }, (_, i) => (
        <path key={i} d={`M-3 ${7 + i * 7}h6`} strokeWidth="0.6" />
      ))}
    </g>
  );
}

export function AlderBranch({ className = "" }: { className?: string }) {
  const tip = bez(1);
  return (
    <svg
      viewBox="0 0 480 580"
      className={className}
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.15"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={`M${P0[0]} ${P0[1]}C${P1[0]} ${P1[1]} ${P2[0]} ${P2[1]} ${P3[0]} ${P3[1]}`} strokeWidth="2" />
      {/* side twig carrying cones and catkins */}
      <path d={`M${r(bez(0.88)[0])} ${r(bez(0.88)[1])}Q410 150 446 150`} strokeWidth="1.4" />
      {leaves.map((l) => (
        <Leaf key={l.t} {...l} />
      ))}
      <Cone x={tip[0]} y={tip[1]} rot={22} s={0.95} />
      <Cone x={tip[0] - 4} y={tip[1] + 6} rot={-24} s={0.85} />
      <Cone x={tip[0] + 6} y={tip[1] + 8} rot={70} s={0.8} />
      <Catkin x={446} y={150} rot={-8} len={70} />
      <Catkin x={430} y={150} rot={6} len={58} />
    </svg>
  );
}
