import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

interface FeatureGridProps
  extends HTMLAttributes<HTMLDivElement> {
  columns?: 2 | 3 | 4;
}

const cols = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 xl:grid-cols-3",
  4: "sm:grid-cols-2 xl:grid-cols-4",
};

export default function FeatureGrid({
  columns = 3,
  className,
  children,
  ...props
}: FeatureGridProps) {
  return (
    <div
      className={cn(
        "grid gap-8",
        cols[columns],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}