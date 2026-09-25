export interface FleetCategory {
  id: string;
  name: string;
  description: string;
}

export interface EquipmentItem {
  id: string;
  title: string;
  category: "bush-clearing" | "water-clearing" | "earthmoving" | "dredging" | "logistics";
  model: string;
  manufacturer: string;
  quantity: number;
  specifications: string[];
  recommendedUses: string[];
}

export const FLEET_PAGE_DATA = {
  hero: {
    badge: "Owned Equipment & Mobilization Fleet",
    title: "Heavy Dry & Marine Equipment Fleet",
    subtitle:
      "Fully serviced, high-capacity machinery ready for deployment across land, swamp, and riverine project terrains throughout Nigeria.",
  },

  categories: [
    { id: "all", name: "All Fleet", description: "Complete operational asset inventory" },
    { id: "bush-clearing", name: "Bush Clearing", description: "Forestry mulchers and land corridor preparation" },
    { id: "water-clearing", name: "Water & Swamp", description: "Amphibious excavators and marshland clearing" },
    { id: "earthmoving", name: "Earthmoving", description: "Bulldozers, excavators, loaders, and graders" },
    { id: "dredging", name: "Dredging & Marine", description: "Cutter suction dredgers and sand pumps" },
    { id: "logistics", name: "Cranes & Haulage", description: "Mobile cranes, trailers, and dumper trucks" },
  ] as FleetCategory[],

  fleetItems: [
    {
      id: "cat-d6r",
      title: "CAT D6R Bulldozer",
      category: "earthmoving",
      model: "D6R Series II / III",
      manufacturer: "Caterpillar",
      quantity: 4,
      specifications: ["Engine Power: 185 HP", "Operating Weight: ~20,000 kg", "Blade Capacity: Heavy Land Clearing & Grading"],
      recommendedUses: ["Right-of-way clearing", "Site prep & earthworks", "Road sub-grade compaction"],
    },
    {
      id: "cat-320cl",
      title: "CAT 320CL / 325CL Excavator",
      category: "earthmoving",
      model: "320CL / 325CL",
      manufacturer: "Caterpillar",
      quantity: 4,
      specifications: ["Bucket Capacity: 1.2 m³ - 1.6 m³", "Max Dig Depth: 6.5m", "Heavy Duty Boom & Stick"],
      recommendedUses: ["Trenching for pipelines", "Foundation excavation", "Demolition & loading"],
    },
    {
      id: "wilco-swamp-excavator",
      title: "WILCO Amphibious Swamp Excavator",
      category: "water-clearing",
      model: "Buggy Mounted",
      manufacturer: "WILCO",
      quantity: 2,
      specifications: ["Pontoon Track System", "Low Ground Pressure: < 2.5 PSI", "Swamp & Riverbed Access"],
      recommendedUses: ["Swamp channel clearing", "Marshland pipeline trenching", "Riverbank stabilization"],
    },
    {
      id: "cat-966f",
      title: "CAT 966F / 966G Wheel Loader",
      category: "earthmoving",
      model: "966F / 966G",
      manufacturer: "Caterpillar",
      quantity: 4,
      specifications: ["Engine Power: 220 HP", "Bucket Capacity: 3.5 m³ - 4.2 m³", "Heavy Duty Axles"],
      recommendedUses: ["Aggregate stockpiling", "Sand loading at dredging dumps", "Material handling"],
    },
    {
      id: "cat-14h",
      title: "CAT 14H Motor Grader",
      category: "earthmoving",
      model: "14H",
      manufacturer: "Caterpillar",
      quantity: 1,
      specifications: ["Moldboard Width: 14 ft", "Engine: CAT 3306 DITA", "Multi-shank Ripper"],
      recommendedUses: ["Access road construction", "Final surface grading", "Drainage slope shaping"],
    },
    {
      id: "vibrating-roller",
      title: "Vibrating Road Roller",
      category: "earthmoving",
      model: "W1105D / CP-563C",
      manufacturer: "Caterpillar / Hamm",
      quantity: 5,
      specifications: ["Operating Weight: 11 - 14 Tonnes", "Dual Amplitude Vibration", "Smooth & Padfoot Shells"],
      recommendedUses: ["Sub-base compaction", "Asphalt compaction", "Embankment stabilization"],
    },
    {
      id: "dredging-spread",
      title: "Cutter Suction Dredger Spread",
      category: "dredging",
      model: "High-Capacity Hydraulic Pump",
      manufacturer: "Custom Marine",
      quantity: 2,
      specifications: ["Discharge Pipe: 12\" - 18\"", "Digging Depth: Up to 14m", "High Solids Concentration Output"],
      recommendedUses: ["Sand stockpiling", "Land reclamation", "River channel deepening"],
    },
    {
      id: "grove-crane",
      title: "GROVE Hydraulic Mobile Crane",
      category: "logistics",
      model: "20 Tonne / 30 Tonne",
      manufacturer: "GROVE",
      quantity: 2,
      specifications: ["Capacity: 20t - 30t", "Telescopic Boom", "Rough Terrain Outriggers"],
      recommendedUses: ["Heavy pipe lifting", "Piling rig support", "Equipment offloading"],
    },
    {
      id: "volvo-dumper",
      title: "Articulated Dump Truck",
      category: "logistics",
      model: "VOLVO A30C / A25D",
      manufacturer: "Volvo / CAT",
      quantity: 5,
      specifications: ["Payload Capacity: 25 - 30 Tonnes", "6x6 All-Wheel Drive", "Rough Terrain Suspension"],
      recommendedUses: ["Spoil removal", "Bulk sand transport", "Quarry material haulage"],
    },
    {
      id: "mack-trailers",
      title: "Heavy Haulage Trailer Truck",
      category: "logistics",
      model: "MACK / MAN Tractor Units",
      manufacturer: "MACK / MAN",
      quantity: 5,
      specifications: ["Multi-axle Lowbed Trailers", "Gross Combination Mass: > 60 Tonnes", "Long-haul certified"],
      recommendedUses: ["Interstate machinery mobilization", "Pipe transportation", "Heavy structural transport"],
    },
  ] as EquipmentItem[],
};