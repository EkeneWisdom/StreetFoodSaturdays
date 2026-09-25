import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

export default function GridPattern({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 opacity-60",
        "bg-[linear-gradient(rgb(100_116_139_/_0.10)_1px,transparent_1px),linear-gradient(90deg,rgb(100_116_139_/_0.10)_1px,transparent_1px)]",
        "bg-[length:40px_40px]",
        "dark:bg-[linear-gradient(rgb(255_255_255_/_0.06)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255_/_0.06)_1px,transparent_1px)]",
        className,
      )}
      {...props}
    />
  );
}