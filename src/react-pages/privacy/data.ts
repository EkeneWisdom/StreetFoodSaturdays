export interface PolicySection {
  id: string;
  title: string;
  content: string[];
  bullets?: string[];
}

export const PRIVACY_POLICY_DATA = {
  badge: "Legal & Governance",
  title: "Privacy Policy",
  lastUpdated: "September 16, 2026",
  effectiveDate: "September 16, 2026",
  intro:
    "This Privacy Policy describes how we collect, use, disclose, and safeguard your personal information when you visit our website, submit requests for engineering quotes, or engage with our corporate services. Please read this policy carefully to understand our practices regarding your data.",

  sections: [
    {
      id: "scope-and-compliance",
      title: "1. Scope & Regulatory Framework",
      content: [
        "This Privacy Policy applies to all interactions with our digital platforms, communications, and procurement portals. We comply with applicable international data protection frameworks, including:",
      ],
      bullets: [
        "Nigeria Data Protection Act (NDPA) 2023",
        "General Data Protection Regulation (GDPR) (EU/UK)",
        "California Consumer Privacy Act (CCPA / CPRA) principles where applicable",
        "Applicable international cross-border data transfer standards",
      ],
    },
    {
      id: "information-collected",
      title: "2. Information We Collect",
      content: [
        "We collect information that identifies, relates to, or could reasonably be linked with you ('Personal Data'). The categories of information we collect depend on your interaction with our platforms:",
      ],
      bullets: [
        "Identity Data: Full name, professional job title, company/organization name, and business identity details provided via contact or tender forms.",
        "Contact Data: Business email address, telephone numbers, and physical corporate address.",
        "Technical & Usage Data: IP address, browser type, device information, operating system, referring URLs, pages viewed, and access timestamps collected automatically via server logs and analytical cookies.",
        "Commercial & Inquiry Data: Details regarding equipment lease inquiries, engineering tender specifications, RFQs, and project consultations.",
      ],
    },
    {
      id: "lawful-basis",
      title: "3. Lawful Basis & How We Use Your Data",
      content: [
        "We process Personal Data under the following lawful bases:",
      ],
      bullets: [
        "Contractual Necessity: To process equipment lease requests, evaluate engineering tenders, and perform pre-contractual obligations.",
        "Legitimate Interests: To improve our engineering fleet services, secure our web infrastructure, conduct business analytics, and maintain corporate communications.",
        "Legal Compliance: To comply with regulatory obligations, anti-money laundering (AML) directives, tax laws, and industry compliance audits.",
        "Consent: Where you explicitly consent to receiving company announcements or direct marketing updates (which you can revoke at any time).",
      ],
    },
    {
      id: "data-sharing",
      title: "4. Data Sharing & Third-Party Disclosures",
      content: [
        "We do not sell, rent, or trade your Personal Data to third parties for marketing purposes. We may share your information only under the following circumstances:",
      ],
      bullets: [
        "Vetted Service Providers: Trusted IT infrastructure providers, web hosts, cloud storage vendors, and communication processors operating under strict confidentiality and data processing agreements (DPAs).",
        "Regulatory & Legal Authorities: Statutory agencies, law enforcement, or regulatory bodies when required by law, subpoena, or official government audit.",
        "Corporate Reorganization: Relevant third parties in connection with any merger, asset acquisition, or corporate restructuring, provided the receiving party upholds equivalent privacy standards.",
      ],
    },
    {
      id: "data-security",
      title: "5. International Data Transfers & Security",
      content: [
        "Your data may be stored or processed in servers located outside your jurisdiction. We implement appropriate technical, organizational, and physical safeguards—including SSL/TLS encryption, access controls, network firewalls, and regular vulnerability assessments—to prevent unauthorized access, loss, or disclosure.",
        "When transferring data internationally, we ensure appropriate safeguards such as Standard Contractual Clauses (SCCs) or adequacy decisions are enforced.",
      ],
    },
    {
      id: "data-retention",
      title: "6. Data Retention Policy",
      content: [
        "We retain Personal Data only as long as necessary to fulfill the purposes outlined in this policy, satisfy contractual commitments, or comply with statutory retention periods under applicable engineering and corporate laws. When Personal Data is no longer required, it is securely deleted or anonymized.",
      ],
    },
    {
      id: "data-subject-rights",
      title: "7. Your Data Subject Rights",
      content: [
        "Depending on your jurisdiction, you have the following rights regarding your Personal Data:",
      ],
      bullets: [
        "Right of Access: Request a copy of the Personal Data we hold about you.",
        "Right to Rectification: Request correction of inaccurate or incomplete information.",
        "Right to Erasure ('Right to be Forgotten'): Request deletion of your data when it is no longer required for the original processing purpose.",
        "Right to Restrict or Object: Object to processing based on legitimate interests or request processing restrictions.",
        "Right to Data Portability: Receive your Personal Data in a structured, machine-readable format.",
        "Right to Withdraw Consent: Revoke consent previously granted for optional processing.",
      ],
    },
    {
      id: "cookies",
      title: "8. Cookies & Tracking Technologies",
      content: [
        "Our website utilizes essential technical cookies required for platform functionality and security. We may also use privacy-respecting analytical cookies to measure visitor traffic and platform performance.",
        "You can control or disable non-essential cookies through your web browser settings. Disabling essential cookies may impact certain site features.",
      ],
    },
    {
      id: "contact-dpo",
      title: "9. How to Exercise Your Rights & Contact Us",
      content: [
        "To exercise any of your data subject rights, submit a privacy query, or file a complaint regarding our data handling practices, please reach out to our Data Protection Officer (DPO) using the dynamic contact channels provided below.",
      ],
    },
  ] as PolicySection[],
};