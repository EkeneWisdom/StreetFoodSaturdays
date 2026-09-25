import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface GlowProps extends HTMLAttributes<HTMLDivElement> {
  color?: "primary" | "secondary" | "white";
  size?: "sm" | "md" | "lg";
}

const colors = {
  primary: "bg-primary/25",

  secondary: "bg-secondary/25",

  white: "bg-white/20",
};

const sizes = {
  sm: "h-32 w-32",

  md: "h-64 w-64",

  lg: "h-96 w-96",
};

export default function Glow({
  color = "primary",
  size = "md",
  className,
  ...props
}: GlowProps) {
  return (
    <div
      className={cn(
        "absolute rounded-full blur-3xl",
        colors[color],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}