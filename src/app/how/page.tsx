'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import DrawingAnimation from '@/components/DrawingAnimation';
import NotifyModal from '@/components/NotifyModal';
import VideoPlayer from '@/components/VideoPlayer';
import { useState } from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import exampleVideo from '@/assets/example.mp4';

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
    className="relative p-6 bg-neutral-800/20 rounded-2xl backdrop-blur-sm border border-neutral-500/30"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ scale: 1.02, backgroundColor: "rgba(38, 38, 38, 0.3)" }}
    transition={{ duration: 0.3 }}
  >
    <div className="absolute -top-6 left-6 w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center border border-neutral-700/50">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 mt-4 text-gradient-multi">{title}</h3>
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
              <h1 className="text-5xl md:text-6xl font-bold mb-2 text-gradient-multi">
                How LumenFlow Works
              </h1>
              <p className="text-xl md:text-2xl text-yellow-200 font-bold relative pb-6">
                Simple & easy to use.
              </p>
              <FeatureCard
                  title=""
                  description="Many task management apps promise the world but deliver overwhelming complexity. We believe powerful organization shouldn't come at the cost of simplicity."
                  icon={
                    <motion.svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="text-red-500"
                    >
                      {/* Tangled lines representing complexity */}
                      <motion.path
                        d="M4 4c2 3 4 2 6 4s-2 3 0 5 4-1 6 1-2 3 0 5 4 1 4 1"
                        variants={pathVariants}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {/* Warning exclamation mark */}
                      {/* <motion.path
                        d="M12 8v5"
                        variants={pathVariants}
                        strokeLinecap="round"
                      /> */}
                      <motion.circle
                        cx="12"
                        cy="16"
                        r="1"
                        fill="text-green-200"
                        variants={pathVariants}
                      />
                    </motion.svg>
                  }
                />
              {/* <p className="text-lg text-neutral-200 max-w-3xl mx-auto">
                Many task management apps promise the world but deliver overwhelming complexity. We believe powerful organization shouldn't come at the cost of simplicity.
              </p> */}
            </motion.div>

            {/* Main Content Section - Video and Features */}
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 mb-24">
              {/* Video Showcase Section */}
              <motion.div
                variants={itemVariants}
                className="relative py-10 lg:py-0"
              >
                <VideoPlayer
                  src={exampleVideo}
                  className="w-auto h-[65vh] md:h-[58vh] lg:h-[40vh]"
                />
              </motion.div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 gap-8">
                <FeatureCard
                  title="Use it your way"
                  description="Pick or set a custom session with customizable and prebuilt breaks, pick or auto-play preselcted sound, slecet and input your tasks, and start your session."
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
                  title="I just like the sounds"
                  description="You can just utilize curated sounds/music to keep you focused and motivated, but we stronmgly recommend to use it with the sessions."
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
                  title="Keep track"
                  description="Just use it to keep track of Your onginug and completed tasks & follow your progress in statistics."
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

                {/* Adding Comparison Section */}
                <div className="mt-16 text-left relative z-10">
                  <h3 className="text-2xl font-bold mb-6 text-gradient-multi text-center">Why LumenFlow Stands Out</h3>
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <motion.div 
                      className="bg-neutral-800/20 rounded-2xl p-6 border border-neutral-700/30 relative hover:bg-neutral-800/30 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <h4 className="text-xl font-semibold mb-4 text-red-400">Traditional Task Managers</h4>
                      <ul className="space-y-3 text-neutral-400">
                        <li>• Overwhelming feature sets</li>
                        <li>• Complex learning curve</li>
                        <li>• One-size-fits-all approach</li>
                        <li>• Rigid time management</li>
                        <li>• Basic sound options</li>
                      </ul>
                    </motion.div>
                    <motion.div 
                      className="bg-neutral-800/20 rounded-2xl p-6 border border-neutral-700/30 relative hover:bg-neutral-800/30 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <h4 className="text-xl font-semibold mb-4 text-green-400">LumenFlow Approach</h4>
                      <ul className="space-y-3 text-neutral-300">
                        <li>• Essential features only</li>
                        <li>• Instant productivity</li>
                        <li>• Personalized experience</li>
                        <li>• Flexible focus sessions</li>
                        <li>• Scientifically-designed sounds</li>
                      </ul>
                    </motion.div>
                  </div>
                </div>

                {/* Adding Benefits Section */}
                <div className="mt-16 relative z-10">
                  <h3 className="text-2xl font-bold mb-8 text-gradient-multi text-center">The LumenFlow Difference</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <motion.div 
                      className="text-center p-4 bg-neutral-800/10 rounded-xl hover:bg-neutral-800/20 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="w-12 h-12 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center">
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
                            d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"
                            variants={pathVariants}
                          />
                        </motion.svg>
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Mindful Design</h4>
                      <p className="text-neutral-400 text-sm">Every feature is thoughtfully crafted to enhance focus, not disrupt it</p>
                    </motion.div>
                    <motion.div 
                      className="text-center p-4 bg-neutral-800/10 rounded-xl hover:bg-neutral-800/20 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="w-12 h-12 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
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
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
                            variants={pathVariants}
                          />
                        </motion.svg>
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Your Rhythm</h4>
                      <p className="text-neutral-400 text-sm">Adapt the app to your natural workflow, not the other way around</p>
                    </motion.div>
                    <motion.div 
                      className="text-center p-4 bg-neutral-800/10 rounded-xl hover:bg-neutral-800/20 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="w-12 h-12 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
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
                            d="M22 11.08V12a10 10 0 11-5.93-9.14"
                            variants={pathVariants}
                          />
                          <motion.path
                            d="M22 4L12 14.01l-3-3"
                            variants={pathVariants}
                          />
                        </motion.svg>
                      </div>
                      <h4 className="text-lg font-semibold mb-2">Proven Results</h4>
                      <p className="text-neutral-400 text-sm">Built on research-backed principles of productivity and focus</p>
                    </motion.div>
                  </div>
                </div>

                <div className="container-special mt-12">
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

        <footer className="rounded-full shadow-sm m-4 mt-20  border border-neutral-700/30">
              <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-between">
                <span className="text-[12px] sm:text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" className="hover:underline">LumenFlow™</a>. All Rights Reserved.</span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                  <li>
                    <Image src={logo} alt="LumenFlow Logo" className="w-10 h-10" />
                  </li>
                </ul>
              </div>
            </footer>
      </main>
      <NotifyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
} 