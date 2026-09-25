export { default as ArticleCard } from "./ArticleCard";
export type { ArticleCardProps } from "./ArticleCard";

export { default as ArticleGrid } from "./ArticleGrid";

export { default as FeaturedArticle } from "./FeaturedArticle";
export type {
  FeaturedArticleStat,
} from "./FeaturedArticle";

export { default as CategoryPills } from "./CategoryPills";
export type { CategoryPill } from "./CategoryPills";

export { default as ReadingProgress } from "./ReadingProgress";

export { default as ShareBar } from "./ShareBar";

export { default as TableOfContents } from "./TableOfContents";
export type { TocItem } from "./TableOfContents";



{/**

<ArticleCard

  image="/blog/cloudflare.jpg"

  category="Cloudflare"

  heading="Deploying React to Cloudflare Pages"

  description="
  Learn how to deploy modern React
  applications using Cloudflare Pages
  and GitHub.
  "

  author="Wisdom Ekene"

  publishedAt="Aug 2026"

  readingTime="6 min read"

  tags={[
    "React",
    "Cloudflare",
    "Vite",
  ]}

/>


<ArticleGrid

  columns={3}

  articles={[

    {

      image:"/blog/cloudflare.jpg",

      heading:"Deploying React to Cloudflare",

      description:"Deploy modern apps with Cloudflare Pages.",

      category:"Cloudflare",

      author:"Wisdom Ekene",

      publishedAt:"Aug 2026",

      readingTime:"6 min read",

    },

    {

      image:"/blog/seo.jpg",

      heading:"Technical SEO Checklist",

      description:"Improve indexing and performance.",

      category:"SEO",

      author:"Wisdom Ekene",

      publishedAt:"Aug 2026",

      readingTime:"8 min read",

    },

  ]}

/>



<FeaturedArticle

  image="/blog/cloudflare-pages.jpg"

  category="Cloudflare"

  heading="Deploying React to Cloudflare Pages"

  description="
  Learn how to deploy React, Vite and
  TypeScript applications with Cloudflare
  Pages using a production-ready workflow.
  "

  author="Wisdom Ekene"

  publishedAt="August 2026"

  readingTime="8 min read"

  stats={[

    {
      label:"Views",
      value:"4.2k",
    },

    {
      label:"Read Time",
      value:"8 min",
    },

    {
      label:"Category",
      value:"Cloudflare",
    },

    {
      label:"Difficulty",
      value:"Intermediate",
    },

  ]}

/>



<>
  <ReadingProgress />

  <ArticleLayout>

    ...

  </ArticleLayout>
</>



<TableOfContents
  items={[
    {
      id: "introduction",
      heading: "Introduction",
    },
    {
      id: "setup",
      heading: "Setup",
    },
    {
      id: "deployment",
      heading: "Deployment",
      level: 3,
    },
    {
      id: "conclusion",
      heading: "Conclusion",
    },
  ]}
/>







    
    */}