'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface DrawingAnimationProps {
  className?: string;
}

const DrawingAnimation: React.FC<DrawingAnimationProps> = ({ className }) => {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full absolute inset-0"
        style={{ filter: 'blur(1px)' }}
      >
        {/* Main outer circle */}
        <motion.path
          d="M 250,100 
             C 350,100 400,150 400,250
             C 400,350 350,400 250,400
             C 150,400 100,350 100,250
             C 100,150 150,100 250,100
             Z"
          stroke="rgba(60, 162, 247, 0.3)"
          strokeWidth="308"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            rotate: [0, -360],
            scale: [1, 1.1, 1]
          }}
          style={{ transformOrigin: '250px 250px' }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Inner circle with reverse rotation */}
        <motion.path
          d="M 250,150 
             C 325,150 350,175 350,250
             C 350,325 325,350 250,350
             C 175,350 150,325 150,250
             C 150,175 175,150 250,150
             Z"
          stroke="rgba(60, 162, 247, 0.2)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            rotate: [0, 360],
            scale: [1, 0.9, 1]
          }}
          style={{ transformOrigin: '250px 250px' }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.circle
            key={i}
            r="4"
            fill="rgba(60, 162, 247, 0.2)"
            initial={{ 
              x: 250 + Math.cos(-i * Math.PI / 4) * 150,
              y: 250 + Math.sin(-i * Math.PI / 4) * 150
            }}
            animate={{
              x: [
                250 + Math.cos(-i * Math.PI / 4) * 150,
                250 + Math.cos(-(i + 1) * Math.PI / 4) * 160,
                250 + Math.cos(-i * Math.PI / 4) * 150
              ],
              y: [
                250 + Math.sin(-i * Math.PI / 4) * 150,
                250 + Math.sin(-(i + 1) * Math.PI / 4) * 160,
                250 + Math.sin(-i * Math.PI / 4) * 150
              ],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}

        {/* Connecting lines */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.2, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.line
              key={i}
              x1={250 + Math.cos(-i * Math.PI / 4) * 150}
              y1={250 + Math.sin(-i * Math.PI / 4) * 150}
              x2={250 + Math.cos(-(((i + 1) % 8)) * Math.PI / 4) * 150}
              y2={250 + Math.sin(-(((i + 1) % 8)) * Math.PI / 4) * 150}
              stroke="rgba(60, 162, 247, 0.1)"
              strokeWidth="1"
            />
          ))}
        </motion.g>

        {/* Pulsing center */}
        <motion.circle
          cx="250"
          cy="250"
          r="10"
          fill="rgba(60, 162, 247, 0.3)"
          initial={{ scale: 0 }}
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Random floating dots */}
        {[...Array(12)].map((_, i) => (
          <motion.circle
            key={`float-${i}`}
            r="2"
            fill="rgba(60, 162, 247, 0.15)"
            initial={{ 
              x: Math.random() * 500,
              y: Math.random() * 500
            }}
            animate={{
              x: [
                Math.random() * 500,
                Math.random() * 500,
                Math.random() * 500
              ],
              y: [
                Math.random() * 500,
                Math.random() * 500,
                Math.random() * 500
              ],
              opacity: [0.15, 0.3, 0.15]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default DrawingAnimation; 