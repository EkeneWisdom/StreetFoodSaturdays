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
  {
    key: "home",
    title: "Home",
    href: "/",
    navbar: true,
    footer: true,
    priority: 1.0,
    changeFrequency: "weekly",
  },

  /* 1. ENGINEERING SERVICES HUB (Moved before Fleet) */
  {
    key: "services",
    title: "Services",
    href: "/services",
    navbar: true,
    footer: true,
    description:
      "Multi-disciplinary engineering solutions covering civil, marine, environmental management, and mechanical infrastructure.",

    featured: {
      title: "Tender & Engineering Consultations",
      description:
        "Speak directly with our senior project engineering team regarding site investigations or municipal tenders.",
      href: "/about/contact?type=engineering-consultation",
      label: "Talk to an Engineer",
    },

    children: [
      {
        key: "service-dredging-reclamation",
        title: "Dredging & Land Reclamation",
        href: "/services#dredging-reclamation",
        description:
          "Channel dredging, sand stockpiling, shoreline erosion control, and land creation for industrial facilities.",
        menuTitle: "Dredging & Land Reclamation",
        menuDescription: "Shoreline protection, sand pumping & reclamation.",
        priority: 0.9,
        changeFrequency: "monthly",
      },
      {
        key: "service-civil-construction",
        title: "Civil & Structural Engineering",
        href: "/services#civil-construction",
        description:
          "Road construction, piling, jetties, quay walls, site preparation, and tank foundation preloads.",
        menuTitle: "Civil & Structural Works",
        menuDescription: "Roads, piling, jetties, quay walls & foundations.",
        priority: 0.9,
        changeFrequency: "monthly",
      },
      {
        key: "service-piping-fire",
        title: "Piping & Fire Reticulation",
        href: "/services#piping-fire-reticulation",
        description:
          "Flow line construction, industrial piping networks, hydrants, and certified fire suppression systems.",
        menuTitle: "Piping & Fire Reticulation",
        menuDescription: "Industrial pipelines & fire suppression systems.",
        priority: 0.9,
        changeFrequency: "monthly",
      },
      {
        key: "service-mechanical-maintenance",
        title: "Mechanical & Industrial Services",
        href: "/services#mechanical-maintenance",
        description:
          "Heavy plant maintenance, oil & gas technical support, and structural mechanical installations.",
        menuTitle: "Mechanical Maintenance",
        menuDescription: "Heavy equipment maintenance & plant support.",
        priority: 0.8,
        changeFrequency: "monthly",
      },
      {
        key: "service-environmental-management",
        title: "Environmental & Soil Engineering",
        href: "/services#environmental-management",
        description:
          "Soil improvement, site surveys, soil investigations, and shoreline erosion mitigation.",
        menuTitle: "Environmental & Soil Testing",
        menuDescription: "Erosion control, soil surveys & site prep.",
        priority: 0.8,
        changeFrequency: "monthly",
      },
    ],
    priority: 0.9,
    changeFrequency: "weekly",
  },

  /* 2. FLEET & MACHINERY HUB */
  {
    key: "fleet",
    title: "Fleet",
    href: "/fleet",
    navbar: true,
    footer: true,
    description:
      "Heavy dry and marine equipment fleet available for mobilization, land clearing, and marine engineering across Nigeria.",

    featured: {
      title: "Need Equipment Lease & Mobilization?",
      description:
        "Request specs and instant availability for CAT Earthmovers, WILCO Swamp Excavators, Marine Dredgers and more.",
      href: "/about/contact?type=equipment-lease",
      label: "Request For Quote",
    },

    children: [
      {
        key: "fleet-bush-clearing",
        title: "Bush Clearing Equipment",
        href: "/fleet#bush-clearing",
        description:
          "Heavy mulchers, forestry mowers, and land clearing machinery engineered for dense terrain corridor preparation.",
        menuTitle: "Bush Clearing Equipment",
        menuDescription: "Heavy mulchers & land clearers for dense terrain.",
        priority: 0.9,
        changeFrequency: "monthly",
      },
      {
        key: "fleet-water-clearing",
        title: "Water & Swamp Equipment",
        href: "/fleet#water-clearing",
        description:
          "Amphibious swamp excavators, weed harvesters, and aquatic clearing machinery for riverway and marshland projects.",
        menuTitle: "Water & Swamp Machinery",
        menuDescription: "Amphibious excavators & riverway clearing units.",
        priority: 0.9,
        changeFrequency: "monthly",
      },
      {
        key: "fleet-earthmovers",
        title: "Earthmoving Machinery",
        href: "/fleet#earthmoving",
        description:
          "CAT D6R bulldozers, excavators, wheel loaders, graders, and articulated dump trucks for large-scale site prep.",
        menuTitle: "Earthmoving Fleet",
        menuDescription: "Bulldozers, excavators, graders & dump trucks.",
        priority: 0.9,
        changeFrequency: "monthly",
      },
      {
        key: "fleet-dredging-marine",
        title: "Dredging & Marine Assets",
        href: "/fleet#dredging",
        description:
          "Cutter suction dredgers, sand pumps, and marine support vessels for land reclamation and shoreline protection.",
        menuTitle: "Dredging & Marine Assets",
        menuDescription: "Cutter suction dredgers & marine reclamation units.",
        priority: 0.9,
        changeFrequency: "monthly",
      },
      {
        key: "fleet-logistics-cranes",
        title: "Cranes & Transport Logistics",
        href: "/fleet#logistics",
        description:
          "Groves 20t/30t cranes, Mack/MAN trailers, dumper trucks, and heavy transport infrastructure.",
        menuTitle: "Cranes & Heavy Haulage",
        menuDescription: "Groves cranes, trailers & site logistics transport.",
        priority: 0.8,
        changeFrequency: "monthly",
      },
    ],
    priority: 0.9,
    changeFrequency: "weekly",
  },

  /* 3. PROJECTS & PORTFOLIO HUB */
  {
    key: "projects",
    title: "Projects",
    href: "/projects",
    navbar: true,
    footer: true,
    description:
      "Track record of executed civil, dredging, shoreline protection, and land reclamation projects across Nigeria.",

    featured: {
      title: "View Active Operations",
      description:
        "Explore real-time visual records and site snapshots of our machinery deployed across active sites.",
      href: "/projects/gallery",
      label: "Explore Gallery",
    },

    children: [
      {
        key: "projects-list",
        title: "Executed Projects",
        href: "/projects",
        description:
          "Detailed case studies, completed contract values, and client execution summaries.",
        menuTitle: "Executed Projects",
        menuDescription: "Case studies & completed engineering contracts.",
        priority: 0.8,
        changeFrequency: "monthly",
      },
      {
        key: "projects-gallery",
        title: "Media & Gallery Archive",
        href: "/projects/gallery",
        description:
          "Photo & video archive of fleet mobilization, dredging units, and civil works in action.",
        menuTitle: "Media & Gallery",
        menuDescription: "Visual archive of active field deployments.",
        priority: 0.8,
        changeFrequency: "weekly",
      },
    ],
    priority: 0.8,
    changeFrequency: "monthly",
  },

  /* 4. COMPANY HUB (Enveloping About, Compliance, Contact, Careers) */
  {
    key: "company",
    title: "Company",
    href: "/about",
    navbar: true,
    footer: false,
    description:
      "Learn about Parkers 1st Engineering Limited, our administrative setup, leadership, compliance, and host community commitment.",

    featured: {
      title: "Administrative HQ",
      description:
        "Direct contact details, equipment lease inquiries, and official tender submissions.",
      href: "/about/contact",
      label: "Get in Touch",
    },

    children: [
      {
        key: "about",
        title: "About Us",
        href: "/about",
        description:
          "Our corporate history, leadership team, technical capabilities, and operational vision.",
        menuTitle: "About Parkers 1st",
        menuDescription: "Leadership, corporate history & operational vision.",
        priority: 0.7,
        changeFrequency: "monthly",
      },
      {
        key: "compliance",
        title: "Compliance & Standards",
        href: "/about/compliance",
        description:
          "ISO 9001:2008 Quality Standards, HSES Safety Commitment, and 100% Indigenous Nigerian Content Policy.",
        menuTitle: "Compliance & Safety",
        menuDescription: "ISO standards, HSES policy & Local Content Act.",
        priority: 0.8,
        changeFrequency: "monthly",
      },
      {
        key: "contact",
        title: "Contact & Head Office",
        href: "/about/contact",
        description:
          "Reach our executive office for equipment lease quotes, engineering consulting, or site surveys.",
        menuTitle: "Contact Us",
        menuDescription: "HQ address, phone numbers & RFQ submission.",
        priority: 0.9,
        changeFrequency: "monthly",
      },
      {
        key: "careers",
        title: "Careers & Community",
        href: "/about/careers",
        description:
          "Engineering roles, vocational training, and host community development programs.",
        menuTitle: "Careers & Host Community",
        menuDescription: "Job openings, internships & community impact.",
        priority: 0.5,
        changeFrequency: "monthly",
      },
    ],
    priority: 0.8,
    changeFrequency: "monthly",
  },

  /* STANDALONE PAGE / FOOTER / UTILITY LINKS */
  {
    key: "gallery",
    title: "Media & Gallery Archive",
    href: "/projects/gallery",
    description:
      "Photo & video archive of fleet mobilization, dredging units, and civil works in action.",
    menuTitle: "Media & Gallery",
    menuDescription: "Visual archive of active field deployments.",
    priority: 0.8,
    changeFrequency: "weekly",
  },
  {
    key: "about",
    title: "About",
    href: "/about",
    navbar: false,
    footer: true,
    description:
      "Learn about Parkers 1st Engineering Limited, our administrative setup, leadership, vision, and corporate history.",
    priority: 0.7,
    changeFrequency: "monthly",
  },

  {
    key: "compliance",
    title: "Compliance",
    href: "/about/compliance",
    navbar: false,
    footer: true,
    description:
      "ISO 9001:2008 Quality Standards, HSES Safety Commitment, and 100% Indigenous Nigerian Content Act policy.",
    priority: 0.8,
    changeFrequency: "monthly",
  },

  {
    key: "contact",
    title: "Contact",
    href: "/about/contact",
    navbar: false,
    footer: true,
    description:
      "Get in touch with our Awka North headquarters for machinery hire, engineering quotes, or tender submissions.",
    priority: 0.9,
    changeFrequency: "monthly",
  },

  {
    key: "news",
    title: "News",
    href: "/news",
    navbar: false,
    footer: false,
    sitemap: false,
    description:
      "Project milestones, fleet additions, corporate announcements, and site reports.",
    priority: 0.6,
    changeFrequency: "weekly",
  },

  {
    key: "careers",
    title: "Careers",
    href: "/about/careers",
    navbar: false,
    footer: true,
    description:
      "Join Parkers 1st Engineering Limited. Vocational training, engineering roles, and host community programs.",
    priority: 0.5,
    changeFrequency: "monthly",
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

  {
    key: "blog",
    title: "Blog",
    href: "/blog",
    navbar: false,
    footer: false,
    utility: false,
    sitemap: false,
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