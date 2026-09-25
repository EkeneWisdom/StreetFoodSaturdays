export const getStartedServices = [
  {
    value: "website-design",
    label: "Website Design",
  },
  {
    value: "google-business-profile",
    label: "Google Business Profile",
  },
  {
    value: "local-seo",
    label: "Local SEO",
  },
  {
    value: "social-media-business-pages",
    label: "Social Media Business Pages",
  },
  {
    value: "whatsapp-business",
    label: "WhatsApp Business",
  },
  {
    value: "digital-presence-integration",
    label: "Digital Presence Integration",
  },
] as const;

export const getStartedTimeframes = [
  {
    value: "as-soon-as-possible",
    label: "As soon as possible",
  },
  {
    value: "within-2-weeks",
    label: "Within 2 weeks",
  },
  {
    value: "within-1-month",
    label: "Within a month",
  },
  {
    value: "within-1-to-3-months",
    label: "Within 1–3 months",
  },
  {
    value: "just-exploring",
    label: "I'm just exploring my options",
  },
] as const;

export type GetStartedService =
  (typeof getStartedServices)[number]["value"];

export type GetStartedTimeframe =
  (typeof getStartedTimeframes)[number]["value"];