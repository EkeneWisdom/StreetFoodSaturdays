import { useEffect, useState } from "react";
import { 
  ChevronDown, 
  ArrowRight,
  Flame,
  Utensils,
  MapPin,
  CalendarCheck,
  Sparkles,
  BookOpen,
  Waves,
  Info
} from "lucide-react";

import type { NavigationItem } from "@/config/navigation";
import { cn } from "@/lib/cn";
import { isRouteActive } from "@/components/navigation/helpers";
import getServiceIcon from "./getServiceIcon";

interface MobileNavItemProps {
  item: NavigationItem;
  onNavigate: () => void;
  pathname?: string;
}

// Fallback icon resolver tailored for Street Food Saturdays
function resolveItemIcon(title: string, key?: string) {
  const normalized = (title || key || "").toLowerCase();

  if (normalized.includes("menu") || normalized.includes("food") || normalized.includes("platter")) {
    return Utensils;
  }
  if (normalized.includes("reserve") || normalized.includes("book") || normalized.includes("table")) {
    return CalendarCheck;
  }
  if (normalized.includes("experience") || normalized.includes("river") || normalized.includes("vibe")) {
    return Waves;
  }
  if (normalized.includes("location") || normalized.includes("map") || normalized.includes("directions")) {
    return MapPin;
  }
  if (normalized.includes("blog") || normalized.includes("story") || normalized.includes("journal")) {
    return BookOpen;
  }
  if (normalized.includes("about") || normalized.includes("chef")) {
    return Flame;
  }

  // Fallback to imported service helper or default Sparkles
  const customIcon = getServiceIcon(title || "");
  return customIcon || Sparkles;
}

export default function MobileNavItem({
  item,
  onNavigate,
  pathname = "",
}: MobileNavItemProps) {
  const [currentUrl, setCurrentUrl] = useState(pathname);

  useEffect(() => {
    setCurrentUrl(window.location.pathname + window.location.hash);

    const updateUrl = () => {
      setCurrentUrl(window.location.pathname + window.location.hash);
    };

    window.addEventListener("popstate", updateUrl);
    window.addEventListener("hashchange", updateUrl);

    return () => {
      window.removeEventListener("popstate", updateUrl);
      window.removeEventListener("hashchange", updateUrl);
    };
  }, []);

  const hasChildren = Boolean(item.children?.length);

  // Use exact matching for child links
  const activeChild = item.children?.find((child) =>
    isRouteActive(child.href, currentUrl, true)
  );

  // Use prefix matching for parent category container
  const parentIsActive =
    Boolean(activeChild) || isRouteActive(item.href, currentUrl, false);

  const [open, setOpen] = useState(Boolean(activeChild));

  useEffect(() => {
    if (activeChild) {
      setOpen(true);
    }
  }, [activeChild]);

  const ItemIcon = resolveItemIcon(item.title || "", item.key);

  // Single Navigation Link without Children
  if (!hasChildren) {
    const isActive = isRouteActive(item.href, currentUrl, true);

    return (
      <a
        href={item.href}
        onClick={onNavigate}
        className={cn(
          "group relative flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold transition-all duration-200",
          isActive
            ? "bg-primary/15 text-primary shadow-sm dark:bg-primary/20"
            : "text-text-muted hover:bg-surface-elevated/60 hover:text-text"
        )}
      >
        {/* Flame Ember Active Indicator Pill */}
        {isActive && (
          <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-gradient-to-b from-primary via-orange-500 to-primary shadow-[0_0_8px_rgba(234,88,12,0.6)]" />
        )}

        <div className="flex items-center gap-3">
          <div
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-xl border transition-colors shrink-0",
              isActive
                ? "border-primary/40 bg-primary/20 text-primary"
                : "border-border/60 bg-surface-elevated text-text-muted group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary"
            )}
          >
            <ItemIcon size={18} />
          </div>
          <span className="tracking-tight">{item.title}</span>
        </div>

        <ArrowRight
          size={16}
          className={cn(
            "transition-transform duration-200 opacity-60 group-hover:opacity-100 group-hover:translate-x-1",
            isActive ? "text-primary opacity-100" : "text-text-muted"
          )}
        />
      </a>
    );
  }

  // Accordion Parent Category Container
  return (
    <div className="rounded-xl border border-transparent transition-colors">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className={cn(
          "group relative flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold transition-all duration-200",
          parentIsActive
            ? "bg-primary/15 text-primary dark:bg-primary/20"
            : "text-text-muted hover:bg-surface-elevated/60 hover:text-text"
        )}
      >
        {parentIsActive && (
          <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-gradient-to-b from-primary via-orange-500 to-primary shadow-[0_0_8px_rgba(234,88,12,0.6)]" />
        )}

        <div className="flex items-center gap-3">
          <div
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-xl border transition-colors shrink-0",
              parentIsActive
                ? "border-primary/40 bg-primary/20 text-primary"
                : "border-border/60 bg-surface-elevated text-text-muted group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary"
            )}
          >
            <ItemIcon size={18} />
          </div>
          <span className="tracking-tight">{item.title}</span>
        </div>

        <ChevronDown
          size={18}
          className={cn(
            "text-text-muted transition-transform duration-200 group-hover:text-text",
            open && "rotate-180 text-primary"
          )}
        />
      </button>

      {/* Expandable Sub-items */}
      <div
        className={cn(
          "grid overflow-hidden transition-all duration-300 ease-in-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden pl-7 pr-1 pt-1 pb-2 space-y-1">
          <div className="border-l-2 border-primary/20 pl-3 space-y-1">
            {item.children?.map((child) => {
              const childIsActive = isRouteActive(child.href, currentUrl, true);
              const ChildIcon = resolveItemIcon(child.title || "", child.key);
              const title = child.menuTitle ?? child.title;

              return (
                <a
                  key={child.href}
                  href={child.href}
                  onClick={onNavigate}
                  className={cn(
                    "group flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-bold transition-all duration-150",
                    childIsActive
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "text-text-muted hover:bg-primary/10 hover:text-primary"
                  )}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <ChildIcon
                      size={15}
                      className={cn(
                        "shrink-0 transition-colors",
                        childIsActive
                          ? "text-white"
                          : "text-text-muted group-hover:text-primary"
                      )}
                    />
                    <span className="truncate">{title}</span>
                  </div>

                  <ArrowRight
                    size={14}
                    className={cn(
                      "shrink-0 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5",
                      childIsActive ? "opacity-100 text-white" : "text-primary"
                    )}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}