import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import { FadeUp } from "@/components/motion";

import Card from "@/components/ui/Card";

import { cn } from "@/lib/cn";

export interface ProjectMetaItem {

  label: ReactNode;

  value: ReactNode;

}

interface ProjectMetaProps
  extends HTMLAttributes<HTMLDivElement> {

  heading?: ReactNode;

  items: ProjectMetaItem[];

  columns?: 1 | 2;

}

export default function ProjectMeta({

  heading = "Project Details",

  items,

  columns = 2,

  className,

  ...props

}: ProjectMetaProps) {

  const gridColumns = {

    1: "grid-cols-1",

    2: "md:grid-cols-2",

  };

  return (

    <FadeUp>

      <Card
        className={cn(
          "space-y-8",
          className,
        )}
        {...props}
      >

        <h3 className="text-xl font-semibold">

          {heading}

        </h3>

        <div
          className={cn(
            "grid gap-6",
            gridColumns[columns],
          )}
        >

          {items.map((item, index) => (

            <div
              key={index}
              className="
                rounded-xl
                border
                border-border
                bg-surface
                p-5
              "
            >

              <p className="text-sm text-text-muted">

                {item.label}

              </p>

              <div className="mt-2 font-medium">

                {item.value}

              </div>

            </div>

          ))}

        </div>

      </Card>

    </FadeUp>

  );

}