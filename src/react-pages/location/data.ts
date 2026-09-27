import { 
  MapPin, 
  Car, 
  Navigation, 
  Clock, 
  ShieldCheck, 
  WifiOff, 
  Bus, 
  CheckCircle2, 
  AlertTriangle,
  Compass
} from "lucide-react";

export const locationData = {
  hero: {
    badge: "St. Andrew Hills • 25 Mins From Manor Park",
    title: "How To Get To Golden Spring",
    subtitle: "Paved roads, clear signage, and secured riverside parking. Here is your ultimate guide to driving up Mt. James smoothly.",
    googleMapsUrl: "https://maps.google.com/?q=Golden+Spring+St+Andrew+Jamaica", // Replace with exact coordinates link
  },

  quickStats: [
    { label: "Driving Time", value: "25-30 Mins", sub: "From Manor Park, Kingston" },
    { label: "Road Condition", value: "Paved & Smooth", sub: "Accessible by standard cars" },
    { label: "Parking", value: "Secured On-Site", sub: "Dedicated attendants provided" },
  ],

  waypoints: [
    {
      step: "01",
      title: "Manor Park Plaza (Kingston Departure)",
      distance: "0 km / 0 mins",
      description: "Head north on Constant Spring Road towards Stony Hill. Ensure you have your playlist ready!",
      note: "Last major gas station and ATM stop before entering the hills.",
    },
    {
      step: "02",
      title: "Stony Hill Main Road & Square",
      distance: "8 km / 12 mins",
      description: "Continue through Stony Hill Square and bear right onto Golden Spring Main Road.",
      note: "Smooth paved road with scenic valley views.",
    },
    {
      step: "03",
      title: "Golden Spring Junction to Mt. James",
      distance: "14 km / 20 mins",
      description: "Look out for the Street Food Saturdays directional signs at the Mt. James turn-off.",
      note: "Follow the riverside road for approximately 1.5 miles.",
    },
    {
      step: "04",
      title: "SFS Riverside Sanctuary Entrance",
      distance: "18 km / 25 mins",
      description: "Pull into our gated entrance. Our parking attendants will guide you straight to your spot.",
      note: "Welcome to paradise! Step straight out into the mountain vibe.",
    },
  ],

  parkingInfo: {
    title: "Secured On-Site Parking",
    description: "No roadside parking stress. We have a private, fenced parking zone with dedicated security wardens throughout the day and evening.",
    features: [
      "Fenced and lit parking perimeter",
      "Dedicated parking wardens on duty",
      "Easy access for standard sedans, SUVs, and minibuses",
    ],
  },

  transportOptions: [
    {
      title: "Self Drive",
      icon: Car,
      tag: "Most Popular",
      description: "Enjoy the scenic drive up the hills. Any standard sedan or hatchback can navigate the route comfortably.",
    },
    {
      title: "Coaster & Charter Shuttle",
      icon: Bus,
      tag: "For Groups",
      description: "Organizing a large group or party? Charter coasters can easily turn around in our designated drop-off bay.",
    },
    {
      title: "SFS Partner Taxi / Ride",
      icon: Navigation,
      tag: "Drink Responsibly",
      description: "Need a designated driver? Contact our verified transport partners for round-trip private taxi service from Kingston.",
    },
  ],

  offlineAdvice: {
    title: "Download Maps Before Heading Up",
    description: "While cellular reception is stable along the main road, mountain signals can occasionally dip near the river streams.",
    steps: [
      "Open Google Maps or Apple Maps before leaving Kingston.",
      "Search 'Golden Spring, St. Andrew' and tap 'Download Offline Map'.",
      "Look for our branded 'Street Food Saturdays' wooden road signs along the final 2 miles.",
    ],
  },
};