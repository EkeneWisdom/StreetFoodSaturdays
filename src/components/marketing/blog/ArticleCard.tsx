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

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import { cn } from "@/lib/cn";

export interface ArticleCardProps
  extends HTMLAttributes<HTMLDivElement> {

  image: string;

  heading: ReactNode;

  description: ReactNode;

  category?: ReactNode;

  author?: ReactNode;

  publishedAt?: ReactNode;

  readingTime?: ReactNode;

  tags?: ReactNode[];

  action?: ReactNode;

  featured?: boolean;

}

export default function ArticleCard({

  image,

  heading,

  description,

  category,

  author,

  publishedAt,

  readingTime,

  tags,

  action,

  featured = false,

  className,

  ...props

}: ArticleCardProps) {

  return (

    <FadeUp>

      <Card
        className={cn(
          "group overflow-hidden p-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-hover",
          featured && "border-primary",
          className,
        )}
        {...props}
      >

        {/* Image */}

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

        {/* Content */}

        <div className="space-y-5 p-6">

          {category && (

            <Badge variant="secondary">

              {category}

            </Badge>

          )}

          <h3 className="text-xl font-semibold leading-snug">

            {heading}

          </h3>

          <p className="text-text-muted">

            {description}

          </p>

          {(author ||
            publishedAt ||
            readingTime) && (

            <div className="flex flex-wrap gap-4 text-sm text-text-muted">

              {author && (

                <span>

                  {author}

                </span>

              )}

              {publishedAt && (

                <span className="flex items-center gap-1">

                  <CalendarDays size={15} />

                  {publishedAt}

                </span>

              )}

              {readingTime && (

                <span className="flex items-center gap-1">

                  <Clock3 size={15} />

                  {readingTime}

                </span>

              )}

            </div>

          )}

          {tags &&
            tags.length > 0 && (

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

          <div className="pt-2">

            {action ?? (

              <Button
                variant="ghost"
                rightIcon={
                  <ArrowRight size={16} />
                }
              >

                Continue Reading

              </Button>

            )}

          </div>

        </div>

      </Card>

    </FadeUp>

  );

}