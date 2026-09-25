import { 

  //Main Menu Hub
  Home,
  Briefcase,
  Ship,

  // Core Base Icons
  ArrowRight, 
  Sparkles, 
  ChevronRight, 
  Layers, 
  
  // Marine & Dredging
  Anchor, 
  Waves, 
  
  // Civil & Heavy Equipment
  HardHat, 
  Truck, 
  Tractor, 
  Shovel, 
  
  // Industrial & Piping
  Pipette, 
  Wrench, 
  Flame, 
  
  // Compliance & Environmental
  ShieldCheck, 
  Trees, 
  FileText, 
  
  // Media, Contact & Careers
  Images, 
  FolderKanban, 
  Building2, 
  PhoneCall, 
  Users
} from "lucide-react";


/**
 * Dynamic Lucide Icon Mapper tailored for Heavy Civil, Marine Fleet & Engineering Hubs
 */

export const getServiceIcon = (keyOrTitle: string) => {
  const lower = (keyOrTitle || "").toLowerCase();

  // 0. Main Menu Hub
  if (lower === "home") return Home;
  if (lower === "services" || lower.includes("services")) return Briefcase; // or Layers / Wrench
  if (lower === "fleet" || lower.includes("fleet") || lower.includes("machinery")) return Ship; // or Truck / Construction
  if (lower.includes("projects")) return FolderKanban;
  if (lower.includes("company")) return Building2;

  // 1. Services Hub
  if (lower.includes("dredging") || lower.includes("reclamation")) return Anchor;
  if (lower.includes("civil") || lower.includes("structural")) return HardHat;
  if (lower.includes("piping") || lower.includes("fire")) return Flame;
  if (lower.includes("mechanical") || lower.includes("maintenance")) return Wrench;
  if (lower.includes("environmental") || lower.includes("soil")) return Trees;

  // 2. Fleet & Machinery Hub
  if (lower.includes("bush clearing")) return Tractor;
  if (lower.includes("water-clearing") || lower.includes("swamp")) return Waves;
  if (lower.includes("earthmoving machinery")) return Shovel;
  if (lower.includes("dredging-marine")) return Anchor;
  if (lower.includes("logistics") || lower.includes("crane")) return Truck;

  // 3. Projects Hub
  if (lower.includes("executed") || lower.includes("projects-list")) return FolderKanban;
  if (lower.includes("gallery") || lower.includes("media")) return Images;

  // 4. Company Hub
  if (lower.includes("about")) return Building2;
  if (lower.includes("compliance") || lower.includes("safety")) return ShieldCheck;
  if (lower.includes("contact") || lower.includes("head office")) return PhoneCall;
  if (lower.includes("careers") || lower.includes("community")) return Users;

  // Default fallback icon
  return Layers;

};

export default getServiceIcon;
