import {
  forwardRef,
  type SelectHTMLAttributes,
} from "react";

import {
  cva,
  type VariantProps,
} from "class-variance-authority";

import { cn } from "@/lib/cn";

const selectVariants = cva(
  [
    "flex w-full rounded-xl border bg-background px-4",
    "transition-all duration-200",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-primary",
    "focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
  ],
  {
    variants: {
      size: {
        sm: "h-10 text-sm",
        md: "h-11 text-base",
        lg: "h-12 text-lg",
      },

      state: {
        default: "border-border",
        error: "border-red-500 focus-visible:ring-red-500",
        success: "border-green-500 focus-visible:ring-green-500",
      },
    },

    defaultVariants: {
      size: "md",
      state: "default",
    },
  },
);

export interface SelectProps
  extends Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    "size"
  >,
    VariantProps<typeof selectVariants> {}

const Select = forwardRef<
  HTMLSelectElement,
  SelectProps
>(({ className, size, state, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(
      selectVariants({
        size,
        state,
      }),
      className,
    )}
    {...props}
  />
));

Select.displayName = "Select";

export default Select;