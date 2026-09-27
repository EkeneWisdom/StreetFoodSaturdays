import React, { useState, useMemo } from "react";
import { 
  Sparkles, 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  Utensils, 
  Plus, 
  Minus, 
  MessageSquare, 
  ShieldCheck, 
  Flame, 
  Waves,
  Info
} from "lucide-react";
//import { reservationData, SeatingZone, PreorderItem } from "./data";
import { reservationData } from "./data";
import { cn } from "@/lib/cn";
import { contact } from "@/config/contact";

export default function ReservationsPage() {
  // Step State (1: Details & Zone, 2: Food Pre-order, 3: Guest Info & Confirm)
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form Inputs
  const [selectedDate, setSelectedDate] = useState<string>("Next Saturday");
  const [partySize, setPartySize] = useState<number>(2);
  const [selectedTime, setSelectedTime] = useState<string>("2:00 PM");
  const [selectedZone, setSelectedZone] = useState<string>("riverside");

  // Pre-orders (Map of dish ID -> quantity)
  const [preorders, setPreorders] = useState<Record<string, number>>({});

  // Guest Contact Info
  const [fullName, setFullName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [specialNotes, setSpecialNotes] = useState<string>("");

  // Quantity Handlers
  const handleQuantityChange = (dishId: string, delta: number) => {
    setPreorders((prev) => {
      const currentQty = prev[dishId] || 0;
      const newQty = Math.max(0, currentQty + delta);
      if (newQty === 0) {
        const { [dishId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [dishId]: newQty };
    });
  };

  // Calculate Preorder Total
  const preorderTotalJMD = useMemo(() => {
    return Object.entries(preorders).reduce((total, [id, qty]) => {
      const dish = reservationData.preorderDishes.find((d) => d.id === id);
      return total + (dish ? dish.priceJMD * qty : 0);
    }, 0);
  }, [preorders]);

  // Generate WhatsApp Message Link
  const buildWhatsAppLink = () => {
    const zoneObj = reservationData.seatingZones.find((z) => z.id === selectedZone);
    const dishSummary = Object.entries(preorders)
      .map(([id, qty]) => {
        const dish = reservationData.preorderDishes.find((d) => d.id === id);
        return dish ? `• ${qty}x ${dish.name}` : "";
      })
      .filter(Boolean)
      .join("%0A");

    const message = `*NEW RESERVATION REQUEST - STREET FOOD SATURDAYS*%0A%0A` +
      `*Name:* ${fullName}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Date:* ${selectedDate}%0A` +
      `*Time Slot:* ${selectedTime}%0A` +
      `*Party Size:* ${partySize} Guests%0A` +
      `*Seating Zone:* ${zoneObj?.name || selectedZone}%0A` +
      (dishSummary ? `%0A*Pre-ordered Feast:*%0A${dishSummary}%0A` : "") +
      (preorderTotalJMD > 0 ? `*Pre-order Total:* $${preorderTotalJMD.toLocaleString()} JMD%0A` : "") +
      (specialNotes ? `%0A*Special Requests:* ${specialNotes}` : "");

    return `${contact.whatsappHref}?text=${message}`; // Replace with your WhatsApp Business Number
  };

  return (
    <div className="relative overflow-hidden bg-background pt-10 pb-24 text-text">
      
      {/* Background Glow Effects */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[500px] w-full max-w-7xl -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 right-0 -z-10 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. HERO TITLE SECTION */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
            <Sparkles size={14} />
            <span>{reservationData.hero.badge}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-text">
            {reservationData.hero.title}
          </h1>
          <p className="text-base text-text-muted leading-relaxed">
            {reservationData.hero.subtitle}
          </p>
        </div>

        {/* 2. MULTI-STEP PROGRESS BAR */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -z-10 -translate-y-1/2" />
            
            {[
              { num: 1, label: "Table & Zone" },
              { num: 2, label: "Food Pre-Order" },
              { num: 3, label: "Guest Details" },
            ].map((step) => {
              const isActive = currentStep === step.num;
              const isDone = currentStep > step.num;

              return (
                <div key={step.num} className="flex flex-col items-center gap-2 bg-background px-3">
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-2xl text-xs font-black transition-all",
                      isDone
                        ? "bg-emerald-500 text-white"
                        : isActive
                        ? "bg-primary text-white shadow-lg shadow-primary/30 ring-4 ring-primary/20"
                        : "bg-surface border border-border text-text-muted"
                    )}
                  >
                    {isDone ? <Check size={16} /> : step.num}
                  </div>
                  <span
                    className={cn(
                      "text-[11px] font-bold uppercase tracking-wider",
                      isActive ? "text-primary" : "text-text-muted"
                    )}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. STEP CONTENT CARDS */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl border border-border/60 bg-surface/80 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">

            {/* STEP 1: PARTY, TIME & ZONE SELECTOR */}
            {currentStep === 1 && (
              <div className="space-y-8">
                
                {/* Date & Guests Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Date Selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase text-primary flex items-center gap-2">
                      <Calendar size={14} />
                      <span>Select Saturday Date</span>
                    </label>
                    <select
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full rounded-2xl border border-border bg-surface px-4 py-3.5 text-xs font-bold text-text focus:border-primary focus:outline-none"
                    >
                      <option value="Next Saturday">This Coming Saturday</option>
                      <option value="Saturday +1 Week">Next Saturday (+1 Week)</option>
                      <option value="Saturday +2 Weeks">Saturday (+2 Weeks)</option>
                    </select>
                  </div>

                  {/* Party Size Counter */}
                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase text-primary flex items-center gap-2">
                      <Users size={14} />
                      <span>Number of Guests</span>
                    </label>
                    <div className="flex items-center justify-between rounded-2xl border border-border bg-surface px-4 py-2">
                      <button
                        type="button"
                        onClick={() => setPartySize(Math.max(1, partySize - 1))}
                        className="flex h-8 w-8 items-center justify-center rounded-xl bg-background border border-border text-text hover:border-primary cursor-pointer"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-black text-text">
                        {partySize} {partySize === 1 ? "Guest" : "Guests"}
                      </span>
                      <button
                        type="button"
                        onClick={() => setPartySize(partySize + 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-xl bg-background border border-border text-text hover:border-primary cursor-pointer"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Time Slot Picker */}
                <div className="space-y-3">
                  <label className="text-xs font-extrabold uppercase text-primary flex items-center gap-2">
                    <Clock size={14} />
                    <span>Arrival Time Slot</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {reservationData.timeSlots.map((slot) => {
                      const Icon = slot.icon;
                      const isSelected = selectedTime === slot.id;
                      return (
                        <button
                          key={slot.id}
                          type="button"
                          onClick={() => setSelectedTime(slot.id)}
                          className={cn(
                            "flex flex-col items-center gap-1 rounded-2xl border p-3.5 text-center transition-all cursor-pointer",
                            isSelected
                              ? "border-primary bg-primary text-white shadow-lg shadow-primary/20 scale-105"
                              : "border-border/60 bg-surface/50 text-text hover:border-primary/40"
                          )}
                        >
                          <Icon size={18} className={isSelected ? "text-white" : "text-primary"} />
                          <span className="text-xs font-black">{slot.label}</span>
                          <span className={cn("text-[9px] font-normal", isSelected ? "text-white/80" : "text-text-muted")}>
                            {slot.period}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Seating Zone Cards */}
                <div className="space-y-3">
                  <label className="text-xs font-extrabold uppercase text-primary flex items-center gap-2">
                    <MapPin size={14} />
                    <span>Choose Seating Atmosphere</span>
                  </label>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {reservationData.seatingZones.map((zone) => {
                      const ZoneIcon = zone.icon;
                      const isSelected = selectedZone === zone.id;
                      return (
                        <div
                          key={zone.id}
                          onClick={() => setSelectedZone(zone.id)}
                          className={cn(
                            "relative rounded-2xl border p-5 transition-all cursor-pointer flex flex-col justify-between space-y-4",
                            isSelected
                              ? "border-primary bg-primary/10 ring-2 ring-primary/50 shadow-xl"
                              : "border-border/60 bg-surface/40 hover:border-primary/40"
                          )}
                        >
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="rounded-full bg-primary/20 px-2.5 py-0.5 text-[9px] font-black uppercase text-primary">
                                {zone.badge}
                              </span>
                              <ZoneIcon size={18} className="text-primary" />
                            </div>

                            <h3 className="text-sm font-black text-text">{zone.name}</h3>
                            <p className="text-[11px] text-text-muted leading-snug">{zone.description}</p>
                          </div>

                          <div className="pt-2 border-t border-border/40 text-[10px] font-bold text-text-muted">
                            <div>Min. Spend: <span className="text-primary">{zone.minimumSpend}</span></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Step 1 Next Button */}
                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-3.5 text-xs font-bold text-white shadow-xl shadow-primary/20 hover:bg-primary-hover transition-all cursor-pointer"
                  >
                    <span>Continue To Food Pre-Order</span>
                    <ChevronRight size={16} />
                  </button>
                </div>

              </div>
            )}

            {/* STEP 2: OPTIONAL FOOD PRE-ORDER */}
            {currentStep === 2 && (
              <div className="space-y-8">
                
                <div className="border-b border-border/40 pb-4">
                  <h3 className="text-lg font-black text-text">Optional Feast Pre-Order</h3>
                  <p className="text-xs text-text-muted">
                    Pre-claim signature dishes so the kitchen reserves them for your group. No upfront deposit required now.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {reservationData.preorderDishes.map((dish) => {
                    const qty = preorders[dish.id] || 0;
                    return (
                      <div
                        key={dish.id}
                        className="rounded-2xl border border-border/60 bg-surface/50 p-4 space-y-3 flex flex-col justify-between"
                      >
                        <div className="space-y-2">
                          <div className="flex justify-between items-start">
                            <span className="rounded-md bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 text-[9px] font-bold text-amber-500">
                              {dish.tag}
                            </span>
                            <span className="text-xs font-black text-primary">{dish.formattedPrice}</span>
                          </div>

                          <h4 className="text-xs font-black text-text">{dish.name}</h4>
                          <p className="text-[10px] text-text-muted leading-relaxed">{dish.description}</p>
                        </div>

                        {/* Quantity Add/Remove */}
                        <div className="flex items-center justify-between border-t border-border/40 pt-3">
                          <span className="text-[10px] font-bold text-text-muted">Quantity</span>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => handleQuantityChange(dish.id, -1)}
                              className="flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-background text-text hover:border-primary cursor-pointer"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="text-xs font-black text-text min-w-[16px] text-center">{qty}</span>
                            <button
                              type="button"
                              onClick={() => handleQuantityChange(dish.id, 1)}
                              className="flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-background text-text hover:border-primary cursor-pointer"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Preorder Total Summary */}
                {preorderTotalJMD > 0 && (
                  <div className="rounded-2xl border border-primary/30 bg-primary/10 p-4 flex items-center justify-between">
                    <span className="text-xs font-bold text-text">Pre-order Estimated Total:</span>
                    <span className="text-base font-black text-primary">${preorderTotalJMD.toLocaleString()} JMD</span>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="inline-flex items-center gap-1.5 rounded-2xl border border-border bg-surface px-6 py-3.5 text-xs font-bold text-text hover:border-primary/40 cursor-pointer"
                  >
                    <ChevronLeft size={16} />
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-3.5 text-xs font-bold text-white shadow-xl shadow-primary/20 hover:bg-primary-hover transition-all cursor-pointer"
                  >
                    <span>Proceed To Guest Details</span>
                    <ChevronRight size={16} />
                  </button>
                </div>

              </div>
            )}

            {/* STEP 3: CONTACT DETAILS & CONFIRMATION */}
            {currentStep === 3 && (
              <div className="space-y-8">
                
                <div className="border-b border-border/40 pb-4">
                  <h3 className="text-lg font-black text-text">Finalize Your Booking</h3>
                  <p className="text-xs text-text-muted">
                    Provide your contact details to receive instant confirmation via WhatsApp or Call.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-text-muted">Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Marcus Garvey"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-xs font-bold text-text focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-text-muted">WhatsApp / Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="e.g. +1 (876) 555-0199"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-xs font-bold text-text focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5 md:col-span-2">
                    <label className="text-[11px] font-bold text-text-muted">Email Address (Optional)</label>
                    <input
                      type="email"
                      placeholder="e.g. marcus@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-xs font-bold text-text focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5 md:col-span-2">
                    <label className="text-[11px] font-bold text-text-muted">Special Requests / Occasion</label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Celebrating a birthday, prefer table under bamboo shade..."
                      value={specialNotes}
                      onChange={(e) => setSpecialNotes(e.target.value)}
                      className="w-full rounded-2xl border border-border bg-surface p-4 text-xs font-bold text-text focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                {/* Reservation Summary Box */}
                <div className="rounded-2xl border border-border/60 bg-surface/50 p-5 space-y-3">
                  <span className="text-xs font-extrabold uppercase text-primary">Booking Overview</span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div>
                      <span className="text-text-muted text-[10px] block">Date</span>
                      <strong className="text-text">{selectedDate}</strong>
                    </div>
                    <div>
                      <span className="text-text-muted text-[10px] block">Time Slot</span>
                      <strong className="text-text">{selectedTime}</strong>
                    </div>
                    <div>
                      <span className="text-text-muted text-[10px] block">Party Size</span>
                      <strong className="text-text">{partySize} Guests</strong>
                    </div>
                    <div>
                      <span className="text-text-muted text-[10px] block">Zone</span>
                      <strong className="text-text uppercase">{selectedZone}</strong>
                    </div>
                  </div>
                </div>

                {/* Final Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-2xl border border-border bg-surface px-6 py-3.5 text-xs font-bold text-text hover:border-primary/40 cursor-pointer"
                  >
                    <ChevronLeft size={16} />
                    <span>Back</span>
                  </button>

                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-8 py-4 text-xs font-extrabold text-white shadow-xl shadow-emerald-600/30 hover:bg-emerald-500 transition-all cursor-pointer",
                      (!fullName || !phone) && "opacity-50 pointer-events-none"
                    )}
                  >
                    <MessageSquare size={16} />
                    <span>Confirm & Request via WhatsApp</span>
                  </a>
                </div>

                {(!fullName || !phone) && (
                  <p className="text-[10px] font-bold text-amber-500 text-center">
                    * Please enter your name and phone number to enable instant confirmation.
                  </p>
                )}

              </div>
            )}

          </div>
        </div>

        {/* 4. RESERVATION POLICIES & TRUST BADGES */}
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reservationData.policies.map((policy, idx) => (
            <div key={idx} className="rounded-2xl border border-border/60 bg-surface/40 p-4 flex items-start gap-3">
              <ShieldCheck size={18} className="text-primary shrink-0 mt-0.5" />
              <p className="text-xs text-text-muted leading-relaxed">{policy}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}