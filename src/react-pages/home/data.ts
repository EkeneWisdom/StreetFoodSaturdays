import { 
  Flame, 
  Waves, 
  Music, 
  Sparkles, 
  Clock, 
  MapPin, 
  Star, 
  Utensils, 
  Calendar, 
  Users, 
  ShieldCheck, 
  HeartHandshake
} from "lucide-react";

export const homeData = {
  hero: {
    badge: "Golden Spring, Mt. James • Every Saturday",
    title: "Woodfire Smoke. Crystal Waters. Pure Vibe.",
    subtitle:
      "Escape the city heat for Jamaica's premier riverside culinary sanctuary. Where pimento-smoked jerk chicken meets cool natural spring streams.",
    primaryCta: { text: "Reserve A Riverside Table", href: "/reservations" },
    secondaryCta: { text: "Explore Food Menu", href: "/menu" },
    stats: [
      { value: "100%", label: "Real Woodfire Smoke" },
      { value: "4.9 ★", label: "Guest Vibe Rating" },
      { value: "Fresh", label: "River Water Dips" },
    ],
  },

  // 1. Sensory Feature Highlights
  highlights: [
    {
      icon: Flame,
      title: "Authentic Pimento Pit",
      description: "Low and slow over sweet logwood and pimento coals—no charcoal, no shortcuts.",
      accent: "border-amber-500/30 bg-amber-500/10 text-amber-500",
    },
    {
      icon: Waves,
      title: "Cold River Stream",
      description: "Step right from your dining table into mountain-fresh spring water.",
      accent: "border-sky-500/30 bg-sky-500/10 text-sky-400",
    },
    {
      icon: Music,
      title: "Roots & Afro-Beats",
      description: "Warm vinyl selections and island grooves that let you relax and dance.",
      accent: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    },
  ],

  // 2. Chef's Fire Specialties
  signatures: [
    {
      id: "jerk-chicken",
      name: "Pimento Jerk Chicken Platter",
      price: "$2,800 JMD",
      badge: "Best Seller",
      description: "Smoked over open coals, served with festival, sweet plantains, and signature pepper sauce.",
      image: "/images/menu/jerk-chicken.png", // RECOMMENDED: Close-up juicy charred jerk chicken on banana leaf
      imageAlt: "Authentic Pimento Jerk Chicken",
    },
    {
      id: "grilled-lobster",
      name: "Garlic Butter River Lobster",
      price: "$4,500 JMD",
      badge: "Chef Signature",
      description: "Freshly caught, split on the grill, basted with escovitch garlic herb butter.",
      image: "/images/menu/grilled-lobster.png", // RECOMMENDED: Split grilled lobster with herb butter glistening under sunlight
      imageAlt: "Garlic Butter Grilled Lobster",
    },
    {
      id: "escovitch-fish",
      name: "Red Snapper Escovitch",
      price: "$3,200 JMD",
      badge: "Local Favorite",
      description: "Crispy fried whole snapper topped with spicy pickled scotch bonnet peppers and onions.",
      image: "/images/menu/escovitch-snapper.png", // RECOMMENDED: Fried red snapper topped with vibrant red and yellow peppers
      imageAlt: "Escovitch Red Snapper",
    },
  ],

  // 3. Social Proof & Guest Reviews
  testimonials: [
    {
      quote: "The combination of the cold spring water on your feet and hot jerk chicken in your hands is absolute perfection.",
      author: "Kareem T.",
      role: "Kingston Local",
      rating: 5,
    },
    {
      quote: "Best Saturday vibe in Jamaica. You can come at 1 PM for lunch and stay until 9 PM under the fairy lights.",
      author: "Samantha M.",
      role: "Weekend Traveler",
      rating: 5,
    },
    {
      quote: "The rum punch is potent, the lobster is incredible, and the hospitality makes you feel right at home.",
      author: "Devon B.",
      role: "Foodie & Vlogger",
      rating: 5,
    },
  ],

  // 4. Quick Details & Logistics
  eventDetails: {
    title: "Plan Your Visit This Saturday",
    subtitle: "Everything you need to know before you head up Mt. James",
    items: [
      { icon: Calendar, label: "Schedule", value: "Every Saturday • 12:00 PM – Late" },
      { icon: MapPin, label: "Location", value: "Golden Spring, Mt. James, St. Andrew" },
      { icon: Users, label: "Atmosphere", value: "Family-Friendly by Day • Romantic Glow by Night" },
      { icon: ShieldCheck, label: "Reservations", value: "Recommended for river-front seating" },
    ],
  },
};