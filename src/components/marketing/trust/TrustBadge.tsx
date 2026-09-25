import type { HTMLAttributes, ReactNode } from "react";

import Card from "@/components/ui/Card";
import { cn } from "@/lib/cn";

interface TrustBadgeProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  icon: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
}

export default function TrustBadge({
  icon,
  title,
  subtitle,
  className,
  ...props
}: TrustBadgeProps) {
  return (
    <Card
      className={cn(
        "flex items-center gap-4 p-5",
        className,
      )}
      {...props}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold">
          {title}
        </h3>

        {subtitle && (
          <p className="mt-1 text-sm text-text-muted">
            {subtitle}
          </p>
        )}
      </div>
    </Card>
  );
}