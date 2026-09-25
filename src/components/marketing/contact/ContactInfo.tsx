import type {
  ReactNode,
} from "react";

import ContactMethods, {
  type ContactMethod,
} from "./ContactMethods";

import OfficeHours, {
  type OfficeHour,
} from "./OfficeHours";

interface ContactInfoProps {

  methods: ContactMethod[];

  officeHours?: OfficeHour[];

  footer?: ReactNode;

}

export default function ContactInfo({

  methods,

  officeHours,

  footer,

}: ContactInfoProps) {

  return (

    <div className="space-y-8">

      <ContactMethods
        items={methods}
      />

      {officeHours && (

        <OfficeHours
          days={officeHours}
        />

      )}

      {footer}

    </div>

  );

}