export const site = {
  name: "Street Food Saturdays",
  company: "Street Food Saturdays",
  shortName: "SFS",

  tagline: "Woodfire Gourmet River Dining Experience",

  description:
    "Woodfire gourmet river dining in Golden Spring, St. Andrew, Jamaica. By Chef Walker-Barrett. By reservation only.",

  url: "https://streetfoodsaturdays.com",

  locale: "en_JM",
  language: "en",

  email: "streetfoodsaturdays@gmail.com",

  otherEmails: [],

  phone: "+1 (876) 414-0016",

  otherPhones: ["8764140016"],

  address: "Mt. James District (by the bridge), Golden Spring, West Rural St. Andrew, Kingston, Jamaica JMAAW08",

  author: "Chef Walker-Barrett",
  industry: "Gourmet Culinary & River Dining",
  timezone: "America/Jamaica",

  keywords: [
    // --- Brand Keywords ---
    "Street Food Saturdays",
    "Chef Walker Barrett",
    "Street Food Saturdays Jamaica",
    "SFS River Dining",

    // --- Core Dining & Experience Services ---
    "river dining experience Jamaica",
    "woodfire gourmet cooking",
    "live fire dining Kingston",
    "coal stove cooking experience",
    "private river dining Jamaica",
    "gourmet surf and turf platter Jamaica",

    // --- Event & Booking Scope ---
    "river side picnic St Andrew",
    "gourmet outdoor dining Jamaica",
    "exclusive food events Kingston",
    "Jamaican culinary tourism",

    // --- High-Intent Local SEO Keywords ---
    "river dining Golden Spring",
    "Mt James district restaurant",
    "weekend dining experiences Kingston Jamaica",
    "top outdoor restaurants in Jamaica",
    "best Jamaican chef experience",
  ],

  get copyright() {
    return `© ${new Date().getFullYear()} ${this.company}. All rights reserved.`;
  },

  /* Technical Attribution */
  engineeredBy: {
    name: "Sure Pipeline Ltd",
    url: "https://surepipeline.com",
    label: "Engineered by",
  },
};

export default site;