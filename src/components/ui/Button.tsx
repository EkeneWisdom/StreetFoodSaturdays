import {
  forwardRef,
  type ButtonHTMLAttributes,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";

import LoadingSpinner from "./LoadingSpinner";
import { cn } from "@/lib/cn";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";

type ButtonSize =
  | "sm"
  | "md"
  | "lg"
  | "icon";

interface CommonProps {

  variant?: ButtonVariant;

  size?: ButtonSize;

  loading?: boolean;

  fullWidth?: boolean;

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;

  href?: string;

  external?: boolean;

}

export type ButtonProps =
  CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const variantClasses: Record<ButtonVariant, string> = {

  primary:
    "bg-primary text-primary-foreground hover:opacity-90 focus-visible:ring-primary",

  secondary:
    "bg-secondary text-white hover:opacity-90 focus-visible:ring-secondary",

  outline:
    "border border-border bg-transparent hover:bg-surface",

  ghost:
    "hover:bg-surface",

  danger:
    "bg-red-600 text-white hover:bg-red-700",

};

const sizeClasses: Record<ButtonSize, string> = {

  sm: "h-10 px-4 text-sm",

  md: "h-12 px-6 text-base",

  lg: "h-14 px-8 text-lg",

  icon: "h-10 w-10 p-0",

};

const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {

      variant = "primary",

      size = "md",

      loading = false,

      disabled,

      fullWidth = false,

      leftIcon,

      rightIcon,

      className,

      children,

      href,

      external = false,

      ...props

    },
    ref,
  ) => {

    const classes = cn(

      "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300",

      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",

      "disabled:pointer-events-none disabled:opacity-50",

      variantClasses[variant],

      sizeClasses[size],

      fullWidth && "w-full",

      className,

    );

    const content = (

      <>

        {loading ? (

          <LoadingSpinner

            size="sm"

            color={
              variant === "primary" ||
              variant === "secondary" ||
              variant === "danger"
                ? "white"
                : "current"
            }

          />

        ) : (

          leftIcon

        )}

        {children}

        {!loading && rightIcon}

      </>

    );

    if (href) {

      if (external) {

        return (

          <a

            ref={ref as React.Ref<HTMLAnchorElement>}

            href={href}

            target="_blank"

            rel="noopener noreferrer"

            className={classes}

            {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}

          >

            {content}

          </a>

        );

      }

      return (

        <a

          ref={ref as React.Ref<HTMLAnchorElement>}

          href={href}

          className={classes}

          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}

        >

          {content}

        </a>

      );

    }

    return (

      <button

        ref={ref as React.Ref<HTMLButtonElement>}

        disabled={disabled || loading}

        className={classes}

        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}

      >

        {content}

      </button>

    );

  },
);

Button.displayName = "Button";

export default Button;