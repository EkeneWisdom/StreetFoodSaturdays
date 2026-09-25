import ProcessStep from "./ProcessStep";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

const gridColumns = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
} as const;

export interface ProcessItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface ProcessTimelineProps {
  items: ProcessItem[];
  orientation?: "horizontal" | "vertical";
}

export default function ProcessTimeline({
  items,
  orientation = "horizontal",
}: ProcessTimelineProps) {

  const columnClass =
  gridColumns[
    Math.min(
      Math.max(items.length, 2),
      6,
    ) as keyof typeof gridColumns
  ];

  return (
    <div
      className={cn(
        "relative gap-8",

        orientation === "horizontal" &&
          `grid ${columnClass}`,

        orientation === "vertical" &&
          "flex flex-col",
      )}
    >
      {items.map((item, index) => (
        <div
          key={item.title}
          className="relative"
        >
          {index !== items.length - 1 && (

            orientation === "horizontal" ? (

              <motion.div
                className="
                  absolute
                  left-1/2
                  top-8
                  hidden
                  h-0.5
                  origin-left
                  bg-border
                  lg:block
                "
                style={{
                  width: "100%",
                }}
                initial={{
                  scaleX: 0,
                }}
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{
                  once: true,
                  amount: .4,
                }}
                transition={{
                  duration: .6,
                  delay: index * .15,
                }}
              />

            ) : (

              <motion.div
                className="
                  absolute
                  left-8
                  top-16
                  h-full
                  w-0.5
                  origin-top
                  bg-border
                "
                initial={{
                  scaleY: 0,
                }}
                whileInView={{
                  scaleY: 1,
                }}
                viewport={{
                  once: true,
                  amount: .4,
                }}
                transition={{
                  duration: .6,
                  delay: index * .15,
                }}
              />

            )

          )}

          <ProcessStep
            number={index + 1}
            title={item.title}
            description={item.description}
            icon={item.icon}
            className="relative z-10"
          />
        </div>
      ))}
    </div>
  );
}