import { site } from "@/content/site";

/** Tanya's short intro video. Loads nothing until the visitor presses play. */
export function IntroVideo({ className = "" }: { className?: string }) {
  const v = site.clinician.video;
  return (
    <figure className={className}>
      <video
        controls
        playsInline
        preload="none"
        poster={v.poster}
        width={v.width}
        height={v.height}
        className="block h-auto w-full max-w-full bg-linen"
        aria-label={v.title}
      >
        <source src={v.src} type="video/mp4" />
        Your browser can’t play this video.
      </video>
      <figcaption className="mt-3 text-[0.9rem] text-ink-muted">{v.caption}</figcaption>
    </figure>
  );
}
