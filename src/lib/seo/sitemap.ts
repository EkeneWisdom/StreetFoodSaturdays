import site from "@/config/site";
import {
  navigation,
  type NavigationItem,
  type NavigationItems,
} from "@/config/navigation";

export interface SitemapItem {
  url: string;
  lastModified?: Date | string;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
  sitemap?: boolean;
}

/**
 * Ensures clean canonical absolute URLs without double slashes.
 */
function normalizeUrl(path: string): string {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const baseUrl = site.url.endsWith("/") ? site.url.slice(0, -1) : site.url;

  return `${baseUrl}${cleanPath}`;
}

/**
 * Strips hash fragments (e.g., /about#team -> /about)
 */
function stripFragment(url: string): string {
  return url.split("#")[0];
}

/**
 * Recursively flattens navigation items while respecting the optional `sitemap` rule:
 * Exclude IFF item.sitemap === false
 */
function flattenNavigation(items: NavigationItems): SitemapItem[] {
  return items.flatMap((item: NavigationItem) => {
    // Rule 1: Exclude if sitemap property exists and explicitly equals false
    if (item.sitemap === false) {
      return [];
    }

    // Rule 2: Exclude external links
    if (item.external) {
      return [];
    }

    const cleanHref = stripFragment(item.href || "").trim();

    // Rule 3: Exclude empty links or standalone fragment markers
    if (!cleanHref) {
      return [];
    }

    // Rule 4: Exclude non-HTML asset extensions like .xml and .txt
    const excludedExtensions = [".xml", ".txt"];
    if (
      excludedExtensions.some((extension) =>
        cleanHref.toLowerCase().endsWith(extension)
      )
    ) {
      return [];
    }

    const current: SitemapItem = {
      url: cleanHref,
      priority: item.priority ?? (cleanHref === "/" ? 1.0 : 0.8),
      changeFrequency: item.changeFrequency ?? "monthly",
      sitemap: item.sitemap,
    };

    const children = item.children ? flattenNavigation(item.children) : [];

    return [current, ...children];
  });
}

/**
 * Generates valid XML Sitemap compliance string (sitemap.org v0.9 schema)
 */
export function generateSitemap(items: SitemapItem[] = []): string {
  // Combine navigation items with dynamic items (e.g. blog posts, project pages)
  const rawUrls = [...flattenNavigation(navigation), ...items];

  // Filter dynamic items through the sitemap === false rule as well
  const filteredUrls = rawUrls.filter((item) => item.sitemap !== false);

  // Deduplicate entries based on canonical clean URL path
  const uniqueUrls = Array.from(
    new Map(
      filteredUrls.map((item) => [
        stripFragment(item.url),
        {
          ...item,
          url: stripFragment(item.url),
        },
      ])
    ).values()
  );

  const xmlEntries = uniqueUrls
    .map((item) => {
      const lastModified = item.lastModified
        ? new Date(item.lastModified).toISOString().split("T")[0]
        : undefined;

      const loc = normalizeUrl(item.url);
      const lastModTag = lastModified ? `\n    <lastmod>${lastModified}</lastmod>` : "";
      const changeFreqTag = item.changeFrequency
        ? `\n    <changefreq>${item.changeFrequency}</changefreq>`
        : "";
      const priorityTag =
        item.priority !== undefined
          ? `\n    <priority>${item.priority.toFixed(1)}</priority>`
          : "";

      return `  <url>
    <loc>${loc}</loc>${lastModTag}${changeFreqTag}${priorityTag}
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}
</urlset>`.trim();
}

export default generateSitemap;