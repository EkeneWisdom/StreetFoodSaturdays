import React, { useState, useMemo } from "react";
import { 
  Sparkles, 
  Flame, 
  Utensils, 
  Crown,
  Filter
} from "lucide-react";
import { menuData } from "./data";
import { cn } from "@/lib/cn";

export default function MenuPage() {
  // Active Filter Category State
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Filtered Items Logic
  const filteredItems = useMemo(() => {
    if (activeCategory === "all") {
      return menuData.items;
    }
    return menuData.items.filter(
      (item) => item.category?.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [activeCategory]);

  return (
    <div className="relative overflow-hidden bg-background pt-10 pb-24 text-text">
      
      {/* Background Decorative Glows */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[500px] w-full max-w-7xl -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 right-0 -z-10 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. HERO TITLE SECTION */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
            <Sparkles size={14} />
            <span>{menuData.hero.badge}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-text">
            {menuData.hero.title}
          </h1>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            {menuData.hero.subtitle}
          </p>
        </div>

        {/* 2. CATEGORY TABS SELECTOR (FILTER BUTTONS) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12 relative z-20 transform-gpu">
          {menuData.categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "relative flex items-center gap-2 rounded-2xl border px-5 py-3 text-xs font-bold transition-all duration-200 cursor-pointer select-none transform-gpu",
                  isActive
                    ? "border-primary bg-primary text-white shadow-lg shadow-primary/30 ring-2 ring-primary/50 scale-105 z-10"
                    : "border-border/60 bg-surface/90 text-text-muted hover:border-primary/50 hover:text-text hover:bg-surface-elevated"
                )}
              >
                <Icon size={16} className={isActive ? "text-white" : "text-primary"} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Counter Bar */}
        <div className="flex items-center justify-between border-b border-border/40 pb-4 mb-8">
          <div className="flex items-center gap-2 text-xs font-bold text-text-muted uppercase tracking-wider">
            <Filter size={14} className="text-primary" />
            <span>
              Showing: <strong className="text-primary">{activeCategory.toUpperCase()}</strong>
            </span>
          </div>
          <div className="text-xs font-bold text-text-muted">
            {filteredItems.length} {filteredItems.length === 1 ? "Item" : "Items"} Available
          </div>
        </div>

        {/* 3. MENU ITEMS GRID */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 rounded-3xl border border-dashed border-border/60 bg-surface/30">
            <Utensils size={40} className="mx-auto text-text-muted mb-3 animate-bounce" />
            <p className="text-sm font-bold text-text">No items found in this category.</p>
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className="mt-4 text-xs font-bold text-primary underline cursor-pointer"
            >
              Reset filter to see all items
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-border/60 bg-surface/90 overflow-hidden transform-gpu transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:bg-surface-elevated hover:shadow-2xl hover:shadow-primary/10"
              >
                {/* Image Box */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-elevated">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />

                  {/* Graphic Fallback when Image is missing */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-surface-elevated via-surface to-background p-6 text-center -z-10">
                    <Utensils size={36} className="text-primary mb-2 opacity-60" />
                    <span className="text-xs font-bold text-text-muted">{item.name}</span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

                  {/* Signature Badge - Cleaned solid opacity background to stop GPU glitch */}
                  {item.isSignature && (
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-full border border-amber-500/40 bg-surface/90 px-3 py-1 text-[10px] font-extrabold uppercase text-amber-400 shadow-md">
                      <Crown size={12} />
                      <span>Signature</span>
                    </div>
                  )}

                  {/* Price Tag - Cleaned solid opacity background */}
                  <div className="absolute bottom-4 right-4 rounded-xl border border-white/20 bg-background/95 px-3 py-1.5 text-xs font-black text-primary shadow-md">
                    {item.price}
                  </div>
                </div>

                {/* Item Info Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-lg font-black text-text group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>

                      {/* Spice Heat Indicator */}
                      {item.spiceLevel && (
                        <div className="flex items-center gap-0.5 text-primary" title={`Spice Level: ${item.spiceLevel}/3`}>
                          {Array.from({ length: item.spiceLevel }).map((_, i) => (
                            <Flame key={i} size={14} className="fill-primary" />
                          ))}
                        </div>
                      )}
                    </div>

                    <p className="text-xs text-text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Dietary Tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="rounded-md border border-border/60 bg-surface px-2 py-0.5 text-[10px] font-bold text-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 4. MEGA PLATTER FEATURE */}
        <div className="rounded-3xl border border-primary/40 bg-surface/90 p-8 sm:p-12 shadow-2xl relative overflow-hidden transform-gpu">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-4 py-1 text-xs font-extrabold text-primary">
                <Crown size={14} />
                <span>Group Feast Highlight</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-text">
                {menuData.megaPlatter.title}
              </h2>

              <p className="text-xs font-bold uppercase tracking-widest text-primary">
                {menuData.megaPlatter.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                {menuData.megaPlatter.description}
              </p>

              <div className="pt-2 flex items-center gap-4">
                <span className="text-2xl font-black text-primary">
                  {menuData.megaPlatter.price}
                </span>
                <a
                  href="/reservation"
                  className="rounded-xl bg-primary px-6 py-3 text-xs font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all"
                >
                  Pre-Order On Reservation
                </a>
              </div>
            </div>

            {/* Right Platter Image */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border/60 bg-surface shadow-xl">
                <img
                  src={menuData.megaPlatter.image}
                  alt={menuData.megaPlatter.title}
                  className="h-full w-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}