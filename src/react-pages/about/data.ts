export interface ExecutiveProfile {
  title: string;
  role: string;
  quote: string;
}

export interface MetricStat {
  label: string;
  value: string;
  detail: string;
}

export interface WelfareBenefit {
  id: string;
  title: string;
  category: "Compensation" | "Health & Security" | "Allowances";
}

export interface LocalContentTarget {
  id: string;
  pillar: string;
  description: string;
}

export const ABOUT_PAGE_DATA = {
  hero: {
    badge: "100% Nigerian Indigenous Engineering Enterprise",
    title: "Engineering Precision Across Terrains & Tide",
    subtitle:
      "Parkers 1st Engineering Limited (PEL) delivers specialized civil engineering, dredging, and shoreline protection by uniting indigenous expertise with international operational standards.",
  },

  stats: [
    {
      value: "100%",
      label: "Indigenous Equity",
      detail: "Fully Nigerian owned and operated",
    },
    {
      value: "18+",
      label: "Core Administrative Staff",
      detail: "Supported by a dynamic multi-disciplinary site workforce",
    },
    {
      value: "ISO 9001",
      label: "Quality Alignment",
      detail: "Adhering to 2008 Quality Management standards",
    },
    {
      value: "70%+",
      label: "Local Capacity Target",
      detail: "NOGICD Act 2010 compliance target",
    },
  ] as MetricStat[],

  executiveStatement: {
    title: "Managing Director’s Directive",
    role: "Leadership Context",
    quote:
      "Parkers 1st Engineering Limited today is repositioned to be a leader in environmental management and a fast-growing entity in multi-disciplinary engineering and construction. Technical and administrative excellence is only our baseline, our true strength lies in delivering complex, sustainable infrastructure across land and marine environments.",
  } as ExecutiveProfile,

  localContentCommitments: [
    {
      id: "lc-1",
      pillar: "Local Contracting",
      description:
        "Engaging qualified local subcontractors for both technical and specialized non-technical project components.",
    },
    {
      id: "lc-2",
      pillar: "Human Capital Development",
      description:
        "Investing heavily in structured training programs to upgrade Nigerian technical capabilities across marine and civil engineering.",
    },
    {
      id: "lc-3",
      pillar: "Host Community Engagement",
      description:
        "Prioritizing host community labor and material resources while maintaining deep respect for local cultural norms.",
    },
    {
      id: "lc-4",
      pillar: "Infrastructure Investment",
      description:
        "Establishing permanent local operating bases, maintenance facilities, and regional support infrastructure.",
    },
  ] as LocalContentTarget[],

  welfareBenefits: [
    { id: "w1", title: "Transport Allowance", category: "Allowances" },
    { id: "w2", title: "Housing Allowance", category: "Allowances" },
    { id: "w3", title: "Medical Allowance", category: "Health & Security" },
    { id: "w4", title: "Meal Subsidy", category: "Compensation" },
    { id: "w5", title: "Utility Subsidy", category: "Allowances" },
    { id: "w6", title: "Overtime & Year-End Bonus", category: "Compensation" },
    { id: "w7", title: "Annual Micholan Package", category: "Health & Security" },
    { id: "w8", title: "Emergency Salary Advance", category: "Compensation" },
  ] as WelfareBenefit[],
};