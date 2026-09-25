export { default as FilterBar } from "./FilterBar";
export type { FilterBarProps } from "./FilterBar";

export { default as Newsletter } from "./Newsletter";
export type {
    NewsletterProps,
} from "./Newsletter";

export { default as AnnouncementBanner } from "./AnnouncementBanner";
export type {
  AnnouncementBannerProps,
} from "./AnnouncementBanner";

export { default as PromoBanner } from "./PromoBanner";
export type {
  PromoBannerProps,
} from "./PromoBanner";

export { default as CookieBanner } from "./CookieBanner";
export type {
  CookieBannerProps,
} from "./CookieBanner";





{/**

const [search, setSearch] =
  useState("");

const [category, setCategory] =
  useState("all");

<FilterBar

  search={search}

  onSearchChange={setSearch}

  activeCategory={category}

  onCategoryChange={setCategory}

  categories={[

    {
      id: "all",
      label: "All",
    },

    {
      id: "react",
      label: "React",
      count: 12,
    },

    {
      id: "seo",
      label: "SEO",
      count: 5,
    },

  ]}

/>


<AnnouncementBanner

  badge={
    <Badge>
      New
    </Badge>
  }

  title="SurePipeline 2.0 is now live."

  description="Explore our new design system and marketing components."

/>




<AnnouncementBanner

  title="Limited Time Offer"

  description="Get your business website launched this month at a promotional price."

  action={
    <Button>

      Get Started

    </Button>
  }

  dismissible

/>




<PromoBanner

  title="Launch your business online."

  description="Get a modern website that helps convert visitors into customers."

/>

<PromoBanner

  badge={
    <Badge>

      Limited Offer

    </Badge>
  }

  illustration={
    <img
      src="/images/website.webp"
      alt=""
    />
  }

  primaryAction={
    <Button>

      Request Quote

    </Button>
  }

/>



*/}