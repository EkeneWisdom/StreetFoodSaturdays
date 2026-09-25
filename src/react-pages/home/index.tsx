import React from "react";
import {
  ShieldCheck,
  Wrench,
  ArrowRight,
  Truck,
  CheckCircle2,
  Building,
  MapPin,
  Layers,
  Camera,
  Users,
  ChevronRight,
  PhoneCall,
  HardHat,
  Award,
  Zap,
  Activity,
  Compass,
  Briefcase,
} from "lucide-react";


// 1. Direct Imports from Page Data Modules (Data structures remain 100% identical)
import { HOME_PAGE_DATA } from "./data";
import { SERVICES_PAGE_DATA } from "../services/data";
import { FLEET_PAGE_DATA } from "../fleet/data";
import { PROJECTS_PAGE_DATA } from "../projects/data";
import { GALLERY_PAGE_DATA } from "../gallery/data";
import { COMPLIANCE_PAGE_DATA } from "../compliance/data";
import { CAREERS_PAGE_DATA } from "../careers/data";
import { ABOUT_PAGE_DATA } from "../about/data";

import { nav } from "@/config/navigation";
import { HomeHero } from "./homeHero";

export default function HomePage() {
  const { hero } = HOME_PAGE_DATA;

  // Referenced Live Sub-Page Datasets
  const servicesList = SERVICES_PAGE_DATA?.services || [];
  const fleetsList = FLEET_PAGE_DATA?.fleetItems || [];
  const projectsList = PROJECTS_PAGE_DATA?.projects || [];
  const galleryItems = GALLERY_PAGE_DATA?.items || [];
  const certifications = COMPLIANCE_PAGE_DATA?.hse?.principles || [];
  const openJobs = CAREERS_PAGE_DATA?.openings || [];
  const aboutStats = ABOUT_PAGE_DATA?.stats || [];

  // Active Slice Collections for High-Impact Previews
  const featuredServices = servicesList.slice(0, 4);
  const featuredFleets = fleetsList.slice(0, 3);
  const featuredProjects = projectsList.slice(0, 3);
  const featuredGallery = galleryItems.slice(0, 6);
  const featuredJobs = openJobs.slice(0, 3);

  // Navigation Links
  const servicesHref = nav?.services?.href ?? "#";
  const fleetsHref = nav?.fleet?.href ?? "#";
  const projectsHref = nav?.projects?.href ?? "#";
  const galleryHref = nav?.gallery?.href ?? "#";
  const complianceHref = nav?.compliance?.href ?? "#";
  const careersHref = nav?.careers?.href ?? "#";
  const aboutHref = nav?.about?.href ?? "#";
  const contactHref = nav?.contact?.href ?? "#";

  const heroData = {
    badge: hero.badge || "Tier-1 Marine & Heavy Civil Contractor",
    title: hero.title,
    subtitle: hero.subtitle,
    metrics: hero.metrics,
  };

  return (
    <article className="min-h-screen w-full bg-background text-text antialiased font-sans selection:bg-primary selection:text-background">
      
      {/* ---------------------------------------------------- */}
      {/* 1. HIGH-CONVERTING HERO SECTION                      */}
      {/* ---------------------------------------------------- */}
      <HomeHero
        hero={heroData}
        contactHref={contactHref}
        servicesHref={servicesHref}
        servicesList={servicesList}
      />

      {/* ---------------------------------------------------- */}
      {/* 2. SERVICES CAPABILITIES PREVIEW                    */}
      {/* ---------------------------------------------------- */}
      <section className="border-b border-border py-24 lg:py-32 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                <Wrench size={16} /> Core Engineering Services
              </span>
              <h2 className="font-heading text-3xl font-black uppercase text-text sm:text-5xl">
                Integrated Marine & Civil Solutions
              </h2>
            </div>
            <a
              href={servicesHref}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:underline underline-offset-4 group"
            >
              <span>Explore All {servicesList.length} Services</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <article
                key={service.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-surface p-7 shadow-sm transition-all duration-300 hover:border-primary/60 hover:shadow-xl hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block rounded-md bg-primary/10 px-3 py-1 text-[10px] font-mono font-bold uppercase text-primary border border-primary/20">
                      {service.tag || "Core Unit"}
                    </span>
                    <span className="font-mono text-xs font-bold text-text-muted/50 group-hover:text-primary transition-colors">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold uppercase text-text mb-3 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-text-muted line-clamp-3">
                    {service.shortDesc || ""}
                  </p>
                </div>
                
                <a
                  href={`${servicesHref}#${service.id}`}
                  className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-text transition-colors group-hover:text-primary"
                >
                  <span>Technical Specs</span>
                  <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. HEAVY FLEET & EQUIPMENT AVAILABILITY             */}
      {/* ---------------------------------------------------- */}
      <section className="border-b border-border bg-surface-elevated/30 py-24 lg:py-32 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                <Truck size={16} /> Heavy Equipment Fleet
              </span>
              <h2 className="font-heading text-3xl font-black uppercase text-text sm:text-5xl">
                Mobilization-Ready Heavy Machinery
              </h2>
            </div>
            <a
              href={fleetsHref}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:underline underline-offset-4 group"
            >
              <span>View Full Fleet Inventory</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredFleets.map((fleet) => (
              <div
                key={fleet.id}
                className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-7 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/60">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase text-primary bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20">
                      <Activity size={12} />
                      Qty: {fleet.quantity} Units
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted bg-surface-elevated px-2 py-1 rounded border border-border">
                      {fleet.category}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold uppercase text-text mb-2 group-hover:text-primary transition-colors">
                    {fleet.title}
                  </h3>
                  <p className="text-xs font-mono text-primary/80 mb-4 font-semibold">
                    Model: {fleet.model} | {fleet.manufacturer}
                  </p>
                  <p className="text-xs leading-relaxed text-text-muted line-clamp-3">
                    {fleet.specifications}
                  </p>
                </div>

                <a
                  href={contactHref}
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface-elevated py-3 px-4 text-xs font-bold uppercase tracking-wider text-text transition-all duration-300 hover:border-primary hover:bg-primary hover:text-background"
                >
                  <span>Book Lease Mobilization</span>
                  <Zap size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. TRACK RECORD & FEATURED PROJECTS                  */}
      {/* ---------------------------------------------------- */}
      <section className="border-b border-border py-24 lg:py-32 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                <HardHat size={16} /> Proven Execution Track Record
              </span>
              <h2 className="font-heading text-3xl font-black uppercase text-text sm:text-5xl">
                Featured Engineering Projects
              </h2>
            </div>
            <a
              href={projectsHref}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:underline underline-offset-4 group"
            >
              <span>Browse Case Studies</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-7 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-text-muted mb-4 font-mono pb-3 border-b border-border/60">
                    <span className="flex items-center gap-1.5 text-primary font-bold">
                      <MapPin size={14} /> {project.location}
                    </span>
                    <span className="bg-surface-elevated px-2 py-0.5 rounded border border-border text-[10px]">{project.year}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold uppercase text-text mb-3 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-text-muted line-clamp-3 mb-6">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] uppercase font-mono text-text-muted">Capacity / Scale</span>
                    <span className="text-xs font-mono text-primary font-bold">
                      {project.valueOrScale || "N/A"}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-mono font-bold uppercase text-emerald-500 border border-emerald-500/20">
                    <CheckCircle2 size={12} /> {project.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. LIVE GALLERY / FIELD OPERATIONS SHOWCASE          */}
      {/* ---------------------------------------------------- */}
      <section className="border-b border-border bg-surface-elevated/20 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                <Camera size={16} /> Field Execution
              </span>
              <h2 className="font-heading text-3xl font-black uppercase text-text sm:text-5xl">
                Operations & Equipment in Action
              </h2>
            </div>
            <a
              href={galleryHref}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:underline underline-offset-4 group"
            >
              <span>View Photo Gallery ({galleryItems.length})</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGallery.map((item, index) => (
              <a
                key={item.id || index}
                href={galleryHref}
                className="group relative flex flex-col h-[340px] overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-all duration-300 hover:border-primary hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="relative h-56 w-full overflow-hidden bg-surface-elevated">
                  <img
                    src={item.imageSrc || ""}
                    alt={item.alt || item.title || "Gallery Image"}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-background/90 backdrop-blur-md px-3 py-1 text-[10px] font-mono font-bold uppercase text-primary border border-border shadow-sm">
                      <Layers size={12} /> {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between bg-surface">
                  <h3 className="font-heading text-base font-bold uppercase text-text line-clamp-1 group-hover:text-primary transition-colors">
                    {item.title || `${item.category} Project`}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-text-muted font-mono pt-3 border-t border-border/60">
                    <span className="flex items-center gap-1 text-[11px]"><Compass size={12} /> {item.location || "On-Site Location"}</span>
                    <span className="text-primary font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform text-[11px]">
                      View <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 6. HSE & COMPLIANCE PREVIEW                          */}
      {/* ---------------------------------------------------- */}
      <section className="border-b border-border py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-r from-surface via-surface-elevated to-surface p-8 lg:p-14 shadow-xl">
            <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
              <div className="space-y-6 max-w-3xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                  <Award size={16} /> Quality & Safety First
                </div>
                <h2 className="font-heading text-3xl font-black uppercase text-text sm:text-4xl leading-tight">
                  Certified Compliance & Environmental Standards
                </h2>
                <p className="text-sm leading-relaxed text-text-muted">
                  Operating strictly under international ISO, COREN, and NIMASA safety frameworks to ensure zero lost-time injuries (LTI) across all marine and swamp execution sites.
                </p>
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {certifications.slice(0, 4).map((cert, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 rounded-xl bg-background/80 backdrop-blur-sm px-4 py-2 text-xs font-mono text-text border border-border shadow-sm"
                    >
                      <CheckCircle2 size={14} className="text-primary shrink-0" />
                      <span>{cert.title || cert.description}</span>
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={complianceHref}
                className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface-elevated px-8 py-4 text-xs font-bold uppercase tracking-wider text-text transition-all duration-300 hover:border-primary hover:bg-primary hover:text-background shadow-md"
              >
                <span>Verify Compliance</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 7. CAREERS / TALENT RECRUITMENT                      */}
      {/* ---------------------------------------------------- */}
      {featuredJobs.length > 0 && (
        <section className="border-b border-border bg-surface-elevated/20 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <header className="flex items-center justify-between gap-4 mb-12">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                  <Users size={16} /> Join Our Workforce
                </span>
                <h2 className="font-heading text-2xl font-black uppercase text-text sm:text-4xl">
                  Active On-Site Job Openings
                </h2>
              </div>
              <a
                href={careersHref}
                className="text-xs font-bold uppercase tracking-wider text-primary hover:underline flex items-center gap-1 group"
              >
                <span>All Vacancies</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredJobs.map((job) => (
                <a
                  key={job.id}
                  href={`${careersHref}#${job.id}`}
                  className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono font-bold uppercase text-primary bg-primary/10 px-2.5 py-1 rounded border border-primary/20">
                        {job.type}
                      </span>
                      <Briefcase size={16} className="text-text-muted/40 group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="font-heading text-lg font-bold uppercase text-text mt-3 mb-2 group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-xs text-text-muted font-mono flex items-center gap-1">
                      <MapPin size={12} className="text-primary" /> {job.location}
                    </p>
                  </div>
                  <span className="mt-6 text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5 pt-4 border-t border-border/60">
                    <span>Apply Now</span>
                    <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------------------------------------------------- */}
      {/* 8. HIGH-CONVERTING CLOSING CALL-TO-ACTION            */}
      {/* ---------------------------------------------------- */}
      <section className="py-24 lg:py-36 bg-gradient-to-b from-background via-surface-elevated/40 to-surface-elevated/80 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

        <div className="mx-auto max-w-5xl px-4 text-center space-y-8 relative z-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary border border-primary/30 bg-primary/10 px-4 py-2 rounded-full shadow-sm">
            <Zap size={14} /> Ready to Mobilize?
          </span>
          <h2 className="font-heading text-4xl font-black uppercase tracking-tight text-text sm:text-6xl">
            Partner with Parkers 1st Engineering
          </h2>
          <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            Contact our engineering bid estimators and equipment logistics team to schedule site surveys, request BOQ evaluations, or lease specialized marine equipment.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <a
              href={contactHref}
              className="group inline-flex items-center gap-3 rounded-xl bg-primary px-9 py-4.5 text-xs font-bold uppercase tracking-wider text-background shadow-2xl shadow-primary/20 hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Contact Engineering Team</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={aboutHref}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-9 py-4.5 text-xs font-bold uppercase tracking-wider text-text hover:border-primary/50 hover:bg-surface-elevated transition-all duration-300 shadow-sm"
            >
              Corporate Overview
            </a>
          </div>
        </div>
      </section>

    </article>
  );
}