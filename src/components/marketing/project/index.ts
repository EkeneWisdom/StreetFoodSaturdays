export { default as ProjectCard } from "./ProjectCard";
export type { ProjectCardProps } from "./ProjectCard";

export { default as PortfolioGrid } from "./PortfolioGrid";

export { default as ProjectMeta } from "./ProjectMeta";
export type { ProjectMetaItem } from "./ProjectMeta";

export { default as ProjectHero } from "./ProjectHero";
export type { ProjectHeroStat } from "./ProjectHero";

export { default as RelatedProjects } from "./RelatedProjects";

export { default as BeforeAfter } from "./BeforeAfter";





{/**


<ProjectCard

  image="/portfolio/sureclub.jpg"

  category="Membership System"

  heading="SureClub"

  description="
  Desktop software for managing
  clubs, associations and societies.
  "

  tags={[
    "Electron",
    "React",
    "SQLite",
  ]}

  metrics={
    <>
      Built with the SPBAP architecture.
    </>
  }

/>




<PortfolioGrid

  columns={3}

  projects={[

    {
      image:"/portfolio/sureclub.jpg",

      heading:"SureClub",

      description:"Club management platform.",

      category:"Desktop App",

      tags:[
        "Electron",
        "React",
      ],
    },

    {
      image:"/portfolio/kolitech.jpg",

      heading:"Kolitech",

      description:"Corporate website.",

      category:"Website",

      tags:[
        "React",
        "Cloudflare",
      ],
    },

  ]}

/>




<ProjectMeta

  items={[

    {

      label: "Client",

      value: "Sure Pipelines Ltd",

    },

    {

      label: "Industry",

      value: "Software",

    },

    {

      label: "Technology",

      value: "React • Tailwind • Cloudflare",

    },

    {

      label: "Timeline",

      value: "3 Weeks",

    },

    {

      label: "Year",

      value: "2026",

    },

    {

      label: "Website",

      value: (

        <a
          href="https://surepipeline.com"
          className="text-primary hover:underline"
        >
          surepipeline.com
        </a>

      ),

    },

  ]}

/>





<ProjectHero

  image="/portfolio/sureclub.jpg"

  badge="Desktop Application"

  heading="SureClub"

  description="
  Modern membership management software
  built for clubs, churches and associations.
  "

  client="Sure Pipelines Ltd"

  stats={[

    {
      label:"Platform",
      value:"Electron",
    },

    {
      label:"Frontend",
      value:"React",
    },

    {
      label:"Database",
      value:"SQLite",
    },

    {
      label:"Architecture",
      value:"SPBAP",
    },

  ]}

  secondaryAction={
    <Button variant="outline">

      Source Code

    </Button>
  }

/>





<RelatedProjects

  projects={[

    {
      image:"/portfolio/sureclub.jpg",
      heading:"SureClub",
      description:"Membership management platform.",
      category:"Desktop App",
      tags:["Electron","React"],
    },

    {
      image:"/portfolio/kolitech.jpg",
      heading:"Kolitech",
      description:"Business website.",
      category:"Website",
      tags:["React","Cloudflare"],
    },

    {
      image:"/portfolio/jpmanager.jpg",
      heading:"JP Manager",
      description:"Business centre management.",
      category:"Desktop App",
      tags:["Electron","SQLite"],
    },

  ]}

/>





<BeforeAfter

  beforeImage="/portfolio/site-old.jpg"

  afterImage="/portfolio/site-new.jpg"

  beforeLabel="Old Website"

  afterLabel="SurePipeline Redesign"

/>


    */}