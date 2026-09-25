import type { ComponentProps } from "react";

import Button from "@/components/ui/Button";
import { nav } from "@/config/navigation";

import {
  useGetStarted,
} from "./GetStartedProvider";

import type {
  GetStartedService,
} from "./getStartedConfig";

type GetStartedButtonProps =
  Omit<
    ComponentProps<typeof Button>,
    "onClick" | "href" | "to"
  > & {
    service?: GetStartedService;
  };

const contactHref = nav?.contact?.href ?? "#";

export default function GetStartedButton({
  service,
  ...props
}: GetStartedButtonProps) {
  const {
    openGetStarted,
  } = useGetStarted();

  return (
    <Button
      {...props}
      href={contactHref}
      /*onClick={() =>
        openGetStarted(service)
      }*/
    />
  );
}