import { Star } from "lucide-react";
import { cn } from "@/lib/cn";

interface RatingProps {
  value?: number;
  outOf?: number;
  showValue?: boolean;
  label?: string;
  className?: string;
}

export default function Rating({
  value = 5,
  outOf = 5,
  showValue = false,
  label,
  className,
}: RatingProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex">
        {Array.from({ length: outOf }).map((_, index) => (
          <Star
            key={index}
            size={16}
            className={cn(
              "fill-secondary text-secondary",
              index >= value && "fill-transparent text-border",
            )}
          />
        ))}
      </div>

      {showValue && (
        <span className="text-sm font-medium">
          {value.toFixed(1)}
        </span>
      )}

      {label && (
        <span className="text-sm text-text-muted">
          {label}
        </span>
      )}
    </div>
  );
}