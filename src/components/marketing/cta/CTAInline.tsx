import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { typography } from "@/config/design";
import { cn } from "@/lib/cn";

interface CTAInlineProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title: ReactNode;
  description?: ReactNode;
  primaryLabel: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTAInline({
  title,
  description,
  primaryLabel,
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref = "/portfolio",
  className,
  ...props
}: CTAInlineProps) {
  return (
    <Card
      className={cn(
        "flex flex-col items-start justify-between gap-6 p-8 lg:flex-row lg:items-center",
        className,
      )}
      {...props}
    >
      <div className="max-w-2xl space-y-3">
        <h3 className={typography.h3}>
          {title}
        </h3>

        {description && (
          <p className={typography.muted}>
            {description}
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-3">

        <a href={primaryHref}>
          <Button>
            {primaryLabel}
          </Button>
        </a>

        {secondaryLabel && (
          <a href={secondaryHref}>
            <Button variant="outline">
              {secondaryLabel}
            </Button>
          </a>
        )}

      </div>
      
    </Card>
  );
}