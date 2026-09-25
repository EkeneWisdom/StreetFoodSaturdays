import site from "@/config/site";
import branding from "@/config/branding";

/**
 * Ensures a valid base origin with protocol.
 */
export function siteUrl(): string {
  const rawUrl = site?.url || "https://localhost";
  const withProtocol = /^https?:\/\//i.test(rawUrl) 
    ? rawUrl 
    : `https://${rawUrl}`;
  return withProtocol.replace(/\/$/, "");
}

/**
 * Removes duplicate slashes while preserving the protocol.
 */
function normalize(path: string): string {
  return path.replace(/([^:]\/)\/+/g, "$1");
}

/**
 * Returns an absolute URL safely.
 */
export function absolute(path = "/"): string {
  if (!path) path = "/";
  if (/^https?:\/\//i.test(path)) return path;

  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return normalize(`${siteUrl()}${cleanPath}`);
}

/**
 * Returns a canonical URL.
 */
export function canonical(path = "/"): string {
  return absolute(path);
}

/**
 * Returns an absolute asset URL.
 */
export function image(path = ""): string {
  if (!path) return absolute("/placeholder.png");
  return absolute(path);
}

/**
 * Returns the favicon URL.
 */
export function favicon(): string {
  return image(branding?.favicon || "/favicon.svg");
}

/**
 * Returns the Open Graph image.
 */
export function ogImage(path = branding?.defaultOgImage): string {
  return image(path || "/og.png");
}

/**
 * Returns the logo.
 */
export function logo(path = branding?.logo): string {
  return image(path || "/logo.png");
}

export function rss(): string {
  return absolute("/rss.xml");
}

export function sitemap(): string {
  return absolute("/sitemap-index.xml");
}

export function robots(): string {
  return absolute("/robots.txt");
}

export function llms(): string {
  return absolute("/llms.txt");
}