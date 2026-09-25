import {
  useEffect,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import { ShieldCheck } from "lucide-react";

import { cn } from "@/lib/cn";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import { FadeUp } from "@/components/motion";



export interface CookieBannerProps
  extends HTMLAttributes<HTMLElement> {

  heading?: ReactNode;

  description?: ReactNode;

  policyLink?: ReactNode;

  storageKey?: string;

  onAccept?(): void;

  onReject?(): void;

}



export default function CookieBanner({

  heading = "Cookies",

  description =
    "We use cookies to improve your experience and understand site usage.",

  policyLink,

  storageKey = "cookie-consent",

  onAccept,

  onReject,

  className,

  ...props

}: CookieBannerProps) {

  const [visible, setVisible] =
    useState(false);

  useEffect(() => {

    const value =
      localStorage.getItem(storageKey);

    setVisible(!value);

  }, [storageKey]);

  function accept() {

    localStorage.setItem(
      storageKey,
      "accepted",
    );

    setVisible(false);

    onAccept?.();

  }

  function reject() {

    localStorage.setItem(
      storageKey,
      "rejected",
    );

    setVisible(false);

    onReject?.();

  }

  if (!visible) {

    return null;

  }

  return (

    <FadeUp>

      <Card
        className={cn(
          "fixed bottom-6 left-1/2 z-50 w-[95%] max-w-2xl -translate-x-1/2 rounded-2xl p-6 shadow-2xl",
          className,
        )}
        {...props}
      >

        <div className="flex gap-4">

          <ShieldCheck
            className="mt-1 shrink-0 text-primary"
            size={24}
          />

          <div className="flex-1">

            <h3 className="font-semibold">

              {heading}

            </h3>

            <p className="mt-2 text-sm text-text-muted">

              {description}

            </p>

            {policyLink && (

              <div className="mt-3">

                {policyLink}

              </div>

            )}

            <div className="mt-6 flex flex-wrap gap-3">

              <Button
                onClick={accept}
              >

                Accept

              </Button>

              <Button
                variant="outline"
                onClick={reject}
              >

                Reject

              </Button>

            </div>

          </div>

        </div>

      </Card>

    </FadeUp>

  );

}