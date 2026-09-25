import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Page({ children }: Props) {
  return (
    <motion.div
      initial={false} // Prevents initial opacity: 0 state on page load!
      //initial={{ opacity: 0, y: 24 }} old
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{
        duration: 0.35,
      }}
    >
      {children}
    </motion.div>
  );
}