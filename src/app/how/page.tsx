'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import DrawingAnimation from '@/components/DrawingAnimation';
import NotifyModal from '@/components/NotifyModal';
import { useState } from 'react';

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

// SVG path animations
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

const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => (
  <motion.div
    className="relative p-6 bg-neutral-800/20 rounded-2xl backdrop-blur-sm border border-neutral-700/30"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ scale: 1.02, backgroundColor: "rgba(38, 38, 38, 0.3)" }}
    transition={{ duration: 0.3 }}
  >
    <div className="absolute -top-6 left-6 w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center border border-neutral-700/50">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 mt-4 text-gradient-multi">{title}</h3>
    <p className="text-neutral-300">{description}</p>
  </motion.div>
);

export default function HowPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar onNotifyClick={() => setIsModalOpen(true)} />
      <main className="min-h-screen bg-neutral-900 text-neutral-100 relative overflow-hidden">
        <DrawingAnimation className="absolute inset-0 opacity-10" />
        
        {/* Enhanced background gradients */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 30% 20%, rgba(66, 133, 244, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(234, 231, 53, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 20%, rgba(5, 202, 251, 0.15) 0%, transparent 50%), radial-gradient(circle at 30% 80%, rgba(52, 168, 83, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, rgba(66, 133, 244, 0.15) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(222, 234, 53, 0.1) 0%, transparent 50%)',
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        <div className="container mx-auto px-4 md:px-6 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl mx-auto w-full"
          >
            {/* Hero Section */}
            <motion.div 
              variants={itemVariants}
              className="text-center mb-24 relative pt-10"
            >
              <motion.div
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "8rem", opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-multi">
                How LumenFlow Works
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-bold relative pb-6">
                Simple, intuitive to use.
                {/* <motion.span
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-[10px] bg-gradient-to-r from-blue-500 via-yellow-200 to-blue-500 rounded-full"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "6rem", opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                /> */}
              </p>
              <p className="text-lg text-neutral-200 max-w-3xl mx-auto">
                Many task management apps promise the world but deliver overwhelming complexity. We believe powerful organization shouldn't come at the cost of simplicity.
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
              <FeatureCard
                title="Clarity & Focus"
                description="A clean, distraction-free interface that helps you concentrate on what matters most - your tasks and goals."
                icon={
                  <motion.svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-blue-500"
                  >
                    <motion.path
                      d="M12 20v-8m0 0V4m0 8h8m-8 0H4"
                      variants={pathVariants}
                    />
                  </motion.svg>
                }
              />
              <FeatureCard
                title="Effortless Organization"
                description="Intuitive task management that adapts to your workflow, not the other way around."
                icon={
                  <motion.svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-green-500"
                  >
                    <motion.path
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      variants={pathVariants}
                    />
                  </motion.svg>
                }
              />
              <FeatureCard
                title="Visual Harmony"
                description="Optimized dark mode and thoughtful design create a serene workspace that's easy on the eyes."
                icon={
                  <motion.svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-purple-500"
                  >
                    <motion.path
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      variants={pathVariants}
                    />
                  </motion.svg>
                }
              />
              <FeatureCard
                title="Immersive Workspaces"
                description="Customizable timers and integrated focus music help create your ideal productive environment."
                icon={
                  <motion.svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-yellow-500"
                  >
                    <motion.path
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      variants={pathVariants}
                    />
                  </motion.svg>
                }
              />
            </div>

            {/* Final Section */}
            <motion.div 
              variants={itemVariants}
              className="text-center relative py-16"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-800/30 to-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
              <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient-multi">
                  Productivity Designed Around You
                </h2>
                <p className="text-neutral-300 leading-relaxed text-lg mb-8">
                  In a world of rigid tools and digital noise, LumenFlow is your sanctuary of personalized focus. Every pixel, every feature, is designed to be intuitive and direct, helping you achieve more without feeling overwhelmed.
                </p>
                {/* <motion.button
                  className="relative bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 ease-out"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(true)}
                >
                  <motion.span
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 opacity-0"
                    whileHover={{ opacity: 1 }}
                  />
                  <span className="relative z-10">Join the Waitlist</span>
                </motion.button> */}
                <div className="container-special">
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
                  </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <NotifyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
} 