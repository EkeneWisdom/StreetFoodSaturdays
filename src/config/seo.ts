import site from "./site";
import branding from "./branding";



export const seo = {

  defaultTitle: site.name,

  titleSeparator: "|",

  defaultDescription: site.description,

  locale: site.locale,

  language: site.language,

  author: site.author,

  defaultImage: branding.defaultOgImage,

  keywords: site.keywords,

  robots: {

    index: true,

    follow: true,

  },

  files: {

    robots: "robots.txt",

    sitemap: "sitemap.xml",

    rss: "rss.xml",

    llms: "llms.txt",

    manifest: "manifest.json",

  },

};

export default seo;