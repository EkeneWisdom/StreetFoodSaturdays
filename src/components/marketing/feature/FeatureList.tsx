import type { HTMLAttributes, ReactNode } from "react";

import { CheckCircle2 } from "lucide-react";

import { cn } from "@/lib/cn";

interface FeatureListProps
  extends HTMLAttributes<HTMLUListElement> {}

interface FeatureItemProps
  extends HTMLAttributes<HTMLLIElement> {
  icon?: ReactNode;
}

export function FeatureItem({
  icon,
  children,
  className,
  ...props
}: FeatureItemProps) {
  return (
    <li
      className={cn(
        "flex items-start gap-3",
        className,
      )}
      {...props}
    >
      <span className="mt-0.5 text-secondary">
        {icon ?? <CheckCircle2 size={20} />}
      </span>

      <span>{children}</span>
    </li>
  );
}

export default function FeatureList({
  children,
  className,
  ...props
}: FeatureListProps) {
  return (
    <ul
      className={cn(
        "space-y-4",
        className,
      )}
      {...props}
    >
      {children}
    </ul>
  );
}