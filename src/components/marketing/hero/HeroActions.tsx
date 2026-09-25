import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

export default function HeroActions({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:flex-row",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}