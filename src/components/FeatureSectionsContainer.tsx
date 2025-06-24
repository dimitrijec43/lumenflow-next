'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import FeatureSection from './FeatureSection';

interface FeatureData {
  title: string;
  description: string;
  features: string[];
  color: 'blue' | 'red' | 'yellow' | 'green';
}

interface FeatureSectionsContainerProps {
  features: FeatureData[];
}

const FeatureSectionsContainer: React.FC<FeatureSectionsContainerProps> = ({ features }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Calculate total scroll distance needed
  const totalSections = features.length;
  // Add extra padding at start and end to prevent overlap
  const scrollDistance = `${(totalSections + 2) * 100}vh`; // Increased from +1.5 to +2 for more space

  // Main container visibility
  const containerVisibility = useTransform(
    scrollYProgress,
    [0, 0.1, 0.85, 1], // Changed from 0.9 to 0.85 to extend visibility
    [0, 1, 1, 0]
  );

  return (
    <div className="relative bg-neutral-900 z-40">
      {/* Increased top spacer */}
      <div className="h-[75vh]" /> {/* Increased from 65vh to 75vh */}
      
      <div
        ref={containerRef}
        className="relative perspective-1000"
        style={{ height: scrollDistance }}
      >
        {/* Fixed container for vertical scroll */}
        <motion.div
          className="fixed top-0 left-0 w-full h-screen flex items-center pointer-events-none"
          style={{
            opacity: containerVisibility
          }}
        >
          {/* Background gradient effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 opacity-10"
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.2, 0])
            }}
          />

          {/* Progress bar - On the left side */}
          <motion.div
            className="absolute left-[40px] sm:left-[60px] md:left-[80px] top-0 w-1 h-full bg-gradient-to-b from-google-blue via-google-red to-google-yellow z-50"
            style={{
              scaleY: useTransform(scrollYProgress, [0.1, 0.85], [0, 1]), // Changed from 0.9 to 0.85
              opacity: useTransform(scrollYProgress, [0.05, 0.1, 0.85, 0.95], [0, 1, 1, 0]) // Changed from 0.9 to 0.85
            }}
          />

          {/* Vertical scroll container */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-start overflow-visible px-4 sm:px-6 md:px-8 pt-16 sm:pt-12 md:pt-0"
            style={{
              y: useTransform(
                scrollYProgress,
                [0.1, 0.85], // Changed from 0.9 to 0.85
                ["0%", `-${(totalSections - 1) * 100}%`]
              )
            }}
          >
            {features.map((feature, index) => {
              // Adjust the progress calculation for each section
              const isLastSection = index === features.length - 1;
              const sectionProgress = useTransform(
                scrollYProgress,
                [
                  (index - 0.5) / totalSections,
                  index / totalSections,
                  (index + (isLastSection ? 1.5 : 1)) / totalSections, // Extended duration for last section
                  (index + (isLastSection ? 2 : 1.5)) / totalSections  // Extended fade-out for last section
                ],
                [0, 1, 1, 0]
              );

              return (
                <motion.div
                  key={index}
                  className="h-screen w-full flex-shrink-0 flex items-center justify-center"
                  style={{
                    opacity: sectionProgress,
                    scale: useTransform(sectionProgress, [0, 1], [0.95, 1]),
                    filter: useTransform(
                      sectionProgress,
                      [0, 1],
                      ["blur(8px)", "blur(0px)"]
                    )
                  }}
                  transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 300
                  }}
                >
                  <div className="max-w-6xl mx-auto w-full">
                    <FeatureSection {...feature} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Progress indicators - On the right side */}
          <motion.div
            className="fixed right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 flex flex-col space-y-2 sm:space-y-3 md:space-y-4 z-50"
            style={{
              opacity: useTransform(scrollYProgress, [0.05, 0.1, 0.85, 0.95], [0, 1, 1, 0]) // Changed from 0.9 to 0.85
            }}
          >
            {features.map((feature, index) => {
              const isLastSection = index === features.length - 1;
              const dotProgress = useTransform(
                scrollYProgress,
                [
                  (index / totalSections) * 0.75 + 0.1,
                  ((index + 0.5) / totalSections) * 0.75 + 0.1,
                  ((index + (isLastSection ? 1.5 : 1)) / totalSections) * 0.75 + 0.1
                ],
                [0.2, 1, 0.2]
              );

              return (
                <motion.button
                  key={index}
                  className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full relative group pointer-events-auto"
                  style={{
                    backgroundColor: '#fff',
                    opacity: dotProgress
                  }}
                >
                  <motion.span
                    className="absolute -left-8 top-1/2 -translate-y-1/2 bg-white/10 text-white text-[10px] sm:text-xs py-1 px-2 rounded opacity-0 transition-opacity duration-200 whitespace-nowrap backdrop-blur-sm"
                    style={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {feature.title}
                  </motion.span>
                </motion.button>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Increased bottom spacer */}
      <div className="h-[55vh]" /> {/* Increased from 45vh to 55vh */}
    </div>
  );
};

export default FeatureSectionsContainer; 