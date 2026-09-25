import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import {
  ArrowRight,
  Info,
  X,
} from "lucide-react";

import { cn } from "@/lib/cn";

import Button from "@/components/ui/Button";

import { FadeIn } from "@/components/motion";


export interface AnnouncementBannerProps
  extends HTMLAttributes<HTMLElement> {

  icon?: ReactNode;

  badge?: ReactNode;

  heading?: ReactNode;

  description?: ReactNode;

  action?: ReactNode;

  dismissible?: boolean;

  onDismiss?(): void;

}


export default function AnnouncementBanner({

  icon = <Info size={18} />,

  badge,

  heading,

  description,

  action,

  dismissible = false,

  onDismiss,

  className,

  ...props

}: AnnouncementBannerProps) {

  return (

    <FadeIn>

      <section

        className={cn(

          "relative rounded-2xl border border-border bg-primary text-primary-foreground",

          className,

        )}

        {...props}

      >

        <div
          className="
            flex
            flex-col
            gap-6
            p-6
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >

          <div
            className="
              flex
              items-start
              gap-4
            "
          >

            <div
              className="
                mt-1
                rounded-full
                bg-white/10
                p-2
              "
            >

              {icon}

            </div>

            <div>

              {badge && (

                <div className="mb-2">

                  {badge}

                </div>

              )}

              {heading && (

                <h3 className="text-xl font-semibold">

                  {heading}

                </h3>

              )}

              {description && (

                <p className="mt-2 text-primary-foreground/80">

                  {description}

                </p>

              )}

            </div>

          </div>

          <div
            className="
              flex
              items-center
              gap-3
            "
          >

            {action ?? (

              <Button

                variant="secondary"

                rightIcon={
                  <ArrowRight size={16} />
                }

              >

                Learn More

              </Button>

            )}

          </div>

        </div>

        {dismissible && (

          <button

            type="button"

            onClick={onDismiss}

            className="
              absolute
              right-4
              top-4
              rounded-lg
              p-2
              transition-colors
              hover:bg-white/10
            "

            aria-label="Dismiss"

          >

            <X size={18} />

          </button>

        )}

      </section>

    </FadeIn>

  );

}