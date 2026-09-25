import React, { useState } from "react";
import {
  Briefcase,
  MapPin,
  Clock,
  CheckCircle2,
  ChevronRight,
  Search,
  HardHat,
  ShieldCheck,
  UserPlus,
  Building2,
  GraduationCap,
} from "lucide-react";
import { CAREERS_PAGE_DATA, type JobOpening } from "./data";

import { nav } from "@/config/navigation";

export default function CareersPage() {
  const { hero, stats, categories, openings, cultureValues } = CAREERS_PAGE_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredJobs = openings.filter((job) => {
    const matchesCat = selectedCategory === "all" || job.department === selectedCategory;
    const matchesQuery =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const contactHref = nav?.contact?.href ?? "#";

  return (
    <article className="min-h-screen w-full bg-background text-text antialiased">
      
      {/* 1. Hero Banner */}
      <section className="relative overflow-hidden border-b border-border py-24 lg:py-32">
        {/* 1. Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/pel-careers1.jpg"
            alt="Engineering Talent and Offshore Construction Team"
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
              <Briefcase size={14} className="text-primary" />
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
                Active Talent Acquisition
              </span>
              <span className="hidden sm:inline text-border">|</span>
              <span className="uppercase tracking-wider">
                Offshore, Onshore & Marine Engineering Roles
              </span>
            </div>

          </header>
        </div>
      </section>

      {/* 2. Key Culture/Stat Bar */}
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

      {/* 3. Job Openings Directory */}
      <section className="border-b border-border/80 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Current Opportunities
              </span>
              <h2 className="mt-2 font-heading text-3xl font-extrabold uppercase text-text sm:text-4xl">
                Open Positions ({openings.length})
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" size={16} />
              <input
                type="text"
                placeholder="Search engineer, dredge, HSE..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-border bg-surface pl-10 pr-4 py-2.5 text-xs text-text placeholder:text-text-muted focus:border-primary focus:outline-none"
              />
            </div>
          </header>

          {/* Department Filter Pills */}
          <nav className="flex flex-wrap gap-2 mb-12" aria-label="Job Departments">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-primary text-background shadow-sm"
                    : "border border-border bg-surface text-text-muted hover:border-primary/50 hover:text-text"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </nav>

          {/* Job Listings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs.map((job: JobOpening) => (
              <article
                key={job.id}
                className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:border-primary/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded border border-primary/20">
                      {job.type}
                    </span>
                    <span className="text-xs text-text-muted font-medium flex items-center gap-1">
                      <Clock size={12} /> {job.experience}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold uppercase text-text mb-2">
                    {job.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
                    <MapPin size={14} className="text-primary shrink-0" />
                    <span>{job.location}</span>
                  </div>

                  <p className="text-xs leading-relaxed text-text-muted mb-5">
                    {job.description}
                  </p>

                  <div className="border-t border-border/60 pt-4 mb-6">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-text-muted mb-2">
                      Key Requirements
                    </span>
                    <ul className="space-y-2">
                      {job.keyRequirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-text">
                          <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Single CTA to Contact Page */}
                <div className="border-t border-border/60 pt-4">
                  <a
                    href={`${contactHref}?type=career&role=${encodeURIComponent(job.title)}`}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-xs font-bold uppercase tracking-wider text-background shadow-sm hover:bg-primary/90 transition-colors"
                  >
                    Apply For Position <ChevronRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="rounded-2xl border border-border bg-surface p-12 text-center text-text-muted">
              <p className="text-sm">No job opportunities matched your current search criteria.</p>
            </div>
          )}

        </div>
      </section>

      {/* 4. Spontaneous / General Application Section */}
      <section className="border-b border-border bg-surface-elevated/20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-surface p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                  <UserPlus size={15} />
                  General Applications
                </span>
                <h2 className="font-heading text-2xl font-extrabold uppercase text-text sm:text-3xl">
                  Don't see a role matching your skill set?
                </h2>
                <p className="text-xs leading-relaxed text-text-muted sm:text-sm">
                  We are constantly expanding our field crews and technical units. Send us your CV and credentials directly, our talent team reviews spontaneous applications for future site deployments.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <a
                  href={`${contactHref}?type=career&role=Spontaneous+Application`}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-background shadow-md hover:bg-primary/90 transition-colors"
                >
                  Submit General Resume <ChevronRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Work With PEL (Culture & Benefits) */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Workplace Culture
            </span>
            <h2 className="mt-2 font-heading text-3xl font-extrabold uppercase text-text">
              Why Engineers & Field Specialists Choose PEL
            </h2>
            <p className="mt-3 text-sm text-text-muted">
              We provide a supportive, safety-first environment that emphasizes professional growth, local content development, and continuous operational learning.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureValues.map((value) => (
              <article
                key={value.id}
                className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:border-primary/50"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                    {value.category}
                  </span>
                  <h3 className="mt-4 font-bold text-text text-base">{value.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-text-muted">
                    {value.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </article>
  );
}