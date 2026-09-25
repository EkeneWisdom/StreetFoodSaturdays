import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import {
  FileQuestion,
  ArrowLeft,
  Home,
} from "lucide-react";

import { FadeUp } from "@/components/motion";

import Button from "./Button";
import Card from "./Card";

import { cn } from "@/lib/cn";

export interface NotFoundProps
  extends HTMLAttributes<HTMLDivElement> {

  icon?: ReactNode;

  heading?: ReactNode;

  description?: ReactNode;

  illustration?: ReactNode;

  primaryAction?: ReactNode;

  secondaryAction?: ReactNode;

}

export default function NotFound({

  icon = <FileQuestion size={56} />,

  heading = "Page not found",

  description =

    "The page you're looking for doesn't exist, has been moved, or is temporarily unavailable.",

  illustration,

  primaryAction,

  secondaryAction,

  className,

  ...props

}: NotFoundProps) {

  return (

    <FadeUp>

      <Card
        className={cn(
          "mx-auto max-w-3xl rounded-3xl p-12 text-center",
          className,
        )}
        {...props}
      >

        {illustration ?? (

          <div
            className="
              mx-auto
              mb-8
              flex
              h-28
              w-28
              items-center
              justify-center
              rounded-full
              bg-primary/10
              text-primary
            "
          >

            {icon}

          </div>

        )}

        <h1 className="text-4xl font-bold">

          {heading}

        </h1>

        <p
          className="
            mx-auto
            mt-4
            max-w-xl
            text-lg
            text-text-muted
          "
        >

          {description}

        </p>

        <div
          className="
            mt-10
            flex
            flex-wrap
            justify-center
            gap-4
          "
        >

          {primaryAction ?? (

            <Button
              leftIcon={
                <Home size={18} />
              }
            >

              Back to Home

            </Button>

          )}

          {secondaryAction ?? (

            <Button
              variant="outline"
              leftIcon={
                <ArrowLeft size={18} />
              }
              onClick={() =>
                window.history.back()
              }
            >

              Go Back

            </Button>

          )}

        </div>

      </Card>

    </FadeUp>

  );

}








{/**
<NotFound />

<NotFound

  heading="Project not found"

  description="
  The portfolio project you're looking
  for doesn't exist.
  "

/>

*/}