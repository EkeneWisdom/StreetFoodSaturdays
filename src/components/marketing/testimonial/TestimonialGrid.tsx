import { cn } from "@/lib/cn";

import {
  FadeUp,
  Stagger,
  StaggerItem,
} from "@/components/motion";

import TestimonialCard, {
  type TestimonialCardProps,
} from "./TestimonialCard";

interface TestimonialGridProps {
  items: TestimonialCardProps[];
  columns?: 2 | 3;
  className?: string;
}

const columnClasses = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
} as const;

export default function TestimonialGrid({
  items,
  columns = 3,
  className,
}: TestimonialGridProps) {
  return (
    <Stagger
      viewportAmount={0.15}
      className={cn(
        "grid gap-8",
        columnClasses[columns] ?? columnClasses[3],
        className,
      )}
    >
      {items.map((item) => (
        <StaggerItem key={item.name}>
          <FadeUp>
            <TestimonialCard {...item} />
          </FadeUp>
        </StaggerItem>
      ))}
    </Stagger>
  );
}