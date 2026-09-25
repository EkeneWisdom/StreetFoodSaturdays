import { Check, Minus } from "lucide-react";

import { cn } from "@/lib/cn";

export interface FeatureItem {
  label: string;
  available?: boolean;
}

interface FeatureListProps {
  items: FeatureItem[];
  className?: string;
}

export default function FeatureList({
  items,
  className,
}: FeatureListProps) {
  return (
    <ul
      className={cn(
        "space-y-4",
        className,
      )}
    >
      {items.map((item) => (
        <li
          key={item.label}
          className={cn(
            "flex items-start gap-3",
            item.available === false &&
              "text-text-muted",
          )}
        >
          {item.available === false ? (
            <Minus
              size={18}
              className="mt-0.5 shrink-0 text-text-muted"
            />
          ) : (
            <Check
              size={18}
              className="mt-0.5 shrink-0 text-primary"
            />
          )}

          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}