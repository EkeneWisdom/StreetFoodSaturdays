import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import { Inbox } from "lucide-react";

import Button from "./Button";
import Card from "./Card";

import { FadeUp } from "@/components/motion";
import { cn } from "@/lib/cn";

export interface EmptyStateProps
  extends HTMLAttributes<HTMLDivElement> {

  icon?: ReactNode;

  heading: ReactNode;

  description?: ReactNode;

  action?: ReactNode;

  illustration?: ReactNode;

}

export default function EmptyState({

  icon = <Inbox size={44} />,

  heading,

  description,

  action,

  illustration,

  className,

  ...props

}: EmptyStateProps) {

  return (

    <FadeUp>

      <Card
        className={cn(
          "flex flex-col items-center rounded-3xl p-12 text-center",
          className,
        )}
        {...props}
      >

        {illustration ?? (

          <div
            className="
              mb-6
              flex
              h-20
              w-20
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

        <h3 className="text-2xl font-semibold">

          {heading}

        </h3>

        {description && (

          <p
            className="
              mt-3
              max-w-lg
              text-text-muted
            "
          >

            {description}

          </p>

        )}

        <div className="mt-8">

          {action ?? (

            <Button>

              Go Back

            </Button>

          )}

        </div>

      </Card>

    </FadeUp>

  );

}




{/**
  
<EmptyState

  heading="No blog posts yet."

  description="
  We haven't published any articles
  in this category.
  "

/>

<EmptyState

  icon={<FolderOpen size={42} />}

  heading="No projects found."

  action={
    <Button>

      View All Projects

    </Button>
  }

/>

*/}