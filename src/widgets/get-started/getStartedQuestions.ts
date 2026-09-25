import {
  getStartedServices,
  getStartedTimeframes,
} from "./getStartedConfig";

export interface GetStartedQuestion {
  id: string;
  question: string;
  placeholder: string;
  type?: "text" | "multi-select" | "select";
  options?: string[];
}

export const getStartedQuestions: GetStartedQuestion[] = [
  {
    id: "business",
    question: "What does your business do?",
    placeholder: "",
  },
/*
  {
    id: "location",
    question: "Where is your business based?",
    placeholder: "e.g. Abuja, NG",
  },

  {
    id: "website",
    question: "Do you currently have a website?",
    placeholder: "Tell us briefly about it",
  },

  {
    id: "presence",
    question: "What do you already have online?",
    placeholder: "Select everything that applies",
    type: "multi-select",
    options: [
      "Google Business Profile",
      "Facebook Page",
      "Instagram",
      "WhatsApp Business",
      "Google/Search visibility",
      "None",
    ],
  },

  {
    id: "discovery",
    question: "How do customers currently find you?",
    placeholder: "e.g. Google, Instagram, referrals...",
  },

  {
    id: "goal",
    question: "What would you like customers to do?",
    placeholder:
      "e.g. Call us, visit our shop, WhatsApp us...",
  },

  {
    id: "services",
    question: "What would you like help with?",
    placeholder: "Select everything you need",
    type: "multi-select",
    options: getStartedServices.map(
      (service) => service.value,
    ),
  },

  {
    id: "timeframe",
    question: "When would you like to get started?",
    placeholder: "Choose a timeframe",
    type: "select",
    options: getStartedTimeframes.map(
      (timeframe) => timeframe.value,
    ),
  },*/
];