import { useEffect, useState } from "react";
import { 
  ChevronDown, 
  ArrowRight 
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

  // Use exact matching (exact = true) for sub-items/children to prevent multi-highlighting
  const activeChild = item.children?.find((child) =>
    isRouteActive(child.href, currentUrl, true)
  );

  // Use prefix matching (exact = false) for the parent category container
  const parentIsActive =
    Boolean(activeChild) || isRouteActive(item.href, currentUrl, false);

  const [open, setOpen] = useState(Boolean(activeChild));

  useEffect(() => {
    if (activeChild) {
      setOpen(true);
    }
  }, [activeChild]);

  const ItemIcon = getServiceIcon(item.title || "");

  // Single Item without accordion children
  if (!hasChildren) {
    const isActive = isRouteActive(item.href, currentUrl, true);

    return (
      <a
        href={item.href}
        onClick={onNavigate}
        className={cn(
          "group relative flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition-all duration-200",
          isActive
            ? "bg-primary/10 text-primary shadow-sm"
            : "text-text-muted hover:bg-surface-elevated/60 hover:text-text"
        )}
      >
        {/* Active Pill Indicator */}
        {isActive && (
          <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-primary" />
        )}

        <div className="flex items-center gap-3">
          <div
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-lg border transition-colors",
              isActive
                ? "border-primary/30 bg-primary/15 text-primary"
                : "border-border/50 bg-surface-elevated text-text-muted group-hover:border-primary/30 group-hover:text-primary"
            )}
          >
            <ItemIcon size={16} />
          </div>
          <span>{item.title}</span>
        </div>

        <ArrowRight
          size={15}
          className={cn(
            "transition-transform duration-200 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5",
            isActive ? "text-primary opacity-100" : "text-text-muted"
          )}
        />
      </a>
    );
  }

  // Accordion Parent Container
  return (
    <div className="rounded-xl border border-transparent transition-colors">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className={cn(
          "group relative flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition-all duration-200",
          parentIsActive
            ? "bg-primary/10 text-primary"
            : "text-text-muted hover:bg-surface-elevated/60 hover:text-text"
        )}
      >
        {parentIsActive && (
          <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-primary" />
        )}

        <div className="flex items-center gap-3">
          <div
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-lg border transition-colors",
              parentIsActive
                ? "border-primary/30 bg-primary/15 text-primary"
                : "border-border/50 bg-surface-elevated text-text-muted group-hover:border-primary/30 group-hover:text-primary"
            )}
          >
            <ItemIcon size={16} />
          </div>
          <span>{item.title}</span>
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
          <div className="border-l-2 border-border/50 pl-3 space-y-1">
            {item.children?.map((child) => {
              // Pass exact = true for child items
              const childIsActive = isRouteActive(child.href, currentUrl, true);
              const ChildIcon = getServiceIcon(child.title || "");
              const title = child.menuTitle ?? child.title;

              return (
                <a
                  key={child.href}
                  href={child.href}
                  onClick={onNavigate}
                  className={cn(
                    "group flex items-center justify-between rounded-lg px-3 py-2.5 text-xs font-semibold transition-all duration-150",
                    childIsActive
                      ? "bg-primary text-white shadow-sm"
                      : "text-text-muted hover:bg-primary/10 hover:text-primary"
                  )}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <ChildIcon
                      size={14}
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
                    size={12}
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