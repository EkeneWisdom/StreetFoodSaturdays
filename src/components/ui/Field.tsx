import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

export default function Field({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "space-y-2",
        className,
      )}
      {...props}
    />
  );
}