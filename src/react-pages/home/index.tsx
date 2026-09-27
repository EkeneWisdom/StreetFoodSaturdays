import React, { useState } from "react";
import { 
  Sparkles, 
  Flame, 
  Waves, 
  Music, 
  Star, 
  ArrowRight, 
  Utensils, 
  Calendar, 
  MapPin, 
  ShieldCheck, 
  Users, 
  ChevronRight,
  Crown
} from "lucide-react";
import { homeData } from "./data";
import { cn } from "@/lib/cn";
import { nav } from "@/config/navigation";

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  return (
    <div className="relative overflow-hidden bg-background pt-6 pb-24 text-text">
      
      {/* Background Decorative Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-full max-w-7xl -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-0 -z-10 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 left-0 -z-10 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 pt-6">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
              <Sparkles size={14} />
              <span>{homeData.hero.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-text leading-[1.08]">
              Woodfire Smoke. <br />
              <span className="text-primary">Crystal Waters.</span> <br />
              Pure Vibe.
            </h1>

            <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {homeData.hero.subtitle}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={homeData.hero.primaryCta.href}
                className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 text-sm font-bold text-white shadow-xl shadow-primary/25 hover:bg-primary-hover hover:scale-105 transition-all duration-200"
              >
                <span>{homeData.hero.primaryCta.text}</span>
                <ArrowRight size={16} />
              </a>

              <a
                href={homeData.hero.secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-2xl border border-border/80 bg-surface/80 px-8 py-4 text-sm font-bold text-text hover:border-primary/50 hover:bg-surface-elevated transition-all duration-200 backdrop-blur-md"
              >
                <Utensils size={16} className="text-primary" />
                <span>{homeData.hero.secondaryCta.text}</span>
              </a>
            </div>

            {/* Quick Stats Badges */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border/40 max-w-lg mx-auto lg:mx-0">
              {homeData.hero.stats.map((stat, idx) => (
                <div key={idx} className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-black text-primary">{stat.value}</div>
                  <div className="text-[11px] font-bold text-text-muted uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Right Visual Feature Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-border/60 bg-surface shadow-2xl group">
              <img
                src="/images/home/hero-river-dining.png" // RECOMMENDED: Breathtaking shot of food served at tables set directly beside a mountain river
                alt="Riverside Woodfire Dining at Golden Spring"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />

              {/* Graphic Fallback when Image is missing */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-surface-elevated via-surface to-background p-8 text-center -z-10">
                <Flame size={56} className="text-primary mb-4 animate-pulse" />
                <span className="text-sm font-bold text-text">Riverside Culinary Haven</span>
                <span className="text-xs text-text-muted mt-1">Golden Spring, St. Andrew</span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

              {/* Floating Bottom Card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-background/80 p-4 backdrop-blur-md space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles size={12} />
                    Saturday Gathering
                  </span>
                  <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                    Gates Open 12 PM
                  </span>
                </div>
                <p className="text-sm font-bold text-white">Freshly Smoked Jerk & Cold Spring Dips</p>
              </div>
            </div>
          </div>

        </div>

        {/* 2. THREE ATMOSPHERE PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {homeData.highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl border border-border/60 bg-surface/50 p-6 backdrop-blur-md space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface-elevated"
              >
                <div className={cn("inline-flex h-12 w-12 items-center justify-center rounded-2xl border", item.accent)}>
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-black text-text">{item.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* 3. SIGNATURE DISHES TEASER */}
        <div className="mb-24 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-primary">From The Pimento Coals</span>
              <h2 className="text-3xl sm:text-4xl font-black text-text mt-1">Signature Fire Flavors</h2>
            </div>
            <a
              href={nav?.menu?.href}
              className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline group cursor-pointer"
            >
              <span>View Full Menu & Pricing</span>
              <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeData.signatures.map((dish) => (
              <div
                key={dish.id}
                className="group rounded-3xl border border-border/60 bg-surface/50 overflow-hidden backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-elevated">
                    <img
                      src={dish.image}
                      alt={dish.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface-elevated -z-10">
                      <Utensils size={32} className="text-primary opacity-60 mb-1" />
                      <span className="text-xs font-bold text-text-muted">{dish.name}</span>
                    </div>

                    {/* Badge */}
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/20 px-3 py-1 text-[10px] font-extrabold uppercase text-amber-400 backdrop-blur-md">
                      <Crown size={12} />
                      <span>{dish.badge}</span>
                    </div>

                    {/* Price */}
                    <div className="absolute bottom-4 right-4 rounded-xl border border-white/20 bg-background/90 px-3 py-1.5 text-xs font-black text-primary backdrop-blur-md">
                      {dish.price}
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="text-lg font-black text-text group-hover:text-primary transition-colors">
                      {dish.name}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={nav?.reservation?.href}
                    className="block text-center rounded-xl border border-primary/30 bg-primary/10 py-2.5 text-xs font-bold text-primary hover:bg-primary hover:text-white transition-all duration-200"
                  >
                    Order On Reservation
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. VISITOR LOGISTICS BANNER */}
        <div className="rounded-3xl border border-border/60 bg-surface/80 p-8 sm:p-12 backdrop-blur-xl shadow-2xl mb-24 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-primary">Your Saturday Guide</span>
              <h2 className="text-3xl font-black text-text">{homeData.eventDetails.title}</h2>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                {homeData.eventDetails.subtitle}
              </p>

              <div className="space-y-3 pt-2">
                {homeData.eventDetails.items.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3 text-xs font-bold text-text">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon size={16} />
                      </div>
                      <div>
                        <span className="text-text-muted font-normal block text-[10px] uppercase">{item.label}</span>
                        <span>{item.value}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Location Teaser Card */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-surface to-background p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="text-primary" size={18} />
                    <span className="text-sm font-black text-text">Mt. James, Golden Spring</span>
                  </div>
                  <span className="text-[10px] font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                    St. Andrew
                  </span>
                </div>

                <p className="text-xs text-text-muted leading-relaxed">
                  Located just 25 minutes from Manor Park, Kingston. Smooth paved roads lead directly to our secured riverside parking area.
                </p>

                <div className="pt-2 flex items-center gap-3">
                  <a
                    href={nav?.location?.href}
                    className="flex-1 text-center rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all"
                  >
                    Get Map & Driving Directions
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 5. TESTIMONIALS CAROUSEL */}
        <div className="mb-24 space-y-8 text-center max-w-3xl mx-auto">
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-amber-400" />
              ))}
            </div>
            <h2 className="text-3xl font-black text-text">Loved By Foodies & Locals</h2>
          </div>

          <div className="rounded-3xl border border-border/60 bg-surface/60 p-8 sm:p-10 backdrop-blur-md relative min-h-[180px] flex flex-col justify-between">
            <p className="text-base sm:text-lg font-medium italic text-text leading-relaxed">
              "{homeData.testimonials[activeTestimonial].quote}"
            </p>

            <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between">
              <div className="text-left">
                <div className="text-xs font-black text-primary">
                  {homeData.testimonials[activeTestimonial].author}
                </div>
                <div className="text-[10px] font-bold text-text-muted">
                  {homeData.testimonials[activeTestimonial].role}
                </div>
              </div>

              {/* Selector Dots */}
              <div className="flex items-center gap-2">
                {homeData.testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveTestimonial(idx)}
                    className={cn(
                      "h-2.5 rounded-full transition-all cursor-pointer",
                      activeTestimonial === idx ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-primary/50"
                    )}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 6. FINAL HIGH-CONVERSION CTA */}
        <div className="rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/20 via-surface-elevated to-background p-10 sm:p-16 text-center backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/20 px-4 py-1 text-xs font-extrabold text-primary">
              <Flame size={14} />
              <span>Next Gathering: This Saturday</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-text leading-tight">
              Ready For The Ultimate Saturday River Feast?
            </h2>

            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              Tables by the water sell out early. Reserve your table now to guarantee riverside seating and pre-order signature platters.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href={nav?.reservation?.href}
                className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 text-xs font-bold text-white shadow-xl shadow-primary/30 hover:bg-primary-hover hover:scale-105 transition-all"
              >
                <span>Book Your Riverside Table</span>
                <ArrowRight size={16} />
              </a>
              <a
                href={nav?.experience?.href}
                className="inline-flex items-center gap-2 rounded-2xl border border-border/80 bg-surface px-8 py-4 text-xs font-bold text-text hover:border-primary/50 transition-all"
              >
                <span>See Full River Experience</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}