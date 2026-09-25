import {
  useEffect,
  useState,
} from "react";

import { motion } from "framer-motion";

export default function ReadingProgress() {

  const [progress, setProgress] =
    useState(0);

  useEffect(() => {

    function update() {

      const scrollTop =
        window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percent =
        height <= 0
          ? 0
          : (scrollTop / height) * 100;

      setProgress(
        Math.min(
          100,
          Math.max(0, percent),
        ),
      );

    }

    update();

    window.addEventListener(
      "scroll",
      update,
      { passive: true },
    );

    window.addEventListener(
      "resize",
      update,
    );

    return () => {

      window.removeEventListener(
        "scroll",
        update,
      );

      window.removeEventListener(
        "resize",
        update,
      );

    };

  }, []);

  return (

    <motion.div
      className="
        fixed
        left-0
        top-0
        z-[100]
        h-1
        origin-left
        bg-primary
      "
      animate={{
        width: `${progress}%`,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 30,
      }}
    />

  );

}