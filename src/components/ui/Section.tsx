import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

import { spacing } from "@/config/design";

import Background, {
  type BackgroundVariant,
} from "./Background";

interface SectionProps
  extends HTMLAttributes<HTMLElement> {

  size?: "xslim" | "slim" | "compact" | "default" | "hero";

  background?: BackgroundVariant;

}

const sizes = {

  xslim: spacing.sectionXSlim,

  slim: spacing.sectionSlim,
  
  compact: spacing.sectionCompact,

  default: spacing.section,

  hero: spacing.sectionHero,

};

export default function Section({

  size = "default",

  background = "none",

  className,

  children,

  ...props

}: SectionProps) {

  return (

    <Background variant={background}>

      <section

        className={cn(

          sizes[size],

          className,

        )}

        {...props}

      >

        {children}

      </section>

    </Background>

  );

}