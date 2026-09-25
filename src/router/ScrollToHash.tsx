import { useEffect } from "react";
//import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  /*
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });

      return;
    }

    const id = decodeURIComponent(hash.slice(1));

    let attempts = 0;
    let frame = 0;

    const scrollToTarget = () => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        return;
      }

      if (attempts < 10) {
        attempts += 1;
        frame = requestAnimationFrame(scrollToTarget);
      }
    };

    frame = requestAnimationFrame(scrollToTarget);

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [pathname, hash]);
  */
  return null;
}