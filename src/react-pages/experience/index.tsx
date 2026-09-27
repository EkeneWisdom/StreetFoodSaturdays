import React, { useState } from "react";
import { 
  Sparkles, 
  Flame, 
  Waves, 
  Music, 
  Sun, 
  Moon, 
  Clock, 
  CheckCircle2, 
  Quote, 
  Volume2,
  ArrowRight
} from "lucide-react";
import { experienceData } from "./data";
import { cn } from "@/lib/cn";
import { nav } from "@/config/navigation";

export default function ExperiencePage() {
  const [activePhase, setActivePhase] = useState<number>(0);

  return (
    <div className="relative overflow-hidden bg-background pt-10 pb-24 text-text">
      
      {/* Background Decorative Glows */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[500px] w-full max-w-7xl -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-0 -z-10 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/3 right-0 -z-10 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. HERO TITLE SECTION */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
            <Sparkles size={14} />
            <span>{experienceData.hero.badge}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-text leading-tight">
            {experienceData.hero.title}
          </h1>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            {experienceData.hero.subtitle}
          </p>
        </div>

        {/* 2. ATMOSPHERE PILLARS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {experienceData.pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl border border-border/60 bg-surface/50 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:bg-surface-elevated hover:shadow-2xl hover:shadow-primary/10 overflow-hidden flex flex-col justify-between"
              >
                {/* Background Image Effect */}
                <div className="absolute inset-0 -z-10 opacity-15 transition-opacity duration-300 group-hover:opacity-25">
                  <img
                    src={pillar.bgImage}
                    alt={pillar.title}
                    className="h-full w-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                      <Icon size={24} />
                    </div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-extrabold uppercase text-primary border border-primary/20">
                      {pillar.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-text">{pillar.title}</h3>
                    <p className="text-xs font-bold text-primary mt-0.5">{pillar.subtitle}</p>
                  </div>

                  <p className="text-xs text-text-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3. DAY-TO-NIGHT JOURNEY PHASES (INTERACTIVE TIMELINE) */}
        <div className="mb-24 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary">
              The Rhythm Of The Day
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-text">How Your Saturday Unfolds</h2>
            <p className="text-xs text-text-muted">
              Select a phase below to preview the evolving energy from noon until night.
            </p>
          </div>

          {/* Phase Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {experienceData.timeline.map((phase, idx) => {
              const PhaseIcon = phase.icon;
              const isActive = activePhase === idx;
              return (
                <button
                  key={phase.id}
                  type="button"
                  onClick={() => setActivePhase(idx)}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl border px-6 py-3.5 text-xs font-bold transition-all duration-200 cursor-pointer select-none",
                    isActive
                      ? "border-primary bg-primary text-white shadow-lg shadow-primary/25 scale-105"
                      : "border-border/60 bg-surface/60 text-text-muted hover:border-primary/40 hover:text-text hover:bg-surface-elevated"
                  )}
                >
                  <PhaseIcon size={16} />
                  <div className="text-left">
                    <div className="leading-none">{phase.badge}</div>
                    <div className={cn("text-[10px] mt-1 opacity-80 font-normal", isActive ? "text-white" : "text-text-muted")}>
                      {phase.timeframe}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Phase Display Card */}
          {(() => {
            const current = experienceData.timeline[activePhase];
            const CurrentIcon = current.icon;
            return (
              <div className="rounded-3xl border border-border/60 bg-surface/60 p-6 sm:p-10 backdrop-blur-xl shadow-2xl transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Phase Details */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
                      <Clock size={14} />
                      <span>{current.timeframe}</span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-text mb-1">
                        {current.title}
                      </h3>
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">
                        {current.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-text-muted leading-relaxed">
                      {current.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-border/40">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                        Phase Highlights
                      </span>
                      <div className="space-y-2">
                        {current.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-xs font-medium text-text">
                            <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Phase Photo Container */}
                  <div className="lg:col-span-6">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/60 bg-surface-elevated shadow-xl group">
                      <img
                        src={current.image}
                        alt={current.imageAlt}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />

                      {/* Graphic Fallback when Image is missing */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-surface-elevated via-surface to-background p-6 text-center -z-10">
                        <CurrentIcon size={48} className="text-primary mb-3 animate-pulse" />
                        <span className="text-xs font-bold uppercase text-text-muted">
                          {current.title}
                        </span>
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

                      <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-background/80 p-3 backdrop-blur-md">
                        <p className="text-xs font-bold flex items-center gap-2">
                          <Sparkles size={14} className="text-primary shrink-0" />
                          <span>{current.badge} Experience</span>
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })()}
        </div>

        {/* 4. SENSORY QUOTE BANNER */}
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-surface-elevated to-background p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl mb-20">
          <Quote size={80} className="absolute -top-4 -left-4 text-primary/10 -rotate-12" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <p className="text-base sm:text-xl font-medium italic text-text leading-relaxed">
              "{experienceData.quote.text}"
            </p>
            <div className="text-xs font-black text-primary uppercase tracking-widest">
              — {experienceData.quote.speaker}
            </div>
          </div>
        </div>

        {/* 5. CALL TO ACTION BOX */}
        <div className="rounded-3xl border border-border/60 bg-surface/80 p-8 sm:p-12 text-center backdrop-blur-md space-y-6">
          <div className="max-w-xl mx-auto space-y-3">
            <h2 className="text-3xl font-black text-text">Experience It Yourself This Saturday</h2>
            <p className="text-xs sm:text-sm text-text-muted">
              Tables by the river fill up fast. Reserve your spot in advance or check our guide for arrival tips.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={nav?.reservation?.href}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-xs font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all"
            >
              <span>Book Your River Table</span>
              <ArrowRight size={14} />
            </a>
            <a
              href="/guide"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-8 py-3.5 text-xs font-bold text-text hover:border-primary/40 transition-all"
            >
              <span>Read Visitor Guide</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}