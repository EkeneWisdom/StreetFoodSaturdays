import type { HTMLAttributes, ReactNode } from "react";

import {
  typography,
  spacing,
  sectionTitle,
} from "@/config/design";

import { cn } from "@/lib/cn";

import Badge from "./Badge";
import type { BadgeProps } from "./Badge";

interface SectionTitleProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  badge?: ReactNode;
  badgeVariant?: BadgeProps["variant"];
  title: ReactNode;
  description?: ReactNode;
  centered?: boolean;
}

export default function SectionTitle({
  badge,
  badgeVariant = "secondary",
  title,
  description,
  centered = false,
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        spacing.sectionGap,
        spacing.stackMd,
        centered &&
            `${sectionTitle.maxWidth} mx-auto text-center`,
        className,
      )}
      {...props}
    >
      {badge && (
        <Badge variant={badgeVariant}>
          {badge}
        </Badge>
      )}

      <h2 className={typography.h2}>
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            typography.lead,
            centered && "mx-auto max-w-3xl",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}