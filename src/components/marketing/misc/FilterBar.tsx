import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import {
  Search,
  SlidersHorizontal,
} from "lucide-react";

import { cn } from "@/lib/cn";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

import CategoryPills, {
  type CategoryPill,
} from "@/components/marketing/blog/CategoryPills";

import Select from "@/components/ui/Select";

export interface FilterSortOption {
  label: string;
  value: string;
}

export interface FilterBarProps
  extends HTMLAttributes<HTMLDivElement> {

  /* Search */

  search?: string;

  searchPlaceholder?: string;

  onSearchChange?(
    value: string,
  ): void;

  /* Categories */

  categories?: CategoryPill[];

  activeCategory?: string;

  onCategoryChange?(
    id: string,
  ): void;

  /* Sorting */

  sort?: string;

  sortOptions?: FilterSortOption[];

  onSortChange?(
    value: string,
  ): void;

  /* Extra content */

  leftSlot?: ReactNode;

  rightSlot?: ReactNode;

}

export default function FilterBar({

  search,

  searchPlaceholder = "Search...",

  onSearchChange,

  categories,

  activeCategory,

  onCategoryChange,

  sort,

  sortOptions,

  onSortChange,

  leftSlot,

  rightSlot,

  className,

  ...props

}: FilterBarProps) {

  return (

    <div
      className={cn(
        "space-y-6",
        className,
      )}
      {...props}
    >

      <div
        className="
          flex
          flex-col
          gap-4
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >

        <div
          className="
            flex
            flex-1
            flex-wrap
            items-center
            gap-3
          "
        >

          <div
            className="
              relative
              w-full
              max-w-md
            "
          >

            <Search
              size={18}
              className="
                pointer-events-none
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-text-muted
              "
            />

            <Input
              value={search}
              placeholder={
                searchPlaceholder
              }
              className="pl-11"
              onChange={(e) =>
                onSearchChange?.(
                  e.target.value,
                )
              }
            />

          </div>

          {leftSlot}

        </div>

        <div
          className="
            flex
            flex-wrap
            items-center
            gap-3
          "
        >

          {sortOptions && (

            <Select
              value={sort}
              onChange={(e) =>
                onSortChange?.(
                  e.target.value,
                )
              }
              className="min-w-[180px]"
            >

              {sortOptions.map((option) => (

                <option
                  key={option.value}
                  value={option.value}
                >

                  {option.label}

                </option>

              ))}

            </Select>

          )}

          {rightSlot ?? (

            <Button
              variant="outline"
              leftIcon={
                <SlidersHorizontal
                  size={16}
                />
              }
            >

              Filters

            </Button>

          )}

        </div>

      </div>

      {categories && (

        <CategoryPills
          categories={categories}
          active={activeCategory}
          onCategoryChange={
            onCategoryChange
          }
        />

      )}

    </div>

  );

}