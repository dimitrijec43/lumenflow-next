'use client';

import { motion } from 'framer-motion';
import logo from '@/assets/logo.png';
import Image from 'next/image';

const LoadingScreen = () => {
  // SVG path for clock face with more elegant design
  const clockPath = "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z";
  const hourHandPath = "M12 12L12 8"; // Made hour hand slightly shorter
  const minuteHandPath = "M12 12L18 12"; // Made minute hand slightly longer

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="relative text-center">
        {/* Logo container with glow effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.34, 1.56, 0.64, 1], // Custom spring-like easing
          }}
          className="relative w-10 h-10 mt-4 mx-auto mb-5"
        >
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-blue-500/20 blur-lg"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4
              },
              opacity: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4
              }
            }}
          />
          
          {/* Logo with floating animation */}
          <motion.div
            className="relative w-full h-full"
            initial={{ rotate: -15, opacity: 0 }}
            animate={{ 
              rotate: [-5, 5, -5],
              y: [-2, 2, -2],
              scale: [1, 1.05, 1],
              opacity: 1
            }}
            transition={{
              rotate: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6
              },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6
              },
              scale: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6
              },
              opacity: {
                duration: 0.4,
                delay: 0.2
              }
            }}
          >
            <Image
              src={logo}
              alt="LumenFlow Logo"
              fill
              className="object-contain drop-shadow-lg"
            />
          </motion.div>

          {/* Orbiting particles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-blue-400/50"
              style={{
                top: '50%',
                left: '50%',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3],
                rotate: -360,
              }}
              transition={{
                scale: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.8 + (i * 0.2)
                },
                opacity: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.8 + (i * 0.2)
                },
                rotate: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.8 + (i * 0.2)
                }
              }}
            >
              <motion.div
                className="absolute w-1 h-1 rounded-full bg-blue-400/50"
                style={{
                  transform: `translate(-50%, -50%) rotate(${i * 120}deg) translateX(${15 + i * 2}px)`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
        {/* Clock SVG */}
        <motion.svg
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-500"
        >
          {/* Outer ring with gradient */}
          <motion.circle
            cx="12"
            cy="12"
            r="11"
            className="stroke-blue-400/30"
            strokeWidth="0.5"
            fill="none"
          />

          {/* Clock face with pulsing animation - Modified to draw clockwise */}
          <motion.path
            d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2"
            initial={{ pathLength: 0, pathOffset: 0 }}
            animate={{ 
              pathLength: 1,
              pathOffset: [0, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              pathLength: {
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity
              },
              pathOffset: {
                duration: 2,
                ease: "linear",
                repeat: Infinity
              },
              opacity: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
          
          {/* Hour markers with different lengths for quarters */}
          {[...Array(12)].map((_, i) => (
            <motion.line
              key={i}
              x1="12"
              y1={i % 3 === 0 ? "3.5" : "4"} // Longer lines for quarter hours
              x2="12"
              y2="5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              transform={`rotate(${i * 30} 12 12)`}
              strokeWidth={i % 3 === 0 ? "1.5" : "1"} // Thicker lines for quarter hours
              className={i % 3 === 0 ? "text-blue-400" : "text-blue-500/70"}
            />
          ))}

          {/* Hour hand */}
          <motion.path
            d={hourHandPath}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              rotate: -360 // Changed to negative for clockwise rotation
            }}
            transition={{
              opacity: { duration: 0.5 },
              rotate: {
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }
            }}
            style={{ transformOrigin: '12px 12px' }}
            strokeWidth="1.5"
            className="text-blue-300"
          />

          {/* Minute hand */}
          <motion.path
            d={minuteHandPath}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              rotate: -360 // Changed to negative for clockwise rotation
            }}
            transition={{
              opacity: { duration: 0.5 },
              rotate: {
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }
            }}
            style={{ transformOrigin: '12px 12px' }}
            strokeWidth="1.5"
            className="text-blue-400"
          />

          {/* Center dot with subtle glow */}
          <motion.circle
            cx="12"
            cy="12"
            r="1.5"
            className="fill-blue-400"
            initial={{ scale: 0 }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Subtle glow effect */}
          <motion.circle
            cx="12"
            cy="12"
            r="1"
            className="fill-blue-400/30 blur-sm"
            initial={{ scale: 0 }}
            animate={{ 
              scale: [1, 2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.svg>
      </div>

      <motion.div 
        className="text-center pt-10 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Glowing background effect */}
        <motion.div
          className="absolute inset-0 bg-blue-500/5 blur-2xl rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Quote text with gradient and animation */}
        <motion.p
          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300/70 via-blue-400/70 to-blue-300/70 text-sm font-medium tracking-wide relative"
          animate={{ 
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ 
            backgroundSize: '200% auto',
          }}
        >
          "Your <span style={{ color: 'rgba(184, 255, 70, 0.73)', fontWeight: 'bold' }}>focus</span> determines your reality."
        </motion.p>
        
        {/* Attribution with fade in */}
        {/* <motion.p
          className="text-blue-400/40 text-xs mt-2 tracking-widest"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          — QUI-GON JINN
        </motion.p> */}
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen; 