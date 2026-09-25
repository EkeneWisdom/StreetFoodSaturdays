import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface DividerProps
  extends HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  children?: ReactNode;
}

export default function Divider({
  orientation = "horizontal",
  children,
  className,
  ...props
}: DividerProps) {
  const hasLabel = children != null;

  if (orientation === "vertical") {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn(
          "inline-block h-full min-h-6 w-px shrink-0 bg-border",
          className,
        )}
        {...props}
      />
    );
  }

  if (!hasLabel) {
    return (
      <hr
        role="separator"
        aria-orientation="horizontal"
        className={cn(
          "w-full border-0 border-t border-border",
          className,
        )}
        {...props}
      />
    );
  }

  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={cn(
        "flex w-full items-center gap-4",
        className,
      )}
      {...props}
    >
      <div
        aria-hidden="true"
        className="h-px flex-1 bg-border"
      />

      <span className="shrink-0 text-sm text-text-muted">
        {children}
      </span>

      <div
        aria-hidden="true"
        className="h-px flex-1 bg-border"
      />
    </div>
  );
}