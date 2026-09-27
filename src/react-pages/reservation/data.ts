import { 
  Waves, 
  Flame, 
  Sun, 
  Moon, 
  Users, 
  Sparkles, 
  Crown, 
  Utensils, 
  Clock, 
  CheckCircle2, 
  ShieldCheck 
} from "lucide-react";

export interface SeatingZone {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  capacity: string;
  minimumSpend: string;
  icon: any;
  image: string;
}

export interface PreorderItem {
  id: string;
  name: string;
  priceJMD: number;
  formattedPrice: string;
  tag: string;
  description: string;
  image: string;
}

export const reservationData = {
  hero: {
    badge: "Instant Table Confirmation",
    title: "Secure Your Riverside Spot",
    subtitle: "Select your seating zone, time slot, and pre-order your woodfire feast to guarantee immediate kitchen priority.",
  },

  timeSlots: [
    { id: "12:00 PM", label: "12:00 PM", period: "Afternoon Chill", icon: Sun },
    { id: "2:00 PM", label: "2:00 PM", period: "Peak Woodfire", icon: Flame },
    { id: "4:00 PM", label: "4:00 PM", period: "Sunset Vibe", icon: Waves },
    { id: "6:00 PM", label: "6:00 PM", period: "Ember Glow", icon: Moon },
  ],

  seatingZones: [
    {
      id: "riverside",
      name: "Waterfront & Bankside Deck",
      badge: "Most Popular",
      tagline: "Dip your feet in the spring water while you dine.",
      description: "Tables positioned directly along the natural riverbank. Unmatched mountain stream views and breeze.",
      capacity: "2 – 8 Guests",
      minimumSpend: "$3,000 JMD / person",
      icon: Waves,
      image: "/images/reservation/zone-riverside.png",
    },
    {
      id: "lounge",
      name: "Main Canopy & DJ Lounge",
      badge: "High Energy",
      tagline: "Shaded comfort next to the bar & music setup.",
      description: "Sheltered under bamboo and canvas canopies. Great for groups who want easy access to drinks and the dance floor.",
      capacity: "4 – 12 Guests",
      minimumSpend: "$2,500 JMD / person",
      icon: Flame,
      image: "/images/reservation/zone-lounge.png",
    },
    {
      id: "firepit",
      name: "Evening Bonfire Circle",
      badge: "Sunset & Night",
      tagline: "Warm woodfire embers under fairy lights.",
      description: "Relaxed low-seating arrangements centered around active logwood firepits. Ideal for late afternoon and nighttime gatherings.",
      capacity: "2 – 10 Guests",
      minimumSpend: "$2,500 JMD / person",
      icon: Moon,
      image: "/images/reservation/zone-firepit.png",
    },
  ] as SeatingZone[],

  preorderDishes: [
    {
      id: "mega-platter",
      name: "The Golden Spring Mega Platter",
      priceJMD: 12000,
      formattedPrice: "$12,000 JMD",
      tag: "Feeds 3-4 People",
      description: "Includes jerk chicken, grilled lobster tails, escovitch snapper, festival, and fried plantains.",
      image: "/images/menu/mega-platter.png",
    },
    {
      id: "jerk-chicken-platter",
      name: "Pimento Jerk Chicken Platter",
      priceJMD: 2800,
      formattedPrice: "$2,800 JMD",
      tag: "Individual",
      description: "Slow-smoked over pimento wood, served with 2 festivals and pepper jelly.",
      image: "/images/menu/jerk-chicken.png",
    },
    {
      id: "grilled-lobster",
      name: "Garlic Herb River Lobster",
      priceJMD: 4500,
      formattedPrice: "$4,500 JMD",
      tag: "Chef Special",
      description: "Whole fresh grilled lobster tail basted with scotch bonnet garlic butter.",
      image: "/images/menu/grilled-lobster.png",
    },
  ] as PreorderItem[],

  policies: [
    "Grace Period: Tables are held for up to 30 minutes past your reserved time slot.",
    "Weather Assurance: Shaded canopy coverage is available in case of tropical rain showers.",
    "Payments: Cash, Lynk, and Card/Bank Transfers accepted on site.",
  ],
};