import { nav } from "@/config/navigation";
import slugify from "@/lib/slugify";

/**
 * Centralized utility to forge all blog-related URLs dynamically.
 * Eliminates scattered string templates and hardcoded category/tag paths.
 */

const BLOG_BASE = nav?.blog?.href.replace(/\/$/, "")  ?? "#";

export const blogUrls = {
  /**
   * Main Blog Root: `/blog`
   */
  root: (): string => BLOG_BASE,

  /**
   * Search Page: `/blog/search`
   */
  search: (): string => `${BLOG_BASE}/search`,

  /**
   * Categories Index: `/blog/category`
   */
  categoriesIndex: (): string => `${BLOG_BASE}/category`,

  /**
   * Single Category Landing Page: `/blog/category/business-growth`
   */
  category: (category: string): string =>
    `${BLOG_BASE}/category/${slugify(category)}`,

  /**
   * Category Paginated Page: `/blog/category/business-growth/page/2`
   */
  categoryPage: (category: string, page: number): string =>
    page <= 1
      ? blogUrls.category(category)
      : `${blogUrls.category(category)}/page/${page}`,

  /**
   * Tags Index: `/blog/tag`
   */
  tagsIndex: (): string => `${BLOG_BASE}/tag`,

  /**
   * Single Tag Landing Page: `/blog/tag/sales-automation`
   */
  tag: (tag: string): string => `${BLOG_BASE}/tag/${slugify(tag)}`,

  /**
   * Tag Paginated Page: `/blog/tag/sales-automation/page/2`
   */
  tagPage: (tag: string, page: number): string =>
    page <= 1 ? blogUrls.tag(tag) : `${blogUrls.tag(tag)}/page/${page}`,

  /**
   * Single Blog Post: `/blog/post-slug`
   */
  post: (id: string): string => `${BLOG_BASE}/${id}`,

  /**
   * Main Blog Paginated Page: `/blog/page/2`
   */
  page: (page: number): string =>
    page <= 1 ? BLOG_BASE : `${BLOG_BASE}/page/${page}`,

  /**
   * Context-Aware Base Path Resolution:
   * Returns base route depending on whether context is Category, Tag, or Main Blog
   */
  basePath: ({ category, tag }: { category?: string; tag?: string }): string => {
    if (category) return blogUrls.category(category);
    if (tag) return blogUrls.tag(tag);
    return BLOG_BASE;
  },

  /**
   * Context-Aware Paginated Meta/Canonical Path Resolution
   */
  metaPath: ({
    category,
    tag,
    page = 1,
  }: {
    category?: string;
    tag?: string;
    page?: number;
  }): string => {
    const base = blogUrls.basePath({ category, tag });
    return page <= 1 ? base : `${base}/page/${page}`;
  },
};

export default blogUrls;