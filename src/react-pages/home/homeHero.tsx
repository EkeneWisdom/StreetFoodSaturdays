"use client";

import { useState, useEffect } from "react";
import { ShieldCheck, PhoneCall, ArrowRight, Building } from "lucide-react"; // Preserving original imports

export function HomeHero({ hero, contactHref, servicesHref, servicesList }: any) {
  // Carousel background images following convention pel-home-1, pel-home-2, etc.
  const heroImages = [
    "/images/hero/pel-home1.jpg",
    "/images/hero/pel-home2.jpg",
    "/images/hero/pel-home3.jpg",
    "/images/hero/pel-home4.jpg",
  ];

  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000); // Cross-fade transition every 6 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative overflow-hidden border-b border-border py-24 lg:py-32">
      {/* 1. Automated Smooth Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Engineering & Marine Operations ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-cover object-center scale-105 transform transition-opacity duration-1000 ease-in-out ${
              index === currentBgIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
        {/* Multi-Layer Dark Gradient Overlay for Sharp Contrast */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-background via-background/95 to-background/60" />
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-background/70 via-transparent to-background" />
      </div>

      {/* 2. Engineering Dot Matrix Overlay (Opacity set to 10 light mode / 20 dark mode) */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none opacity-10 dark:opacity-20" 
        style={{ 
          backgroundImage: `radial-gradient(#e11d48 1.5px, transparent 1.5px)`, 
          backgroundSize: '28px 28px' 
        }} 
      />

      {/* 3. Ambient Glow Highlight */}
      <div className="absolute -top-24 -left-24 z-[1] h-96 w-96 rounded-full bg-primary/25 blur-[120px] pointer-events-none" />

      {/* 4. Main Foreground Content Layer */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <header className="lg:col-span-8 space-y-8 text-left">
            {/* Badge with Integrated Pulse Marker */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-md shadow-lg shadow-primary/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <ShieldCheck size={14} className="text-primary" />
              <span>{hero.badge || "Tier-1 Marine & Heavy Civil Contractor"}</span>
            </div>

            {/* Title with Left Accent Bar & Gradient Text Highlight on Final Word */}
            <div className="relative pl-5 border-l-4 border-primary">
              <h1 className="font-heading text-4xl font-black uppercase tracking-tight text-text sm:text-6xl lg:text-7xl leading-[1.02]">
                {hero.title.includes(" ") ? (
                  <>
                    {hero.title.substring(0, hero.title.lastIndexOf(" "))}{" "}
                    <span className="bg-gradient-to-r from-primary via-red-400 to-amber-500 bg-clip-text text-transparent">
                      {hero.title.split(" ").pop()}
                    </span>
                  </>
                ) : (
                  <span className="bg-gradient-to-r from-primary via-red-400 to-amber-500 bg-clip-text text-transparent">
                    {hero.title}
                  </span>
                )}
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base leading-relaxed text-text-muted sm:text-xl font-normal max-w-2xl pl-1">
              {hero.subtitle}
            </p>

            {/* Conversion Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={contactHref}
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-primary px-8 py-4 text-xs font-bold uppercase tracking-wider text-background shadow-xl shadow-primary/20 transition-all duration-300 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]"
              >
                <PhoneCall size={16} className="transition-transform group-hover:-rotate-12" />
                <span>Request Tender / Lease Quote</span>
              </a>
              <a
                href={servicesHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface/80 backdrop-blur-sm px-8 py-4 text-xs font-bold uppercase tracking-wider text-text shadow-sm transition-all duration-300 hover:border-primary/50 hover:bg-surface-elevated hover:text-primary"
              >
                <span>View Capabilities ({servicesList?.length || 0})</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Engineering Metadata / Technical Tagline */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-text-muted/80">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Integrated Marine & Heavy Engineering
              </span>
              <span className="hidden sm:inline text-border">|</span>
              <span className="uppercase tracking-wider">
                Full EPC & Fleet Lease Services
              </span>
            </div>
          </header>

          {/* Right Column: Key Industrial Metrics Grid */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {hero.metrics?.map((metric: any, idx: number) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-border/80 bg-surface/60 backdrop-blur-md p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block font-heading text-4xl font-black tracking-tight text-primary transition-transform duration-300 group-hover:scale-105 origin-left">
                      {metric.value}
                    </span>
                    <span className="block text-xs font-bold uppercase tracking-wider text-text mt-1.5">
                      {metric.label}
                    </span>
                    <span className="block text-[11px] text-text-muted mt-1 font-mono">
                      {metric.subtext}
                    </span>
                  </div>
                  <div className="rounded-xl border border-border bg-surface-elevated p-3 text-primary/40 transition-colors group-hover:text-primary group-hover:border-primary/30">
                    <Building size={28} />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}