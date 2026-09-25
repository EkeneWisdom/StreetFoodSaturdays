import {
  forwardRef,
  type InputHTMLAttributes,
} from "react";

import {
  cva,
  type VariantProps,
} from "class-variance-authority";

import { cn } from "@/lib/cn";

const inputVariants = cva(
  [
    "flex w-full rounded-xl border bg-background px-4",
    "transition-all duration-200",
    "placeholder:text-text-muted",
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

export interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size"
  >,
    VariantProps<typeof inputVariants> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, state, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        inputVariants({
          size,
          state,
        }),
        className,
      )}
      {...props}
    />
  ),
);

Input.displayName = "Input";

export default Input;