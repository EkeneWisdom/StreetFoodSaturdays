import React, { useState, useEffect } from "react";
import {
  Camera,
  Search,
  X,
  MapPin,
  Truck,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Layers,
  ArrowRight, 
  ShieldCheck,
  Compass,
} from "lucide-react";
import { GALLERY_PAGE_DATA, type GalleryItem } from "./data";

import { nav } from "@/config/navigation";

export default function GalleryPage() {
  const { hero, items } = GALLERY_PAGE_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const categories = [
    "All",
    "Marine & Dredging",
    "Civil & Structural",
    "Pipeline & Energy",
    "Fleet & Equipment",
  ];

  const filteredItems = items.filter((item) => {
    const matchesCat =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesQuery =
      (item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
      (item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
      (item.location?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCat && matchesQuery;
  });

  const contactHref = nav?.contact?.href ?? "#";

  // Modal Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeModalIndex === null) return;
      if (e.key === "Escape") {
        setActiveModalIndex(null);
        setIsZoomed(false);
      }
      if (e.key === "ArrowRight") {
        setActiveModalIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : 0
        );
      }
      if (e.key === "ArrowLeft") {
        setActiveModalIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalIndex, filteredItems.length]);

  const activeModalItem =
    activeModalIndex !== null ? filteredItems[activeModalIndex] : null;

  return (
    <article className="min-h-screen w-full bg-background text-text antialiased font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden border-b border-border py-24 lg:py-32">
        {/* 1. Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/pel-gallery1.jpg"
            alt="Engineering Operations & Asset Gallery"
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
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            
            <header className="max-w-3xl space-y-6">
              {/* Badge with Integrated Pulse Marker */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-md shadow-lg shadow-primary/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <Camera size={14} className="text-primary" />
                <span>{hero.badge || "Engineering Showcase"}</span>
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
                  High-Resolution Operational Documentation
                </span>
                <span className="hidden sm:inline text-border">|</span>
                <span className="uppercase tracking-wider">
                  Field Footage & Site Archives
                </span>
              </div>
            </header>

            {/* Metrics Counter (Preserved & Enhanced with Backdrop Glassmorphism) */}
            <div className="flex items-center gap-6 rounded-2xl border border-border bg-surface/80 backdrop-blur-md p-6 shadow-sm lg:border-l lg:p-6">
              <div>
                <div className="text-2xl font-mono font-bold text-text flex items-center gap-1.5">
                  <ShieldCheck className="text-primary" size={20} />
                  <span>100%</span>
                </div>
                <div className="text-[11px] font-mono uppercase text-text-muted tracking-wider">
                  Verified Operations
                </div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <div className="text-2xl font-mono font-bold text-text flex items-center gap-1.5">
                  <Compass className="text-primary" size={20} />
                  <span>{items.length}+</span>
                </div>
                <div className="text-[11px] font-mono uppercase text-text-muted tracking-wider">
                  Archived Assets
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 2. Controls & Gallery Showcase */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Controls Bar */}
          <div className="mb-10 rounded-2xl border border-border bg-surface/90 p-4 sm:p-5 backdrop-blur-md shadow-lg">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              
              {/* Filter Pills */}
              <nav className="flex flex-wrap gap-2">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                        isActive
                          ? "bg-primary text-background shadow-sm"
                          : "border border-border bg-background text-text-muted hover:border-primary/50 hover:text-text"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </nav>

              {/* Search Bar */}
              <div className="relative w-full lg:w-72">
                <Search
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Search gallery..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background pl-10 pr-9 py-2 text-xs text-text placeholder:text-text-muted focus:border-primary focus:outline-none transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* Filter Counter */}
            <div className="mt-3 flex items-center justify-between border-t border-border/60 pt-3 text-[11px] text-text-muted font-mono">
              <span>
                Showing <strong className="text-primary">{filteredItems.length}</strong> of {items.length} Assets
              </span>
              {(selectedCategory !== "All" || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="text-primary hover:underline"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>

          {/* Uniform Cards Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id || index}
                onClick={() => {
                  setActiveModalIndex(index);
                  setIsZoomed(false);
                }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface cursor-pointer shadow-sm transition-all duration-300 hover:border-primary/60 hover:shadow-xl flex flex-col h-[380px]"
              >
                {/* Image Frame */}
                <div className="relative h-56 w-full overflow-hidden bg-surface-elevated">
                  <img
                    src={item.imageSrc}
                    alt={item.alt || item.title || "Gallery Item"}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Category Pill Top-Left */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1 rounded-md bg-surface/90 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-primary border border-border">
                      <Layers size={10} />
                      {item.category}
                    </span>
                  </div>

                  {/* Expand Icon Top-Right */}
                  <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-background shadow-md">
                      <Maximize2 size={14} />
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-base font-bold uppercase text-text mb-1 group-hover:text-primary transition-colors line-clamp-1">
                      {item.title || `${item.category} Asset`}
                    </h3>

                    {item.description && (
                      <p className="text-xs text-text-muted line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Metadata Chips */}
                  <div className="flex flex-wrap items-center gap-3 text-[11px] text-text-muted font-mono pt-3 border-t border-border/60">
                    {item.location && (
                      <span className="flex items-center gap-1 text-text">
                        <MapPin size={12} className="text-primary" />
                        {item.location}
                      </span>
                    )}
                    {item.equipmentUsed && item.equipmentUsed.length > 0 && (
                      <span className="flex items-center gap-1 text-text">
                        <Truck size={12} className="text-primary" />
                        {item.equipmentUsed.length} Equipment Units
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty Search State */}
          {filteredItems.length === 0 && (
            <div className="rounded-2xl border border-dashed border-border bg-surface p-12 text-center text-text-muted max-w-md mx-auto my-12">
              <Search size={28} className="mx-auto mb-3 text-text-muted" />
              <h3 className="text-sm font-bold text-text mb-1">No Assets Match Your Criteria</h3>
              <p className="text-xs text-text-muted mb-4">
                Try adjusting your search terms or filter selection.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-background uppercase tracking-wider"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. Lightbox Modal */}
      {activeModalItem && activeModalIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md p-4 sm:p-6 lg:p-10">
          
          {/* Top Bar Actions */}
          <div className="absolute top-6 left-6 right-6 z-50 flex items-center justify-between">
            <div className="rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-mono text-text shadow-md">
              <span className="text-primary font-bold">{activeModalIndex + 1}</span> / {filteredItems.length}
            </div>

            <div className="flex items-center gap-2">
              {/* Restored Modal Expand / Frame Toggle */}
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="rounded-full border border-border bg-surface p-2 text-text-muted hover:text-text hover:border-primary transition-colors shadow-md"
                title="Toggle Aspect Fill / Contain"
              >
                <Maximize2 size={18} />
              </button>

              <button
                onClick={() => {
                  setActiveModalIndex(null);
                  setIsZoomed(false);
                }}
                className="rounded-full border border-border bg-surface p-2 text-text-muted hover:text-text hover:border-primary transition-colors shadow-md"
                title="Close (Esc)"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Steppers */}
          <button
            onClick={() =>
              setActiveModalIndex(
                (activeModalIndex - 1 + filteredItems.length) % filteredItems.length
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 rounded-full border border-border bg-surface p-3 text-text-muted hover:text-primary transition-all shadow-md"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={() =>
              setActiveModalIndex((activeModalIndex + 1) % filteredItems.length)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 rounded-full border border-border bg-surface p-3 text-text-muted hover:text-primary transition-all shadow-md"
          >
            <ChevronRight size={22} />
          </button>

          {/* Modal Container */}
          <div className="relative max-w-5xl w-full max-h-[85vh] overflow-y-auto rounded-2xl border border-border bg-surface shadow-2xl flex flex-col lg:flex-row overflow-hidden my-auto">
            
            {/* Modal Image Frame */}
            <div className="lg:w-2/3 flex items-center justify-center bg-surface-elevated/50 p-4 border-b lg:border-b-0 lg:border-r border-border min-h-[300px] overflow-hidden">
              <img
                src={activeModalItem.imageSrc}
                alt={activeModalItem.alt || activeModalItem.title || "Modal View"}
                className={`max-h-[70vh] transition-all duration-300 ${
                  isZoomed
                    ? "w-full h-full object-cover rounded-lg"
                    : "w-auto object-contain rounded-lg"
                }`}
              />
            </div>

            {/* Modal Content Sidebar */}
            <div className="lg:w-1/3 p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-5">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-primary border border-primary/20">
                  <Layers size={12} />
                  {activeModalItem.category}
                </span>

                <h3 className="font-heading text-2xl font-bold uppercase text-text">
                  {activeModalItem.title || "Operation Details"}
                </h3>

                <p className="text-xs text-text-muted leading-relaxed font-light">
                  {activeModalItem.description ||
                    "PEL operational deployment maintaining safety and technical standards."}
                </p>

                <div className="space-y-4 pt-4 border-t border-border/60">
                  {activeModalItem.location && (
                    <div>
                      <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-text-muted mb-1">
                        Location
                      </span>
                      <span className="text-xs font-mono font-semibold text-text flex items-center gap-1.5">
                        <MapPin size={14} className="text-primary" />
                        {activeModalItem.location}
                      </span>
                    </div>
                  )}

                  {activeModalItem.equipmentUsed && activeModalItem.equipmentUsed.length > 0 && (
                    <div>
                      <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-text-muted mb-2">
                        Deployed Machinery
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeModalItem.equipmentUsed.map((eq, i) => (
                          <span
                            key={i}
                            className="rounded-md border border-border bg-surface-elevated px-2.5 py-1 text-[10px] font-mono text-primary"
                          >
                            {eq}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-6 border-t border-border/60 mt-6">
                <a
                  href={contactHref}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-xs font-bold uppercase tracking-wider text-background shadow-sm hover:opacity-90 transition-opacity"
                >
                  <span>Enquire About Similar Service</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </article>
  );
}