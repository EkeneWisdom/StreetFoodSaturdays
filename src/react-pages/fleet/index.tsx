import React, { useState, useEffect, useRef } from "react";
import {
  Wrench,
  Truck,
  CheckCircle2,
  Search,
  ChevronRight,
  FileText,
  ArrowRight,
} from "lucide-react";
import { FLEET_PAGE_DATA, type EquipmentItem } from "./data";

import { nav } from "@/config/navigation";

export default function FleetPage() {
  const { hero, categories, fleetItems } = FLEET_PAGE_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const catalogSectionRef = useRef<HTMLDivElement>(null);

  const contactHref = nav?.contact?.href ?? "#";

  // Helper to normalize strings for flexible category matching
  const normalize = (str: string) => str?.toLowerCase().replace(/[^a-z0-9]/g, "") || "";

  // Hash mapping to handle navigation links like /fleet#marine-dredging or /fleet#swamp-marsh
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (!hash) return;

      // Match against available category IDs or names
      const matchedCat = categories.find(
        (cat) =>
          normalize(cat.id) === normalize(hash) ||
          normalize(cat.name).includes(normalize(hash)) ||
          normalize(hash).includes(normalize(cat.id))
      );

      if (matchedCat) {
        setSelectedCategory(matchedCat.id);
      } else {
        if (hash.includes("dredging") || hash.includes("marine")) {
          setSelectedCategory("marine-dredging");
        } else if (hash.includes("earthmoving") || hash.includes("excavator") || hash.includes("dozer")) {
          setSelectedCategory("heavy-earthmoving");
        } else if (hash.includes("cranes") || hash.includes("lifting")) {
          setSelectedCategory("cranes-lifting");
        } else if (hash.includes("swamp") || hash.includes("marsh") || hash.includes("amphibious")) {
          setSelectedCategory("swamp-marsh");
        } else if (hash.includes("logistics") || hash.includes("haulage") || hash.includes("truck")) {
          setSelectedCategory("logistics-haulage");
        }
      }

      // Scroll smoothly to equipment catalog section
      if (catalogSectionRef.current) {
        catalogSectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [categories]);

  const filteredItems = fleetItems.filter((item) => {
    // Robust category matching handling category IDs or display names
    const matchesCat =
      selectedCategory === "all" ||
      item.category === selectedCategory ||
      normalize(item.category) === normalize(selectedCategory) ||
      normalize(item.category).includes(normalize(selectedCategory)) ||
      normalize(selectedCategory).includes(normalize(item.category));

    const matchesQuery =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.manufacturer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.model.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCat && matchesQuery;
  });

  const totalAssets = fleetItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <article className="min-h-screen w-full bg-background text-text antialiased">
      
      {/* 1. Page Header */}
      <section className="relative overflow-hidden border-b border-border py-24 lg:py-32">
        {/* 1. Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/pel-fleet2.jpg"
            alt="Heavy Marine & Earthmoving Equipment Fleet"
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
              <Truck size={14} className="text-primary" />
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
                Mobilization-Ready Heavy Machinery
              </span>
              <span className="hidden sm:inline text-border">|</span>
              <span className="uppercase tracking-wider">
                Marine Vessels & Earthmoving Plant
              </span>
            </div>

          </header>
        </div>
      </section>

      {/* 2. Interactive Fleet Catalog */}
      <section ref={catalogSectionRef} id="catalog-list" className="border-b border-border/80 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Asset Inventory
              </span>
              <h2 className="mt-2 font-heading text-3xl font-extrabold uppercase text-text sm:text-4xl">
                Equipment Availability ({totalAssets} Units Total)
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" size={16} />
              <input
                type="text"
                placeholder="Search CAT, WILCO, GROVE..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-border bg-surface pl-10 pr-4 py-2.5 text-xs text-text placeholder:text-text-muted focus:border-primary focus:outline-none"
              />
            </div>
          </header>

          {/* Category Navigation Pills */}
          <nav className="flex flex-wrap gap-2 mb-12" aria-label="Equipment Categories">
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

          {/* Equipment Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item: EquipmentItem) => (
              <article
                key={item.id}
                className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all hover:border-primary/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                      {item.manufacturer}
                    </span>
                    <span className="text-xs font-bold text-text bg-surface-elevated px-2.5 py-1 rounded-md border border-border">
                      {item.quantity} {item.quantity > 1 ? "Units" : "Unit"}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold uppercase text-text mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-text-muted mb-4">
                    Model: {item.model}
                  </p>

                  {/* Technical Specifications - Preserved original structure */}
                  <div className="border-t border-border/60 pt-4 mb-4">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-text-muted mb-2">
                      Technical Specifications
                    </span>
                    <ul className="space-y-1.5">
                      {item.specifications.map((spec, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-text">
                          <CheckCircle2 size={13} className="text-primary shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-border/60 pt-4">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-text-muted mb-2">
                    Primary Applications
                  </span>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.recommendedUses.map((use, idx) => (
                      <span
                        key={idx}
                        className="rounded-md bg-surface-elevated px-2 py-1 text-[10px] text-text-muted border border-border/40"
                      >
                        {use}
                      </span>
                    ))}
                  </div>

                  {/* Dual Action Buttons: Specs & RFQ */}
                  <div className="grid grid-cols gap-2 mt-auto">
                    <a
                      href={`${contactHref}?type=equipment-lease&item=${encodeURIComponent(item.title)}#contact-form`}
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-background hover:bg-primary/90 transition-colors shadow-sm"
                    >
                      <span>RFQ</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="rounded-2xl border border-border bg-surface p-12 text-center text-text-muted">
              <p className="text-sm">No equipment assets matched your filter criteria.</p>
            </div>
          )}

        </div>
      </section>

      {/* 3. Mobilization & Maintenance Assurance */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-gradient-to-r from-surface to-surface-elevated p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Site Readiness
                </span>
                <h2 className="mt-2 font-heading text-3xl font-extrabold uppercase text-text">
                  Rapid Field Mobilization across Nigeria
                </h2>
                <p className="mt-3 text-xs leading-relaxed text-text-muted">
                  All equipment units undergo mandatory pre-mobilization mechanical checks and safety certifications prior to deployment. Certified heavy operators and field maintenance support teams are assigned for every lease contract.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <a
                  href={`${contactHref}?type=equipment-lease#contact-form`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-background shadow-md hover:bg-primary/90 transition-opacity"
                >
                  Get Lease Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </article>
  );
}