export interface ProjectCaseStudy {
  id: string;
  title: string;
  client: string;
  location: string;
  category: "dredging" | "civil" | "piping" | "environmental" | "bush-clearing";
  year: string;
  scope: string;
  valueOrScale?: string;
  status: "Completed" | "Ongoing";
  summary: string;
  highlights: string[];
  equipmentUsed: string[];
}

export const PROJECTS_PAGE_DATA = {
  hero: {
    badge: "Track Record & Case Studies",
    title: "Proven Field Execution Across Nigeria",
    subtitle:
      "A showcase of executed engineering work, ranging from major riverine dredging and sand reclamation to pipeline fire reticulation, highway earthworks, and dense corridor clearing.",
  },

  categories: [
    { id: "all", name: "All Projects" },
    { id: "dredging", name: "Dredging & Reclamation" },
    { id: "civil", name: "Civil & Infrastructure" },
    { id: "piping", name: "Piping & Fire Systems" },
    { id: "environmental", name: "Soil & Marine Works" },
    { id: "bush-clearing", name: "Bush & ROW Clearing" },
  ],

  stats: [
    { label: "Completed Projects", value: "45+" },
    { label: "Sand Reclaimed", value: "2.5M+ m³" },
    { label: "Pipeline Reticulation", value: "80+ km" },
    { label: "Safety Record", value: "0 LTI" },
  ],

  projects: [
    {
      id: "river-niger-dredging-stockpile",
      title: "River Niger Channel Dredging & Industrial Sand Stockpiling",
      client: "Federal / Regional Infrastructure Partner",
      location: "Onitsha / Anambra River Basin, Anambra State",
      category: "dredging",
      year: "2023 - 2024",
      scope: "Channel Deepening & Sand Reclamation",
      valueOrScale: "Over 800,000 m³ Reclaimed",
      status: "Completed",
      summary:
        "Mobilized hydraulic cutter suction dredgers to clear navigational shoals along the River Niger basin, reclaiming high-grade sharp sand for regional commercial and civil development projects.",
      highlights: [
        "Continuous 24-hour dredging operations with minimal environmental impact.",
        "Created a 35-hectare consolidated sand stockpile yard with dedicated discharge lines.",
        "Maintained strict riverine safety and community stakeholder relations.",
      ],
      equipmentUsed: [
        "18-inch Cutter Suction Dredger",
        "CAT 966 Wheel Loaders",
        "CAT 320 Excavators",
        "Marine Tug & Support Boats",
      ],
    },
    {
      id: "awka-urban-road-subgrade",
      title: "Urban Highway Subgrade Earthworks & Drainage Reticulation",
      client: "State Ministry of Works & Infrastructure",
      location: "Awka North & Central, Anambra State",
      category: "civil",
      year: "2023",
      scope: "Civil Earthworks & Road Infrastructure",
      valueOrScale: "14.2 km Dual Carriage Access Road",
      status: "Completed",
      summary:
        "Execution of heavy earthmoving, topsoil stripping, subgrade stabilization, and reinforced concrete drainage channels to prepare dual carriage access roads in dense soil corridors.",
      highlights: [
        "Excavated and stabilized over 120,000 m³ of expansive clay soil.",
        "Poured over 8,500 meters of heavy-duty precast drainage channels.",
        "Delivered 3 weeks ahead of the rainy season schedule.",
      ],
      equipmentUsed: [
        "CAT D6R Bulldozers (x3)",
        "CAT 14H Motor Grader",
        "Vibrating Road Rollers (x2)",
        "Mack Dump Trucks (x10)",
      ],
    },
    {
      id: "industrial-park-fire-water-piping",
      title: "High-Pressure Industrial Fire Reticulation & Hydrant Network",
      client: "Manufacturing & Industrial Plant Developer",
      location: "Ogbaru Industrial Corridor, Anambra State",
      category: "piping",
      year: "2022 - 2023",
      scope: "Pipeline Engineering & Fire Systems",
      valueOrScale: "8.5 km Ring Main Network",
      status: "Completed",
      summary:
        "Design support, trenching, fitting, and pressure testing of an industrial-grade high-pressure fire water reticulation system equipped with automatic diesel pump feeds and ring hydrants.",
      highlights: [
        "Underground HDPE & Carbon Steel line installation certified at 16 bar test pressure.",
        "Installed 42 heavy-duty industrial fire hydrants and monitor stations.",
        "Zero Lost Time Injury (LTI) across 45,000 man-hours.",
      ],
      equipmentUsed: [
        "CAT 320CL Excavator",
        "GROVE 20t Mobile Crane",
        "Butt Fusion Welding Units",
        "Hydrostatic Pressure Test Rig",
      ],
    },
    {
      id: "swamp-pipeline-corridor-clearing",
      title: "Amphibious Swamp Pipeline Right-of-Way (ROW) Clearing",
      client: "Oil & Gas Subcontractor Consortium",
      location: "Niger Delta Riverine Belt",
      category: "bush-clearing",
      year: "2023",
      scope: "Swamp Clearing & Channel Preparation",
      valueOrScale: "22 km Swamp Corridor",
      status: "Completed",
      summary:
        "Deployment of swamp buggies and amphibious clearing spreads to clear dense aquatic vegetation, mangroves, and floating logs along a designated energy pipeline alignment.",
      highlights: [
        "Cleared 22 km of challenging marshland without damaging existing underground utilities.",
        "Navigated extreme tidal fluctuations using specialized WILCO track buggies.",
        "Full compliance with local environmental protection regulations.",
      ],
      equipmentUsed: [
        "WILCO Amphibious Swamp Excavators (x2)",
        "Heavy Duty Forestry Mulchers",
        "Aquatic Weed Harvester Spread",
      ],
    },
    {
      id: "shoreline-erosion-control-piling",
      title: "Riverbank Erosion Stabilization & Sheet Piling Installation",
      client: "Maritime & Port Facilities Operator",
      location: "Onitsha South Riverbank",
      category: "environmental",
      year: "2024",
      scope: "Shoreline Protection & Soil Engineering",
      valueOrScale: "1.2 km Shoreline Protection",
      status: "Completed",
      summary:
        "Geotechnical soil investigation, slope stabilization, and driven steel sheet piling to prevent riverbank slumping and protect critical commercial logistics facilities.",
      highlights: [
        "Driven 450+ steel sheet piles to depth under challenging alluvial soil conditions.",
        "Constructed stone pitching and geotextile slope reinforcement.",
        "Protected adjacent structural assets from ongoing water scour.",
      ],
      equipmentUsed: [
        "GROVE 30t Crane with Vibratory Hammer",
        "CAT 325CL Long Reach Excavator",
        "Geotextile Installation Rigs",
      ],
    },
    {
      id: "ongoing-commercial-site-preparation",
      title: "Multi-Hectare Commercial Layout Earthworks & Land Reclamation",
      client: "Private Real Estate & Logistics Hub",
      location: "Awka North, Anambra State",
      category: "civil",
      year: "2025 - Present",
      scope: "Bulk Earthworks & Site Prep",
      valueOrScale: "50 Hectares Parcel",
      status: "Ongoing",
      summary:
        "Comprehensive site clearing, cut-and-fill operations, foundation preloading, and perimeter access road construction for a multi-use logistics and commercial layout.",
      highlights: [
        "Over 300,000 m³ of bulk fill import and compaction in progress.",
        "Active fleet mobilization of 12 heavy earthmovers simultaneously.",
      ],
      equipmentUsed: [
        "CAT D6R Bulldozers",
        "CAT 966 Loaders",
        "Volvo Articulated Dump Trucks",
        "Vibrating Rollers",
      ],
    },
  ] as ProjectCaseStudy[],
};