export interface ServiceCategory {
  id: string;
  title: string;
  shortDesc: string;
  scopePoints: string[];
  tag: "Marine & Dredging" | "Civil & Structural" | "Pipeline & Energy" | "Equipment & Logistics";
}

export interface EquipmentFleetItem {
  sno: number;
  description: string;
  type: string;
  quantity: number;
  category: "Dry Equipment" | "Auxiliary & Support";
}

export interface QHSEFrameworkItem {
  id: string;
  title: string;
  description: string;
  bullets: string[];
}

export const SERVICES_PAGE_DATA = {
  hero: {
    badge: "Technical Services & Scope",
    title: "Specialized Marine, Civil & Energy Infrastructure Services",
    subtitle:
      "Parkers 1st Engineering Limited (PEL) deploys robust heavy machinery and specialized engineering expertise across land and water terrains across Nigeria.",
  },

  services: [
    {
      id: "piling-shoreline",
      title: "Piling, Shoreline Protection & Erosion Control",
      tag: "Marine & Dredging",
      shortDesc:
        "Comprehensive coastal engineering solutions designed to mitigate erosion, stabilize riverbanks, and construct heavy-duty load-bearing piles.",
      scopePoints: [
        "Sheet piling & concrete foundation piling",
        "Coastal shoreline stabilization & revetments",
        "Erosion control structures for riverine zones",
      ],
    },
    {
      id: "dredging-ops",
      title: "Dredging Operations",
      tag: "Marine & Dredging",
      shortDesc:
        "Capital and maintenance dredging for navigation channels, ports, and deep-water access routes using high-capacity cutter and suction spreads.",
      scopePoints: [
        "Channel deepening and maintenance dredging",
        "Riverbed excavation and stock piling",
        "Removal of silt and environmental sediment remediation",
      ],
    },
    {
      id: "road-engineering",
      title: "Road & Engineering Construction",
      tag: "Civil & Structural",
      shortDesc:
        "Turnkey road infrastructure, earthworks, and structural civil works designed to sustain heavy industrial traffic and extreme soil conditions.",
      scopePoints: [
        "Rigid and flexible asphalt road construction",
        "Earthworks, sub-grade preparation, and compaction",
        "Drainage networks, culverts, and retaining walls",
      ],
    },
    {
      id: "flowline-piping",
      title: "Flow Line & Piping Construction",
      tag: "Pipeline & Energy",
      shortDesc:
        "Precision pipeline fabrication, trenching, laying, and tie-ins for oil and gas flow lines across land and swamp terrains.",
      scopePoints: [
        "Cross-country and swamp pipeline construction",
        "Pressure testing and hydro-testing services",
        "Pipeline trenching, backfilling, and right-of-way management",
      ],
    },
    {
      id: "jetties-quaywalls",
      title: "Construction of Jetties & Quay Walls",
      tag: "Marine & Dredging",
      shortDesc:
        "Heavy marine civil structures designed to facilitate offshore vessel berths, cargo loading, and coastal logistics nodes.",
      scopePoints: [
        "Concrete and steel quay wall structures",
        "Loading jetty construction for oil & gas terminals",
        "Berthing dolphin structures and bollard installations",
      ],
    },
    {
      id: "land-reclamation",
      title: "Land Reclamation",
      tag: "Marine & Dredging",
      shortDesc:
        "Transforming waterlogged or submerged terrains into solid development-ready plots through hydraulic sand filling.",
      scopePoints: [
        "Hydraulic sand filling and bund wall construction",
        "Swamp reclamation for oilfield locations",
        "Site level optimization for commercial developments",
      ],
    },
    {
      id: "procurement-logistics",
      title: "Procurement & Logistics Support",
      tag: "Equipment & Logistics",
      shortDesc:
        "Strategic end-to-end supply chain management for heavy engineering components, specialty tools, and remote site supply lines.",
      scopePoints: [
        "Technical equipment sourcing and importation support",
        "Remote project site delivery and material handling",
        "Third-party vendor verification and quality assurance",
      ],
    },
    {
      id: "equipment-leasing",
      title: "Leasing of Heavy Duty Equipment",
      tag: "Equipment & Logistics",
      shortDesc:
        "Short and long-term lease arrangements for heavy earthmoving, marine dredging, and material transport fleets.",
      scopePoints: [
        "Certified operators and site maintenance personnel included",
        "Flexible mobilization terms for remote swamp/land locations",
        "Rigid pre-mobilization safety and mechanical audits",
      ],
    },
    {
      id: "soil-improvement",
      title: "Soil Improvement & Environmental Management",
      tag: "Civil & Structural",
      shortDesc:
        "Soil stabilization techniques and environmental remediation to restore contaminated land and reinforce low bearing capacity soils.",
      scopePoints: [
        "Ground stabilization and soil consolidation",
        "Environmental impact remediation and spill site cleanup",
        "Erosion prevention matrices and slope stabilization",
      ],
    },
    {
      id: "survey-soil-investigation",
      title: "Survey & Soil Investigation",
      tag: "Civil & Structural",
      shortDesc:
        "Geotechnical and bathymetric surveys providing high-precision data on soil integrity, seabed profiles, and site topographies.",
      scopePoints: [
        "Bathymetric surveys for marine and river dredging",
        "Geotechnical soil boring and cone penetration testing (CPT)",
        "Topographical mapping and boundary surveys",
      ],
    },
    {
      id: "tank-preloads",
      title: "Installation of Preloads for Tank Foundations",
      tag: "Civil & Structural",
      shortDesc:
        "Engineered preload surcharge placement to accelerate settlement and ensure long-term stability for large storage tank foundations.",
      scopePoints: [
        "Surcharge load calculation and sand fill placement",
        "Settlement monitoring and instrumentation readout",
        "Preload removal and final foundation pad grading",
      ],
    },
    {
      id: "site-preparation",
      title: "Site Preparation",
      tag: "Civil & Structural",
      shortDesc:
        "Comprehensive site clearing, bush clearing, cut-and-fill operations, and access road construction for heavy industrial projects.",
      scopePoints: [
        "Site clearing, grubbing, and topsoil stripping",
        "Access road formation and temporary drainage",
        "Platform grading and perimeter fencing",
      ],
    },
  ] as ServiceCategory[],

  equipmentInventory: [
    { sno: 1, description: "Bulldozer", type: "CAT D6R", quantity: 4, category: "Dry Equipment" },
    { sno: 2, description: "Excavator", type: "CAT 320CL; 325CL", quantity: 4, category: "Dry Equipment" },
    { sno: 3, description: "Wheel Loader", type: "CAT 966F, 966G", quantity: 4, category: "Dry Equipment" },
    { sno: 4, description: "Swamp Excavator", type: "WILCO", quantity: 2, category: "Dry Equipment" },
    { sno: 5, description: "Grader", type: "CAT 14H", quantity: 1, category: "Dry Equipment" },
    { sno: 6, description: "Vibrating Road Roller", type: "W1105D; CAT CP-563C", quantity: 5, category: "Dry Equipment" },
    { sno: 7, description: "Tanker", type: "MACK", quantity: 3, category: "Dry Equipment" },
    { sno: 8, description: "Trailer Truck", type: "MACK / MAN", quantity: 5, category: "Dry Equipment" },
    { sno: 9, description: "Dump Truck (Dumper)", type: "VOLVO A30C; A25D / CAT D400E", quantity: 5, category: "Dry Equipment" },
    { sno: 10, description: "Grove Crane 20t, 30t", type: "GROVES", quantity: 2, category: "Dry Equipment" },
    { sno: 11, description: "Mixer Truck", type: "MAN DIESEL", quantity: 2, category: "Dry Equipment" },
    { sno: 12, description: "Air Compressor", type: "INGERSOLL RAND 750", quantity: 3, category: "Auxiliary & Support" },
    { sno: 13, description: "Power Generator (Various KVA)", type: "FG WILSON", quantity: 6, category: "Auxiliary & Support" },
    { sno: 14, description: "Jack Hammer", type: "ATLAS COPCO Pionjars", quantity: 3, category: "Auxiliary & Support" },
    { sno: 15, description: "Vehicles (Bus, Pick-up, Van etc)", type: "Various", quantity: 14, category: "Auxiliary & Support" },
    { sno: 16, description: "Dewatering Pump (Varisco)", type: "Varisco", quantity: 2, category: "Auxiliary & Support" },
  ] as EquipmentFleetItem[],

  qhseFramework: [
    {
      id: "quality-policy",
      title: "ISO 9001:2008 Quality Policy",
      description:
        "PEL maintains strict adherence to ISO 9001:2008 standards across procurement, engineering execution, and subcontractor management.",
      bullets: [
        "Continuous evaluation of quality system procedures for each project phase",
        "Direct accountability of line management for quality compliance",
        "Comprehensive quality awareness training and up-to-date technique adoption",
        "Formal corrective action plans for non-conformance situations",
      ],
    },
    {
      id: "hses-policy",
      title: "Health, Safety, Environment & Security (HSES)",
      description:
        "Every operation is structured to safeguard personnel, host communities, and surrounding ecosystems under Managing Director leadership.",
      bullets: [
        "Zero-compromise personal safety responsibility for all field and office personnel",
        "Project-specific HSES plans tailored to land, swamp, and marine terrains",
        "Proactive environmental impact minimization during dredging and excavation",
        "Regular safety reviews and emergency response readiness audits",
      ],
    },
  ] as QHSEFrameworkItem[],
};