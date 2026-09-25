import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/cn";

interface VerifiedMetricProps
  extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  value: ReactNode;
  label: ReactNode;
}

export default function VerifiedMetric({
  icon,
  value,
  label,
  className,
  ...props
}: VerifiedMetricProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3",
        className,
      )}
      {...props}
    >
      {icon && (
        <div className="text-secondary">
          {icon}
        </div>
      )}

      <div>
        <div className="text-lg font-bold">
          {value}
        </div>

        <div className="text-sm text-text-muted">
          {label}
        </div>
      </div>
    </div>
  );
}