export interface QualityPolicyPoint {
  title: string;
  description: string;
}

export interface HSEPrinciple {
  title: string;
  description: string;
  metric?: string;
}

export interface LocalContentStat {
  label: string;
  value: string;
  description: string;
}

export const COMPLIANCE_PAGE_DATA = {
  hero: {
    badge: "Standards & Governance",
    title: "Quality, HSE & Local Content Compliance",
    subtitle:
      "Parkers 1st Engineering Limited operates under strict ISO Quality Management standards, proactive Environmental Safety frameworks, and 100% Nigerian Content Act policy commitment.",
  },

  isoQuality: {
    title: "ISO 9001:2008 Quality Assurance System",
    description:
      "Our quality management framework guarantees that every civil earthwork, marine dredging, and mechanical piping project complies with international technical specifications and rigorous project controls.",
    pillars: [
      {
        title: "Standardized Operations",
        description:
          "Strict adherence to approved Method Statements, Inspection and Test Plans (ITPs), and Quality Control Checklists across all project sites.",
      },
      {
        title: "Continuous Verification",
        description:
          "Independent geotechnical testing, weld non-destructive testing (NDT), and hydrostatic pressure verifications before hand-over.",
      },
      {
        title: "Equipment & Tool Calibration",
        description:
          "Routine servicing and regular calibration of surveying equipment, hydraulic dredgers, mobile cranes, and pressure testing rigs.",
      },
      {
        title: "Client Feedback & Audit",
        description:
          "Systematic quality audits and client sign-offs at critical project milestones to ensure zero rework.",
      },
    ] as QualityPolicyPoint[],
  },

  hse: {
    title: "Health, Safety, Environment & Security (HSES)",
    description:
      "We operate a zero-tolerance policy towards unsafe practices. Protecting our workforce, host community ecosystems, and client assets remains our primary operational imperative.",
    principles: [
      {
        title: "Zero Lost Time Injuries (LTI)",
        description: "Enforced Daily Toolbox Talks, Job Hazard Analyses (JHA), and mandatory PPE enforcement on all sites.",
        metric: "0 LTI Target",
      },
      {
        title: "Environmental Protection",
        description: "Strict containment protocol for heavy equipment fluids, erosion control, and bio-friendly turbidity management in marine dredging.",
        metric: "ISO 14001 Aligned",
      },
      {
        title: "Host Community Safety",
        description: "Proactive site perimeter security, traffic control marshals, and structured community safety awareness sessions.",
        metric: "100% Safe Operations",
      },
      {
        title: "Emergency Response Preparedness",
        description: "On-site medical first responders, rapid spill response kits, and established evacuation agreements with regional facilities.",
        metric: "24/7 Readiness",
      },
    ] as HSEPrinciple[],
  },

  localContent: {
    title: "Nigerian Oil & Gas Industry Content Development (NOGICD) Act",
    description:
      "As a fully indigenous Nigerian engineering contractor, PEL actively fosters local capacity development through employment, local procurement, and technical skill transfer.",
    stats: [
      {
        label: "Nigerian Workforce",
        value: "100%",
        description: "100% of field technicians, plant operators, and site engineers are indigenous Nigerian professionals.",
      },
      {
        label: "Host Community Hiring",
        value: "70%+",
        description: "Unskilled and semi-skilled labor for localized projects is recruited directly from host communities.",
      },
      {
        label: "Local Vendor Procurement",
        value: "85%+",
        description: "Raw materials, fuel, consumables, and site logistics are sourced through vetted Nigerian suppliers.",
      },
      {
        label: "Engineering Mentorship",
        value: "Annual",
        description: "Graduate engineering schemes and vocational attachments for young Nigerian engineers.",
      },
    ] as LocalContentStat[],
  },
};