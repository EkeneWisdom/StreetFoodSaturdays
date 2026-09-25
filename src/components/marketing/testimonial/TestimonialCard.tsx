import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import { Quote } from "lucide-react";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { typography } from "@/config/design";
import { cn } from "@/lib/cn";

import Rating from "./Rating";

export interface TestimonialCardProps
  extends HTMLAttributes<HTMLDivElement> {
  quote: ReactNode;

  name: string;

  role?: string;

  company?: string;

  avatar?: string;

  rating?: number;

  featured?: boolean;

  logo?: ReactNode;

  badge?: ReactNode;

  variant?: "default" | "glass";
}

export default function TestimonialCard({
  quote,
  name,
  role,
  company,
  avatar,
  rating = 5,
  featured = false,
  logo,
  badge,
  variant = "default",
  className,
  ...props
}: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <Card
      className={cn(
        "relative h-full space-y-6",
        variant === "glass" && "glass",
        featured && "border-primary shadow-hover",
        className,
      )}
      {...props}
    >
      <Quote
        className="absolute right-6 top-6 text-primary/15"
        size={40}
      />

      {badge && (
        <Badge variant="secondary">
          {badge}
        </Badge>
      )}

      <Rating value={rating} />

      <p className={typography.lead}>
        “{quote}”
      </p>

      <div className="flex items-center gap-4">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
            {initials}
          </div>
        )}

        <div className="flex-1">
          <div className="font-semibold">
            {name}
          </div>

          {(role || company) && (
            <div className="text-sm text-text-muted">
              {[role, company]
                .filter(Boolean)
                .join(" • ")}
            </div>
          )}
        </div>

        {logo}
      </div>
    </Card>
  );
}