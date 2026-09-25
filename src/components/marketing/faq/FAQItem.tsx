import {
  AnimatePresence,
  motion,
} from "framer-motion";

import type { ReactNode } from "react";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { spacing } from "@/config/design";

export interface FAQItemProps {
  id: string;

  question: string;

  answer: ReactNode;

  open: boolean;

  onToggle: () => void;

  icon?: ReactNode;
}

export default function FAQItem({
  id,
  question,
  answer,
  open,
  onToggle,
  icon,
}: FAQItemProps) {
  return (
    <div
      id={id}
      className={cn(
        spacing.headerOffset,
        "rounded-2xl border border-border bg-background",
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        className="
          flex w-full items-center justify-between
          gap-6
          p-6
          text-left
        "
      >
        <div className="flex items-center gap-4">

          {icon && (
            <span className="text-primary">
              {icon}
            </span>
          )}

          <span className="font-semibold">
            {question}
          </span>

        </div>

        <ChevronDown
          size={18}
          className={cn(
            "shrink-0 transition-transform duration-300",
            open && "rotate-180",
          )}
        />
      </button>

      <AnimatePresence initial={false}>

        {open && (

          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: .25,
            }}
            className="overflow-hidden"
          >

            <div className="px-6 pb-6">

              <div
                className={cn(
                  "text-text-muted",
                  icon && "pl-10",
                )}
              >
                {answer}
              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}