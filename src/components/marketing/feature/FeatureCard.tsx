import type { HTMLAttributes, ReactNode, ReactElement } from "react";

import Card from "@/components/ui/Card";
import { typography, spacing } from "@/config/design";
import { cn } from "@/lib/cn";

interface FeatureCardProps
  extends HTMLAttributes<HTMLDivElement> {
  icon: ReactElement;
  heading: ReactNode;
  description: ReactNode;
}

export default function FeatureCard({
  icon,
  heading,
  description,
  className,
  ...props
}: FeatureCardProps) {
  return (
    <Card
      className={cn(
        spacing.stackMd,
        "h-full p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-hover",
        className,
      )}
      {...props}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-primary/20">
        {icon}
      </div>

      <h3 className={typography.h4}>
        {heading}
      </h3>

      <p className={typography.muted}>
        {description}
      </p>
    </Card>
  );
}