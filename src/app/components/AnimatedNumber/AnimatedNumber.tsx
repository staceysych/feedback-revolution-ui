"use client";

import { motion } from "framer-motion";

import { useCountAnimation } from "@/app/hooks/useCountAnimation";

const AnimatedNumber = ({ value }: { value: number }) => {
  const { count, ref } = useCountAnimation(value, 2);

  return <motion.span ref={ref}>{count}</motion.span>;
};

export default AnimatedNumber;
