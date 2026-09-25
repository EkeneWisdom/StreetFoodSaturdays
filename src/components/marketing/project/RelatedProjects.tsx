import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import PortfolioGrid from "./PortfolioGrid";
import type {
  ProjectCardProps,
} from "./ProjectCard";

interface RelatedProjectsProps
  extends HTMLAttributes<HTMLElement> {

  heading?: ReactNode;

  description?: ReactNode;

  projects: ProjectCardProps[];

  columns?: 2 | 3 | 4;

}

export default function RelatedProjects({

  heading = "Related Projects",

  description = "Explore more of our recent work.",

  projects,

  columns = 3,

  className,

  ...props

}: RelatedProjectsProps) {

  return (

    <Section
      className={className}
      {...props}
    >

      <Container>

        <SectionTitle

          badge="Portfolio"

          title={heading}

          description={description}

        />

        <PortfolioGrid

          projects={projects}

          columns={columns}

        />

      </Container>

    </Section>

  );

}