import site from "@/config/site";
import social from "@/config/social";

export interface ContactDetail {
  id: string;
  label: string;
  value: string;
  subtext?: string;
  type: "address" | "phone" | "email" | "hours";
}

export interface DivisionLocation {
  id: string;
  name: string;
  badge?: string;
  address: string;
  phone?: string;
  email?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const CONTACT_PAGE_DATA = {
  // Config for Web3Forms API (Get your free access key at https://web3forms.com)
  web3formsAccessKey: "3134c21a-9ad1-4ff0-8a02-6f927c634fa4",

  // Set to false if you want to hide the map without breaking UI flow
  showMap: true,
  // Coordinates for the interactive map iframe (e.g., Awka North, Anambra)
  mapCoordinates: {
    lat: 6.2215,
    lng: 7.0722,
    zoom: 14,
  },

  hero: {
    badge: "Direct Engagement & Procurement",
    title: "Partner With Parkers 1st Engineering",
    subtitle:
      "Connect with our technical engineering officers and corporate management for equipment leases, site audits, dredging consultations, and tender bidding.",
  },

  corporateInfo: {
    companyName: site.company,
    registration: "RC 100% Indigenous Nigerian Enterprise - NOGICD Compliant",
    headOffice: site.address,
    emails: [site.email, ...site.otherEmails].filter(Boolean),
    phones: [site.phone, ...site.otherPhones].filter(Boolean),
  },

  // Conditionally rendered: Empty array [] hides this section cleanly
  extraDivisions: [
    
    /*{
      id: "automotive-div",
      name: "Automotive & Logistics Division",
      badge: "Commercial Fleet",
      address: "Plot 12 Heavy Industrial Zone, Port Harcourt, Rivers State",
      phone: "+234 800 000 0000",
      email: "logistics@parkers1st.com",
    },*/
    
  ] as DivisionLocation[],

  socialLinks: social,

  enquiryCategories: [
    "General Project Consultancy",
    "Heavy Equipment Leasing & Mobilization",
    "Dredging & Shoreline Protection Tenders",
    "Civil Engineering & Infrastructure",
    "Pipeline Construction & Energy Services",
    "Local Content & Subcontracting Opportunities",
  ],

  faqs: [
    {
      id: "faq-1",
      question: "How do I request a quote or lease heavy equipment?",
      answer:
        "You can submit an inquiry through our contact form or send direct specifications to our logistics desk. We provide pre-mobilization inspection reports for CAT, WILCO, and GROVE assets.",
    },
    {
      id: "faq-2",
      question: "Are your operations compliant with Nigerian Local Content laws?",
      answer:
        "Yes, PEL operates in strict compliance with the NOGICD Act 2010, maintaining 100% Nigerian ownership, local workforce sourcing, and host community partnerships.",
    },
    {
      id: "faq-3",
      question: "What geographical regions do you service across Nigeria?",
      answer:
        "We operate nationwide with primary focus on the Niger Delta region, coastal riverine zones, and inland civil construction corridors across Anambra, Rivers, Delta, and Lagos states.",
    },
  ] as FAQItem[],
};