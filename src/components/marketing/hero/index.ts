export { default as Hero } from "./Hero";
export { default as HeroContent } from "./HeroContent";
export { default as HeroActions } from "./HeroActions";
export { default as HeroImage } from "./HeroImage";
export { default as HeroStats } from "./HeroStats";


{/**
    usage
    
    import {
  Hero,
  HeroContent,
  HeroActions,
  HeroImage,
  HeroStats,
} from "@/components/marketing";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

<Hero>

  <HeroContent
    badge="AI Powered Websites"
    title="Affordable websites built to grow your business."
    description="Professional websites, AI automation and business software for ambitious businesses."
  >

    <HeroActions>

      <Button>
        Get Started
      </Button>

      <Button variant="outline">
        View Portfolio
      </Button>

    </HeroActions>

    <HeroStats
      items={[
        {
          value: "100+",
          label: "Projects",
        },
        {
          value: "99%",
          label: "Satisfaction",
        },
        {
          value: "24/7",
          label: "Support",
        },
      ]}
    />

  </HeroContent>

  <HeroImage>

    <Card className="w-full max-w-lg p-10">
      Dashboard Preview
    </Card>

  </HeroImage>

</Hero> */}