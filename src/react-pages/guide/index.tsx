import React, { useState } from "react";
import { 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  Flame, 
  Waves, 
  Info, 
  ArrowRight,
  ShieldCheck,
  Check
} from "lucide-react";
import { guideData } from "./data";
import { cn } from "@/lib/cn"; 
import { nav } from "@/config/navigation";

export default function GuestGuidePage() {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const toggleCheck = (index: number) => {
    setCheckedItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="relative overflow-hidden bg-background pt-10 pb-24 text-text">
      
      {/* Background Decorative Glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-full max-w-7xl -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/3 left-0 -z-10 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. HERO HEADER */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
            <Sparkles size={14} />
            <span>{guideData.hero.badge}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-text">
            {guideData.hero.title}
          </h1>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            {guideData.hero.subtitle}
          </p>
        </div>

        {/* 2. QUICK SURVIVAL RULES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {guideData.quickRules.map((rule, idx) => {
            const Icon = rule.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-border/60 bg-surface/90 p-6 transform-gpu transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface-elevated hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-bold text-text mb-1">{rule.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{rule.detail}</p>
              </div>
            );
          })}
        </div>

        {/* 3. GUIDE SECTIONS WITH VISUAL CARDS */}
        <div className="space-y-20 mb-24">
          {guideData.sections.map((section, idx) => {
            const SectionIcon = section.icon;
            const isReversed = idx % 2 !== 0;

            return (
              <div
                key={section.id}
                className={cn(
                  "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",
                  isReversed ? "lg:flex-row-reverse" : ""
                )}
              >
                {/* Left/Right Text Content */}
                <div className={cn("lg:col-span-7 space-y-6", isReversed ? "lg:order-2" : "lg:order-1")}>
                  <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface-elevated px-3 py-1 text-xs font-bold text-primary">
                    <SectionIcon size={14} />
                    <span>{section.badge}</span>
                  </div>

                  <div>
                    <h2 className="text-3xl font-black text-text mb-2">{section.title}</h2>
                    <p className="text-xs font-bold uppercase tracking-widest text-text-muted">
                      {section.subtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {section.tips.map((tip, tipIdx) => {
                      const TipIcon = tip.icon;
                      return (
                        <div
                          key={tipIdx}
                          className="rounded-2xl border border-border/60 bg-surface/90 p-5 space-y-3 transform-gpu transition-colors duration-200 hover:border-primary/40"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                              <TipIcon size={18} />
                            </div>
                            {tip.tag && (
                              <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-bold text-primary uppercase">
                                {tip.tag}
                              </span>
                            )}
                          </div>
                          <h4 className="text-sm font-bold text-text">{tip.title}</h4>
                          <p className="text-xs text-text-muted leading-relaxed">
                            {tip.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right/Left Visual Image Card */}
                <div className={cn("lg:col-span-5", isReversed ? "lg:order-1" : "lg:order-2")}>
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border/60 bg-surface-elevated shadow-xl group transform-gpu">
                    {/* RECOMMENDED IMAGE: section.bgImage */}
                    <img
                      src={section.bgImage}
                      alt={section.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />

                    {/* Graphic Fallback when Image is missing */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-surface-elevated via-surface to-background p-6 text-center -z-10">
                      <SectionIcon size={48} className="text-primary mb-3 animate-pulse" />
                      <span className="text-xs font-bold uppercase tracking-wider text-text-muted">
                        {section.title} Guide
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-background/90 p-3">
                      <p className="text-xs font-bold flex items-center gap-2">
                        <ShieldCheck size={14} className="text-emerald-400 shrink-0" />
                        <span>Golden Spring Verified Tip</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. INTERACTIVE WHAT TO BRING CHECKLIST */}
        <div className="max-w-3xl mx-auto rounded-3xl border border-primary/30 bg-surface-elevated/90 p-8 sm:p-10 shadow-2xl transform-gpu">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary">
              Packing Prep
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-text">What To Bring Checklist</h2>
            <p className="text-xs text-text-muted">
              Tap the items below to check off what you've packed for your Saturday trip.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {guideData.checklist.map((item, idx) => {
              const isChecked = checkedItems[idx];
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => toggleCheck(idx)}
                  className={cn(
                    "flex items-center gap-3 rounded-xl border p-4 text-xs font-bold text-left transition-all duration-200 cursor-pointer select-none transform-gpu",
                    isChecked
                      ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-500 line-through"
                      : "border-border/60 bg-surface/90 text-text hover:border-primary/40 hover:bg-surface-elevated"
                  )}
                >
                  <div
                    className={cn(
                      "flex h-5 w-5 items-center justify-center rounded-md border shrink-0 transition-colors duration-200",
                      isChecked
                        ? "border-emerald-500 bg-emerald-500 text-white"
                        : "border-border bg-surface"
                    )}
                  >
                    {isChecked && <Check size={12} />}
                  </div>
                  <span>{item.item}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 text-center pt-4 border-t border-border/40">
            <a
              href={nav?.reservation?.href || "#"}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-xs font-bold text-white shadow-lg shadow-primary/20 transition-all duration-200 hover:bg-primary-hover transform-gpu active:scale-95"
            >
              <span>Ready? Reserve Your Table Now</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}