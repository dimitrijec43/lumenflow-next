'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useSpring, useInView } from 'framer-motion';

export function useScrollAnimation(threshold = 0.5) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: threshold });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      setHasAnimated(true);
    }
  }, [isInView]);

  return { ref, isInView, hasAnimated };
}

export function useParallax(
  scrollYProgress: any,
  range: [number, number] = [-50, 50],
  springConfig = { stiffness: 400, damping: 90 }
) {
  const springY = useSpring(
    useTransform(scrollYProgress, [0, 1], range),
    springConfig
  );

  return springY;
}

export function useSmoothTransform(
  value: any,
  inputRange: number[],
  outputRange: number[],
  springConfig = { stiffness: 400, damping: 90 }
) {
  const smoothValue = useSpring(
    useTransform(value, inputRange, outputRange),
    springConfig
  );

  return smoothValue;
} 