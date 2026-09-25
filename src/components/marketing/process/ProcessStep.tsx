import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import Card from "@/components/ui/Card";
import { typography, spacing } from "@/config/design";
import { cn } from "@/lib/cn";

interface ProcessStepProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  number: number | string;
  title: ReactNode;
  description: ReactNode;
  icon?: ReactNode;
}

export default function ProcessStep({
  number,
  title,
  description,
  icon,
  className,
  ...props
}: ProcessStepProps) {
  return (
    <Card
      className={cn(
        spacing.stackMd,
        "relative h-full p-8 text-center",
        className,
      )}
      {...props}
    >
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
        {icon ?? number}
      </div>

      <h3 className={typography.h4}>
        {title}
      </h3>

      <p className={typography.muted}>
        {description}
      </p>
    </Card>
  );
}