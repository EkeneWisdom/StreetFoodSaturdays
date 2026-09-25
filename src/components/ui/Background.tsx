import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type BackgroundVariant =
  | "none"
  | "surface"
  | "muted"
  | "primary"
  | "grid"
  | "gradient"
  | "mesh"
  | "glass";

interface BackgroundProps
  extends HTMLAttributes<HTMLDivElement> {

  variant?: BackgroundVariant;

}

const variants: Record<
  BackgroundVariant,
  string
> = {

  none: "",

  surface: "bg-surface",

  muted: "bg-surface/50",

  primary: "bg-primary text-white",

  grid: `
    bg-[linear-gradient(rgb(100_116_139_/_0.10)_1px,transparent_1px),
    linear-gradient(90deg,rgb(100_116_139_/_0.10)_1px,transparent_1px)]
    bg-[length:40px_40px]
    dark:bg-[linear-gradient(rgb(255_255_255_/_0.06)_1px,transparent_1px),
    linear-gradient(90deg,rgb(255_255_255_/_0.06)_1px,transparent_1px)]
  `,

  gradient:
    "bg-[linear-gradient(135deg,#0D1D4D,#17347F,#FF6A00)] text-white",

  mesh:
    "bg-[radial-gradient(circle_at_top_left,#17347F_0%,transparent_40%),radial-gradient(circle_at_bottom_right,#FF6A00_0%,transparent_35%)]",

  glass: "glass",

};

export default function Background({

  variant = "none",

  className,

  children,

  ...props

}: BackgroundProps) {

  return (

    <div

      className={cn(

        "relative overflow-hidden",

        variants[variant],

        className,

      )}

      {...props}

    >

      {children}

    </div>

  );

}