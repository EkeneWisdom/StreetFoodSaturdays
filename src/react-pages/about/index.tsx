import React from "react";
import {
  ShieldCheck,
  Building2,
  Users,
  Award,
  ChevronRight,
  HardHat,
  Quote,
  CheckCircle2,
} from "lucide-react";
import { ABOUT_PAGE_DATA } from "./data";

export default function AboutPage() {
  const { hero, stats, executiveStatement, localContentCommitments, welfareBenefits } =
    ABOUT_PAGE_DATA;

  return (
    <article className="min-h-screen w-full bg-background text-text antialiased">
      
      {/* 1. Hero Banner */}
      <section className="relative overflow-hidden border-b border-border py-24 lg:py-32">
        {/* 1. Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/pel-about1.jpg"
            alt="Corporate Engineering & Marine Infrastructure Leadership"
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
              <Building2 size={14} className="text-primary" />
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
                Indigenous EPC Leadership & Excellence
              </span>
              <span className="hidden sm:inline text-border">|</span>
              <span className="uppercase tracking-wider">
                Marine & Civil Engineering Heritage
              </span>
            </div>

          </header>
        </div>
      </section>      

      {/* 2. Key Metrics Bar */}
      <section className="border-b border-border bg-surface-elevated/40 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col border-l-2 border-primary/80 pl-4 sm:pl-6">
                <dt className="order-2 text-xs font-medium uppercase tracking-wider text-text-muted">
                  {stat.label}
                </dt>
                <dd className="order-1 font-heading text-3xl font-extrabold text-text sm:text-4xl">
                  {stat.value}
                </dd>
                <p className="order-3 mt-1 text-[11px] text-text-muted">{stat.detail}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 3. Managing Director Statement */}
      <section className="border-b border-border/80 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            
            <aside className="relative rounded-3xl border border-border bg-surface p-8 shadow-lg lg:col-span-5 sm:p-10">
              <Quote size={40} className="mb-4 text-primary/30" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                {executiveStatement.role}
              </span>
              <h2 className="mt-1 font-heading text-2xl font-bold uppercase text-text">
                {executiveStatement.title}
              </h2>
              <blockquote className="mt-6 text-sm italic leading-relaxed text-text-muted">
                "{executiveStatement.quote}"
              </blockquote>
              <footer className="mt-8 border-t border-border/60 pt-4">
                <cite className="not-italic">
                  <span className="block font-bold text-text text-sm">Managing Director</span>
                  <span className="block text-xs text-text-muted">Parkers 1st Engineering Limited</span>
                </cite>
              </footer>
            </aside>

            <header className="space-y-6 lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Corporate Capabilities
              </span>
              <h2 className="font-heading text-3xl font-extrabold uppercase text-text sm:text-4xl">
                Integrated Technical Expertise Across Terrains
              </h2>
              <p className="text-base leading-relaxed text-text-muted">
                Parkers 1st Engineering Limited combines engineering ingenuity and specialized equipment to execute complex infrastructure projects. Our scope extends from deep dredging and shoreline stabilization to civil road construction, soil improvement, and high-spec offshore logistics support.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-4">
                <article className="rounded-xl border border-border/80 bg-surface/50 p-5">
                  <div className="flex items-center gap-3 text-primary mb-2">
                    <Users size={20} />
                    <h3 className="font-bold text-text text-sm">Workforce Model</h3>
                  </div>
                  <p className="text-xs leading-normal text-text-muted">
                    Structured balance of 18 executive administrative personnel and a scalable technical field staff.
                  </p>
                </article>

                <article className="rounded-xl border border-border/80 bg-surface/50 p-5">
                  <div className="flex items-center gap-3 text-primary mb-2">
                    <Award size={20} />
                    <h3 className="font-bold text-text text-sm">Quality Operations</h3>
                  </div>
                  <p className="text-xs leading-normal text-text-muted">
                    Services benchmarked against ISO 9001:2008 standards to enforce rigid quality and safety standards.
                  </p>
                </article>
              </div>
            </header>

          </div>
        </div>
      </section>

      {/* 4. Nigerian Local Content Section */}
      <section className="border-b border-border bg-surface-elevated/20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Regulatory Alignment
            </span>
            <h2 className="mt-2 font-heading text-3xl font-extrabold uppercase text-text">
              Nigerian Oil & Gas Content Compliance
            </h2>
            <p className="mt-3 text-sm text-text-muted">
              PEL operates in strict accordance with the Nigerian Oil & Gas Industry Content Development Act 2010, driving high-tier local participation across all engineering domains.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {localContentCommitments.map((item) => (
              <article
                key={item.id}
                className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-6 shadow-sm"
              >
                <ShieldCheck size={24} className="mt-1 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold text-text text-base">{item.pillar}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-text-muted">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Human Capital & Staff Welfare */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="flex flex-col justify-between gap-4 md:flex-row md:items-end mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Human Capital
              </span>
              <h2 className="mt-2 font-heading text-3xl font-extrabold uppercase text-text">
                Staff Welfare & Compensation Standard
              </h2>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-text-muted">
              <HardHat size={16} className="text-primary" />
              Ensuring site safety, operational focus, and fair compensation
            </span>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {welfareBenefits.map((benefit) => (
              <article
                key={benefit.id}
                className="flex flex-col justify-between rounded-xl border border-border/80 bg-surface/60 p-5 transition-all hover:border-primary/50"
              >
                <div className="flex items-center justify-between mb-3">
                  <CheckCircle2 size={18} className="text-primary" />
                  <span className="text-[10px] font-mono uppercase text-text-muted bg-surface-elevated px-2 py-0.5 rounded">
                    {benefit.category}
                  </span>
                </div>
                <h3 className="font-bold text-sm text-text">{benefit.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

    </article>
  );
}