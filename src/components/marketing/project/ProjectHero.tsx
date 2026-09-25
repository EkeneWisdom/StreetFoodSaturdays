import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import { FadeUp } from "@/components/motion";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import { cn } from "@/lib/cn";

export interface ProjectHeroStat {

  label: ReactNode;

  value: ReactNode;

}

interface ProjectHeroProps
  extends HTMLAttributes<HTMLElement> {

  image: string;

  heading: ReactNode;

  description?: ReactNode;

  badge?: ReactNode;

  client?: ReactNode;

  stats?: ProjectHeroStat[];

  primaryAction?: ReactNode;

  secondaryAction?: ReactNode;

}

export default function ProjectHero({

  image,

  heading,

  description,

  badge,

  client,

  stats,

  primaryAction,

  secondaryAction,

  className,

  ...props

}: ProjectHeroProps) {

  return (

    <section
      className={cn(
        "relative overflow-hidden rounded-[2rem]",
        className,
      )}
      {...props}
    >

      {/* Background */}

      <div className="relative h-[560px]">

        <img
          src={image}
          alt={String(heading)}
          loading="eager"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            via-black/40
            to-transparent
          "
        />

        {/* Content */}

        <FadeUp>

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              p-8
              text-white
              md:p-12
              lg:p-16
            "
          >

            <div className="max-w-4xl space-y-6">

              {badge && (

                <Badge variant="secondary">

                  {badge}

                </Badge>

              )}

              <h1 className="text-4xl font-bold leading-tight lg:text-6xl">

                {heading}

              </h1>

              {description && (

                <p className="max-w-3xl text-lg text-white/80">

                  {description}

                </p>

              )}

              {client && (

                <p className="text-sm uppercase tracking-wider text-white/60">

                  Client • {client}

                </p>

              )}

              {(primaryAction ||
                secondaryAction) && (

                <div className="flex flex-wrap gap-4 pt-2">

                  {primaryAction ?? (

                    <Button>

                      View Live Site

                    </Button>

                  )}

                  {secondaryAction}

                </div>

              )}

            </div>

          </div>

        </FadeUp>

      </div>

      {/* Statistics */}

      {stats && stats.length > 0 && (

        <div
          className="
            grid
            gap-6
            border-t
            border-border
            bg-background
            p-8
            md:grid-cols-2
            lg:grid-cols-4
          "
        >

          {stats.map((item, index) => (

            <div key={index}>

              <p className="text-sm text-text-muted">

                {item.label}

              </p>

              <div className="mt-2 text-2xl font-bold">

                {item.value}

              </div>

            </div>

          ))}

        </div>

      )}

    </section>

  );

}