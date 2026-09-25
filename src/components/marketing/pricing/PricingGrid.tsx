import { cn } from "@/lib/cn";

import {
  Stagger,
  StaggerItem,
} from "@/components/motion";

import PricingCard, {
  type PricingCardProps,
} from "./PricingCard";

interface PricingGridProps {
  plans: PricingCardProps[];
  yearly?: boolean;
  columns?: 2 | 3 | 4;
  className?: string;
}

const gridColumns = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

export default function PricingGrid({
  plans,
  yearly = false,
  columns = 3,
  className,
}: PricingGridProps) {
  return (
    <Stagger
      className={cn(
        "grid gap-8",
        gridColumns[columns],
        className,
      )}
    >
      {plans.map((plan) => (
        <StaggerItem
          key={plan.name}
          className={cn(
            plan.featured &&
              columns === 3 &&
              "lg:-mt-4",
          )}
        >
          <PricingCard
            {...plan}
            yearly={yearly}
          />
        </StaggerItem>
      ))}
    </Stagger>
  );
}