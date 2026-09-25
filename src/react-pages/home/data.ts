export interface ProjectPhoto {
  id: string;
  src: string;
  alt: string;
  title?: string;
  category?: "Dredging" | "Piling" | "Civil Works" | "Heavy Equipment";
  location?: string;
}

export interface Metric {
  label: string;
  value: string;
  subtext: string;
}

export const HOME_PAGE_DATA = {
  hero: {
    badge: "100% Indigenous Nigerian Engineering Firm",
    title: "Building Heavy Marine, Civil & Energy Infrastructure",
    subtitle:
      "Parkers 1st Engineering Limited (PEL) delivers specialized civil construction, shoreline protection, dredging operations, and heavy machinery leasing across land and swamp terrains in Nigeria.",
    metrics: [
      { label: "Owned Fleet Assets", value: "60+", subtext: "Heavy Machinery & Support Units" },
      { label: "Local Content Compliance", value: "100%", subtext: "NOGICD Act 2010 Aligned" },
      { label: "Engineering Scope", value: "12", subtext: "Core Specialized Domains" },
    ] as Metric[],
  },

  featuredServices: [
    {
      id: "piling",
      title: "Piling & Shoreline Protection",
      desc: "Sheet piling, concrete foundation piles, and coastal revetments engineered to combat riverine erosion.",
      category: "Marine Engineering",
    },
    {
      id: "dredging",
      title: "Dredging Operations",
      desc: "Capital dredging, channel deepening, and swamp land reclamation using cutter and suction dredgers.",
      category: "Coastal & Riverine",
    },
    {
      id: "equipment-leasing",
      title: "Heavy Machinery Leasing",
      desc: "Instant mobilization of CAT Bulldozers, WILCO Swamp Excavators, and GROVE Cranes across Nigeria.",
      category: "Fleet Logistics",
    },
    {
      id: "piping",
      title: "Flow Line & Piping Construction",
      desc: "Precision fabrication, trenching, laying, and hydro-testing for oil and gas flow lines in remote zones.",
      category: "Energy Services",
    },
  ],

  galleryPhotos: [
    {
      id: "photo-1",
      src: "/images/gallery/dredging-operations.jpg",
      alt: "Dredging river bed operational site in Nigeria",
      title: "Dredging & River Channel Maintenance",
      category: "Dredging",
      location: "Niger Delta Region",
    },
    {
      id: "photo-2",
      src: "/images/gallery/heavy-machinery.jpg",
      alt: "CAT Excavator and heavy machinery on site",
      title: "Heavy Equipment Mobilization",
      category: "Heavy Equipment",
      location: "Onshore Civil Site",
    },
    {
      id: "photo-3",
      src: "/images/gallery/civil-earthworks.jpg",
      alt: "Civil earthworks site preparation",
      category: "Civil Works",
    },
  ] as ProjectPhoto[],
};