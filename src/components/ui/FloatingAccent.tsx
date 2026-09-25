import type { HTMLAttributes } from "react";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export default function FloatingAccent({
  className,
  children,
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(
        "absolute",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
