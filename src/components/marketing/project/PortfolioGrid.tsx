import { cn } from "@/lib/cn";

import {
  Stagger,
  StaggerItem,
} from "@/components/motion";

import ProjectCard, {
  type ProjectCardProps,
} from "./ProjectCard";

interface PortfolioGridProps {

  projects: ProjectCardProps[];

  columns?: 2 | 3 | 4;

  emptyHeading?: string;

  emptyDescription?: string;

}

export default function PortfolioGrid({

  projects,

  columns = 3,

  emptyHeading = "No projects found.",

  emptyDescription = "Please check back later.",

}: PortfolioGridProps) {

  const gridColumns = {

    2: "lg:grid-cols-2",

    3: "lg:grid-cols-3",

    4: "lg:grid-cols-4",

  };

  if (projects.length === 0) {

    return (

      <div className="rounded-3xl border border-dashed border-border p-16 text-center">

        <h3 className="text-xl font-semibold">

          {emptyHeading}

        </h3>

        <p className="mt-3 text-text-muted">

          {emptyDescription}

        </p>

      </div>

    );

  }

  return (

    <Stagger>

      <div
        className={cn(
          "grid gap-8",
          gridColumns[columns],
        )}
      >

        {projects.map((project) => (

          <StaggerItem
            key={String(project.heading)}
          >

            <ProjectCard
              {...project}
            />

          </StaggerItem>

        ))}

      </div>

    </Stagger>

  );

}