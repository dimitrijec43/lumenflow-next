'use client';

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';

const CursorAnimation = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isClicked, setIsClicked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  
  // Much more responsive spring config
  const springConfig = { damping: 10, stiffness: 800, mass: 0.2 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  // Enhanced trail cursors with stronger visibility
  const trailCursors = [
    { scale: 1, opacity: 0.4 },
    { scale: 1.2, opacity: 0.3 },
    { scale: 1.4, opacity: 0.2 }
  ];

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      });
    };

    const handleClick = (e: MouseEvent) => {
      setClickPosition({ x: e.clientX, y: e.clientY });
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 500);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = !!(target.tagName === 'BUTTON' || 
                         target.tagName === 'A' || 
                         target.closest('button') || 
                         target.closest('a'));
      setIsHovering(isClickable);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('click', handleClick);
    window.addEventListener('mouseover', handleHover);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-100" style={{zIndex: 99999}}>
      {/* Main cursor - centered on mouse position */}
      <motion.div
        className="w-5 h-5 p-1 rounded-full bg-gradient-to-r from-blue-200/50 to-blue-300/50 backdrop-blur-sm border border-white/10 fixed shadow-lg shadow-blue-500/20"
        style={{
          x: useTransform(smoothX, (x) => x - 10),
          y: useTransform(smoothY, (y) => y - 10),
          scale: isHovering ? 1.5 : 1,
        }}
        animate={{
          scale: isClicked ? 0.8 : isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <Image src={logo} alt="cursor" width={20} height={20} />
      </motion.div>

      {/* Click ripple effect */}
      <AnimatePresence>
        {isClicked && (
          <motion.div
            className="fixed rounded-full border-2 border-purple-500/30"
            style={{
              x: clickPosition.x - 20,
              y: clickPosition.y - 20,
            }}
            initial={{ width: 20, height: 20, opacity: 1 }}
            animate={{ 
              width: 100, 
              height: 100, 
              opacity: 0,
              x: clickPosition.x - 50,
              y: clickPosition.y - 50,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      {/* Enhanced trail cursors */}
      {trailCursors.map((trail, index) => {
        const trailSpringConfig = {
          damping: 15 + index * 5,
          stiffness: 600 - index * 100,
          mass: 0.2,
        };
        
        const trailX = useSpring(smoothX, trailSpringConfig);
        const trailY = useSpring(smoothY, trailSpringConfig);

        return (
          <motion.div
            key={index}
            className="w-5 h-5 rounded-full fixed shadow-lg shadow-purple-500/30"
            style={{
              x: useTransform(trailX, (x) => x - 10),
              y: useTransform(trailY, (y) => y - 10),
              scale: isHovering ? trail.scale * 1.2 : trail.scale,
              opacity: trail.opacity,
              background: 'radial-gradient(circle, rgba(147,51,234,0.3) 0%, rgba(79,70,229,0.1) 100%)',
              boxShadow: '0 0 20px 2px rgba(147,51,234,0.2)',
              filter: 'blur(4px)',
            }}
          />
        );
      })}
    </div>
  );
};

export default CursorAnimation; 