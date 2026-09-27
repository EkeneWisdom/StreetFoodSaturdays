import React, { useState } from "react";
import { 
  Send, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  ArrowRight, 
  HelpCircle,
  ChevronDown,
  Sparkles
} from "lucide-react";
import { contactPageData } from "./data";
import { cn } from "@/lib/cn";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: contactPageData.inquiryTypes?.[0] || "General Inquiry",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate API form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: contactPageData.inquiryTypes?.[0] || "General Inquiry",
        message: "",
      });
    }, 1200);
  };

  return (
    <div className="relative overflow-hidden bg-background pt-10 pb-24 text-text">
      {/* Background Decorative Glows - Isolated to prevent backdrop matrix jitter */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-full max-w-7xl -translate-x-1/2 rounded-full bg-primary/10 blur-3xl opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Hero Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
            <Sparkles size={14} />
            <span>{contactPageData.hero.badge}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-text">
            {contactPageData.hero.title}
          </h1>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            {contactPageData.hero.subtitle}
          </p>
        </div>

        {/* 2. Direct Contact Cards Grid - Removed transform-gpu & simplified translate hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactPageData.channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <a
                key={channel.id}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative flex flex-col justify-between rounded-2xl border border-border/60 bg-surface/90 p-6 transition-all duration-200 hover:border-primary/40 hover:bg-surface-elevated hover:shadow-lg"
              >
                {channel.badge && (
                  <span className="absolute top-4 right-4 rounded-full bg-primary/20 px-2.5 py-0.5 text-[10px] font-bold text-primary">
                    {channel.badge}
                  </span>
                )}
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-transform duration-200 group-hover:scale-105">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-text mb-1">{channel.title}</h3>
                  <p className="text-xs text-text-muted mb-4 line-clamp-2">{channel.description}</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-primary group-hover:underline">
                  <span>{channel.actionText}</span>
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </a>
            );
          })}
        </div>

        {/* 3. Main Interactive Grid - Removed transform-gpu on form and sidebar wrappers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Left Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 rounded-3xl border border-border/60 bg-surface-elevated/90 p-6 sm:p-10 shadow-xl">
            <div className="mb-8">
              <h2 className="text-2xl font-black text-text mb-2">Send Us A Message</h2>
              <p className="text-sm text-text-muted">
                Fill out the form below and our hospitality team will get back to you within 24 hours.
              </p>
            </div>

            {status === "success" ? (
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-text">Message Received!</h3>
                <p className="text-sm text-text-muted max-w-md mx-auto">
                  Thank you for reaching out to Street Food Saturdays. We'll review your message and reply shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-muted">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Garvey"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-muted/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-muted">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="marcus@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-muted/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-muted">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (876) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-muted/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-muted">
                      Inquiry Topic
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    >
                      {contactPageData.inquiryTypes.map((topic) => (
                        <option key={topic} value={topic}>
                          {topic}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-text-muted">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your event, dietary requests, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-muted/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 disabled:opacity-50"
                >
                  {status === "submitting" ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Location & Hours Details */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Hours Card */}
            <div className="rounded-3xl border border-border/60 bg-surface/90 p-6 sm:p-8 space-y-6 shadow-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text">{contactPageData.hours.title}</h3>
                  <p className="text-xs text-text-muted">{contactPageData.hours.subtitle}</p>
                </div>
              </div>

              <div className="space-y-3">
                {contactPageData.hours.schedule.map((item, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "flex items-center justify-between rounded-xl p-3 text-xs transition-colors",
                      item.highlighted
                        ? "bg-primary/15 border border-primary/30 text-text font-bold"
                        : "bg-surface-elevated/60 text-text-muted"
                    )}
                  >
                    <div>
                      <span className="block font-bold text-text">{item.day}</span>
                      <span className="text-[11px] opacity-80">{item.time}</span>
                    </div>
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider",
                        item.highlighted
                          ? "bg-primary text-white"
                          : "bg-surface text-text-muted"
                      )}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location & Map Shortcut Card */}
            <div className="rounded-3xl border border-border/60 bg-surface/90 p-6 sm:p-8 space-y-6 shadow-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text">{contactPageData.location.title}</h3>
                  <p className="text-xs text-text-muted">{contactPageData.location.address}</p>
                </div>
              </div>

              <p className="text-xs text-text-muted leading-relaxed">
                {contactPageData.location.directionsHint}
              </p>

              {/* Location Feature Badges */}
              <div className="grid grid-cols-2 gap-2">
                {contactPageData.location.features.map((feat, i) => {
                  const FeatIcon = feat.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2 rounded-xl border border-border/40 bg-surface-elevated/70 p-2.5 text-[11px] font-medium text-text"
                    >
                      <FeatIcon size={14} className="text-primary shrink-0" />
                      <span className="truncate">{feat.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* Get Directions Link */}
              <a
                href={contactPageData.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-4 py-3 text-xs font-bold text-primary transition-all hover:bg-primary hover:text-white"
              >
                <span>Get Directions On Google Maps</span>
                <ArrowRight size={14} />
              </a>
            </div>

          </div>
        </div>

        {/* 4. Frequently Asked Questions Accordion - Removed transform-gpu */}
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              <HelpCircle size={14} />
              <span>Quick Help</span>
            </div>
            <h2 className="text-3xl font-black text-text">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {contactPageData.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-border/60 bg-surface/90 overflow-hidden transition-all shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm font-bold text-text hover:text-primary transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={cn(
                        "text-text-muted transition-transform duration-200",
                        isOpen && "rotate-180 text-primary"
                      )}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-text-muted leading-relaxed border-t border-border/30 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}