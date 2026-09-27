import React, { useState } from "react";
import { 
  Flame, 
  Waves, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft,
  MapPin,
  Heart,
  Utensils,
  Quote
} from "lucide-react";
import { aboutData, type Pillar } from "./data";
import { cn } from "@/lib/cn";

export default function AboutPage() {
  const [activePillar, setActivePillar] = useState<string>(aboutData.pillars[0].id);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % aboutData.gallery.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + aboutData.gallery.length) % aboutData.gallery.length);
  };

  return (
    <div className="relative overflow-hidden bg-background pt-10 pb-24 text-text">
      
      {/* Background Decorative Glows & Water Waves Effect */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[500px] w-full max-w-7xl -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 right-0 -z-10 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. HERO SECTION WITH SPLIT GRAPHIC / PHOTO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
              <Sparkles size={14} />
              <span>{aboutData.hero.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-text">
              {aboutData.hero.title}
            </h1>

            <p className="text-base sm:text-lg text-text-muted leading-relaxed">
              {aboutData.hero.subtitle}
            </p>

            {/* Quick Action Badges */}
            <div className="pt-2 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-surface/80 px-4 py-2.5 text-xs font-bold">
                <Flame size={16} className="text-primary" />
                <span>Pimento Woodfire</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-surface/80 px-4 py-2.5 text-xs font-bold">
                <Waves size={16} className="text-sky-500" />
                <span>Riverfront Dining</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-surface/80 px-4 py-2.5 text-xs font-bold">
                <MapPin size={16} className="text-emerald-500" />
                <span>Golden Spring, Mt. James</span>
              </div>
            </div>
          </div>

          {/* Right Visual Image Box */}
          <div className="lg:col-span-6 relative transform-gpu">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden border border-border/60 bg-surface-elevated shadow-2xl group">
              {/* Image Graphic Component */}
              <div className="aspect-[4/3] w-full bg-surface-elevated/80 relative overflow-hidden">
                <img
                  src={aboutData.hero.foregroundImage}
                  alt="Woodfire Grilling at Street Food Saturdays"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Fallback Graphic Placeholder when image is missing */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-surface-elevated via-surface to-background p-6 text-center -z-10">
                  <Flame size={48} className="text-primary animate-pulse mb-3" />
                  <span className="text-xs font-bold uppercase tracking-wider text-text-muted">
                    Woodfire & Riverfront Ambiance
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                
                {/* Floating Overlay Badge - Switched to solid bg opacity */}
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-background/95 p-4 shadow-lg">
                  <p className="text-xs font-bold flex items-center gap-2">
                    <Flame size={14} className="text-primary shrink-0" />
                    <span>Every Saturday from 12:00 PM till Late</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 2. STATS COUNTER BANNER */}
        <div className="mb-24 rounded-3xl border border-border/60 bg-surface-elevated/90 p-8 shadow-xl transform-gpu">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {aboutData.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-4xl font-black text-primary tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. CORE PILLARS: INTERACTIVE TABBED CARDS */}
        <div className="mb-24 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-text">
              What Makes Saturdays Special
            </h2>
            <p className="text-sm text-text-muted">
              Three essential ingredients that define every gathering at Golden Spring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutData.pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="group relative rounded-3xl border border-border/60 bg-surface/90 p-8 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:bg-surface-elevated hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between overflow-hidden"
                >
                  {/* Background Image Overlay */}
                  <div className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-300 group-hover:opacity-20">
                    <img
                      src={pillar.bgImage}
                      alt={pillar.title}
                      className="h-full w-full object-cover"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                      <Icon size={24} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
                        {pillar.subtitle}
                      </span>
                      <h3 className="text-xl font-black text-text mt-1">{pillar.title}</h3>
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. VISUAL SLIDESHOW / GALLERY */}
        <div className="mb-24 rounded-3xl border border-border/60 bg-surface/90 p-6 sm:p-10 shadow-xl overflow-hidden transform-gpu">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-2">
                <Utensils size={14} />
                <span>Atmosphere & Menu</span>
              </div>
              <h2 className="text-3xl font-black text-text">Saturdays In Snapshots</h2>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-text hover:border-primary hover:text-primary transition-colors"
                aria-label="Previous Slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-text hover:border-primary hover:text-primary transition-colors"
                aria-label="Next Slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Slideshow Display Area */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl overflow-hidden border border-border/60 bg-surface-elevated">
            <img
              src={aboutData.gallery[currentSlide].url}
              alt={aboutData.gallery[currentSlide].alt}
              className="h-full w-full object-cover transition-all duration-500"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />

            {/* Fallback Graphic Display */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-surface-elevated via-surface to-background p-6 text-center -z-10">
              <Sparkles size={40} className="text-primary mb-2" />
              <p className="text-sm font-bold text-text">
                {aboutData.gallery[currentSlide].alt}
              </p>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
              <p className="text-xs sm:text-sm font-medium">
                {aboutData.gallery[currentSlide].caption}
              </p>
              <span className="text-xs font-mono font-bold bg-black/60 px-3 py-1 rounded-full border border-white/10">
                {currentSlide + 1} / {aboutData.gallery.length}
              </span>
            </div>
          </div>
        </div>

        {/* 5. TIMELINE / JOURNEY SECTION */}
        <div className="mb-24 space-y-12 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-text">How It All Began</h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-ml-px before:w-0.5 before:bg-border/60">
            {aboutData.timeline.map((item, index) => (
              <div
                key={item.year}
                className={cn(
                  "relative flex flex-col sm:flex-row items-start gap-6 sm:gap-12 transform-gpu",
                  index % 2 === 0 ? "sm:flex-row-reverse" : ""
                )}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background text-primary font-bold text-xs shadow-md z-10">
                  <Flame size={14} />
                </div>

                {/* Content Box */}
                <div className="ml-12 sm:ml-0 sm:w-1/2 rounded-2xl border border-border/60 bg-surface/90 p-6 shadow-md space-y-3">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-extrabold text-primary">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-text">{item.title}</h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {item.description}
                  </p>

                  {/* Thumbnail Image Placeholder */}
                  <div className="mt-3 aspect-[16/9] w-full rounded-xl overflow-hidden border border-border/40 bg-surface-elevated">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. FOUNDER QUOTE CARD */}
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-surface-elevated to-background p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl transform-gpu">
          <Quote size={80} className="absolute -top-4 -left-4 text-primary/10 -rotate-12" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <p className="text-lg sm:text-xl font-medium italic text-text leading-relaxed">
              "{aboutData.quote.text}"
            </p>
            <div>
              <div className="text-sm font-black text-primary">{aboutData.quote.author}</div>
              <div className="text-xs text-text-muted">{aboutData.quote.location}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}