import {
  forwardRef,
  type HTMLAttributes,
} from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const cardVariants = cva(
  "rounded-2xl border transition-all duration-300",
  {
    variants: {
      variant: {
        default:
          "border-border bg-background shadow-card",

        glass:
          "glass",

        outline:
          "border-border bg-transparent",

        elevated:
          "border-border bg-background shadow-hover",
      },

      padding: {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },

      hover: {
        true:
          "hover:-translate-y-1 hover:shadow-hover",
        false: "",
      },
    },

    defaultVariants: {
      variant: "default",
      padding: "md",
      hover: false,
    },
  },
);

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant,
      padding,
      hover,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={cn(
        cardVariants({
          variant,
          padding,
          hover,
        }),
        className,
      )}
      {...props}
    />
  ),
);

Card.displayName = "Card";

export default Card;