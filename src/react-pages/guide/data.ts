import { 
  Car, 
  Clock, 
  CreditCard, 
  Flame, 
  MapPin, 
  ShieldAlert, 
  Shirt, 
  Sparkles, 
  Sun, 
  Utensils, 
  Waves, 
  Zap 
} from "lucide-react";

export interface GuideSection {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  icon: any;
  tips: {
    title: string;
    description: string;
    icon: any;
    tag?: string;
  }[];
  // Visual image guide
  bgImage: string;
}

export interface QuickRule {
  icon: any;
  title: string;
  detail: string;
}

export const guideData = {
  hero: {
    badge: "Visitor Guide & Insider Tips",
    title: "How To Saturday Like A Pro",
    subtitle:
      "Everything you need to know before heading up to Golden Spring, Mt. James. From what to wear to how we pace our woodfire platters.",
    bgImage: "/images/guide/hero-river-guests.png", // RECOMMENDED IMAGE: Wide aerial view of guests dining on wooden tables near the river bank
  },

  // 1. Quick Glance Survival Rules
  quickRules: [
    {
      icon: Clock,
      title: "Peak Hours",
      detail: "3:00 PM – 7:00 PM (Arrive by 2:00 PM for prime waterfront seating)",
    },
    {
      icon: CreditCard,
      title: "Payment Types",
      detail: "Cash & Card accepted. (Cash is recommended for direct bar orders)",
    },
    {
      icon: Shirt,
      title: "Dress Code",
      detail: "Casual & River-ready! Swimwear with cover-ups welcome.",
    },
    {
      icon: Car,
      title: "Parking",
      detail: "Free secure parking on-site with guided traffic attendants.",
    },
  ] as QuickRule[],

  // 2. Deep Dive Experience Categories
  sections: [
    {
      id: "arrival",
      badge: "Getting Here",
      title: "Arrival & Seating",
      subtitle: "Navigating your way to the river",
      icon: MapPin,
      bgImage: "/images/guide/parking-arrival.png", // RECOMMENDED IMAGE: Signage at Golden Spring entrance with parking attendant
      tips: [
        {
          title: "The Scenic Drive",
          description: "We are located 20 minutes from Manor Park, Stony Hill. Follow the main road toward Mt. James.",
          icon: Car,
          tag: "Directions",
        },
        {
          title: "First-Come Waterfront Seating",
          description: "Riverfront tables fill fast! Reserved tables are held for 20 minutes past reservation time.",
          icon: Clock,
          tag: "Pro-Tip",
        },
      ],
    },
    {
      id: "food-pacing",
      badge: "Culinary Flow",
      title: "Woodfire Platter Pacing",
      subtitle: "Why fresh smoke takes time",
      icon: Flame,
      bgImage: "/images/guide/woodfire-grill-smoke.png", // RECOMMENDED IMAGE: Chef turning ribs over glowing embers with smoke rising
      tips: [
        {
          title: "Made Fresh To Order",
          description: "All meats are slow-cooked over authentic pimento wood. Platters take 20–30 minutes during peak hours.",
          icon: Utensils,
          tag: "Patience Pays",
        },
        {
          title: "Pre-order Starters",
          description: "Order grilled corn, bammy bites, or punch right when you sit so you can nibble while the main platters roast.",
          icon: Zap,
          tag: "Smart Ordering",
        },
      ],
    },
    {
      id: "river-vibes",
      badge: "Water & Vibe",
      title: "River Safety & Chill",
      subtitle: "Enjoying the Golden Spring waters",
      icon: Waves,
      bgImage: "/images/guide/river-dipping.png", // RECOMMENDED IMAGE: Guests relaxing in shallow clear river water with drinks in hand
      tips: [
        {
          title: "Water Shoes & Towels",
          description: "The river stones can be slippery. We recommend bringing water shoes and a fresh towel.",
          icon: Sun,
          tag: "What To Bring",
        },
        {
          title: "Drink & Dip Responsibility",
          description: "Enjoy the cool waters safely. No glass bottles are permitted in the natural river pool area.",
          icon: ShieldAlert,
          tag: "Safety First",
        },
      ],
    },
  ] as GuideSection[],

  // 3. Checklist of items to bring
  checklist: [
    { item: "Swimwear / Change of clothes", recommended: true },
    { item: "Water shoes for slippery rocks", recommended: true },
    { item: "Sunscreen & Sunglasses", recommended: true },
    { item: "Bug Spray / Insect Repellent", recommended: true },
    { item: "Cash for quick bar & side purchases", recommended: true },
    { item: "Your appetite and good energy!", recommended: true },
  ],
};