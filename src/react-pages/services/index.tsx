import React, { useState, useEffect, useRef } from "react";
import {
  Wrench,
  ShieldCheck,
  Truck,
  Anchor,
  Pipette,
  CheckCircle2,
  ListFilter,
  HardHat,
  Search,
  ArrowRight,
} from "lucide-react";
import { SERVICES_PAGE_DATA } from "./data";

import { nav } from "@/config/navigation";

export default function ServicesPage() {
  const { hero, services, equipmentInventory, qhseFramework } = SERVICES_PAGE_DATA;
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const servicesSectionRef = useRef<HTMLDivElement>(null);

  const filterCategories = [
    "All",
    "Marine & Dredging",
    "Civil & Structural",
    "Pipeline & Energy",
    "Equipment & Logistics",
  ];

  // Hash mapping to handle navigation links like /services#dredging-reclamation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (!hash) return;

      let categoryToSelect = "";

      if (hash.includes("dredging") || hash.includes("reclamation")) {
        categoryToSelect = "Marine & Dredging";
      } else if (hash.includes("civil") || hash.includes("construction") || hash.includes("structural")) {
        categoryToSelect = "Civil & Structural";
      } else if (hash.includes("piping") || hash.includes("fire") || hash.includes("energy")) {
        categoryToSelect = "Pipeline & Energy";
      } else if (hash.includes("mechanical") || hash.includes("maintenance") || hash.includes("logistics")) {
        categoryToSelect = "Equipment & Logistics";
      } else if (hash.includes("environmental")) {
        categoryToSelect = "Civil & Structural";
      }

      if (categoryToSelect && filterCategories.includes(categoryToSelect)) {
        setSelectedTag(categoryToSelect);
      }

      // Scroll smoothly to services section
      if (servicesSectionRef.current) {
        servicesSectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const filteredServices = services.filter((service) => {
    const matchesTag = selectedTag === "All" || service.tag === selectedTag;
    const matchesQuery =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesQuery;
  });

  const totalUnits = equipmentInventory.reduce((acc, curr) => acc + curr.quantity, 0);

  const contactHref = nav?.contact?.href ?? "#";

  return (
    <article className="min-h-screen w-full bg-background text-text antialiased">
      
      {/* 1. Page Header */}
      <section className="relative overflow-hidden border-b border-border py-24 lg:py-32">
        {/* 1. Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/pel-services4.jpg"
            alt="Engineering Operations Background"
            className="h-full w-full object-cover object-center scale-105 transform transition-transform duration-1000"
          />
          {/* Multi-Layer Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background" />
        </div>

        {/* 2. Engineering Dot Matrix Overlay (Positioned above background z-0) */}
        <div 
          className="absolute inset-0 z-[1] pointer-events-none opacity-10 dark:opacity-20" 
          style={{ 
            backgroundImage: `radial-gradient(#e11d48 1.5px, transparent 1.5px)`, 
            backgroundSize: '28px 28px' 
          }} 
        />

        {/* 3. Ambient Glow Highlight (Positioned above background z-0) */}
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
              <Wrench size={14} className="text-primary" />
              <span>{hero.badge}</span>
            </div>
            
            {/* Title with Left Accent Bar & Gradient Text Highlight */}
            <div className="relative pl-5 border-l-4 border-primary">
              <h1 className="font-heading text-4xl font-black uppercase tracking-tight text-text sm:text-6xl lg:text-7xl leading-[1.02]">
                {/* Example of dynamic or inline key term accenting */}
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
                ISO & NIMASA Certified Operations
              </span>
              <span className="hidden sm:inline text-border">|</span>
              <span className="uppercase tracking-wider">
                Marine & Heavy Civil Contracting
              </span>
            </div>

          </header>
        </div>
      </section>

      {/* 2. Specialized Services Portfolio */}
      <section ref={servicesSectionRef} id="services-list" className="border-b border-border/80 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Technical Capabilities
              </span>
              <h2 className="mt-2 font-heading text-3xl font-extrabold uppercase text-text sm:text-4xl">
                12 Specialized Engineering Domains
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={16} />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-border bg-surface pl-9 pr-4 py-2.5 text-xs text-text placeholder:text-text-muted focus:border-primary focus:outline-none"
              />
            </div>
          </header>

          {/* Filter Pills */}
          <nav className="flex flex-wrap gap-2 mb-10" aria-label="Service Categories">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedTag(cat)}
                className={`rounded-lg px-4 py-2 text-xs font-bold transition-all ${
                  selectedTag === cat
                    ? "bg-primary text-background shadow-sm"
                    : "border border-border bg-surface text-text-muted hover:border-primary/50 hover:text-text"
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>

          {/* Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <article
                key={service.id}
                className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block rounded-md bg-surface-elevated px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-primary border border-border/60">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold uppercase text-text mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                <div>
                  <div className="border-t border-border/60 pt-4 mb-6">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-text-muted mb-2">
                      Scope Highlights
                    </span>
                    <ul className="space-y-2">
                      {service.scopePoints.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-text">
                          <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Get Estimate or RFQ CTA Link */}
                  <a
                    href={`${contactHref}?type=engineering-consultation&service=${encodeURIComponent(service.title)}#contact-form`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-background transition-opacity hover:opacity-90"
                  > 
                    <span>Get Estimate or RFQ</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="rounded-2xl border border-border bg-surface p-12 text-center text-text-muted">
              <p className="text-sm">No specialized services matched your search filter.</p>
            </div>
          )}

        </div>
      </section>

      {/* 3. Owned Heavy Equipment Fleet Inventory */}
      <section className="border-b border-border bg-surface-elevated/20 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Mobilization Capacity
              </span>
              <h2 className="mt-2 font-heading text-3xl font-extrabold uppercase text-text sm:text-4xl">
                Equipment Fleet Inventory
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-xs font-mono font-bold text-text">
                <Truck size={16} className="text-primary" />
                Total Fleet Units: {totalUnits}
              </span>
            </div>
          </header>

          {/* Equipment Table */}
          <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-border bg-surface-elevated/60 text-xs uppercase text-text-muted font-bold">
                  <th className="py-4 px-6 w-16">S/N</th>
                  <th className="py-4 px-6">Asset Description</th>
                  <th className="py-4 px-6">Model / Specification</th>
                  <th className="py-4 px-6">Asset Category</th>
                  <th className="py-4 px-6 text-right w-32">Quantity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {equipmentInventory.map((item) => (
                  <tr key={item.sno} className="hover:bg-surface-elevated/40 transition-colors">
                    <td className="py-4 px-6 text-xs text-text-muted font-mono">{item.sno}</td>
                    <td className="py-4 px-6 font-bold text-text">{item.description}</td>
                    <td className="py-4 px-6 text-xs font-mono text-primary">{item.type}</td>
                    <td className="py-4 px-6">
                      <span className="inline-block rounded-md bg-surface-elevated px-2 py-0.5 text-[10px] font-mono text-text-muted border border-border/40">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-bold text-text text-right font-mono">{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 4. Quality & HSES Framework */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <header className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Operational Standards
            </span>
            <h2 className="mt-2 font-heading text-3xl font-extrabold uppercase text-text">
              Quality Assurance & Safety Policy
            </h2>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {qhseFramework.map((framework) => (
              <article
                key={framework.id}
                className="rounded-2xl border border-border bg-surface p-8 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 text-primary mb-4">
                    <ShieldCheck size={24} />
                    <h3 className="font-heading text-xl font-bold uppercase text-text">
                      {framework.title}
                    </h3>
                  </div>
                  <p className="text-xs leading-relaxed text-text-muted mb-6">
                    {framework.description}
                  </p>
                  
                  <div className="border-t border-border/60 pt-4">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-text-muted mb-3">
                      Implementation Mandates
                    </span>
                    <ul className="space-y-2.5">
                      {framework.bullets.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-text">
                          <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                          <span className="leading-snug">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

    </article>
  );
}