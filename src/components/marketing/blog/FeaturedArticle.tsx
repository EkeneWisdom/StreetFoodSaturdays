import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import {
  CalendarDays,
  Clock3,
  ArrowRight,
} from "lucide-react";

import { FadeUp } from "@/components/motion";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import { cn } from "@/lib/cn";

export interface FeaturedArticleStat {

  label: ReactNode;

  value: ReactNode;

}

interface FeaturedArticleProps
  extends HTMLAttributes<HTMLElement> {

  image: string;

  heading: ReactNode;

  description?: ReactNode;

  category?: ReactNode;

  author?: ReactNode;

  publishedAt?: ReactNode;

  readingTime?: ReactNode;

  stats?: FeaturedArticleStat[];

  primaryAction?: ReactNode;

  secondaryAction?: ReactNode;

}

export default function FeaturedArticle({

  image,

  heading,

  description,

  category,

  author,

  publishedAt,

  readingTime,

  stats,

  primaryAction,

  secondaryAction,

  className,

  ...props

}: FeaturedArticleProps) {

  return (

    <section
      className={cn(
        "relative overflow-hidden rounded-[2rem]",
        className,
      )}
      {...props}
    >

      {/* Hero Image */}

      <div className="relative h-[620px]">

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
            from-black/85
            via-black/45
            to-transparent
          "
        />

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

              {category && (

                <Badge variant="secondary">

                  {category}

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

              {(author ||
                publishedAt ||
                readingTime) && (

                <div className="flex flex-wrap gap-6 text-sm text-white/70">

                  {author && (

                    <span>

                      By {author}

                    </span>

                  )}

                  {publishedAt && (

                    <span className="flex items-center gap-2">

                      <CalendarDays size={16} />

                      {publishedAt}

                    </span>

                  )}

                  {readingTime && (

                    <span className="flex items-center gap-2">

                      <Clock3 size={16} />

                      {readingTime}

                    </span>

                  )}

                </div>

              )}

              <div className="flex flex-wrap gap-4 pt-2">

                {primaryAction ?? (

                  <Button
                    rightIcon={
                      <ArrowRight size={18} />
                    }
                  >

                    Read Article

                  </Button>

                )}

                {secondaryAction}

              </div>

            </div>

          </div>

        </FadeUp>

      </div>

      {stats &&
        stats.length > 0 && (

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