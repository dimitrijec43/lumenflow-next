'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface FeatureSectionProps {
  title: string;
  description: string;
  features: string[];
  color: 'blue' | 'red' | 'yellow' | 'green';
}

const colorClasses = {
  blue: {
    primary: 'text-[#4285F4]',
    text: 'text-[#4285F4]',
    gradient: 'from-[#4285F4] to-[#0F9D58]',
    shadow: 'shadow-[#4285F4]/10',
  },
  red: {
    primary: 'text-[#EA4335]',
    text: 'text-[#EA4335]',
    gradient: 'from-[#EA4335] to-[#FBBC05]',
    shadow: 'shadow-[#EA4335]/10',
  },
  yellow: {
    primary: 'text-[#FBBC05]',
    text: 'text-[#FBBC05]',
    gradient: 'from-[#FBBC05] to-[#34A853]',
    shadow: 'shadow-[#FBBC05]/10',
  },
  green: {
    primary: 'text-[#34A853]',
    text: 'text-[#34A853]',
    gradient: 'from-[#34A853] to-[#4285F4]',
    shadow: 'shadow-[#34A853]/10',
  },
};

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  features,
  color,
}) => {
  const colors = colorClasses[color];

  // Theme-specific drawing paths
  const getThemePath = () => {
    switch (color) {
      case 'blue': // Focus Timer theme
        return (
          <motion.path
            d="M 250,250 m -150,0 a 150,150 0 1,0 300,0 a 150,150 0 1,0 -300,0 M 250,250 L 250,150 M 250,250 L 350,250"
            stroke={`var(--${color}-color, currentColor)`}
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: [0, 1],
              rotate: [0, 360]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        );
      case 'red': // Task Management theme
        return (
          <motion.path
            d="M 100,250 L 200,350 L 400,150 M 150,150 L 350,150 M 150,250 L 300,250 M 150,350 L 250,350"
            stroke={`var(--${color}-color, currentColor)`}
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: [0, 1],
              scale: [0.95, 1.05, 0.95]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        );
      case 'yellow': // Stats Analytics theme
        return (
          <>
            <motion.path
              d="M 100,400 L 200,300 L 300,350 L 400,100"
              stroke={`var(--${color}-color, currentColor)`}
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            />
            <motion.path
              d="M 100,400 L 400,400"
              stroke={`var(--${color}-color, currentColor)`}
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            />
          </>
        );
      case 'green': // Sync theme
        return (
          <motion.path
            d="M 250,100 A 150,150 0 1,1 100,250 L 150,200 M 250,400 A 150,150 0 1,1 400,250 L 350,300"
            stroke={`var(--${color}-color, currentColor)`}
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: [0, 1],
              rotate: [0, 360]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        );
      default:
        return null;
    }
  };

  // Function to get the appropriate icon based on the feature text
  const getFeatureIcon = (feature: string) => {
    // Timer icon
    if (feature.toLowerCase().includes('focus') || feature.toLowerCase().includes('timer') || feature.toLowerCase().includes('session')) {
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    }
    // Task/Checklist icon
    if (feature.toLowerCase().includes('task') || feature.toLowerCase().includes('categor') || feature.toLowerCase().includes('priority')) {
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      );
    }
    // Chart/Analytics icon
    if (feature.toLowerCase().includes('analytics') || feature.toLowerCase().includes('progress') || feature.toLowerCase().includes('track') || feature.toLowerCase().includes('insight')) {
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      );
    }
    // Sound/Audio icon
    if (feature.toLowerCase().includes('sound') || feature.toLowerCase().includes('ambient') || feature.toLowerCase().includes('audio')) {
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      );
    }
    // Team/Collaboration icon
    if (feature.toLowerCase().includes('team') || feature.toLowerCase().includes('collaborat')) {
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    }
    // AI/Smart features icon
    if (feature.toLowerCase().includes('ai') || feature.toLowerCase().includes('smart') || feature.toLowerCase().includes('intelligent')) {
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    }
    // Sync/Cloud icon
    if (feature.toLowerCase().includes('sync') || feature.toLowerCase().includes('cloud') || feature.toLowerCase().includes('backup')) {
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      );
    }
    // Default icon (lightbulb for features)
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    );
  };

  return (
    <>
      <section className="relative min-h-[80vh] py-12 sm:py-16 md:py-20 flex items-center justify-center overflow-hidden">
        {/* Background animation */}
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 ${colors.primary} rounded-full`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
                y: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>

        {/* Centered background drawing - Adjusted size for mobile */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg 
            className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] opacity-10"
            viewBox="0 0 500 500"
            style={{
              filter: 'blur(1px)'
            }}
          >
            {getThemePath()}
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
          {/* Title and Description - Adjusted text sizes */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            >
              <motion.h2 
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 ${colors.text} tracking-tight`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
              >
                {title}
                <motion.span
                  className="inline-block"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 5,
                  }}
                >
                  ✨
                </motion.span>
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {description}
              </motion.p>
            </motion.div>
          </div>

          {/* Features Grid - Improved responsive layout */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`relative p-4 sm:p-6 rounded-xl bg-neutral-800/30 backdrop-blur-sm border border-neutral-700/50 ${colors.shadow} group hover:bg-neutral-800/40 transition-all duration-300`}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 20
                    }
                  }
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Gradient border animation */}
                <motion.div
                  className="absolute inset-0 rounded-xl -z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${colors.gradient} opacity-20`} />
                </motion.div>

                <div className={`flex items-start gap-3 text-left`}>
                  <motion.div 
                    className={`${colors.text} mt-1`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {getFeatureIcon(feature)}
                  </motion.div>
                  <motion.p 
                    className="text-sm sm:text-base md:text-lg text-neutral-200"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {feature}
                  </motion.p>
                </div>

                {/* Floating particles */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 ${colors.primary} rounded-full`}
                      initial={{
                        x: Math.random() * 100 + "%",
                        y: Math.random() * 100 + "%",
                      }}
                      animate={{
                        x: [
                          Math.random() * 100 + "%",
                          Math.random() * 100 + "%",
                          Math.random() * 100 + "%",
                        ],
                        y: [
                          Math.random() * 100 + "%",
                          Math.random() * 100 + "%",
                          Math.random() * 100 + "%",
                        ],
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FeatureSection; 