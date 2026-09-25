import site from "@/config/site";

export interface RSSItem {

  title: string;

  description: string;

  url: string;

  date: Date | string;

}

function escapeXml(value: string) {

  return value

    .replace(/&/g, "&amp;")

    .replace(/</g, "&lt;")

    .replace(/>/g, "&gt;")

    .replace(/"/g, "&quot;")

    .replace(/'/g, "&apos;");

}

{/*export function generateRSS(

  items: RSSItem[],

) {

  const feedItems = items

    .map((item) => {

      const date =

        item.date instanceof Date

          ? item.date.toUTCString()

          : new Date(item.date).toUTCString();

      return `

    <item>

      <title>${escapeXml(item.title)}</title>

      <description>${escapeXml(item.description)}</description>

      <link>${item.url}</link>

      <guid>${item.url}</guid>

      <pubDate>${date}</pubDate>

    </item>`;

    })

    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>

<rss version="2.0">

<channel>

<title>${escapeXml(site.company)}</title>

<link>${site.url}</link>

<description>${escapeXml(site.description)}</description>

<language>${site.language}</language>

${feedItems}

</channel>

</rss>`;

}*/}











{/**
  
  import { generateRSS } from "@/lib/seo/rss";

const xml = generateRSS([

  {

    title: "Launching SurePipeline",

    description: "Introducing our new website.",

    url: "https://surepipeline.com/blog/launch",

    date: new Date(),

  },

]);*/}