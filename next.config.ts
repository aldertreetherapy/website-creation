import type { NextConfig } from "next";

/**
 * The site is exported as plain static files and hosted on Cloudflare Pages.
 * Redirects for old Google Sites addresses live in public/_redirects,
 * and security headers live in public/_headers (Cloudflare reads both).
 */
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
