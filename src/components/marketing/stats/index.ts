export { default as StatCard } from "./StatCard";
export { default as StatsGrid } from "./StatsGrid";
export { default as AnimatedCounter } from "./AnimatedCounter";



{/**
    <StatsGrid>

  <StatCard
    value={<AnimatedCounter value={250} suffix="+" />}
    label="Projects Completed"
    description="Delivered across multiple industries."
    trend={{
      value: "+18% this year",
      direction: "up",
    }}
  />

  <StatCard
    value={<AnimatedCounter value={98} suffix="%" />}
    label="Client Satisfaction"
    trend={{
      value: "Consistently high",
      direction: "neutral",
    }}
  />

  <StatCard
    value={<AnimatedCounter value={24} suffix="/7" />}
    label="Support"
    trend={{
      value: "Always available",
      direction: "neutral",
    }}
  />

</StatsGrid>
    */}