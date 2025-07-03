import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';

interface PhoneCarouselProps {
  images: string[];
}

const PhoneCarousel = ({ images }: PhoneCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Debounce scroll handling
  const handleScroll = useCallback((event: WheelEvent) => {
    event.preventDefault();
    if (isScrolling) return;

    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 300); // Reduced debounce time

    const direction = event.deltaY > 0 ? 1 : -1;
    setDirection(direction);
    setCurrentIndex(prev => {
      const next = (prev + direction + images.length) % images.length;
      return next < 0 ? images.length - 1 : next;
    });
  }, [isScrolling, images.length]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (isScrolling) return;

    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
      const direction = event.key === 'ArrowDown' ? 1 : -1;
      
      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 300);

      setDirection(direction);
      setCurrentIndex(prev => {
        const next = (prev + direction + images.length) % images.length;
        return next < 0 ? images.length - 1 : next;
      });
    }
  }, [isScrolling, images.length]);

  useEffect(() => {
    const element = containerRef.current;
    if (element) {
      element.addEventListener('wheel', handleScroll, { passive: false });
      element.addEventListener('keydown', handleKeyDown);
      element.focus(); // Focus the element to enable keyboard navigation

      return () => {
        element.removeEventListener('wheel', handleScroll);
        element.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [handleScroll, handleKeyDown]);

  const slideVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 200 : -200,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      y: direction < 0 ? 200 : -200,
      opacity: 0
    })
  };

  const handleDragEnd = (event: any, info: any) => {
    if (isScrolling) return;
    
    const yThreshold = 50;
    const direction = info.offset.y > 0 ? -1 : 1;
    
    if (Math.abs(info.offset.y) > yThreshold) {
      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 300);
      
      setDirection(direction);
      setCurrentIndex(prev => {
        const next = (prev + direction + images.length) % images.length;
        return next < 0 ? images.length - 1 : next;
      });
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full overflow-hidden rounded-xl cursor-pointer focus:outline-none"
      tabIndex={0}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.5}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 touch-none"
        >
          <Image
            src={images[currentIndex]}
            alt={`Screen ${currentIndex + 1}`}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-xl pointer-events-none"
            priority
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Scroll Indicator */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-1 pointer-events-none">
        {images.map((_, index) => (
          <motion.div
            key={index}
            className={`w-1 h-8 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/30'
            }`}
            initial={false}
            animate={{
              height: index === currentIndex ? 32 : 16,
              opacity: index === currentIndex ? 1 : 0.3
            }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>

      {/* Scroll Hint */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Scroll or drag to navigate
      </motion.div>
    </div>
  );
};

export default PhoneCarousel; 