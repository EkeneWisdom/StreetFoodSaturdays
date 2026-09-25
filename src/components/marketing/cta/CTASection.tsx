import type { ReactNode } from "react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Background from "@/components/ui/Background";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

import GetStartedButton from "@/widgets/get-started/GetStartedButton";

interface CTASectionProps {
  badge?: ReactNode;
  heading: ReactNode;
  description?: ReactNode;

  primaryLabel: string;
  primaryHref?: string;
  primaryAction?: "link" | "get-started";

  secondaryLabel?: string;
  secondaryHref?: string;

  illustration?: ReactNode;

  variant?: "gradient" | "glass" | "grid";

}

export default function CTASection({
  badge,
  heading,
  description,
  primaryLabel,
  primaryHref = "/contact",
  primaryAction = "link",
  secondaryLabel,
  secondaryHref = "/portfolio",
  illustration,
  variant = "gradient",
}: CTASectionProps) {
  return (
    <Section>
      <Container>

        <Background
          variant={variant}
          className="rounded-3xl p-10 lg:p-16 text-white"
        >

          <div
            className={
              illustration
                ? "grid items-center gap-12 lg:grid-cols-2"
                : "mx-auto max-w-3xl text-center"
            }
          >

            {/* LEFT */}

            <div
              className={
                illustration
                  ? ""
                  : "text-center"
              }
            >

              <SectionTitle
                badge={badge}
                badgeVariant="outline"
                title={heading}
                description={description}
                centered={!illustration}
                className="text-white"
              />

              <div
                className={`
                  mt-10
                  flex
                  flex-wrap
                  gap-4
                  ${illustration
                    ? ""
                    : "justify-center"}
                `}
              >

                {primaryAction === "get-started" ? (
                  <GetStartedButton className="bg-brand text-brand-foreground">
                    {primaryLabel}
                  </GetStartedButton>
                ) : (
                  <a href={primaryHref}>
                    <Button className="bg-brand text-brand-foreground">
                      {primaryLabel}
                    </Button>
                  </a>
                )}

                {secondaryLabel && (
                  <a href={secondaryHref}>
                    <Button variant="outline">
                      {secondaryLabel}
                    </Button>
                  </a>
                )}

              </div>

            </div>

            {/* RIGHT */}

            {illustration && (

              <div className="flex justify-center">

                {illustration}

              </div>

            )}

          </div>

        </Background>
      </Container>
    </Section>
  );
}