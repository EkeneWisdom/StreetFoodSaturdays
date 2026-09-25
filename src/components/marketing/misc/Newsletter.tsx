import {
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import {
  Mail,
  CheckCircle2,
} from "lucide-react";

import { cn } from "@/lib/cn";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import FormMessage from "@/components/ui/FormMessage";

import { FadeUp } from "@/components/motion";

export interface NewsletterProps
  extends HTMLAttributes<HTMLElement> {

  heading?: ReactNode;

  description?: ReactNode;

  badge?: ReactNode;

  benefits?: ReactNode[];

  illustration?: ReactNode;

  leftSlot?: ReactNode;

  rightSlot?: ReactNode;

  privacyText?: ReactNode;

  subscribeLabel?: ReactNode;

  successMessage?: ReactNode;

  errorMessage?: ReactNode;

  loading?: boolean;

  onSubscribe?(
    email: string,
  ): void;

}

export default function Newsletter({

  heading =
    "Stay ahead with practical insights.",

  description =
    "Get occasional articles, product updates and practical guides. No spam.",

  badge = "Newsletter",

  benefits = [
    "Web Design",
    "SEO",
    "AI Automation",
  ],

  illustration,

  leftSlot,

  rightSlot,

  privacyText =
    "No spam. Unsubscribe anytime.",

  subscribeLabel = "Subscribe",

  successMessage,

  errorMessage,

  loading = false,

  onSubscribe,

  className,

  ...props

}: NewsletterProps) {

  const [email, setEmail] =
    useState("");

  return (

    <FadeUp>

      <Card
        className={cn(
          "overflow-hidden rounded-[2rem] p-10",
          className,
        )}
        {...props}
      >

        <div
          className="
            grid
            gap-12
            lg:grid-cols-2
            lg:items-center
          "
        >

          <div>

            {leftSlot ?? (

              <>

                <Badge>

                  {badge}

                </Badge>

                <h2 className="mt-5 text-4xl font-bold">

                  {heading}

                </h2>

                <p className="mt-4 text-text-muted">

                  {description}

                </p>

                {!!benefits.length && (

                  <div className="mt-8 flex flex-wrap gap-3">

                    {benefits.map(
                      (benefit, index) => (

                        <Badge
                          key={index}
                          variant="outline"
                        >

                          <CheckCircle2
                            size={14}
                          />

                          {benefit}

                        </Badge>

                      ),
                    )}

                  </div>

                )}

              </>

            )}

          </div>

          <div>

            {rightSlot ?? (

              <>

                {illustration}

                <form
                  className="space-y-4"
                  onSubmit={(e) => {

                    e.preventDefault();

                    onSubscribe?.(
                      email.trim(),
                    );

                  }}
                >

                  <div className="relative">

                    <Mail
                      size={18}
                      className="
                        pointer-events-none
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-text-muted
                      "
                    />

                    <Input
                      type="email"
                      value={email}
                      placeholder="you@example.com"
                      className="pl-11"
                      onChange={(e) =>
                        setEmail(
                          e.target.value,
                        )
                      }
                    />

                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    loading={loading}
                  >

                    {subscribeLabel}

                  </Button>

                </form>

                {successMessage && (

                  <div className="mt-4">

                    <FormMessage>

                      {successMessage}

                    </FormMessage>

                  </div>

                )}

                {errorMessage && (

                  <div className="mt-4">

                    <FormMessage
                      variant="error"
                    >

                      {errorMessage}

                    </FormMessage>

                  </div>

                )}

                <p
                  className="
                    mt-5
                    text-sm
                    text-text-muted
                  "
                >

                  {privacyText}

                </p>

              </>

            )}

          </div>

        </div>

      </Card>

    </FadeUp>

  );

}