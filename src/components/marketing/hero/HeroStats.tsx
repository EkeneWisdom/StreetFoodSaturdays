import { cn } from "@/lib/cn";

export interface HeroStat {
  value: string;
  label: string;
}

interface HeroStatsProps {
  items: HeroStat[];
  className?: string;
}

export default function HeroStats({
  items,
  className,
}: HeroStatsProps) {
  return (
    <div
      className={cn(
        "grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {items.map((item) => (
        <div key={item.label}>
          <div className="text-3xl font-extrabold text-primary dark:text-secondary">
            {item.value}
          </div>

          <div className="mt-2 text-sm text-text-muted">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}