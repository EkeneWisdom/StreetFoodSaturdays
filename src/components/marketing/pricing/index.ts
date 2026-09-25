export { default as FeatureList } from "./FeatureList";
export type { FeatureItem } from "./FeatureList";

export { default as PricingCard } from "./PricingCard";
export type { PricingCardProps } from "./PricingCard";

export { default as PricingGrid } from "./PricingGrid";

export { default as PricingToggle } from "./PricingToggle";

export { default as FeatureComparisonTable } from "./FeatureComparisonTable";
export type { ComparisonFeature } from "./FeatureComparisonTable";


{/**

<FeatureList
  items={[
    { label: "Unlimited Projects" },
    { label: "AI Automation" },
    { label: "Priority Support" },
    { label: "White Label", available: false },
  ]}
/>


const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals",

    price: {
        monthly: "₦50k",
        yearly: "₦500k",
    },

    features: [
      { label: "5 Pages" },
      { label: "Responsive Design" },
      { label: "Basic SEO" },
      { label: "Blog", available: false },
    ],
  },

  {
    name: "Business",
    featured: true,
    badge: "Best Value",
    price: {
        monthly: "₦120k",
        yearly: "₦1.2M",
    },
    savings: "Save 20%",
    description:
      "Most businesses choose this.",
    features: [
      { label: "15 Pages" },
      { label: "Blog" },
      { label: "SEO" },
      { label: "AI Integration" },
      { label: "Priority Support" },
    ],
  },

  {
    name: "Enterprise",
    price: "Custom",
    description:
      "For large organisations.",
    buttonText: "Contact Sales",
    features: [
      { label: "Unlimited Pages" },
      { label: "Custom Integrations" },
      { label: "Dedicated Support" },
    ],
  },
];

<PricingGrid plans={plans} />



const [yearly, setYearly] = useState(false);

<PricingToggle
    yearly={yearly}
    onChange={setYearly}
/>

<PricingGrid
    plans={plans}
    yearly={yearly}
/>




const plans = [
  "Starter",
  "Business",
  "Enterprise",
];

const features = [
  {
    feature: "Responsive Design",
    values: [true, true, true],
  },
  {
    feature: "SEO",
    values: [false, true, true],
  },
  {
    feature: "Blog",
    values: [false, true, true],
  },
  {
    feature: "AI Integration",
    values: [false, false, true],
  },
];

<FeatureComparisonTable
  plans={plans}
  features={features}
  featuredPlan={1}
/>

    */}