export interface NavigationItem {
  key: string;
  title: string;
  href: string;
  description?: string;

  menuTitle?: string;
  menuDescription?: string;

  navbar?: boolean;
  footer?: boolean;
  utility?: boolean;
  sitemap?: boolean;
  external?: boolean;

  priority?: number;

  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";

  featured?: {
    title: string;
    description: string;
    href: string;
    label: string;
  };

  children?: NavigationItem[];
}

export type NavigationItems = NavigationItem[];

export const navigation: NavigationItem[] = [
  /* 1. HOME */
  {
    key: "home",
    title: "Home",
    href: "/",
    navbar: true,
    footer: true,
    priority: 1.0,
    changeFrequency: "weekly",
  },

  /* 2. EXPERIENCES */
  {
    key: "experience",
    title: "Experience",
    href: "/experience",
    navbar: true,
    footer: true,
    description:
      "Explore woodfire river dining in Golden Spring, St. Andrew. From public platter events to exclusive private river reservations.",
    priority: 0.9,
    changeFrequency: "weekly",
  },

  /* 3. MENU */
  {
    key: "menu",
    title: "Menu",
    href: "/menu",
    navbar: true,
    footer: true,
    description:
      "Signature Jamaican woodfire surf & turf platters, smoked lobster, and local herbal sides.",
    priority: 0.9,
    changeFrequency: "weekly",
  },

  /* 4. GUEST GUIDE */
  {
    key: "guide",
    title: "Guest Guide",
    href: "/guide",
    navbar: true,
    footer: true,
    description:
      "Recommended water shoes, relaxed attire, directions to Mt. James Bridge, and payment instructions.",
    priority: 0.8,
    changeFrequency: "monthly",
  },

  /* 5. ABOUT */
  {
    key: "about",
    title: "About",
    href: "/about",
    navbar: true,
    footer: true,
    description:
      "Learn about Chef Walker-Barrett and the story behind Street Food Saturdays' riverfront culinary vision.",
    priority: 0.8,
    changeFrequency: "monthly",
  },

  /* 6. CONTACT */
  {
    key: "contact",
    title: "Contact",
    href: "/contact",
    navbar: true,
    footer: true,
    description:
      "Direct WhatsApp concierge, phone support, and private booking inquiries.",
    priority: 0.8,
    changeFrequency: "monthly",
  },

  /* PRIMARY WEBSITE CTA ROUTE */
  {
    key: "reservation",
    title: "Reserve Platter",
    href: "/reservation",
    navbar: false,
    footer: true,
    description:
      "Reserve platters for upcoming Street Food Saturdays dates. Instant WhatsApp receipt and multi-currency options.",
    priority: 1.0,
    changeFrequency: "daily",
  },

  /* LOCATION & ROUTE GUIDE ROUTE */
  {
    key: "location",
    title: "Location & Driving Guide",
    href: "/location",
    navbar: false,
    footer: true,
    description:
      "Interactive driving directions, parking details, shuttle options, and offline GPS route for Golden Spring, Mt. James.",
    priority: 0.8,
    changeFrequency: "weekly",
  },  

  /* FOOTER / UTILITY / ESSENTIAL PAGES */
  {
    key: "blog",
    title: "Culinary Journal",
    href: "/blog",
    navbar: false,
    footer: false,
    utility: false,
    sitemap: false,
    priority: 0.5,
    changeFrequency: "weekly",
    description:
      "Stories on live-fire cooking, Jamaican culinary heritage, and riverfront dining insights by Chef Walker-Barrett.",
  },

  {
    key: "privacy",
    title: "Privacy Policy",
    href: "/privacy",
    utility: true,
    priority: 0.2,
    changeFrequency: "yearly",
  },

  {
    key: "terms",
    title: "Terms of Service",
    href: "/terms",
    utility: true,
    priority: 0.2,
    changeFrequency: "yearly",
  },

  {
    key: "sitemap",
    title: "Sitemap",
    href: "/sitemap-index.xml",
    utility: true,
    priority: 0.2,
    changeFrequency: "weekly",
  },

  {
    key: "rss",
    title: "RSS",
    href: "/rss.xml",
    utility: true,
    priority: 0.2,
    changeFrequency: "weekly",
  },

  {
    key: "llm",
    title: "LLM",
    href: "/llms.txt",
    utility: true,
    priority: 0.2,
    changeFrequency: "monthly",
  },
];

export const nav = Object.fromEntries(
  navigation.map((item) => [item.key, item])
) as Record<string, NavigationItem>;

export function getNavigationItem(key: string) {
  return navigation.find((item) => item.key === key);
}