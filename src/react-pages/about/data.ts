import { site } from "@/config/site";
import { 
  Flame, 
  Waves, 
  Utensils, 
  Sparkles, 
  Heart, 
  MapPin, 
  ShieldCheck, 
  Award 
} from "lucide-react";

export interface AboutImage {
  url: string;
  alt: string;
  caption?: string;
  category?: string;
}

export interface Pillar {
  id: string;
  icon: any;
  title: string;
  subtitle: string;
  description: string;
  // Image recommendation for visual cards
  bgImage: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  image: string;
}

export const aboutData = {
  // 1. Hero & Visual Backgrounds
  hero: {
    badge: "Our Story & Spirit",
    title: "Where Smoke Meets the River",
    subtitle:
      "Street Food Saturdays was born out of a simple passion: live-fire grilling, authentic Jamaican vibes, and bringing people together by the refreshing waters of Golden Spring.",
    // Hero background image recommendations:
    bgImage: "/images/about/hero-river-fire.png", // Recommended image: Wide-angle shot of dusk at Golden Spring with river reflections and open flames glowing
    foregroundImage: "/images/about/chef-grilling.png", // Recommended image: Action shot of chef seasoning jerk platter over glowing embers with smoke rising
  },

  // 2. Core Pillars (Interactive Cards)
  pillars: [
    {
      id: "fire",
      icon: Flame,
      title: "Woodfire Mastery",
      subtitle: "Slow-Smoked & Seared",
      description: "No charcoal gas shortcuts. We cook exclusively over pimento and logwood fires for deep, authentic flavor.",
      bgImage: "/images/about/woodfire-pit.png", // Recommended image: Close-up of burning pimento wood embers and simmering grill grates
    },
    {
      id: "river",
      icon: Waves,
      title: "Riverfront Haven",
      subtitle: "Mt. James Atmosphere",
      description: "Relax by the crystal-clear waters of Golden Spring while enjoying curated DJ sets and good company.",
      bgImage: "/images/about/riverfront-deck.png", // Recommended image: Guests lounging by the natural river stream with outdoor tables
    },
    {
      id: "community",
      icon: Heart,
      title: "Community First",
      subtitle: "Local Ingredients & Warmth",
      description: "We source our meats and vegetables directly from St. Andrew farmers to support local agriculture.",
      bgImage: "/images/about/local-farmers.png", // Recommended image: Fresh local produce, scallions, peppers, and ground provisions displayed
    },
  ] as Pillar[],

  // 3. Stats Banner
  stats: [
    { label: "Woodfire Saturdays", value: "100+" },
    { label: "Happy Guests Served", value: "15k+" },
    { label: "Signature Platters", value: "12" },
    { label: "Riverfront Vibe", value: "100%" },
  ],

  // 4. Timeline / Origin Journey
  timeline: [
    {
      year: "2021",
      title: "The Initial Spark",
      description: "Started as a small backyard weekend barbecue for friends and family in Mt. James.",
      image: "/images/about/timeline-2021.png", // Recommended image: Vintage/raw photo of first small backyard grill setup
    },
    {
      year: "2022",
      title: "Finding Golden Spring",
      description: "Moved to our current riverfront location to give guests a true escape into nature.",
      image: "/images/about/timeline-2022.png", // Recommended image: First riverfront table arrangement surrounded by lush greenery
    },
    {
      year: "2024",
      title: "The Full Experience",
      description: "Expanded our menu to include seafood feasts, specialty cocktails, and live DJ sets every Saturday.",
      image: "/images/about/timeline-2024.png", // Recommended image: Vibrant weekend crowd enjoying food and music by the water
    },
  ] as TimelineMilestone[],

  // 5. Gallery Slideshow Assets
  gallery: [
    {
      url: "/images/about/gallery-platter.png", // Recommended image: Overhead shot of a massive jerk meat & seafood mix platter
      alt: "Signature Woodfire Platter",
      caption: "Our signature mixed platter fresh off the embers",
    },
    {
      url: "/images/about/gallery-river-chill.png", // Recommended image: Guests dipping feet in the cool river while sipping drinks
      alt: "Riverfront Dining Experience",
      caption: "Cool down in the river between bites",
    },
    {
      url: "/images/about/gallery-cocktails.png", // Recommended image: Craft rum cocktails with tropical garnishes
      alt: "Craft Tropical Drinks",
      caption: "Crafted rum punches & island refreshers",
    },
    {
      url: "/images/about/gallery-atmosphere.png", // Recommended image: Nighttime ambient string lighting over open-air dining tables
      alt: "Dusk Vibe at Mt. James",
      caption: "Evening ambient lighting as the sun sets over Mt. James",
    },
  ] as AboutImage[],

  // 6. Location Callout Quote
  quote: {
    text: "Street Food Saturdays isn't just about food—it's a weekend ritual. It's the sound of the river, the smell of pimento smoke, and the warmth of real Jamaican hospitality.",
    author: "Head Chef & Founder",
    location: "Golden Spring, Mt. James",
  },
};