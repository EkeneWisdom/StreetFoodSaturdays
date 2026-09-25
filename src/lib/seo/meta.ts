import seo from "@/config/seo";
import site from "@/config/site";

import {
  canonical,
  ogImage,
} from "./urls";

export interface MetaOptions {

  title?: string;

  description?: string;

  path?: string;

  image?: string;

  keywords?: string[];

  index?: boolean;

  follow?: boolean;

}

export interface MetaData {

  title: string;

  description: string;

  canonical: string;

  image: string;

  keywords: string;

  robots: string;

  locale: string;

  language: string;

  siteName: string;

  author: string;

}

function createTitle(
  title?: string,
) {

  if (!title) {

    return seo.defaultTitle;

  }

  return `${title} ${seo.titleSeparator} ${site.company}`;

}

function createRobots(

  index = seo.robots.index,

  follow = seo.robots.follow,

) {

  return [

    index
      ? "index"
      : "noindex",

    follow
      ? "follow"
      : "nofollow",

  ].join(", ");

}

export function createMeta({

  title,

  description,

  path = "/",

  image,

  keywords = [],

  index,

  follow,

}: MetaOptions = {}): MetaData {

  return {

    title:
      createTitle(title),

    description:
      description ??
      seo.defaultDescription,

    canonical:
      canonical(path),

    image:
      ogImage(
        image ??
        seo.defaultImage,
      ),

    keywords: [

      ...seo.keywords,

      ...keywords,

    ].join(", "),

    robots:
      createRobots(
        index,
        follow,
      ),

    locale:
      seo.locale,

    language:
      seo.language,

    siteName:
      site.name,

    author:
      seo.author,

  };

}

export default createMeta;



 
{/**
const meta = createMeta({

  title: "About",

  description:
    "Learn more about Sure Pipeline.",

  path: "/about",

});

*/}