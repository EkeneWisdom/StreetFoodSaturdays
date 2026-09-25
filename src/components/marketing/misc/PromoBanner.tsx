import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { cn } from "@/lib/cn";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

import { FadeUp } from "@/components/motion";


export interface PromoBannerProps
  extends HTMLAttributes<HTMLElement> {

  badge?: ReactNode;

  heading?: ReactNode;

  description?: ReactNode;

  illustration?: ReactNode;

  primaryAction?: ReactNode;

  secondaryAction?: ReactNode;

  background?: ReactNode;

}



export default function PromoBanner({

  badge = (

    <Badge>

      <Sparkles size={14} />

      Featured

    </Badge>

  ),

  heading =

    "Grow your business with a website that works.",

  description =

    "Professional websites, SEO and AI automation that help your business attract more customers.",

  illustration,

  primaryAction,

  secondaryAction,

  background,

  className,

  ...props

}: PromoBannerProps) {

  return (

    <FadeUp>

      <Card

        className={cn(

          "relative overflow-hidden rounded-[2rem] p-10",

          className,

        )}

        {...props}

      >

        {background && (

          <div

            className="
              absolute
              inset-0
              -z-10
            "

          >

            {background}

          </div>

        )}

        <div
          className="
            grid
            gap-10
            lg:grid-cols-2
            lg:items-center
          "
        >

          <div>

            {badge}

            <h2 className="mt-5 text-4xl font-bold">

              {heading}

            </h2>

            <p
              className="
                mt-5
                max-w-xl
                text-text-muted
              "
            >

              {description}

            </p>

            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-4
              "
            >

              {primaryAction ?? (

                <Button
                  rightIcon={
                    <ArrowRight size={18} />
                  }
                >

                  Get Started

                </Button>

              )}

              {secondaryAction ?? (

                <Button
                  variant="outline"
                >

                  Learn More

                </Button>

              )}

            </div>

          </div>

          <div
            className="
              flex
              justify-center
            "
          >

            {illustration}

          </div>

        </div>

      </Card>

    </FadeUp>

  );

}