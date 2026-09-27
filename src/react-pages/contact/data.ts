import { site } from "@/config/site";
import { 
  MapPin, 
  PhoneCall, 
  Mail, 
  Clock, 
  CalendarCheck, 
  MessageSquare,
  Sparkles,
  Flame,
  Waves,
  Car
} from "lucide-react";

import { nav } from "@/config/navigation";

export interface ContactChannel {
  id: string;
  title: string;
  value: string;
  href: string;
  description: string;
  icon: any;
  actionText: string;
  badge?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "reservations" | "location" | "dietary";
}

export const contactPageData = {
  hero: {
    badge: "Join Us By The River",
    title: "Let's Talk Food, Fires & Saturdays",
    subtitle:
      "Have a question about large group bookings, dietary requests, or finding our riverfront venue at Golden Spring, Mt. James? We're here to help.",
  },
  
  // Direct Quick Contact Channels
  channels: [
    {
      id: "whatsapp",
      title: "Instant WhatsApp",
      value: site.phone,
      href: `https://wa.me/${site.phone.replace(/[^0-9]/g, "")}?text=Hi%20Street%20Food%20Saturdays!%20I%20have%20a%20question.`,
      description: "Fastest response for same-day table availability & directions.",
      icon: MessageSquare,
      actionText: "Chat on WhatsApp",
      badge: "Fastest",
    },
    {
      id: "reservations",
      title: "Table & Platter Bookings",
      value: "Reserve Online",
      href: nav?.reservation?.href,
      description: "Lock in your woodfire feast and waterfront seating in advance.",
      icon: CalendarCheck,
      actionText: "Book A Table",
      badge: "Recommended",
    },
    {
      id: "phone",
      title: "Direct Phone Line",
      value: site.phone,
      href: `tel:${site.phone.replace(/[^0-9+]/g, "")}`,
      description: "Speak with our host team for event inquiries and group bookings.",
      icon: PhoneCall,
      actionText: "Call Us Now",
    },
    {
      id: "email",
      title: "Email Inquiries",
      value: site.email,
      href: `mailto:${site.email}`,
      description: "For corporate private events, catering, and press inquiries.",
      icon: Mail,
      actionText: "Send an Email",
    },
  ] as ContactChannel[],

  // Operating Hours
  hours: {
    title: "Operating Hours",
    subtitle: "We fire up the grills every weekend",
    schedule: [
      { day: "Saturday", time: "12:00 PM – 10:00 PM", status: "Open Event Day", highlighted: true },
      { day: "Sunday", time: "12:00 PM – 8:00 PM", status: "Chill & Chillout", highlighted: false },
      { day: "Monday – Friday", time: "Closed for Prep", status: "Pre-orders Open", highlighted: false },
    ],
  },

  // Venue & Directions Metadata
  location: {
    title: "Our Riverfront Haven",
    address: "Golden Spring, Mt. James, St. Andrew, Jamaica",
    directionsHint: "Located just 20 minutes from Manor Park along the scenic Mt. James main road.",
    icon: MapPin,
    coordinates: {
      lat: 18.0833,
      lng: -76.7833,
    },
    features: [
      { icon: Flame, text: "Open-Air Woodfire Pit" },
      { icon: Waves, text: "Riverside Seating" },
      { icon: Car, text: "Secure On-Site Parking" },
      { icon: Sparkles, text: "Live DJ & Vibe" },
    ],
    googleMapsUrl: "https://maps.google.com/?q=Golden+Spring+Mt+James+Jamaica",
  },

  // Form Pre-set Inquiry Types
  inquiryTypes: [
    "General Question",
    "Table Reservation Inquiry",
    "Large Group (8+ Guests)",
    "Private Venue Hire / Events",
    "Dietary & Allergen Question",
    "Media & Partnerships",
  ],

  // Frequently Asked Questions
  faqs: [
    {
      question: "Do I need a reservation for Saturdays?",
      answer: "Walk-ins are always welcome! However, for groups of 4 or more, we strongly recommend reserving in advance to secure waterfront seating during peak hours (3:00 PM – 7:00 PM).",
      category: "reservations",
    },
    {
      question: "How do I get to Golden Spring, Mt. James?",
      answer: "Take the main road towards Stony Hill from Manor Park, then follow signs toward Golden Spring. Our riverfront venue features prominent signage and dedicated parking attendants.",
      category: "location",
    },
    {
      question: "Are there vegetarian or gluten-free options?",
      answer: "Yes! While our woodfire grills are famous for jerk meats and seafood platters, we feature delicious flame-roasted corn, grilled veggies, plantain chips, and custom vegan sides.",
      category: "dietary",
    },
  ] as FAQItem[],
};