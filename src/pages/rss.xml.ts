import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import site from "@/config/site";

export async function GET(context: APIContext) {
  const posts = await getCollection("blog");

  const publishedPosts = posts
    .filter((post) => !post.data.draft && new Date(post.data.pubDate) <= new Date())
    .sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime());

  return rss({
    title: site.name,
    description: site.description,
    site: context.site?.toString() ?? site.url,
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id}/`,
      categories: [post.data.category, ...(post.data.tags ?? [])],
      author: post.data.author ?? site.author ?? site.name,
    })),
    customData: `<language>${site.language ?? "en-us"}</language>`,
  });
}