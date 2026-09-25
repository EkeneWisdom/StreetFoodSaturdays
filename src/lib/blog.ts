export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  category?: string;
  image?: string;
  tags: string[];
}

export interface BlogPost extends BlogFrontmatter {
  slug: string;
  content: string;
  readingTime: string;
}

const postModules = import.meta.glob(
  "@/blog-content/*.md",
  {
    eager: true,
    query: "?raw",
    import: "default",
  },
) as Record<string, string>;

function getSlug(path: string): string {
  const filename = path
    .split("/")
    .pop()
    ?.replace(/\.md$/, "");

  if (!filename) {
    throw new Error(
      `Unable to determine blog slug from: ${path}`,
    );
  }

  return filename.replace(/^\d+-/, "");
}

function parseFrontmatter(
  raw: string,
): {
  data: Record<string, unknown>;
  content: string;
} {
  const match = raw.match(
    /^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/,
  );

  if (!match) {
    return {
      data: {},
      content: raw.trim(),
    };
  }

  const frontmatter = match[1];
  const content = match[2];

  const data: Record<string, unknown> = {};

  let currentArrayKey: string | null = null;

  for (const line of frontmatter.split("\n")) {
    const trimmed = line.trim();

    if (!trimmed) continue;

    if (
      trimmed.startsWith("- ") &&
      currentArrayKey
    ) {
      const current =
        data[currentArrayKey];

      if (Array.isArray(current)) {
        current.push(
          trimmed.slice(2).trim(),
        );
      }

      continue;
    }

    const separator =
      trimmed.indexOf(":");

    if (separator === -1) continue;

    const key =
      trimmed
        .slice(0, separator)
        .trim();

    const value =
      trimmed
        .slice(separator + 1)
        .trim();

    if (!value) {
      data[key] = [];
      currentArrayKey = key;
      continue;
    }

    currentArrayKey = null;

    data[key] = value
      .replace(/^["']|["']$/g, "");
  }

  return {
    data,
    content: content.trim(),
  };
}

function getReadingTime(
  content: string,
): string {
  const words = content
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .length;

  const minutes = Math.max(
    1,
    Math.ceil(words / 200),
  );

  return `${minutes} min read`;
}

function parsePost(
  path: string,
  raw: string,
): BlogPost {
  const {
    data,
    content,
  } = parseFrontmatter(raw);

  const tags = Array.isArray(
    data.tags,
  )
    ? data.tags.map(String)
    : [];

  return {
    slug: getSlug(path),

    title: String(
      data.title ?? "",
    ),

    description: String(
      data.description ?? "",
    ),

    date: String(
      data.date ?? "",
    ),

    author: String(
      data.author ?? "",
    ),

    category:
      data.category
        ? String(data.category)
        : tags[0] ?? "Business",

    image:
      data.image
        ? String(data.image)
        : undefined,

    tags,

    content,

    readingTime:
      getReadingTime(content),
  };
}

export const blogPosts: BlogPost[] =
  Object.entries(postModules)
    .map(([path, raw]) =>
      parsePost(path, raw),
    )
    .sort(
      (a, b) =>
        new Date(b.date).getTime() -
        new Date(a.date).getTime(),
    );

export function getBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPost(
  slug: string,
): BlogPost | undefined {
  return blogPosts.find(
    (post) =>
      post.slug === slug,
  );
}