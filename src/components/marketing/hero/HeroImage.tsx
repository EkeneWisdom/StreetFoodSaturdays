import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

export default function HeroImage({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}