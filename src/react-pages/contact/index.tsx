import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Building2,
  Send,
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
  Phone,
  MessageCircle,
  ExternalLink,
  Globe,
  Loader2,
  Share2,
  Navigation,
} from "lucide-react";

import {
  FaGoogle,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa6";

import { CONTACT_PAGE_DATA } from "./data";
import contactConfig from "@/config/contact";

export default function ContactPage() {
  const {
    hero,
    corporateInfo,
    extraDivisions,
    enquiryCategories,
    faqs,
    socialLinks,
    showMap,
    mapCoordinates,
    web3formsAccessKey,
  } = CONTACT_PAGE_DATA;

/*
  unavailable on lucide icons, borrowed for font awesome
  Facebook,
  Instagram,
  X,
  Linkedin,
  Youtube,

  FaGoogle,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube
*/

  const Facebook = FaFacebookF;
  const Instagram = FaInstagram;
  const X = FaXTwitter;
  const Linkedin = FaLinkedinIn;
  const Youtube = FaYoutube;

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    category: enquiryCategories[0],
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handler for Direct Web3Forms Email Delivery
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3formsAccessKey,
          subject: formData.category,
          from_name: "Web Contact Form",
          email: formData.email,
          company: formData.company || "Not Specified",
          phone: formData.phone || "Not Specified",
          category: formData.category,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(
          result.message || "Failed to submit. Please try WhatsApp below."
        );
      }
    } catch (err) {
      setErrorMessage("Network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handler for WhatsApp Redirect Fallback
  const handleWhatsAppRedirect = () => {
    const formattedMessage = `*New Enquiry via Website*
*Name:* ${formData.fullName}
*Company:* ${formData.company || "N/A"}
*Email:* ${formData.email}
*Phone:* ${formData.phone || "N/A"}
*Category:* ${formData.category}

*Message:*
${formData.message}`.trim();

    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappUrl = contactConfig?.whatsappHref
      ? `${contactConfig.whatsappHref}?text=${encodedText}`
      : `https://wa.me/${corporateInfo.phones[0].replace(/[^0-9]/g, "")}?text=${encodedText}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <article className="min-h-screen w-full bg-background text-text antialiased selection:bg-primary selection:text-background">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border py-24 lg:py-32">
        {/* 1. Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/pel-contact1.jpg"
            alt="Corporate Engineering Headquarters and Global Operations"
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
              <Mail size={14} className="text-primary" />
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
                24/7 Operational Response
              </span>
              <span className="hidden sm:inline text-border">|</span>
              <span className="uppercase tracking-wider">
                Port Harcourt & Lagos Command Centers
              </span>
            </div>

          </header>
        </div>
      </section>

      {/* Main Grid: Corporate Info & Contact Form */}
      <section className="py-16 lg:py-24 border-b border-border/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
            
            {/* Corporate Profile Column */}
            <aside className="space-y-8 lg:col-span-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Official Channels
                </span>
                <h2 className="mt-2 font-heading text-3xl font-extrabold uppercase text-text">
                  {corporateInfo.companyName}
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-text-muted">
                  {corporateInfo.registration}
                </p>
              </div>

              {/* Head Office Card */}
              <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-text uppercase tracking-wide">
                      Headquarters Address
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-text-muted">
                      {corporateInfo.headOffice}
                    </p>
                  </div>
                </div>

                <div className="border-t border-border pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Direct */}
                  <div>
                    <span className="text-[10px] font-bold uppercase text-text-muted tracking-wider block mb-1">
                      Phone Lines
                    </span>
                    {corporateInfo.phones.map((phone, i) => (
                      <a
                        key={i}
                        href={`tel:${phone}`}
                        className="flex items-center gap-1.5 text-xs font-semibold text-text hover:text-primary transition-colors block py-0.5"
                      >
                        <Phone size={12} className="text-primary" />
                        {phone}
                      </a>
                    ))}
                  </div>

                  {/* Email Direct */}
                  <div>
                    <span className="text-[10px] font-bold uppercase text-text-muted tracking-wider block mb-1">
                      Direct Email
                    </span>
                    {corporateInfo.emails.map((email, i) => (
                      <a
                        key={i}
                        href={`mailto:${email}`}
                        className="flex items-center gap-1.5 text-xs font-semibold text-text hover:text-primary transition-colors block py-0.5 truncate"
                      >
                        <Mail size={12} className="text-primary" />
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dynamic Extra Divisions Section (Automated layout management) */}
              {extraDivisions && extraDivisions.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-primary">
                    Specialized Operational Divisions
                  </h3>
                  {extraDivisions.map((division) => (
                    <div
                      key={division.id}
                      className="rounded-2xl border border-border bg-surface/50 p-6 shadow-sm space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-sm text-text uppercase">
                          {division.name}
                        </h4>
                        {division.badge && (
                          <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20">
                            {division.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-text-muted flex items-start gap-2">
                        <MapPin size={14} className="mt-0.5 text-primary shrink-0" />
                        {division.address}
                      </p>
                      <div className="flex items-center gap-4 text-xs pt-1">
                        {division.phone && (
                          <a
                            href={`tel:${division.phone}`}
                            className="text-text hover:text-primary font-medium flex items-center gap-1"
                          >
                            <Phone size={12} /> {division.phone}
                          </a>
                        )}
                        {division.email && (
                          <a
                            href={`mailto:${division.email}`}
                            className="text-text hover:text-primary font-medium flex items-center gap-1"
                          >
                            <Mail size={12} /> {division.email}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Trust Badges */}
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 space-y-3">
                <div className="flex items-center gap-2 text-primary">
                  <ShieldCheck size={20} />
                  <h3 className="font-bold text-sm text-text uppercase">
                    Execution & Financial Capability
                  </h3>
                </div>
                <p className="text-xs leading-relaxed text-text-muted">
                  Supported by reputable tier-1 commercial banking partners ready to issue performance bonds and guarantee funding for large-scale civil, offshore, and marine construction contracts.
                </p>
              </div>

              {/* Social Channels */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-widest text-text-muted flex items-center gap-1.5">
                  <Share2 size={14} /> Connect On Social
                </span>
                <div className="flex items-center gap-2 flex-wrap">
                  {socialLinks.facebook && (
                    <a
                      href={socialLinks.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl border border-border bg-surface text-text hover:bg-primary hover:text-background transition-all"
                      aria-label="Facebook"
                    >
                      <Facebook size={16} />
                    </a>
                  )}
                  {socialLinks.instagram && (
                    <a
                      href={socialLinks.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl border border-border bg-surface text-text hover:bg-primary hover:text-background transition-all"
                      aria-label="Instagram"
                    >
                      <Instagram size={16} />
                    </a>
                  )}
                  {socialLinks.whatsapp && (
                    <a
                      href={socialLinks.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl border border-border bg-surface text-text hover:bg-primary hover:text-background transition-all"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle size={16} />
                    </a>
                  )}
                </div>
              </div>
            </aside>

            {/* Direct Web3Forms Inquiry Form Column */}
            <div className="rounded-3xl border border-border bg-surface p-8 shadow-lg lg:col-span-7 sm:p-10 relative overflow-hidden">
              <header className="mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Contact Terminal
                </span>
                <h2 className="mt-1 font-heading text-2xl font-extrabold uppercase text-text sm:text-3xl">
                  Send A Direct Engineering Request
                </h2>
                <p className="mt-2 text-xs text-text-muted">
                  Submissions are routed directly to our administrative desk.
                </p>
              </header>

              {submitted ? (
                <div className="rounded-2xl border border-primary/30 bg-primary/10 p-8 text-center space-y-4">
                  <CheckCircle2 size={52} className="mx-auto text-primary" />
                  <h3 className="font-heading text-xl font-bold uppercase text-text">
                    Inquiry Transmitted Successfully
                  </h3>
                  <p className="text-xs text-text-muted max-w-md mx-auto leading-relaxed">
                    Thank you for contacting Parkers 1st Engineering Limited. Your message has been routed to our administrative team. We will review your project requirements promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs font-bold text-background uppercase tracking-wider hover:bg-primary/90 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleEmailSubmit} className="space-y-6">
                  <input type="hidden" name="from_name" value="Web Contact Form" />
                  <input type="hidden" name="subject" value={formData.category} />

                  {errorMessage && (
                    <div className="p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-500 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-text">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Engr. Chidi Okafor"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs text-text focus:border-primary focus:outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-text">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="Organization Name"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs text-text focus:border-primary focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-text">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs text-text focus:border-primary focus:outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-text">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+234 ..."
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs text-text focus:border-primary focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-text">
                      Inquiry Scope / Category *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs text-text focus:border-primary focus:outline-none transition-all"
                    >
                      {enquiryCategories.map((cat, idx) => (
                        <option key={idx} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-text">
                      Project Details & Specific Requirements *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Outline your project scope, equipment specs, location, or tender specifications..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full rounded-xl border border-border bg-background p-4 text-xs text-text focus:border-primary focus:outline-none transition-all"
                    />
                  </div>

                  {/* Primary Action Button: Web3Forms Email Submission */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-xs font-bold uppercase tracking-widest text-background shadow-md transition-all hover:bg-primary/90 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Transmitting Inquiry...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Submit Inquiry (Email)
                      </>
                    )}
                  </button>

                  {/* Secondary Instant Messaging Option */}
                  <div className="pt-2 text-center">
                    <span className="text-[11px] text-text-muted block mb-2">
                      Prefer instant messaging or need urgent mobilization?
                    </span>
                    <button
                      type="button"
                      onClick={handleWhatsAppRedirect}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase text-primary hover:underline tracking-wider"
                    >
                      <MessageCircle size={14} /> Send via Direct WhatsApp Channel
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Map Display Section (Optional Render) */}
      {showMap && (
        <section className="py-16 border-b border-border bg-surface/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Location Matrix
                </span>
                <h3 className="text-2xl font-extrabold uppercase text-text">
                  Find Our Operational Headquarters
                </h3>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  corporateInfo.headOffice
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-xs font-bold text-text hover:border-primary hover:text-primary transition-all self-start sm:self-auto uppercase tracking-wider"
              >
                <Navigation size={14} /> Open In Google Maps
              </a>
            </div>

            {/* Seamless Embed (OpenStreetMap Iframe) */}
            <div className="h-96 w-full rounded-3xl border border-border overflow-hidden shadow-inner relative">
              <iframe
                title="Parkers 1st Engineering Office Map"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                  mapCoordinates.lng - 0.02
                }%2C${mapCoordinates.lat - 0.02}%2C${
                  mapCoordinates.lng + 0.02
                }%2C${mapCoordinates.lat + 0.02}&layer=mapnik&marker=${
                  mapCoordinates.lat
                }%2C${mapCoordinates.lng}`}
                className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Information Desk
            </span>
            <h2 className="mt-2 font-heading text-3xl font-extrabold uppercase text-text">
              Frequently Asked Questions
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((faq) => (
              <article
                key={faq.id}
                className="rounded-2xl border border-border bg-surface p-6 shadow-sm space-y-3"
              >
                <div className="flex items-center gap-2 text-primary">
                  <HelpCircle size={18} />
                  <h3 className="font-bold text-sm text-text">{faq.question}</h3>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

    </article>
  );
}