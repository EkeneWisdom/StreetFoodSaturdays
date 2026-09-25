import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/cn";

type PillProps =
  | (HTMLAttributes<HTMLSpanElement> & {
      asButton?: false;
    })
  | (ButtonHTMLAttributes<HTMLButtonElement> & {
      asButton: true;
    });

export default function Pill(props: PillProps) {

  if (props.asButton) {

    const {
      className,
      children,
      asButton,
      ...rest
    } = props;

    return (

      <button
        type="button"
        className={cn(
          "inline-flex items-center justify-center rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:bg-primary/5",
          className,
        )}
        {...rest}
      >
        {children}
      </button>

    );

  }

  const {
    className,
    children,
    ...rest
  } = props;

  return (

    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium",
        className,
      )}
      {...rest}
    >
      {children}
    </span>

  );

}





{/**
<Pill>React</Pill>

<Pill asButton>
  React
</Pill>

  */}