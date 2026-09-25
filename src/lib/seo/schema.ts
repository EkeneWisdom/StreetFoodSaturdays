import organization from "@/config/organization";
import site from "@/config/site";
import { absolute, canonical, logo } from "./urls";

export interface SchemaOptions {
  id?: string;
}

function base(type: string, id?: string) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": id,
  };
}

/* -------------------------------- */
/* Organization                     */
/* -------------------------------- */

export function organizationSchema() {
  return {
    ...base("Organization", `${site.url}#organization`),
    name: organization.name,
    alternateName: organization.alternateName,
    legalName: organization.legalName,
    description: organization.description,
    slogan: organization.slogan,
    url: organization.url,
    logo: absolute(organization.logo),
    image: absolute(organization.image),
    email: organization.email,
    telephone: organization.telephone,
    sameAs: organization.sameAs,
    address: {
      "@type": "PostalAddress",
      ...organization.address,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: organization.telephone,
        email: organization.email,
        contactType: "customer service",
        availableLanguage: ["English"],
      },
    ],
  };
}

/* -------------------------------- */
/* Local Business                   */
/* -------------------------------- */

export function localBusinessSchema() {
  return {
    ...organizationSchema(),
    "@type": "LocalBusiness",
    geo: {
      "@type": "GeoCoordinates",
      latitude: organization.geo.latitude,
      longitude: organization.geo.longitude,
    },
    openingHours: organization.openingHours,
  };
}

/* -------------------------------- */
/* Website                          */
/* -------------------------------- */

export function websiteSchema() {
  return {
    ...base("WebSite", `${site.url}#website`),
    name: site.name,
    url: site.url,
    description: site.description,
    publisher: {
      "@id": `${site.url}#organization`,
    },
  };
}

/* -------------------------------- */
/* Web Page                         */
/* -------------------------------- */

export interface WebPageOptions {
  title: string;
  description: string;
  path?: string;
}

export function webPageSchema({ title, description, path = "/" }: WebPageOptions) {
  return {
    ...base("WebPage", canonical(path)),
    name: title,
    description,
    url: canonical(path),
    isPartOf: {
      "@id": `${site.url}#website`,
    },
  };
}

/* -------------------------------- */
/* Article                          */
/* -------------------------------- */

export interface ArticleOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  publishedTime: string;
  modifiedTime?: string;
}

export function articleSchema({
  title,
  description,
  path,
  image,
  publishedTime,
  modifiedTime,
}: ArticleOptions) {
  return {
    ...base("Article", canonical(path)),
    headline: title,
    description,
    image: image ? absolute(image) : logo(),
    datePublished: publishedTime,
    dateModified: modifiedTime ?? publishedTime,
    author: {
      "@id": `${site.url}#organization`,
    },
    publisher: {
      "@id": `${site.url}#organization`,
    },
  };
} 

/* -------------------------------- */
/* Service                          */
/* -------------------------------- */

export interface ServiceOptions {
  name: string;
  description: string;
  path: string;
}

export function serviceSchema({ name, description, path }: ServiceOptions) {
  return {
    ...base("Service", canonical(path)),
    name,
    description,
    provider: {
      "@id": `${site.url}#organization`,
    },
    url: canonical(path),
  };
}

/* -------------------------------- */
/* FAQ                              */
/* -------------------------------- */

export interface FAQItem {
  question: string;
  answer: string;
}

export function faqSchema(items: FAQItem[]) {
  return {
    ...base("FAQPage"),
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/* -------------------------------- */
/* Breadcrumb                       */
/* -------------------------------- */

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    ...base("BreadcrumbList"),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonical(item.path),
    })),
  };
}

/* -------------------------------- */
/* Product                          */
/* -------------------------------- */

export interface ProductOptions {
  name: string;
  description: string;
  image?: string;
}

export function productSchema({ name, description, image }: ProductOptions) {
  return {
    ...base("Product"),
    name,
    description,
    image: image ? absolute(image) : logo(),
    brand: {
      "@id": `${site.url}#organization`,
    },
  };
}