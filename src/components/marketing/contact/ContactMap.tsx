import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import {
  MapPinned,
  ExternalLink,
} from "lucide-react";

import { FadeUp } from "@/components/motion";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import { cn } from "@/lib/cn";

interface ContactMapProps
  extends HTMLAttributes<HTMLDivElement> {

  embedUrl: string;

  heading?: ReactNode;

  description?: ReactNode;

  address?: ReactNode;

  directionsUrl?: string;

}

export default function ContactMap({

  embedUrl,

  heading = "Visit Our Office",

  description,

  address,

  directionsUrl,

  className,

  ...props

}: ContactMapProps) {

  return (

    <FadeUp>

      <Card
        className={cn(
          "overflow-hidden p-0",
          className,
        )}
        {...props}
      >

        <div className="relative aspect-[16/9]">

          <iframe
            src={embedUrl}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
          />

          {(heading ||
            description ||
            address ||
            directionsUrl) && (

            <div
              className="
                absolute
                left-6
                top-6
                max-w-sm
                rounded-2xl
                border
                border-border
                bg-background/90
                p-6
                shadow-lg
                backdrop-blur
              "
            >

              <div className="flex items-center gap-3">

                <MapPinned
                  size={20}
                  className="text-primary"
                />

                <h3 className="font-semibold">

                  {heading}

                </h3>

              </div>

              {description && (

                <p className="mt-3 text-sm text-text-muted">

                  {description}

                </p>

              )}

              {address && (

                <p className="mt-4 text-sm">

                  {address}

                </p>

              )}

              {directionsUrl && (

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block"
                >

                  <Button
                    size="sm"
                    rightIcon={
                      <ExternalLink size={16} />
                    }
                  >
                    Open in Google Maps
                  </Button>

                </a>

              )}

            </div>

          )}

        </div>

      </Card>

    </FadeUp>

  );

}