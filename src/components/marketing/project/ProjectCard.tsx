import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import {
  ArrowUpRight,
} from "lucide-react";

import { FadeUp } from "@/components/motion";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import { cn } from "@/lib/cn";

export interface ProjectCardProps
  extends HTMLAttributes<HTMLDivElement> {

  image: string;

  heading: ReactNode;

  description: ReactNode;

  category?: ReactNode;

  tags?: ReactNode[];

  metrics?: ReactNode;

  action?: ReactNode;

  featured?: boolean;

}

export default function ProjectCard({

  image,

  heading,

  description,

  category,

  tags,

  metrics,

  action,

  featured = false,

  className,

  ...props

}: ProjectCardProps) {

  return (

    <FadeUp>

      <Card
        className={cn(

          "group overflow-hidden p-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-hover",

          featured &&
            "border-primary",

          className,

        )}

        {...props}
      >

        <div className="overflow-hidden">

          <img
            src={image}
            alt={String(heading)}
            loading="lazy"
            className="
              aspect-[16/10]
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />

        </div>

        <div className="space-y-5 p-6">

          {category && (

            <Badge
              variant="secondary"
            >
              {category}
            </Badge>

          )}

          <h3 className="text-xl font-semibold">

            {heading}

          </h3>

          <p className="text-text-muted">

            {description}

          </p>

          {tags && tags.length > 0 && (

            <div className="flex flex-wrap gap-2">

              {tags.map((tag, index) => (

                <Badge
                  key={index}
                  variant="outline"
                >
                  {tag}
                </Badge>

              ))}

            </div>

          )}

          {metrics && (

            <div className="rounded-xl bg-surface p-4 text-sm">

              {metrics}

            </div>

          )}

          <div className="flex items-center justify-between pt-2">

            {action ?? (

              <Button
                variant="ghost"
                rightIcon={
                  <ArrowUpRight size={16} />
                }
              >
                View Project
              </Button>

            )}

          </div>

        </div>

      </Card>

    </FadeUp>

  );

}