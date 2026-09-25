import {
  ArrowLeft,
  ArrowRight,
  Home,
  SearchX,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Background from "@/components/ui/Background";
import Button from "@/components/ui/Button";

import { nav } from "@/config/navigation";
import Page from "@/components/ui/Page";

export default function NotFound() {
  return (
    <Page>
      <Section size="hero">
        <Container>

          <div className="mx-auto max-w-2xl text-center">

            <div className="mx-auto mb-8 inline-flex rounded-2xl bg-primary/10 p-4 text-primary">
              <SearchX size={40} />
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              404 · Page Not Found
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Looks like this page took a wrong turn.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-text-muted">
              The page you're looking for may have moved, been removed,
              or the address may not be quite right.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                href={nav.home.href}
                size="lg"
                leftIcon={<Home size={18} />}
              >
                Back to Home
              </Button>

              <Button
                href={nav.contact.href}
                variant="outline"
                size="lg"
                rightIcon={<ArrowRight size={18} />}
              >
                Contact Us
              </Button>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => window.history.back()}
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-text-muted
                  transition-colors
                  hover:text-text
                "
              >
                <ArrowLeft size={16} />
                Go back to the previous page
              </button>
            </div>

          </div>

        </Container>
      </Section>
    </Page>
  );
}