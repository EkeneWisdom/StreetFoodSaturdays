import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type SkeletonVariant =
  | "text"
  | "avatar"
  | "image"
  | "card";

export interface SkeletonProps
  extends HTMLAttributes<HTMLDivElement> {
  variant?: SkeletonVariant;
}

const variants: Record<SkeletonVariant, string> = {
  text: "h-4 w-full rounded-md",
  avatar: "h-12 w-12 rounded-full",
  image: "aspect-video w-full rounded-xl",
  card: "h-56 w-full rounded-2xl",
};

export default function Skeleton({
  variant = "text",
  className,
  ...props
}: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "skeleton-shimmer",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}