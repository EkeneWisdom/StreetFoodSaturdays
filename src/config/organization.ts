import site from "./site";
import contact from "./contact";
import branding from "./branding";
import social from "./social";

export const organization = {

  /* Identity */

  name: site.company,

  alternateName: site.shortName,

  legalName: site.company,

  description: site.description,

  slogan: site.tagline,

  founder: "",

  foundingDate: "",

  /* Website */

  url: site.url,

  logo: branding.logo,

  image: branding.defaultOgImage,

  /* Contact */

  email: contact.email,

  telephone: contact.phone,

  address: {

    streetAddress: "",

    addressLocality: "",

    addressRegion: "",

    postalCode: "",

    addressCountry: "NG",

  },

  geo: {

    latitude: "",

    longitude: "",

  },

  openingHours: [

    "Mo-Fr 09:00-18:00",

    "Sa 09:00-15:00",

  ],

  /* Social */

  sameAs: Object.values(social)

    .filter(Boolean)

    .filter((value) => value.startsWith("http")),

};

export default organization;