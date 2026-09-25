import {
  Check,
  Minus,
} from "lucide-react";

import { cn } from "@/lib/cn";

export interface ComparisonFeature {
  feature: string;
  values: boolean[];
}

interface FeatureComparisonTableProps {
  plans: string[];
  features: ComparisonFeature[];
  featuredPlan?: number;
  className?: string;
}

export default function FeatureComparisonTable({
  plans,
  features,
  featuredPlan,
  className,
}: FeatureComparisonTableProps) {
  return (
    <div
      className={cn(
        "overflow-x-auto rounded-3xl border border-border",
        className,
      )}
    >
      <table className="min-w-full border-collapse">

        <thead className="bg-surface">

          <tr>

            <th
              className="
                sticky left-0 z-10
                bg-surface
                px-6 py-5
                text-left
                font-semibold
              "
            >
              Feature
            </th>

            {plans.map((plan, index) => (

              <th
                key={plan}
                className={cn(
                  "min-w-44 px-6 py-5 text-center font-semibold",

                  featuredPlan === index &&
                    "bg-primary text-white",
                )}
              >
                {plan}
              </th>

            ))}

          </tr>

        </thead>

        <tbody>

          {features.map((row, rowIndex) => (

            <tr
              key={row.feature}
              className={cn(
                rowIndex % 2 === 0 &&
                  "bg-surface/40",
              )}
            >

              <td
                className="
                  sticky left-0
                  bg-background
                  px-6 py-4
                  font-medium
                "
              >
                {row.feature}
              </td>

              {row.values.map((value, index) => (

                <td
                  key={index}
                  className={cn(
                    "px-6 py-4 text-center",

                    featuredPlan === index &&
                      "bg-primary/5",
                  )}
                >
                  {value ? (
                    <Check
                      size={18}
                      className="mx-auto text-primary"
                    />
                  ) : (
                    <Minus
                      size={18}
                      className="mx-auto text-text-muted"
                    />
                  )}
                </td>

              ))}

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}