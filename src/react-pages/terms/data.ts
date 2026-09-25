export interface TermSection {
  id: string;
  title: string;
  content: string[];
  bullets?: string[];
}

export const TERMS_OF_SERVICE_DATA = {
  badge: "Legal & Governance",
  title: "Terms of Service",
  lastUpdated: "September 16, 2026",
  effectiveDate: "September 16, 2026",
  intro:
    "These Terms of Service ('Terms') govern your access to and use of our digital platforms, request-for-quotation (RFQ) portals, equipment lease inquiries, and corporate engineering services. By accessing or using our platform, you agree to be bound by these Terms.",

  sections: [
    {
      id: "acceptability-and-scope",
      title: "1. Acceptance & Scope of Terms",
      content: [
        "By accessing our platform or submitting procurement inquiries, you affirm that you have the legal capacity to enter into a binding agreement on behalf of yourself or the commercial entity you represent.",
        "These Terms apply to all visitors, commercial partners, equipment lessees, and client representatives utilizing our web properties.",
      ],
    },
    {
      id: "services-and-rfq",
      title: "2. Services, RFQs, & Equipment Fleet Inquiries",
      content: [
        "All information regarding heavy machinery leases, pipeline engineering, and technical specifications provided on this platform is for informational and inquiry purposes only.",
      ],
      bullets: [
        "Quotations & Binding Agreements: Web inquiries, RFQs, and automated estimates do not constitute binding commercial contracts. Formal engineering and lease commitments are executed via signed Master Service Agreements (MSAs) or commercial Purchase Orders (POs).",
        "Fleet Availability: Equipment specifications and availability are subject to prior lease, routine maintenance schedules, and project allocation.",
        "Technical Accuracy: We strive to maintain updated fleet parameters and project technical specs, but reserve the right to correct typographical or technical inaccuracies at any time.",
      ],
    },
    {
      id: "intellectual-property",
      title: "3. Intellectual Property Rights",
      content: [
        "All content featured on this platform—including proprietary engineering schematics, project portfolios, text, graphics, branding logos, and software code—is our exclusive property or licensed from third parties and is protected under applicable copyright, trademark, and international intellectual property laws.",
        "You are granted a limited, non-exclusive, non-transferable license to access and view site content strictly for evaluating potential commercial engagement.",
      ],
    },
    {
      id: "acceptable-use",
      title: "4. Acceptable Use Policy",
      content: [
        "When interacting with our digital channels, you agree strictly not to:",
      ],
      bullets: [
        "Use automated scraping, web crawlers, or extraction tools to harvest proprietary fleet or technical data without prior written authorization.",
        "Attempt to breach, probe, or scan system vulnerabilities or inject malicious software into our infrastructure.",
        "Submit fraudulent RFQs, misrepresent corporate identity, or upload harmful payloads through web contact points.",
      ],
    },
    {
      id: "limitation-of-liability",
      title: "5. Disclaimer of Warranties & Limitation of Liability",
      content: [
        "This platform and all site content are provided on an 'as-is' and 'as-available' basis without warranties of any kind, whether express or implied.",
        "To the maximum extent permitted by applicable law, we shall not be liable for any indirect, incidental, consequential, or punitive damages arising from site unavailability, system downtime, or reliance on information presented on this platform prior to formal contract execution.",
      ],
    },
    {
      id: "governing-law",
      title: "6. Governing Law & Dispute Resolution",
      content: [
        "These Terms and any non-contractual disputes arising out of your use of the platform shall be governed by and construed in accordance with applicable corporate and commercial laws.",
        "Any commercial disputes arising from formal engagements shall be resolved pursuant to the arbitration clauses specified in the executed Master Service Agreement or commercial contract.",
      ],
    },
    {
      id: "modifications",
      title: "7. Amendments to Terms",
      content: [
        "We reserve the right to modify or update these Terms at any time to reflect changing legal, statutory, or operational requirements. Updated versions will be posted with a revised 'Last Revised' date.",
      ],
    },
  ] as TermSection[],
};