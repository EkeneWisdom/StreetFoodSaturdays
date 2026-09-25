import {
  forwardRef,
  type LabelHTMLAttributes,
} from "react";

import { cn } from "@/lib/cn";

const Label = forwardRef<
  HTMLLabelElement,
  LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-sm font-medium",
      className,
    )}
    {...props}
  />
));

Label.displayName = "Label";

export default Label;