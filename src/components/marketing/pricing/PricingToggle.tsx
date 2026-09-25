import { cn } from "@/lib/cn";

interface PricingToggleProps {
  yearly: boolean;
  onChange: (yearly: boolean) => void;
  savingsLabel?: string;
  className?: string;
}

export default function PricingToggle({
  yearly,
  onChange,
  savingsLabel = "Save 20%",
  className,
}: PricingToggleProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-4 rounded-full border border-border bg-surface p-1",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => onChange(false)}
        className={cn(
          "rounded-full px-5 py-2 text-sm font-medium transition-all",
          !yearly
            ? "bg-primary text-white shadow-soft"
            : "text-text-muted hover:text-text",
        )}
      >
        Monthly
      </button>

      <button
        type="button"
        onClick={() => onChange(true)}
        className={cn(
          "flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all",
          yearly
            ? "bg-primary text-white shadow-soft"
            : "text-text-muted hover:text-text",
        )}
      >
        Yearly

        <span
          className={cn(
            "rounded-full px-2 py-0.5 text-xs font-semibold",
            yearly
              ? "bg-white/20 text-white"
              : "bg-secondary text-white",
          )}
        >
          {savingsLabel}
        </span>
      </button>
    </div>
  );
}