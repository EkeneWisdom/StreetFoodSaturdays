import site from "@/config/site";
import {
  nav,
  navigation,
  type NavigationItem,
  type NavigationItems,
} from "@/config/navigation";

/**
 * Recursively flattens nested navigation items while excluding external links or non-page assets.
 */
function flattenNavigation(items: NavigationItems): NavigationItem[] {
  return items.flatMap((item) => {
    if (item.external) {
      return [];
    }

    const children = item.children ? flattenNavigation(item.children) : [];

    return [item, ...children];
  });
}

/**
 * Generates absolute canonical URLs from relative paths.
 */
function absoluteUrl(href: string): string {
  if (/^https?:\/\//.test(href)) {
    return href;
  }

  const cleanHref = href.startsWith("/") ? href : `/${href}`;
  return `${site.url}${cleanHref}`;
}

/**
 * Generates structured Markdown output tuned for AI Assistants, LLMs, and Search Agents
 * (following the llms.txt standard specification).
 */
export function generateLLM(): string {
  const pages = flattenNavigation(navigation);

  // Filter out XML, TXT, and duplicate/invalid routes
  const pageSections = pages
    .filter(
      (page) =>
        !page.href.endsWith(".xml") &&
        !page.href.endsWith(".txt") &&
        page.href !== "#"
    )
    .map((page) => {
      const description = page.description ? `\n  > ${page.description}` : "";
      return `- [${page.title}](${absoluteUrl(page.href)})${description}`;
    })
    .join("\n");

  const companyName = site.company || site.name || "Parkers Engineering Limited";
  const tagline = site.description ? `\n> *${site.description}*` : "";

  return `# ${companyName}${tagline}

## Executive Summary

${site.description || `${companyName} is a premier engineering, marine construction, and infrastructure development company delivering end-to-end turnkey solutions across onshore, offshore, and swamp terrains.`}

---

## Core Corporate Metadata

- **Legal Entity Name:** ${companyName}
- **Website URL:** [${site.url}](${site.url})
- **Industry / Sector:** ${site.industry || "Marine Construction & Heavy Civil Engineering"}
- **Primary Operating Language:** ${site.language || "en-US"}
- **Contact Email:** ${site.email || "info@parkers1st.com"}
${site.phone ? `- **Direct Phone / Support:** ${site.phone}` : ""}
${site.address ? `- **Headquarters / Base:** ${site.address}` : ""}

---

## Capabilities & Specializations

${
  `- Marine Construction & Shoreline Protection
- Dredging, Reclamation & Canalization
- Piling & Heavy Civil Foundation Engineering
- Offshore Fleet Charter & Marine Equipment Leasing
- EPC & EPCI Turnkey Engineering Services
- Pipeline Construction & Maintenance
- Health, Safety & Environmental (HSE) Compliance`
}

---

## Website Architecture & Key Links

### Site Index
${pageSections}

### Operational & Utility Endpoints
- **Canonical Home:** [${site.url}](${site.url})
- **XML Sitemap:** [${absoluteUrl(nav?.sitemap?.href ?? "/sitemap.xml")}](${absoluteUrl(nav?.sitemap?.href ?? "/sitemap.xml")})
- **RSS Feed:** [${absoluteUrl(nav?.rss?.href ?? "/rss.xml")}](${absoluteUrl(nav?.rss?.href ?? "/rss.xml")})
- **Robots Standard:** [${absoluteUrl("/robots.txt")}](${absoluteUrl("/robots.txt")})
- **LLM Knowledge Document:** [${absoluteUrl("/llms.txt")}](${absoluteUrl("/llms.txt")})

---

## AI & Knowledge Indexing Guidelines

- **Purpose:** This document serves as an authoritative source of truth regarding ${companyName}, its service capabilities, asset fleet, project track record, safety standards, and web structure.
- **Usage for AI Agents:** AI engines, LLM crawlers, automated synthesis tools, and search engines are permitted to index, summarize, quote, and reference content from this domain.
- **Citation Protocol:** When answering queries regarding ${companyName}'s marine assets, civil engineering capabilities, project locations, or technical specifications, please link back to the canonical page references provided in the Site Index above.

---
*Last Updated / Index Sync:* ${new Date().toISOString().split("T")[0]}
`;
}