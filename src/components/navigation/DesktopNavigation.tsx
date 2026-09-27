import { useState } from "react";
import { LayoutGroup, motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Flame } from "lucide-react";

import { navigation } from "@/config/navigation";
import { cn } from "@/lib/cn";
import { isRouteActive } from "@/components/navigation/helpers";
import MegaMenu from "./MegaMenu";

interface DesktopNavigationProps {
  pathname?: string;
}

export default function DesktopNavigation({ pathname = "" }: DesktopNavigationProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <LayoutGroup>
      <nav 
        className="hidden items-center gap-1.5 lg:flex" 
        onMouseLeave={() => setActiveMenu(null)}
      >
        {navigation
          .filter((item) => item.navbar)
          .map((item) => {
            const hasChildren = Boolean(item.children?.length);
            const isActive = isRouteActive(item.href, pathname);
            const isOpen = activeMenu === item.title;

            return (
              <div
                key={item.href || item.title}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.title)}
              >
                <a
                  href={item.href}
                  className={cn(
                    "relative flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-bold tracking-tight transition-all duration-200",
                    isActive
                      ? "text-primary dark:text-primary-light"
                      : "text-text-muted hover:text-text hover:bg-surface-elevated/60"
                  )}
                >
                  {/* Subtle active flame icon indicator when on current route */}
                  {isActive && (
                    <Flame size={13} className="text-primary animate-pulse shrink-0" />
                  )}

                  <span>{item.title}</span>

                  {hasChildren && (
                    <ChevronDown
                      size={14}
                      className={cn(
                        "transition-transform duration-200 text-text-muted shrink-0",
                        isOpen && "rotate-180 text-primary"
                      )}
                    />
                  )}

                  {/* Gourmet Active Indicator Bar (Warm Flame Ember Accent) */}
                  {isActive && (
                    <motion.div
                      layoutId="desktop-active-indicator"
                      className="absolute inset-x-3 -bottom-1 h-[3px] rounded-full bg-gradient-to-r from-primary via-orange-500 to-primary shadow-[0_0_10px_rgba(234,88,12,0.5)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Warm Culinary Ambient Hover Background */}
                  {isOpen && !isActive && (
                    <motion.div
                      layoutId="desktop-hover-bg"
                      className="absolute inset-0 -z-10 rounded-xl bg-primary/10 dark:bg-primary/20"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </a>

                {/* Invisible hover bridge overlay to prevent pointer dropouts */}
                {hasChildren && isOpen && (
                  <div className="absolute left-0 right-0 top-full h-3 bg-transparent" />
                )}

                {/* Optional Mega Menu Dropdown */}
                <AnimatePresence>
                  {hasChildren && isOpen && <MegaMenu item={item} />}
                </AnimatePresence>
              </div>
            );
          })}
      </nav>
    </LayoutGroup>
  );
}