import React, { useState } from "react";
import {
  Briefcase,
  MapPin,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Filter,
  Layers,
  Wrench,
  Building2,
  X,
  ExternalLink,
} from "lucide-react";
import { PROJECTS_PAGE_DATA, type ProjectCaseStudy } from "./data";

import { nav } from "@/config/navigation";

export default function ProjectsPage() {
  const { hero, categories, stats, projects } = PROJECTS_PAGE_DATA;
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  const filteredProjects = projects.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  const contactHref = nav?.contact?.href ?? "#";

  return (
    <article className="min-h-screen w-full bg-background text-text antialiased">
      
      {/* 1. Page Hero */}
      <section className="relative overflow-hidden border-b border-border py-24 lg:py-32">
        {/* 1. Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/pel-projects4.jpg"
            alt="Marine Infrastructure & Civil Engineering Projects"
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
                Turnkey EPC & EPCI Track Record
              </span>
              <span className="hidden sm:inline text-border">|</span>
              <span className="uppercase tracking-wider">
                Onshore, Offshore & Swamp Execution
              </span>
            </div>

          </header>

          {/* Key Metrics Grid (Preserved) */}
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface/80 backdrop-blur-md p-5 text-center shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="font-heading text-3xl font-black uppercase text-primary sm:text-4xl transition-transform duration-300 group-hover:scale-105">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wider text-text-muted">
                  {stat.label}
                </div>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Interactive Case Studies Showcase */}
      <section className="border-b border-border/80 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-1.5">
                <Filter size={14} /> Filter Portfolio
              </span>
              <h2 className="mt-2 font-heading text-3xl font-extrabold uppercase text-text sm:text-4xl">
                Executed & Active Contracts
              </h2>
            </div>

            {/* Category Filter Pills */}
            <nav className="flex flex-wrap gap-2" aria-label="Project Categories">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                    activeCategory === cat.id
                      ? "bg-primary text-background shadow-sm"
                      : "border border-border bg-surface text-text-muted hover:border-primary/50 hover:text-text"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </nav>
          </header>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project: ProjectCaseStudy) => (
              <article
                key={project.id}
                className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border ${
                        project.status === "Completed"
                          ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                          : "bg-amber-500/10 text-amber-600 border-amber-500/20"
                      }`}
                    >
                      {project.status}
                    </span>
                    <span className="text-xs font-mono text-text-muted flex items-center gap-1">
                      <Calendar size={12} /> {project.year}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold uppercase text-text leading-snug mb-3">
                    {project.title}
                  </h3>

                  <div className="space-y-2 mb-4 text-xs text-text-muted">
                    <div className="flex items-center gap-2">
                      <Building2 size={14} className="text-primary shrink-0" />
                      <span className="truncate">{project.client}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-primary shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>
                    {project.valueOrScale && (
                      <div className="flex items-center gap-2">
                        <Layers size={14} className="text-primary shrink-0" />
                        <span className="font-semibold text-text">{project.valueOrScale}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-text-muted leading-relaxed line-clamp-3 mb-6 border-t border-border/60 pt-4">
                    {project.summary}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface-elevated py-2.5 text-xs font-bold uppercase tracking-wider text-text transition-colors hover:border-primary/50 hover:text-primary"
                >
                  View Case Study Details <ChevronRight size={14} />
                </button>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="rounded-2xl border border-border bg-surface p-12 text-center text-text-muted">
              <p className="text-sm">No project case studies found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* 3. Detailed Project Modal / Drawer */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-2xl">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-5 top-5 rounded-full p-2 text-text-muted hover:bg-surface-elevated hover:text-text"
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-bold uppercase text-primary bg-primary/10 px-2.5 py-0.5 rounded border border-primary/20">
                {selectedProject.scope}
              </span>
              <span className="text-xs font-mono text-text-muted">
                {selectedProject.year}
              </span>
            </div>

            <h3 className="font-heading text-2xl font-black uppercase text-text mb-4">
              {selectedProject.title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-surface-elevated p-4 rounded-xl border border-border/60 mb-6">
              <div>
                <span className="text-text-muted block font-bold uppercase text-[10px]">Client</span>
                <span className="font-medium text-text">{selectedProject.client}</span>
              </div>
              <div>
                <span className="text-text-muted block font-bold uppercase text-[10px]">Location</span>
                <span className="font-medium text-text">{selectedProject.location}</span>
              </div>
              {selectedProject.valueOrScale && (
                <div className="sm:col-span-2">
                  <span className="text-text-muted block font-bold uppercase text-[10px]">Scale / Quantity</span>
                  <span className="font-medium text-primary">{selectedProject.valueOrScale}</span>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                  Project Overview
                </h4>
                <p className="text-xs text-text leading-relaxed">
                  {selectedProject.summary}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                  Key Accomplishments
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-text">
                      <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-2 flex items-center gap-1.5">
                  <Wrench size={14} className="text-primary" /> Deployed Fleet & Machinery
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.equipmentUsed.map((eq, i) => (
                    <span
                      key={i}
                      className="rounded-lg border border-border bg-surface-elevated px-2.5 py-1 text-[11px] font-mono text-text"
                    >
                      {eq}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 border-t border-border/60 pt-6">
              <a
                href={`${contactHref}?type=engineering-consultation&ref=${encodeURIComponent(selectedProject.title)}`}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wider text-background shadow-md hover:bg-primary/90"
              >
                Inquire Similar Project <ExternalLink size={14} />
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="rounded-xl border border-border bg-surface-elevated px-6 py-3 text-xs font-bold uppercase tracking-wider text-text hover:bg-surface"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 4. Consultation Banner */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-gradient-to-r from-surface to-surface-elevated p-8 sm:p-12 text-center">
            <h2 className="font-heading text-3xl font-extrabold uppercase text-text sm:text-4xl">
              Planning a Major Civil or Marine Project?
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xs leading-relaxed text-text-muted sm:text-sm">
              Our engineering leadership and heavy equipment fleet are fully equipped to handle complex riverine dredging, highway earthworks, and industrial piping contracts throughout Nigeria.
            </p>
            <div className="mt-8">
              <a
                href={`${contactHref}?type=engineering-consultation`}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-background shadow-md hover:bg-primary/90"
              >
                Speak with Our Senior Engineers <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

    </article>
  );
}