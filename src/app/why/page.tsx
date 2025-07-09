'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import DrawingAnimation from '@/components/DrawingAnimation';
import NotifyModal from '@/components/NotifyModal';
import Image from 'next/image';
import logo from '@/assets/logo.png';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut"
    }
  }
};

const FeatureCard = ({ icon, title, description, color }: { icon: React.ReactNode; title: string; description: string; color: string }) => {
  const cardRef = useRef(null);
  
  return (
    <motion.div
      ref={cardRef}
      className="relative p-8 rounded-2xl backdrop-blur-sm border border-neutral-700/30 overflow-hidden group"
      style={{ background: 'rgba(18, 18, 18, 0.4)' }}
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Gradient background */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${color}`} />
      
      {/* Icon container */}
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${color} bg-opacity-10 relative`}>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-white/5" />
        {icon}
      </div>

      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-neutral-400 leading-relaxed">{description}</p>

      {/* Animated border */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className={`absolute inset-px rounded-2xl border border-${color.split('from-')[1].split(' ')[0]} opacity-20`} />
      </div>
    </motion.div>
  );
};

export default function WhyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <main className="min-h-screen bg-neutral-900 text-neutral-100 relative overflow-hidden">
        <DrawingAnimation className="absolute inset-0 opacity-10" />
        
        {/* Enhanced background gradients */}
        <motion.div 
          className="fixed inset-0 pointer-events-none"
          animate={{
            background: [
              'radial-gradient(circle at 20% 20%, rgba(66, 133, 244, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(52, 168, 83, 0.1) 0%, transparent 40%)',
              'radial-gradient(circle at 80% 20%, rgba(234, 67, 53, 0.15) 0%, transparent 40%), radial-gradient(circle at 20% 80%, rgba(251, 188, 5, 0.1) 0%, transparent 40%)',
              'radial-gradient(circle at 50% 50%, rgba(66, 133, 244, 0.15) 0%, transparent 40%), radial-gradient(circle at 50% 50%, rgba(52, 168, 83, 0.1) 0%, transparent 40%)',
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        {/* Hero Section */}
        <motion.section 
          className="relative min-h-screen flex items-center justify-center py-20"
          style={{ y, opacity }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="max-w-4xl mx-auto text-center relative"
            >
              {/* Animated underline */}
              {/* <motion.div
                className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-1"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "5rem", opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(66, 133, 244, 0.5), transparent)'
                }}
              /> */}

              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
                variants={itemVariants}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-400">
                  Why
                </span>{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-400">
                  illumioFlow?
                </span>
              </motion.h1>

              <motion.p 
                className="text-xl md:text-2xl text-neutral-100 mb-12 max-w-2xl mx-auto"
                variants={itemVariants}
              >
                We believe productivity tools should <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-400" style={{ fontSize: '1.42rem' }}>enhance your workflow,</span> <span className="" style={{ color: 'rgb(250, 111, 111)' }}>not complicate it.</span>
              </motion.p>

              {/* Animated scroll indicator */}
              <motion.div
                className="absolute -bottom-20 left-1/2 -translate-x-1/2"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg 
                  className="w-6 h-6 text-neutral-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="rgba(115, 223, 82, 0.86)"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={5}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Features Grid */}
        <section className="relative py-20 z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                icon={
                  <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
                title="Engineered for Simplicity"
                description="As engineers, we understand the value of elegant solutions. We've stripped away the unnecessary complexity to focus on what truly matters - getting things done."
                color="from-blue-500"
              />

              <FeatureCard
                icon={
                  <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                title="Focus on What Matters"
                description="No more getting lost in endless menus and features. LumenFlow helps you maintain focus on your tasks and goals, not on managing the tool itself."
                color="from-green-500"
              />

              <FeatureCard
                icon={
                  <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                title="Time is Precious"
                description="We believe your time is better spent on actual work rather than organizing it. Our intuitive interface gets you started in seconds, not hours."
                color="from-red-500"
              />

              <FeatureCard
                icon={
                  <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                }
                title="Built for Everyone"
                description="Whether you're a student, professional, or anyone in between, LumenFlow adapts to your needs without overwhelming you with complexity."
                color="from-yellow-500"
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">
                Ready to Simplify Your Workflow?
              </h2>
              <p className="text-xl text-neutral-200 mb-12">
                Join us in creating a more focused and productive way of working.
              </p>
              <motion.div
                className="container-special"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#" className="button-special type--C" onClick={(e) => {
                  e.preventDefault();
                  setIsModalOpen(true);
                }}>
                  <div className="button__line"></div>
                  <div className="button__line"></div>
                  <div className="button__text">
                    <motion.div
                      className="relative mr-2"
                      initial={{ rotate: 0 }}
                      animate={{
                        rotate: [0, -10, 10, -10, 10, -5, 5, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut"
                      }}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <motion.path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{
                            duration: 1.5,
                            ease: "easeInOut"
                          }}
                        />
                      </svg>
                    </motion.div>
                    NOTIFY ME
                  </div>
                  <div className="button__drow1"></div>
                  <div className="button__drow2"></div>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="rounded-full shadow-sm m-4 mt-20 border border-neutral-700/30">
          <div className="w-full mx-auto max-w-screen-xl py-4 px-4 md:px-5 flex items-center justify-between">
            <span className="text-[12px] sm:text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" className="hover:underline">LumenFlow™</a>. All Rights Reserved.</span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                <Image src={logo} alt="LumenFlow Logo" className="w-5 h-5 sm:w-10 sm:h-10 mb-2 sm:mb-0" />
              </li>
            </ul>
          </div>
        </footer>
      </main>
      <NotifyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
} 