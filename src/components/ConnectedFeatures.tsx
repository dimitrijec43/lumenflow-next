import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { linearGradient } from 'framer-motion/client';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: "Your Session Timer",
    description: "Preset and custom session you can adapt to Your work patterns",
    icon: "⏱️"
  },
  {
    title: "Task Management",
    description: "Organize and prioritize Your tasks effectively",
    icon: "📋"
  },
  {
    title: "Analytics Dashboard",
    description: "Track Your productivity with detailed insights",
    icon: "📊"
  },
  {
    title: "Currated Sounds",
    description: "Currated sounds to help You focus and relax",
    icon: "🎧"
  }
];

const ConnectedFeatures = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstIconRef = useRef<HTMLDivElement>(null);
  const lastIconRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [lineTop, setLineTop] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  useEffect(() => {
    const updateLineDimensions = () => {
      if (firstIconRef.current && lastIconRef.current) {
        const firstIconRect = firstIconRef.current.getBoundingClientRect();
        const lastIconRect = lastIconRef.current.getBoundingClientRect();
        const containerRect = containerRef.current?.getBoundingClientRect();
        
        if (containerRect) {
          const firstIconTop = firstIconRect.top - containerRect.top + firstIconRect.height / 2;
          const lastIconBottom = lastIconRect.top - containerRect.top + lastIconRect.height / 2;
          setLineHeight(lastIconBottom - firstIconTop);
          setLineTop(firstIconTop);
        }
      }
    };

    updateLineDimensions();
    window.addEventListener('resize', updateLineDimensions);
    return () => window.removeEventListener('resize', updateLineDimensions);
  }, []);

  return (
    <div style={{ background: 'rgba(18, 18, 18, 1)'}}>
    <section className="py-16 md:py-32 relative overflow-hidden" style={{ backdropFilter: 'blur(65px)' }}>
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-16"
            >
              How It All Connects
            </motion.h2>

            <div className="relative" ref={containerRef}>
              {/* Connecting Line */}
              <div 
                className="absolute left-1/2 -translate-x-1/2 bg-blue-500/10"
                style={{ 
                  top: lineTop,
                  height: lineHeight,
                  width: '5px'
                }}
              />
              <motion.div 
                className="absolute left-1/2 -translate-x-1/2 bg-blue-500/30 origin-top"
                style={{ 
                  top: lineTop,
                  height: lineHeight,
                  scaleY: scrollYProgress,
                  width: '1px'
                }}
              />

              {/* Features */}
              <div className="relative z-10 max-w-5xl mx-auto">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="grid grid-cols-[1fr,auto,1fr] items-center gap-4 md:gap-8 mb-16 md:mb-32 last:mb-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { duration: 0.2, staggerChildren: 0.3 } }
                    }}
                  >
                    {/* Left side content */}
                    <motion.div 
                      className={`${index % 2 === 0 ? "" : "col-start-1"} text-right`}
                      variants={{
                        hidden: { 
                          opacity: 0, 
                          x: index % 2 === 0 ? -50 : 50,
                          y: 20
                        },
                        visible: { 
                          opacity: 1, 
                          x: 0,
                          y: 0,
                          transition: {
                            duration: 1.2,
                            ease: "easeOut"
                          }
                        }
                      }}
                    >
                      {index % 2 === 0 && (
                        <>
                          <motion.h3 
                            className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-4"
                            variants={{
                              hidden: { opacity: 0, y: 20 },
                              visible: { 
                                opacity: 1, 
                                y: 0,
                                transition: { duration: 0.2, delay: 0.1 }
                              }
                            }}
                          >
                            {feature.title}
                          </motion.h3>
                          <motion.p 
                            className="text-sm md:text-base text-neutral-300"
                            variants={{
                              hidden: { opacity: 0, y: 20 },
                              visible: { 
                                opacity: 1, 
                                y: 0,
                                transition: { duration: 0.32, delay: 0.1 }
                              }
                            }}
                          >
                            {feature.description}
                          </motion.p>
                        </>
                      )}
                    </motion.div>

                    {/* Center Icon */}
                    <motion.div
                      ref={index === 0 ? firstIconRef : index === features.length - 1 ? lastIconRef : null}
                      className="relative col-start-2"
                      variants={{
                        hidden: { 
                          scale: 0.8,
                          opacity: 0,
                          y: 20
                        },
                        visible: { 
                          scale: 1,
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.35,
                            ease: "easeOut"
                          }
                        }
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="w-12 h-12 md:w-16 md:h-16 bg-neutral-800/50 rounded-full flex items-center justify-center text-xl md:text-2xl backdrop-blur-lg relative z-10"
                      >
                        {feature.icon}
                      </motion.div>
                      <motion.div
                        className="absolute inset-0 rounded-full bg-blue-500/20"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>

                    {/* Right side content */}
                    <motion.div 
                      className={`${index % 2 === 1 ? "" : "col-start-3"} text-left`}
                      variants={{
                        hidden: { 
                          opacity: 0, 
                          x: index % 2 === 1 ? -50 : 50,
                          y: 20
                        },
                        visible: { 
                          opacity: 1, 
                          x: 0,
                          y: 0,
                          transition: {
                            duration: 0.35,
                            ease: "easeOut"
                          }
                        }
                      }}
                    >
                      {index % 2 === 1 && (
                        <>
                          <motion.h3 
                            className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-4"
                            variants={{
                              hidden: { opacity: 0, y: 20 },
                              visible: { 
                                opacity: 1, 
                                y: 0,
                                transition: { duration: 0.2, delay: 0 }
                              }
                            }}
                          >
                            {feature.title}
                          </motion.h3>
                          <motion.p 
                            className="text-sm md:text-base text-neutral-300"
                            variants={{
                              hidden: { opacity: 0, y: 20 },
                              visible: { 
                                opacity: 1, 
                                y: 0,
                                transition: { duration: 0.2, delay: 0 }
                              }
                            }}
                          >
                            {feature.description}
                          </motion.p>
                        </>
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
    </section>
    </div>
  );
};

export default ConnectedFeatures; 