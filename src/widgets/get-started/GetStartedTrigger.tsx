import type {
  ReactNode,
} from "react";

import {
  useGetStarted,
} from "./GetStartedProvider";

interface GetStartedTriggerProps {
  children: ReactNode;
  className?: string;
}

export default function GetStartedTrigger({
  children,
  className,
}: GetStartedTriggerProps) {
  const {
    openGetStarted,
  } = useGetStarted();

  return (
    <button
      type="button"
      onClick={openGetStarted}
      className={className}
    >
      {children}
    </button>
  );
}