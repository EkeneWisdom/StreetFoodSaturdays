import { cn } from "@/lib/cn";

type LoadingSpinnerProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: "primary" | "secondary" | "white" | "current";
  fullscreen?: boolean;
  label?: string;
  className?: string;
};

const sizes = {
  xs: "h-3 w-3",
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
  xl: "h-12 w-12",
};

const colors = {
  primary: "text-primary",
  secondary: "text-secondary",
  white: "text-white",
  current: "text-current",
};

function Spinner({
  size,
  color,
  label,
  className,
}: Required<
  Pick<LoadingSpinnerProps, "size" | "color" | "label">
> & {
  className?: string;
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={label}
      className={cn("inline-flex items-center justify-center", className)}
    >
      <svg
        className={cn(
          "animate-spin",
          sizes[size],
          colors[color]
        )}
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeOpacity=".2"
          strokeWidth="4"
        />

        <path
          d="M22 12a10 10 0 0 0-10-10"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      <span className="sr-only">{label}</span>
    </div>
  );
}

export default function LoadingSpinner({
  size = "md",
  color = "primary",
  fullscreen = false,
  label = "Loading...",
  className,
}: LoadingSpinnerProps) {
  if (fullscreen) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/80 backdrop-blur-sm">
        <Spinner
          size={size}
          color={color}
          label={label}
          className={className}
        />
      </div>
    );
  }

  return (
    <Spinner
      size={size}
      color={color}
      label={label}
      className={className}
    />
  );
}