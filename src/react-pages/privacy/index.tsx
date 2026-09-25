import React from "react";
import { ShieldCheck, Mail, MapPin, Phone, Building2, Calendar, FileText } from "lucide-react";
import site from "@/config/site";
import { PRIVACY_POLICY_DATA } from "./data";

export default function PrivacyPage() {
  const { badge, title, lastUpdated, effectiveDate, intro, sections } = PRIVACY_POLICY_DATA;

  // Extract dynamic contact details from centralized config
  const companyName = site.company;
  const contactEmail = site.email;
  const contactPhone = site.phone;
  const corporateAddress = site.address;

  return (
    <article className="min-h-screen w-full bg-background text-text antialiased">
      
      {/* Page Header */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface-elevated/80 to-background py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <header className="space-y-4 text-center sm:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <ShieldCheck size={14} />
              {badge}
            </span>
            <h1 className="font-heading text-4xl font-black uppercase tracking-tight text-text sm:text-5xl">
              {title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-text-muted pt-2 border-t border-border/60">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} className="text-primary" /> Effective Date: {effectiveDate}
              </span>
              <span className="flex items-center gap-1.5">
                <FileText size={13} className="text-primary" /> Last Revised: {lastUpdated}
              </span>
            </div>
          </header>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Introductory Abstract */}
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-sm">
            <p className="text-xs leading-relaxed text-text sm:text-sm">
              <strong className="font-bold text-text">{companyName}</strong> ("we", "us", or "our") is committed to protecting the privacy and confidentiality of individuals who access our services. {intro}
            </p>
          </div>

          {/* Structured Policy Sections */}
          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="space-y-4">
                <h2 className="font-heading text-xl font-bold uppercase text-text sm:text-2xl border-b border-border/60 pb-2">
                  {section.title}
                </h2>
                
                {section.content.map((p, idx) => (
                  <p key={idx} className="text-xs leading-relaxed text-text-muted sm:text-sm">
                    {p}
                  </p>
                ))}

                {section.bullets && section.bullets.length > 0 && (
                  <ul className="space-y-2 pl-2">
                    {section.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-text sm:text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Dynamic Contact & DPO Card (No Hardcoding) */}
          <section className="rounded-3xl border border-primary/20 bg-gradient-to-br from-surface to-surface-elevated p-6 sm:p-8 shadow-md">
            <h3 className="font-heading text-lg font-bold uppercase text-text mb-2 flex items-center gap-2">
              <Building2 size={18} className="text-primary" /> Privacy & Data Protection Contact
            </h3>
            <p className="text-xs text-text-muted mb-6">
              For privacy inquiries, rights enforcement, or statutory notifications, contact our Data Protection Office:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
                <Mail size={16} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] font-bold text-text-muted uppercase">Data Protection Email</span>
                  <a href={`mailto:${contactEmail}`} className="text-primary hover:underline font-bold break-all">
                    {contactEmail}
                  </a>
                </div>
              </div>

              {contactPhone && (
                <div className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
                  <Phone size={16} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] font-bold text-text-muted uppercase">Compliance Line</span>
                    <a href={`tel:${contactPhone.replace(/\s+/g, '')}`} className="text-text font-bold">
                      {contactPhone}
                    </a>
                  </div>
                </div>
              )}

              {corporateAddress && (
                <div className="sm:col-span-2 flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
                  <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] font-bold text-text-muted uppercase">Corporate Headquarters</span>
                    <span className="text-text">{corporateAddress}</span>
                  </div>
                </div>
              )}
            </div>
          </section>

        </div>
      </section>

    </article>
  );
}