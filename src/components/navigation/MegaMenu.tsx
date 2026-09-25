import { motion } from "framer-motion";
import type { NavigationItem } from "@/config/navigation";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/cn";

import { 
  ArrowRight, 
  Sparkles, 
  ChevronRight, 
  Anchor,
} from "lucide-react";

import getServiceIcon from "./getServiceIcon";

interface MegaMenuProps {
  item: NavigationItem;
}

export default function MegaMenu({ item }: MegaMenuProps) {
  if (!item.children?.length) return null;

  const hasFeatured = Boolean(item.featured);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className="absolute left-1/2 top-full z-50 mt-4 -translate-x-1/2"
    >
      {/* Visual Indicator Arrow with Match-Glow Border */}
      <div className="absolute left-1/2 top-0 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border-l border-t border-border/80 bg-surface/95 backdrop-blur-md" />

      {/* Main Container Card */}
      <Card
        className={cn(
          "relative overflow-hidden border border-border/80 bg-surface/95 p-6 shadow-2xl backdrop-blur-2xl transition-all dark:bg-surface-elevated/95",
          hasFeatured ? "w-[840px] grid grid-cols-[1.8fr_1fr] gap-6" : "w-[680px] grid grid-cols-2 gap-4"
        )}
      >
        {/* Subtle Background Accent Gradient */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-primary/5 blur-3xl" />

        {/* Navigation Grid Section */}
        <div className="relative z-10 flex flex-col justify-between">
          <div>
            <div className="mb-3 flex items-center justify-between border-b border-border/40 pb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-text-muted">
                {item.title}
              </span>
              <span className="flex items-center gap-1 text-[11px] font-semibold text-primary">
                <Sparkles size={12} /> 
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {item.children.map((child) => {
                const Icon = getServiceIcon(child.title || "");
                const title = child.menuTitle ?? child.title;
                const description = child.menuDescription ?? child.description;

                return (
                  <a
                    key={child.key || child.href}
                    href={child.href}
                    className="group relative flex items-start gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-primary/10 hover:shadow-sm dark:hover:bg-primary/15"
                  >
                    {/* Icon Badge */}
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface-elevated text-primary border border-border/60 transition-transform duration-200 group-hover:scale-110 group-hover:bg-primary group-hover:text-white dark:bg-background">
                      <Icon size={18} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="truncate text-sm font-bold text-text group-hover:text-primary transition-colors">
                          {title}
                        </span>
                        <ChevronRight
                          size={14}
                          className="text-text-muted opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100 group-hover:text-primary"
                        />
                      </div>

                      {description && (
                        <p className="mt-1 line-clamp-2 text-xs text-text-muted group-hover:text-text/80 transition-colors">
                          {description}
                        </p>
                      )}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Featured Showcase Card */}
        {item.featured && (
          <div className="relative z-10 flex flex-col justify-between overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary via-primary-hover to-surface-elevated p-6 text-white shadow-xl">
            {/* Background Texture Detail */}
            <div className="pointer-events-none absolute right-0 top-0 opacity-10">
              <Anchor size={160} className="-mr-10 -mt-10" />
            </div>

            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white backdrop-blur-md">
                Attention
              </span>

              <h3 className="mt-4 text-lg font-bold leading-tight text-white">
                {item.featured.title}
              </h3>

              {item.featured.description && (
                <p className="mt-2.5 text-xs text-white/85 leading-relaxed">
                  {item.featured.description}
                </p>
              )}
            </div>

            <div className="relative z-10 mt-6 pt-4 border-t border-white/15">
              <Button
                variant="secondary"
                fullWidth
                href={item.featured.href}
                className="group flex items-center justify-center gap-2 bg-white text-primary font-bold shadow-lg transition-all hover:bg-surface hover:text-primary-hover"
              >
                <span>{item.featured.label ?? "Learn More"}</span>
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        )}
      </Card>
    </motion.div>
  );
}