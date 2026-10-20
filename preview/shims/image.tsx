// Preview-only stand-in for next/image: a plain <img>, src swapped for an embedded copy.
export const imageMap: Record<string, string> = {};
export default function Image({ src, alt, priority, sizes, ...rest }: any) {
  return <img src={imageMap[src] ?? src} alt={alt} loading={priority ? "eager" : "lazy"} decoding="async" {...rest} />;
}
