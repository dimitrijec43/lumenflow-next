'use client';

import { motion } from 'framer-motion';
import logo from '@/assets/logo.png';
import Image from 'next/image';

const LoadingScreen = () => {
  // SVG path for clock face
  const clockPath = "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z";
  const hourHandPath = "M12 12L12 7";
  const minuteHandPath = "M12 12L17 12";

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="relative text-center">
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="relative w-10 h-10 mt-4 mx-auto mb-5"
        >
          <Image
            src={logo}
            alt="LumenFlow Logo"
            fill
            className="object-contain"
          />
        </motion.div>
        {/* Clock SVG */}
        <motion.svg
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-500"
        >
          {/* Clock face */}
          <motion.path
            d={clockPath}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
          
          {/* Hour markers */}
          {[...Array(12)].map((_, i) => (
            <motion.line
              key={i}
              x1="12"
              y1="4"
              x2="12"
              y2="5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              transform={`rotate(${i * 30} 12 12)`}
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}

          {/* Hour hand */}
          <motion.path
            d={hourHandPath}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              rotate: 360
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
          />

          {/* Minute hand */}
          <motion.path
            d={minuteHandPath}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              rotate: 360
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
          />

          {/* Center dot */}
          <motion.circle
            cx="12"
            cy="12"
            r="1"
            fill="currentColor"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          />
        </motion.svg>

        
      </div>
    </motion.div>
  );
};

export default LoadingScreen; 