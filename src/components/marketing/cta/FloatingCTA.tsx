import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/cn";

interface FloatingCTAProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  icon?: ReactNode;
  title: ReactNode;
  buttonLabel: string;
  buttonHref?: string;
}

export default function FloatingCTA({
  icon,
  title,
  buttonLabel,
  buttonHref = "/contact",
  className,
  ...props
}: FloatingCTAProps) {
  return (
    <Card
      className={cn(
        "flex items-center gap-4 p-4 shadow-hover",
        className,
      )}
      {...props}
    >
      {icon && (
        <div className="text-secondary">
          {icon}
        </div>
      )}

      <div className="flex-1 font-medium">
        {title}
      </div>

      <a href={buttonHref}>
        <Button size="sm">
          {buttonLabel}
        </Button>
      </a>

    </Card>
  );
}