import { useSpring, useTransform, useInView, clamp } from "framer-motion";
import { useEffect, useRef } from "react";

export const useCountAnimation = (end: number, duration: number) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const spring = useSpring(0, { duration: duration * 1000 });
  const count = useTransform(spring, (value) => Math.floor(value));

  useEffect(() => {
    if (isInView && spring.get() !== end) {
      spring.set(end);
    }
  }, [spring, end, isInView]);

  return { count, ref };
};
