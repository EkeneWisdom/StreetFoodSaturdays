import {
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import {
  cva,
  type VariantProps,
} from "class-variance-authority";

import { cn } from "@/lib/cn";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full font-medium select-none transition-colors",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white",

        secondary:
          "bg-secondary text-white",

        outline:
          "border border-border bg-background text-text",
      },

      size: {
        sm: "px-2.5 py-1 text-xs",

        md: "px-3 py-1.5 text-sm",

        lg: "px-4 py-2 text-base",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}

const Badge = forwardRef<
  HTMLSpanElement,
  BadgeProps
>(
  (
    {
      className,
      variant,
      size,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref,
  ) => (
    <span
      ref={ref}
      className={cn(
        badgeVariants({
          variant,
          size,
        }),
        className,
      )}
      {...props}
    >
      {leftIcon && (
        <span className="mr-1.5 flex items-center">
          {leftIcon}
        </span>
      )}

      {children}

      {rightIcon && (
        <span className="ml-1.5 flex items-center">
          {rightIcon}
        </span>
      )}
    </span>
  ),
);

Badge.displayName = "Badge";

export default Badge;