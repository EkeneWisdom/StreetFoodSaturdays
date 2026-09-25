import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import Card from "@/components/ui/Card";
import { cn } from "@/lib/cn";

interface ContactCardProps
  extends HTMLAttributes<HTMLDivElement> {

  icon?: ReactNode;

  heading: ReactNode;

  description?: ReactNode;

  value?: ReactNode;

  action?: ReactNode;

  glass?: boolean;
}

export default function ContactCard({
  icon,
  heading,
  description,
  value,
  action,
  glass = false,
  className,
  ...props
}: ContactCardProps) {

  return (

    <Card
      className={cn(
        "group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-hover",
        glass && "glass",
        className,
      )}
      {...props}
    >

      <div className="flex items-start gap-4">

        {icon && (

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">

            {icon}

          </div>

        )}

        <div className="flex-1 space-y-2">

          <h3 className="font-semibold">
            {heading}
          </h3>

          {description && (

            <p className="text-sm text-text-muted">
              {description}
            </p>

          )}

          {value && (

            <div className="font-medium">
              {value}
            </div>

          )}

          {action && (

            <div className="pt-2">

              {action}

            </div>

          )}

        </div>

      </div>

    </Card>

  );

}