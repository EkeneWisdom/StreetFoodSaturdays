import fs from "node:fs";
import path from "node:path";

import site from "@/config/site";
import seo from "@/config/seo";

//import { generateRSS } from "@/lib/seo/rss";
//import { generateSitemap } from "@/lib/seo/sitemap";
import { generateLLM } from "@/lib/seo/llm";
import { generateManifest } from "@/lib/seo/manifest";

const publicDir = path.resolve("public");

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, {
    recursive: true,
  });
}

// Updated with disallow rules and correct Astro sitemap index filename
const robots = `User-agent: *
Allow: /

# Exclude dynamic search and utility routes from indexing
Disallow: /blog/search
Disallow: /admin/
Disallow: /dashboard
Disallow: /thank-you

Sitemap: ${site.url}/sitemap-index.xml

Host: ${site.url}
`;

fs.writeFileSync(
  path.join(publicDir, seo.files.robots),
  robots,
);

/*
fs.writeFileSync(
  path.join(publicDir, seo.files.rss),
  generateRSS([]),
);

fs.writeFileSync(
  path.join(publicDir, seo.files.sitemap),
  generateSitemap(),
);
*/

fs.writeFileSync(
  path.join(publicDir, seo.files.llms),
  generateLLM(),
);


fs.writeFileSync(
  path.join(publicDir, seo.files.manifest),
  generateManifest(),
);

console.log("SEO files generated.");