import {
  forwardRef,
  type TextareaHTMLAttributes,
} from "react";

import {
  cva,
  type VariantProps,
} from "class-variance-authority";

import { cn } from "@/lib/cn";

const textareaVariants = cva(
  [
    "flex min-h-32 w-full rounded-xl border bg-background px-4 py-3",
    "transition-all duration-200",
    "placeholder:text-text-muted",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-primary",
    "focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
    "resize-y",
  ],
  {
    variants: {
      state: {
        default: "border-border",
        error: "border-red-500 focus-visible:ring-red-500",
        success: "border-green-500 focus-visible:ring-green-500",
      },
    },

    defaultVariants: {
      state: "default",
    },
  },
);

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(({ className, state, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      textareaVariants({
        state,
      }),
      className,
    )}
    {...props}
  />
));

Textarea.displayName = "Textarea";

export default Textarea;