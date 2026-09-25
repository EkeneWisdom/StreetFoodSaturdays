import type { HTMLAttributes } from "react";

import HeroBackground from "@/components/ui/HeroBackground";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { cn } from "@/lib/cn";

export default function Hero({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <HeroBackground>
      <Section
        className={cn("overflow-hidden", className)}
        {...props}
      >
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {children}
          </div>
        </Container>
      </Section>
    </HeroBackground>
  );
}