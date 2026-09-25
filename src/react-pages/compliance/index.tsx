import React from "react";
import {
  ShieldCheck,
  CheckCircle2,
  HardHat,
  Award,
  Users,
  FileCheck,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { COMPLIANCE_PAGE_DATA } from "./data";

import { nav } from "@/config/navigation";

export default function CompliancePage() {
  const { hero, isoQuality, hse, localContent } = COMPLIANCE_PAGE_DATA;

  const contactHref = nav?.contact?.href ?? "#";

  return (
    <article className="min-h-screen w-full bg-background text-text antialiased">
      
      {/* 1. Page Hero */}
      <section className="relative overflow-hidden border-b border-border py-24 lg:py-32">
        {/* 1. Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/pel-compliance1.jpg"
            alt="Health, Safety, Environment and Compliance Operations"
            className="h-full w-full object-cover object-center scale-105 transform transition-transform duration-1000"
          />
          {/* Multi-Layer Dark Gradient Overlay for Sharp Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background" />
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
          <header className="max-w-3xl space-y-6">
            
            {/* Badge with Integrated Pulse Marker */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-md shadow-lg shadow-primary/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <ShieldCheck size={14} className="text-primary" />
              <span>{hero.badge}</span>
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

            {/* Engineering Metadata / Technical Tagline */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs font-mono text-text-muted/80">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                ISO, NIMASA & COREN Compliant Standard
              </span>
              <span className="hidden sm:inline text-border">|</span>
              <span className="uppercase tracking-wider">
                Zero Lost-Time Injury (LTI) Focus
              </span>
            </div>

          </header>
        </div>
      </section>

      {/* 2. ISO Quality Policy */}
      <section className="border-b border-border/80 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-1.5">
                <Award size={14} /> Quality Assurance
              </span>
              <h2 className="mt-2 font-heading text-3xl font-extrabold uppercase text-text sm:text-4xl">
                {isoQuality.title}
              </h2>
              <p className="mt-4 text-xs leading-relaxed text-text-muted sm:text-sm">
                {isoQuality.description}
              </p>

              <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <h4 className="text-xs font-bold uppercase text-primary mb-2 flex items-center gap-1.5">
                  <Sparkles size={14} /> Quality Guarantee
                </h4>
                <p className="text-xs text-text-muted">
                  Every project deliverable undergoes dual internal review by certified quality control officers before final client inspection.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {isoQuality.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <CheckCircle2 size={18} />
                    </div>
                    <h3 className="font-heading text-lg font-bold uppercase text-text">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. HSES Principles */}
      <section className="border-b border-border/80 bg-surface-elevated/40 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-1.5">
              <HardHat size={14} /> Safety First
            </span>
            <h2 className="mt-2 font-heading text-3xl font-extrabold uppercase text-text sm:text-4xl">
              {hse.title}
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-text-muted sm:text-sm">
              {hse.description}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hse.principles.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-sm"
              >
                <div>
                  {item.metric && (
                    <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded border border-primary/20 mb-3">
                      {item.metric}
                    </span>
                  )}
                  <h3 className="font-heading text-lg font-bold uppercase text-text mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Local Content Policy */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-1.5">
                <Users size={14} /> Indigenous Capacity
              </span>
              <h2 className="mt-2 font-heading text-3xl font-extrabold uppercase text-text sm:text-4xl">
                100% Local Content Commitment
              </h2>
              <p className="mt-4 text-xs leading-relaxed text-text-muted sm:text-sm">
                {localContent.description}
              </p>
              <div className="mt-6">
                <a
                  href={`${contactHref}?type=engineering-consultation`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:underline"
                >
                  Request Detailed Compliance Dossier <ChevronRight size={14} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {localContent.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
                >
                  <div className="font-heading text-3xl font-black uppercase text-primary mb-1">
                    {stat.value}
                  </div>
                  <h3 className="font-heading text-sm font-bold uppercase text-text mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Tender / Compliance Request Banner */}
      <section className="py-16 bg-surface-elevated/60 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl font-extrabold uppercase text-text sm:text-3xl">
            Need HSE & Quality Documentation for Tender Submissions?
          </h2>
          <p className="mt-2 max-w-xl mx-auto text-xs text-text-muted">
            Our administrative team provides certified HSE plans, Quality Manuals, and NOGICD compliance metrics upon request for tender evaluations.
          </p>
          <div className="mt-6">
            <a
              href={`${contactHref}?type=tender-compliance`}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3 text-xs font-bold uppercase tracking-wider text-background shadow-md hover:bg-primary/90"
            >
              Contact Compliance Office
            </a>
          </div>
        </div>
      </section>

    </article>
  );
}