import React from "react";
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Car, 
  ShieldCheck, 
  WifiOff, 
  Compass, 
  ChevronRight, 
  ExternalLink, 
  PhoneCall,
  Sparkles,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { locationData } from "./data";
import { nav } from "@/config/navigation";

export default function LocationPage() {
  return (
    <div className="relative overflow-hidden bg-background pt-10 pb-24 text-text">
      
      {/* Glow Effects */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[500px] w-full max-w-7xl -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-0 -z-10 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. HERO SECTION */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
            <Compass size={14} />
            <span>{locationData.hero.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-text">
            {locationData.hero.title}
          </h1>

          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            {locationData.hero.subtitle}
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href={locationData.hero.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 text-xs font-bold text-white shadow-xl shadow-primary/25 hover:bg-primary-hover hover:scale-105 transition-all cursor-pointer"
            >
              <Navigation size={16} />
              <span>Open in Google Maps</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* 2. QUICK STATS BANNER */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
          {locationData.quickStats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-border/60 bg-surface/60 p-6 text-center backdrop-blur-md space-y-1"
            >
              <span className="text-[10px] font-extrabold text-primary uppercase tracking-wider">{stat.label}</span>
              <div className="text-2xl font-black text-text">{stat.value}</div>
              <span className="text-[11px] font-medium text-text-muted">{stat.sub}</span>
            </div>
          ))}
        </div>

        {/* 3. TURN-BY-TURN ROUTE WAYPOINTS */}
        <div className="max-w-4xl mx-auto mb-20 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary">Step-By-Step Driving Route</span>
            <h2 className="text-3xl font-black text-text">From Manor Park To Riverside</h2>
          </div>

          <div className="relative border-l-2 border-primary/30 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-10">
            {locationData.waypoints.map((point) => (
              <div key={point.step} className="relative group">
                
                {/* Step Marker Badge */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-0 flex h-9 w-9 items-center justify-center rounded-2xl bg-primary text-xs font-black text-white shadow-lg shadow-primary/30 ring-4 ring-background">
                  {point.step}
                </div>

                <div className="rounded-3xl border border-border/60 bg-surface/70 p-6 backdrop-blur-md space-y-2 transition-all group-hover:border-primary/40">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-base font-black text-text">{point.title}</h3>
                    <span className="text-[10px] font-extrabold text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20 w-fit">
                      {point.distance}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                    {point.description}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-[11px] font-bold text-amber-500">
                    <AlertCircle size={14} className="shrink-0" />
                    <span>{point.note}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. PARKING & TRANSPORT OPTIONS */}
        <div className="max-w-5xl mx-auto mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Parking Detail Card */}
          <div className="lg:col-span-6 rounded-3xl border border-border/60 bg-surface/80 p-8 backdrop-blur-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-text">{locationData.parkingInfo.title}</h3>
                  <span className="text-xs font-bold text-emerald-400">Attended & Safe</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                {locationData.parkingInfo.description}
              </p>

              <div className="space-y-2 pt-2">
                {locationData.parkingInfo.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-bold text-text">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border/40">
              <span className="text-[11px] text-text-muted">Parking Fee: <strong className="text-primary">Complimentary for all reserved guests</strong></span>
            </div>
          </div>

          {/* Transportation Options */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            {locationData.transportOptions.map((opt, idx) => {
              const Icon = opt.icon;
              return (
                <div key={idx} className="rounded-3xl border border-border/60 bg-surface/50 p-5 backdrop-blur-md flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary mt-1">
                    <Icon size={20} />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-black text-text">{opt.title}</h4>
                      <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[9px] font-bold text-primary">
                        {opt.tag}
                      </span>
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed">{opt.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* 5. OFFLINE GPS PREPARATION CARD */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-surface to-background p-8 sm:p-10 backdrop-blur-xl shadow-2xl mb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-500">
              <WifiOff size={24} />
            </div>
            <div>
              <h3 className="text-lg font-black text-text">{locationData.offlineAdvice.title}</h3>
              <p className="text-xs text-text-muted">{locationData.offlineAdvice.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-amber-500/20 pt-6">
            {locationData.offlineAdvice.steps.map((step, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-[10px] font-black text-amber-500 uppercase">Tip 0{idx + 1}</span>
                <p className="text-xs font-bold text-text leading-snug">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. CALL TO ACTION */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <h3 className="text-2xl font-black text-text">Got Your Route Planned?</h3>
          <p className="text-xs text-text-muted">
            Lock in your riverside table to guarantee your spot before heading up the hill.
          </p>
          <a
            href={nav?.reservation?.href}
            className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 text-xs font-bold text-white shadow-xl shadow-primary/25 hover:bg-primary-hover transition-all"
          >
            <span>Reserve A Table Now</span>
            <ChevronRight size={16} />
          </a>
        </div>

      </div>
    </div>
  );
}