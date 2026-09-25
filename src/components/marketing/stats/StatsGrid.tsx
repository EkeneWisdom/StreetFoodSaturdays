import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

interface StatsGridProps
  extends HTMLAttributes<HTMLDivElement> {}

export default function StatsGrid({
  className,
  children,
  ...props
}: StatsGridProps) {
  return (
    <div
      className={cn(
        "grid gap-8 sm:grid-cols-2 xl:grid-cols-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}