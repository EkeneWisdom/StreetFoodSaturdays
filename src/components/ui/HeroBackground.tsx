import type { HTMLAttributes } from "react";

import Background from "./Background";
import Glow from "./Glow";
import GridPattern from "./GridPattern";
import Noise from "./Noise";

export default function HeroBackground({
  children,
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <Background variant="mesh">

      <GridPattern />

      <Glow
        color="primary"
        size="lg"
        className="-left-40 -top-40"
      />

      <Glow
        color="secondary"
        size="lg"
        className="-bottom-40 -right-40"
      />

      <Noise />

      <div className="relative z-10">
        {children}
      </div>

    </Background>
  );
}