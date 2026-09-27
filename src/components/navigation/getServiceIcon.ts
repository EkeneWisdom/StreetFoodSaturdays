import {
  // Main Navigation & Dining Hubs
  Home,
  Utensils,
  CalendarCheck,
  Flame,
  Waves,
  MapPin,
  Sparkles,

  // Food & Menu Categories
  Beef,
  Fish,
  Wine,
  Coffee,
  Beer,
  Drumstick,
  Soup,

  // Story, Media & Venue Features
  BookOpen,
  Images,
  PartyPopper,
  Info,
  PhoneCall,
  Users,
  Compass,

  // Fallback / Generic
  Layers,
} from "lucide-react";

/**
 * Dynamic Lucide Icon Mapper tailored for Street Food Saturdays:
 * Woodfire Dining, Riverfront Vibes, Platters, Reservations & Venue Guides.
 */
export const getServiceIcon = (keyOrTitle: string) => {
  const lower = (keyOrTitle || "").toLowerCase();

  // 0. Main Navigation Hubs
  if (lower === "home") return Home;
  if (lower.includes("menu") || lower.includes("platter") || lower.includes("food") || lower.includes("dishes")) {
    return Utensils;
  }
  if (lower.includes("reserve") || lower.includes("booking") || lower.includes("table")) {
    return CalendarCheck;
  }
  if (lower.includes("woodfire") || lower.includes("grill") || lower.includes("smoke") || lower.includes("barbecue") || lower.includes("bbq")) {
    return Flame;
  }
  if (lower.includes("river") || lower.includes("waterside") || lower.includes("experience") || lower.includes("vibe")) {
    return Waves;
  }
  if (lower.includes("location") || lower.includes("map") || lower.includes("directions") || lower.includes("golden spring")) {
    return MapPin;
  }

  // 1. Specific Menu & Culinary Categories
  if (lower.includes("steak") || lower.includes("pork") || lower.includes("brisket") || lower.includes("ribs") || lower.includes("meat")) {
    return Beef;
  }
  if (lower.includes("chicken") || lower.includes("poultry") || lower.includes("wings")) {
    return Drumstick;
  }
  if (lower.includes("fish") || lower.includes("seafood") || lower.includes("lobster") || lower.includes("shrimp")) {
    return Fish;
  }
  if (lower.includes("cocktail") || lower.includes("wine") || lower.includes("bar")) {
    return Wine;
  }
  if (lower.includes("beer") || lower.includes("brew") || lower.includes("draft")) {
    return Beer;
  }
  if (lower.includes("coffee") || lower.includes("beverage") || lower.includes("drink")) {
    return Coffee;
  }
  if (lower.includes("sides") || lower.includes("soup") || lower.includes("sauce")) {
    return Soup;
  }

  // 2. Events, Media & Atmosphere
  if (lower.includes("gallery") || lower.includes("media") || lower.includes("photos")) {
    return Images;
  }
  if (lower.includes("event") || lower.includes("party") || lower.includes("saturday") || lower.includes("catering")) {
    return PartyPopper;
  }
  if (lower.includes("story") || lower.includes("journal") || lower.includes("blog")) {
    return BookOpen;
  }

  // 3. About & Contact
  if (lower.includes("about") || lower.includes("chef") || lower.includes("story")) {
    return Info;
  }
  if (lower.includes("contact") || lower.includes("reach us") || lower.includes("whatsapp")) {
    return PhoneCall;
  }
  if (lower.includes("team") || lower.includes("community") || lower.includes("guests")) {
    return Users;
  }
  if (lower.includes("explore") || lower.includes("guide")) {
    return Compass;
  }

  // Default fallback icon
  return Sparkles;
};

export default getServiceIcon;