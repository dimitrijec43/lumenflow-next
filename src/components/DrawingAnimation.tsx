'use client';

import { motion } from 'framer-motion';
import React from 'react';

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
        <motion.path
          d="M 250,100 
             C 350,100 400,150 400,250
             C 400,350 350,400 250,400
             C 150,400 100,350 100,250
             C 100,150 150,100 250,100
             Z"
          stroke="rgba(60, 162, 247, 0.3)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Inner decorative paths */}
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
            rotate: [360, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />

        {/* Accent lines */}
        <motion.path
          d="M 200,200 L 300,300"
          stroke="rgba(60, 162, 247, 0.15)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.path
          d="M 300,200 L 200,300"
          stroke="rgba(60, 162, 247, 0.15)"
          strokeWidth="20"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </svg>
    </div>
  );
};

export default DrawingAnimation; 