import { FadeUp } from "@/components/motion";
import ContactCard from "./ContactCard";

import type { ReactNode } from "react";

export interface ContactMethod {

  icon: ReactNode;

  heading: string;

  description?: string;

  value: ReactNode;

  action?: ReactNode;

}

interface ContactMethodsProps {

  items: ContactMethod[];

}

export default function ContactMethods({
  items,
}: ContactMethodsProps) {

  return (

    <div className="grid gap-6">

      {items.map((item) => (

        <FadeUp key={item.heading}>

          <ContactCard
            icon={item.icon}
            heading={item.heading}
            description={item.description}
            value={item.value}
            action={item.action}
          />

        </FadeUp>

      ))}

    </div>

  );

}