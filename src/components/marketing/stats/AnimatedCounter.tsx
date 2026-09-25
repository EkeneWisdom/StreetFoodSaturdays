import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const step = Math.max(1, Math.ceil(value / 40));

    const timer = window.setInterval(() => {
      current += step;

      if (current >= value) {
        current = value;
        clearInterval(timer);
      }

      setCount(current);
    }, 25);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}