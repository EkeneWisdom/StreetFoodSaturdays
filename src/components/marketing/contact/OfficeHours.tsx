import {
  Clock3,
} from "lucide-react";

import { FadeUp } from "@/components/motion";

import ContactCard from "./ContactCard";

export interface OfficeHour {

  day: string;

  hours: string;

}

interface OfficeHoursProps {

  days: OfficeHour[];

}

export default function OfficeHours({
  days,
}: OfficeHoursProps) {

  return (

    <FadeUp>

      <ContactCard

        icon={<Clock3 size={22} />}

        heading="Office Hours"

        description="We're available during the following times."

        value={

          <div className="space-y-2">

            {days.map((item) => (

              <div
                key={item.day}
                className="flex justify-between gap-4 text-sm"
              >

                <span className="text-text-muted">
                  {item.day}
                </span>

                <span>
                  {item.hours}
                </span>

              </div>

            ))}

          </div>

        }

      />

    </FadeUp>

  );

}