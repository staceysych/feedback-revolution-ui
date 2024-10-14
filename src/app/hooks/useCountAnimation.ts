import { useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const useCountAnimation = (end: number, duration: number) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const spring = useSpring(0, { duration: duration * 1000 });
  const count = useTransform(spring, (value) => Math.round(value));

  useEffect(() => {
    if (isInView) {
      spring.set(end);
    }
  }, [spring, end, isInView]);

  return { count, ref };
};
