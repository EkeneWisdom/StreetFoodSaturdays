import {
  type HTMLAttributes,
  type ReactNode,
} from "react";

import { cn } from "@/lib/cn";

import Pill from "@/components/ui/Pill";

export interface CategoryPill {

  id: string;

  label: ReactNode;

  count?: number;

  icon?: ReactNode;

}

interface CategoryPillsProps
  extends HTMLAttributes<HTMLDivElement> {

  categories: CategoryPill[];

  active?: string;

  onCategoryChange?: (id: string) => void;

}

export default function CategoryPills({

  categories,

  active,

  onCategoryChange,

  className,

  ...props

}: CategoryPillsProps) {

  return (

    <div
      className={cn(
        "flex gap-3 overflow-x-auto pb-2 scrollbar-none",
        className,
      )}
      {...props}
    >

      {categories.map((category) => (

        <Pill
          key={category.id}
          asButton
          onClick={() => onCategoryChange?.(category.id)}
          className={cn(
            "shrink-0 transition-all",
            active === category.id &&
              "border-primary bg-primary text-primary-foreground",
          )}
        >

          {category.icon}

          {category.icon && (
            <span className="mr-2" />
          )}

          {category.label}

          {category.count !== undefined && (

            <span
              className="
                ml-2
                rounded-full
                bg-black/10
                px-2
                py-0.5
                text-xs
              "
            >

              {category.count}

            </span>

          )}

        </Pill>

      ))}

    </div>

  );

}