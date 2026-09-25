export interface CareerHero {
  badge: string;
  title: string;
  subtitle: string;
}

export interface CareerStat {
  value: string;
  label: string;
  detail: string;
}

export interface CultureValue {
  id: string;
  title: string;
  description: string;
  category: string;
}

export interface JobCategory {
  id: string;
  name: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: "engineering" | "marine" | "heavy-equipment" | "hse" | "corporate";
  location: string;
  type: "Full-Time" | "Contract" | "Project-Based";
  experience: string;
  description: string;
  keyRequirements: string[];
  featured?: boolean;
}

export const CAREERS_PAGE_DATA = {
  hero: {
    badge: "Join Our Technical Workforce",
    title: "Build Nigeria's Critical Infrastructure With Us",
    subtitle:
      "Parkers 1st Engineering Limited offers rewarding careers for civil engineers, marine specialists, heavy equipment technicians, and operational staff dedicated to engineering excellence.",
  } as CareerHero,

  stats: [
    {
      value: "100%",
      label: "Nigerian Workforce",
      detail: "Committed to local talent development",
    },
    {
      value: "Zero",
      label: "LTI Target",
      detail: "Uncompromising focus on site safety",
    },
    {
      value: "Continuous",
      label: "Technical Training",
      detail: "ISO standard skills development",
    },
    {
      value: "Competitive",
      label: "Welfare Packages",
      detail: "Comprehensive allowances and medicals",
    },
  ] as CareerStat[],

  categories: [
    { id: "all", name: "All Roles" },
    { id: "engineering", name: "Civil & Structural" },
    { id: "marine", name: "Marine & Dredging" },
    { id: "heavy-equipment", name: "Fleet & Equipment" },
    { id: "hse", name: "HSE & Quality" },
    { id: "corporate", name: "Corporate & Admin" },
  ] as JobCategory[],

  openings: [
    {
      id: "job-1",
      title: "Senior Civil / Structural Engineer",
      department: "engineering",
      location: "Port Harcourt / Field Sites",
      type: "Full-Time",
      experience: "7+ Years",
      description:
        "Lead civil works, structural calculations, site supervision, and client liaison for onshore and shoreline stabilization projects.",
      keyRequirements: [
        "B.Sc/HND in Civil Engineering (COREN registration preferred)",
        "Proven experience in shoreline protection or road civil construction",
        "Proficiency in AutoCAD, StaadPro, or Civil 3D",
      ],
      featured: true,
    },
    {
      id: "job-2",
      title: "Dredge Master / Cutter Suction Operator",
      department: "marine",
      location: "Niger Delta Region (Offshore/Riverine)",
      type: "Contract",
      experience: "5+ Years",
      description:
        "Responsible for operating cutter suction dredgers, monitoring slurry density, and executing channel clearing and land reclamation.",
      keyRequirements: [
        "NIMASA certification or equivalent Marine Operator license",
        "Demonstrated track record operating 18-inch to 24-inch CSDs",
        "STCW mandatory safety certifications",
      ],
      featured: true,
    },
    {
      id: "job-3",
      title: "Heavy Equipment Maintenance Supervisor",
      department: "heavy-equipment",
      location: "Central Workshop / Site Bases",
      type: "Full-Time",
      experience: "6+ Years",
      description:
        "Oversee preventative and corrective maintenance for CAT, Wilco, and Grove equipment, including excavators and hydraulic systems.",
      keyRequirements: [
        "Trade Test I or HND in Mechanical/Automotive Engineering",
        "Hands-on expertise with CAT ET diagnostic tools and hydraulic circuits",
        "Strong log management and spare parts inventory experience",
      ],
    },
    {
      id: "job-4",
      title: "HSE Officer (Marine & Construction)",
      department: "hse",
      location: "Project Site Operations",
      type: "Full-Time",
      experience: "4+ Years",
      description:
        "Enforce safety policies, conduct site risk assessments, lead daily toolbox talks, and maintain zero-incident compliance on site.",
      keyRequirements: [
        "NEBOSH IGC or ISPON Level 3 Certification",
        "Prior experience in civil construction or marine dredging environments",
        "Incident investigation and hazard identification competency",
      ],
    },
    {
      id: "job-5",
      title: "Swamp Buggy / Long Reach Excavator Operator",
      department: "heavy-equipment",
      location: "Field Locations",
      type: "Project-Based",
      experience: "3+ Years",
      description:
        "Operate specialized amphibious swamp buggies and long-reach excavators for canalization, piling, and marshland clearing.",
      keyRequirements: [
        "Valid heavy equipment driver's license / certification",
        "Minimum 3 years operating amphibious gear in difficult terrains",
        "Clean safety track record",
      ],
    },
    {
      id: "job-6",
      title: "Project Quantity Surveyor",
      department: "corporate",
      location: "Port Harcourt HQ",
      type: "Full-Time",
      experience: "5+ Years",
      description:
        "Manage project bill of quantities (BOQ), cost evaluations, subcontractor valuations, and material reconciliation.",
      keyRequirements: [
        "B.Sc/HND in Quantity Surveying (NIQS member preferred)",
        "Expertise in heavy civil infrastructure and dredging cost frameworks",
        "Proficiency in MS Excel, CostX, or relevant estimation software",
      ],
    },
  ] as JobOpening[],

  cultureValues: [
    {
      id: "val-1",
      title: "Uncompromising HSE Standards",
      description:
        "Every employee has Stop Work Authority. We prioritize personal safety, environmental responsibility, and zero-loss operations above all.",
      category: "Safety First",
    },
    {
      id: "val-2",
      title: "Local Content Development",
      description:
        "We actively mentor young Nigerian engineers and technical crews, offering structured pathways for professional advancement.",
      category: "Growth",
    },
    {
      id: "val-3",
      title: "Fair & Rewarding Compensation",
      description:
        "We offer competitive salaries, medical cover, site allowances, and annual bonuses aligned with industry standards.",
      category: "Welfare",
    },
    {
      id: "val-4",
      title: "Cross-Field Exposure",
      description:
        "Work on diverse projects, from deep water dredging and shoreline piling to highway construction and equipment logistics.",
      category: "Diversity",
    },
  ] as CultureValue[],
};