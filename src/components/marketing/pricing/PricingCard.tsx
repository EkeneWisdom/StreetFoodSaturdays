import { Star } from "lucide-react";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

import { cn } from "@/lib/cn";

import FeatureList, {
  type FeatureItem,
} from "./FeatureList";

export interface PricingCardProps {
  name: string;
  description?: string;

  price: {
    monthly: string;
    yearly: string;
  };

  yearly?: boolean;
  period?: string;

  oldPrice?: string;
  savings?: string;

  badge?: string;
  featured?: boolean;

  features: FeatureItem[];

  buttonText?: string;
  buttonHref?: string;

  className?: string;
}

export default function PricingCard({
  name,
  description,

  price,
  yearly = false,
  period,

  oldPrice,
  savings,

  badge,
  featured = false,

  features,

  buttonText = "Get Started",

  className,
}: PricingCardProps) {

  const displayPrice = yearly
    ? price.yearly
    : price.monthly;

  const displayPeriod =
    period ??
    (yearly ? "/year" : "/month");

  return (
    <Card
      className={cn(
        "relative flex h-full flex-col rounded-3xl transition-all duration-300",

        featured &&
          "glass scale-[1.02] border-primary shadow-hover",

        !featured &&
          "hover:-translate-y-1 hover:shadow-hover",

        className,
      )}
    >
      {featured && (
        <Badge
          variant="secondary"
          leftIcon={<Star size={12} />}
          className="absolute -top-3 left-1/2 -translate-x-1/2"
        >
          Most Popular
        </Badge>
      )}

      <div className="space-y-5">

        {badge && (
          <Badge variant="outline">
            {badge}
          </Badge>
        )}

        <div>

          <h3 className="text-2xl font-bold">
            {name}
          </h3>

          {description && (
            <p className="mt-2 text-text-muted">
              {description}
            </p>
          )}

        </div>

        <div>

          <div className="flex items-end gap-2">

            <span className="font-heading text-5xl font-bold lg:text-6xl">
              {displayPrice}
            </span>

            <span className="pb-1 text-text-muted">
              {displayPeriod}
            </span>

          </div>

          {(oldPrice || savings) && (

            <div className="mt-3 flex flex-wrap items-center gap-3">

              {oldPrice && (
                <span className="text-sm text-text-muted line-through">
                  {oldPrice}
                </span>
              )}

              {savings && (
                <Badge variant="secondary">
                  {savings}
                </Badge>
              )}

            </div>

          )}

        </div>

      </div>

      <FeatureList
        items={features}
        className="mt-8 flex-1"
      />

      <Button
        fullWidth
        size="lg"
        className="mt-10"
        variant={
          featured
            ? "primary"
            : "outline"
        }
      >
        {buttonText}
      </Button>

    </Card>
  );
}