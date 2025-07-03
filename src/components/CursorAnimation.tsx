'use client';

import { motion, useMotionValue, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const CursorAnimation = () => {
  const [moveRipples, setMoveRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [isClicked, setIsClicked] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let lastRippleTime = 0;
    const rippleInterval = 50; // Increased frequency of ripples
    let rippleId = 0;

    const moveCursor = (e: MouseEvent) => {
      const currentTime = Date.now();
      
      // Add ripple effect during movement
      if (currentTime - lastRippleTime > rippleInterval) {
        setMoveRipples(prev => [
          ...prev.slice(-8), // Increased number of simultaneous ripples
          { x: e.clientX, y: e.clientY, id: rippleId++ }
        ]);
        lastRippleTime = currentTime;
      }
    };

    const handleClick = (e: MouseEvent) => {
      setClickPosition({ x: e.clientX, y: e.clientY });
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 500);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        body {
          cursor: default !important;
        }
        a, button, [role="button"], input, select, textarea {
          cursor: pointer !important;
        }
      `}</style>
      <div className="fixed inset-0 pointer-events-none" style={{zIndex: 99999}}>
        {/* Movement ripple effects */}
        <AnimatePresence>
          {moveRipples.map((ripple) => (
            <motion.div
              key={ripple.id}
              className="fixed rounded-full"
              style={{
                x: ripple.x - 20,
                y: ripple.y - 20,
                background: 'radial-gradient(circle, rgba(59, 131, 246, 0.15) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 50%)',
                border: '2px solid rgba(59, 130, 246, 0.3)',
                boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)',
              }}
              initial={{ 
                width: 20, 
                height: 20, 
                opacity: 0.8,
                scale: 0.5,
              }}
              animate={{ 
                width: 120, 
                height: 120, 
                opacity: 0,
                scale: 1,
                x: ripple.x - 60,
                y: ripple.y - 60,
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 1, 
                ease: "easeOut",
                opacity: { duration: 0.8 }
              }}
            />
          ))}
        </AnimatePresence>

        {/* Click ripple effect - larger and more prominent */}
        <AnimatePresence>
          {isClicked && (
            <motion.div
              className="fixed rounded-full"
              style={{
                x: clickPosition.x - 25,
                y: clickPosition.y - 25,
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.15) 50%, transparent 70%)',
                border: '3px solid rgba(59, 130, 246, 0.4)',
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
              }}
              initial={{ 
                width: 30, 
                height: 30, 
                opacity: 1,
                scale: 0.5,
              }}
              animate={{ 
                width: 150, 
                height: 150, 
                opacity: 0,
                scale: 1,
                x: clickPosition.x - 75,
                y: clickPosition.y - 75,
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                opacity: { duration: 0.6 }
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default CursorAnimation; 