import {
  motion,
  type MotionProps,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useState, type ComponentPropsWithoutRef, type ReactNode } from "react";

type MotionDivProps = ComponentPropsWithoutRef<typeof motion.div>;

interface Props extends MotionDivProps {
  children: ReactNode;
  viewportAmount?: number;
}

const motionTiming = {
  fast: 0.35,
  normal: 0.5,
  slow: 0.7,
  stagger: 0.12,
};

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Hook to detect whether React has mounted in the browser.
 * Prevents SSR pre-rendering opacity:0 / transforms into initial HTML.
 */
function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
}

function withMotionState(reduced: boolean, hasMounted: boolean): MotionProps {
  // If user prefers reduced motion OR JS hasn't hydrated yet, show elements immediately
  if (reduced || !hasMounted) {
    return {
      initial: false,
      animate: { opacity: 1, x: 0, y: 0, scale: 1 },
      transition: { duration: 0 },
    };
  }
  return {};
}

export function FadeIn({
  children,
  viewportAmount = 0.1,
  ...props
}: Props) {
  const reduced = useReducedMotion() ?? false;
  const hasMounted = useHasMounted();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: viewportAmount }}
      transition={{ duration: motionTiming.normal, ease }}
      {...withMotionState(reduced, hasMounted)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeUp({
  children,
  viewportAmount = 0.1,
  ...props
}: Props) {
  const reduced = useReducedMotion() ?? false;
  const hasMounted = useHasMounted();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: viewportAmount }}
      transition={{ duration: motionTiming.normal, ease }}
      {...withMotionState(reduced, hasMounted)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeLeft({
  children,
  viewportAmount = 0.1,
  ...props
}: Props) {
  const reduced = useReducedMotion() ?? false;
  const hasMounted = useHasMounted();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: viewportAmount }}
      transition={{ duration: motionTiming.normal, ease }}
      {...withMotionState(reduced, hasMounted)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeRight({
  children,
  viewportAmount = 0.1,
  ...props
}: Props) {
  const reduced = useReducedMotion() ?? false;
  const hasMounted = useHasMounted();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: viewportAmount }}
      transition={{ duration: motionTiming.normal, ease }}
      {...withMotionState(reduced, hasMounted)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({
  children,
  viewportAmount = 0.1,
  ...props
}: Props) {
  const reduced = useReducedMotion() ?? false;
  const hasMounted = useHasMounted();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: viewportAmount }}
      transition={{ duration: motionTiming.fast, ease }}
      {...withMotionState(reduced, hasMounted)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ZoomIn({
  children,
  viewportAmount = 0.1,
  ...props
}: Props) {
  const reduced = useReducedMotion() ?? false;
  const hasMounted = useHasMounted();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: viewportAmount }}
      transition={{ duration: motionTiming.normal, ease }}
      {...withMotionState(reduced, hasMounted)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  viewportAmount = 0.1,
  ...props
}: Props) {
  const reduced = useReducedMotion() ?? false;
  const hasMounted = useHasMounted();

  return (
    <motion.div
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: motionTiming.stagger,
          },
        },
      }}
      initial={hasMounted && !reduced ? "hidden" : "visible"}
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  ...props
}: Props) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: motionTiming.fast, ease }}
      {...props}
    >
      {children}
    </motion.div>
  );
}