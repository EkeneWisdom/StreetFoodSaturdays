import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export interface FormMessageProps {
  children?: ReactNode;
  variant?: "default" | "success" | "error";
}

const variants = {
  default: "text-text-muted",
  success: "text-green-600 dark:text-green-400",
  error: "text-red-600 dark:text-red-400",
};

export default function FormMessage({
  children,
  variant = "default",
}: FormMessageProps) {
  if (!children) return null;

  return (
    <p
      role="status"
      className={cn(
        "text-sm font-medium",
        variants[variant],
      )}
    >
      {children}
    </p>
  );
}