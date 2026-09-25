export const site = {
  name: "Parkers 1st",
  company: "Parkers 1st Engineering Ltd",
  shortName: "Parkers 1st",

  tagline: "Engineering Limited", //First in Engineering Performance

  description:
    "Leading heavy engineering and asset mobilization firm in Nigeria. Delivering swamp excavation, land clearing, dredging, marine works, and civil infrastructure solutions.",

  url: "https://parkers1st.com", // Update with your exact domain if different

  locale: "en_NG",
  language: "en",

  email: "info@parkers1st.com", // Update with your actual contact email

  otherEmails: [],

  phone: "+2349066830932", // Update with your official line

  otherPhones: [], //['08069285543', '09012654228'],

  address: "Plot 1-5 Parkers 1st Close, Awka North, Anambra state.",

  author: "Parkers 1st Ltd",
  industry: "Heavy Engineering & Marine Construction",
  timezone: "Africa/Lagos",

  keywords: [
    // --- Brand Keywords ---
    "Parkers 1st",
    "Parkers 1st Ltd",
    "Parkers First Nigeria",

    // --- Core Engineering & Equipment Services ---
    "swamp excavator rental Nigeria",
    "swamp buggy hire",
    "heavy machinery lease Nigeria",
    "dredging companies in Nigeria",
    "sand dredging services",
    "land clearing services",
    "swamp clearing and preparation",
    "civil engineering contractor Nigeria",
    "marine engineering services",
    "dredger hire Nigeria",

    // --- Project / Industry Scope ---
    "pipeline right of way clearing",
    "swamp reclamation Nigeria",
    "canalization and maintenance dredging",
    "shoreline protection services",
    "jetty construction Nigeria",
    "heavy equipment mobilization",
    "earthmoving equipment rental",

    // --- High-Intent Local SEO Keywords ---
    "swamp buggy rental Niger Delta",
    "dredging contractors Port Harcourt",
    "heavy equipment lease Lagos",
    "marine construction company Nigeria",
    "civil infrastructure engineering Nigeria",
    "swamp excavator operators Nigeria",
  ],

  get copyright() {
    return `© ${new Date().getFullYear()} ${this.company}. All rights reserved. `;
  },

  /* Technical Attribution */
  engineeredBy: {
    name: "Sure Pipeline Ltd",
    url: "https://surepipeline.com", // Make sure to include https://
    label: "Engineered by",
  },
  
};

export default site;