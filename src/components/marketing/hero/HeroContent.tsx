import type { HTMLAttributes, ReactNode } from "react";

import Badge from "@/components/ui/Badge";
import { typography, spacing } from "@/config/design";
import { cn } from "@/lib/cn";

interface HeroContentProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  badge?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
}

export default function HeroContent({
  badge,
  title,
  description,
  children,
  className,
  ...props
}: HeroContentProps) {
  return (
    <div
      className={cn(
        spacing.stackLg,
        "max-w-2xl",
        className,
      )}
      {...props}
    >
      {badge && (
        <Badge variant="secondary">
          {badge}
        </Badge>
      )}

      <h1 className={typography.display}>
        {title}
      </h1>

      {description && (
        <p className={typography.lead}>
          {description}
        </p>
      )}

      {children}
    </div>
  );
}