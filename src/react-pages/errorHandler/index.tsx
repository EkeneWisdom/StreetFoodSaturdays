import {
  AlertTriangle,
  ArrowLeft,
  Home,
  RefreshCw,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";

interface ErrorHandlerProps {
  message?: string;
}

export default function ErrorHandler({
  message = "An unexpected error occurred.",
}: ErrorHandlerProps) {
  const isDevelopment = import.meta.env.DEV;

  return (
    <Page>
      <Section>
        <Container>
          <div
            className="
              mx-auto
              flex
              min-h-[60vh]
              max-w-2xl
              items-center
              justify-center
              text-center
            "
          >
            <div>
              <div
                className="
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-primary/10
                  text-primary
                "
              >
                <AlertTriangle size={30} />
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-primary">
                Something went wrong
              </p>

              <h1 className="mt-3 text-3xl font-bold md:text-4xl">
                We couldn't load this page.
              </h1>

              <p className="mx-auto mt-4 max-w-xl text-text-muted">
                The page exists, but something prevented
                it from loading correctly. Please try
                again or return to the homepage.
              </p>

              {isDevelopment && (
                <pre
                  className="
                    mx-auto
                    mt-6
                    max-w-xl
                    overflow-auto
                    rounded-xl
                    bg-muted
                    p-4
                    text-left
                    text-xs
                    text-text-muted
                  "
                >
                  {message}
                </pre>
              )}

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    window.location.reload()
                  }
                  className="
                    bg-primary
                    text-primary-foreground
                    inline-flex
                    items-center
                    gap-2
                    rounded-lg
                    px-5
                    py-3
                    font-semibold
                    transition-colors
                    hover:bg-primary/90
                  "
                >
                  <RefreshCw size={17} />
                  Try Again
                </button>

                <button
                  type="button"
                  onClick={() =>
                    window.history.back()
                  }
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-border
                    px-5
                    py-3
                    font-semibold
                    transition-colors
                    hover:bg-muted
                  "
                >
                  <ArrowLeft size={17} />
                  Go Back
                </button>

                <a
                  href="/"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-border
                    px-5
                    py-3
                    font-semibold
                    transition-colors
                    hover:bg-muted
                  "
                >
                  <Home size={17} />
                  Home
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </Page>
  );
}