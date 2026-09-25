import type { HTMLAttributes, ReactNode } from "react";

import Card from "@/components/ui/Card";
import { typography, spacing } from "@/config/design";
import { cn } from "@/lib/cn";

import {
  TrendingUp,
  TrendingDown,
} from "lucide-react";

interface StatCardProps
  extends HTMLAttributes<HTMLDivElement> {
  value: ReactNode;
  label: ReactNode;
  icon?: ReactNode;
  description?: ReactNode;

  trend?: {
    value: string;
    direction?: "up" | "down" | "neutral";
  };
}

export default function StatCard({
  value,
  label,
  icon,
  description,
  trend,
  className,
  ...props
}: StatCardProps) {
  return (
    <Card
      className={cn(
        spacing.stackSm,
        "p-8",
        className,
      )}
      {...props}
    >
      {icon && (
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-primary/20">
          {icon}
        </div>
      )}

      <div className={typography.lead}>
        {value}
      </div>

      <h3 className="font-semibold">
        {label}
      </h3>

      {description && (
        <p className={typography.muted}>
          {description}
        </p>
      )}

      {trend && (
        <div
          className={cn(
            "mt-3 inline-flex w-fit items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium",

            trend.direction === "up" &&
              "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",

            trend.direction === "down" &&
              "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",

            trend.direction === "neutral" &&
              "bg-surface text-text-muted",
          )}
        >
          {trend.direction === "up" && (
            <TrendingUp size={14} />
          )}

          {trend.direction === "down" && (
            <TrendingDown size={14} />
          )}

          {trend.value}
        </div>
      )}
    </Card>
  );
}