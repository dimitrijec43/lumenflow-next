'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring, color } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import DrawingAnimation from '@/components/DrawingAnimation';
import FeatureSection from '@/components/FeatureSection';
import ConnectedFeatures from '@/components/ConnectedFeatures';
import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';
import Image from 'next/image';
import appPreview from '@/assets/hero_group5.png';
import heroApp from '@/assets/google-pixel2.png';
import logo from '@/assets/logo.png';
import sessionGroup from '@/assets/main_group.png';
import NotifyModal from '@/components/NotifyModal';
import deepWork from '@/assets/deep_work.png';
import stats from '@/assets/stats.png';
import taskMan from '@/assets/task_man.png';
import hush from '@/assets/Hush.png';
import sync from '@/assets/sync.png';
import pixel1 from '@/assets/google-pixel1.png';
import pixel2 from '@/assets/google-pixel2.png';
import FeatureSectionsContainer from '@/components/FeatureSectionsContainer';
import BenefitsSection from '@/components/BenefitsSection';
import deep_work_pixel from '@/assets/custom.png';
import TaskManagementSection from '@/components/TaskManagementSection';
import FocusTimerSection from '@/components/FocusTimerSection';



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

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
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

export default function Home() {
  const { scrollYProgress } = useScroll();
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation(0.2);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Interactive focus timer state
  const [focusTime, setFocusTime] = useState(25);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const progressValue = useMotionValue(0);
  const smoothProgress = useSpring(progressValue, { damping: 20, stiffness: 100 });

  // Enhanced scroll animations
  const scale = useTransform(scrollYProgress, [0, 0.25], [1, 0.95]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.25], [0, -50]);

  // Section animations
  const section1Y = useTransform(scrollYProgress, [0.1, 0.25], [100, 0]);
  const section2Y = useTransform(scrollYProgress, [0.25, 0.5], [100, 0]);
  const section3Y = useTransform(scrollYProgress, [0.5, 0.75], [100, 0]);
  const section4Y = useTransform(scrollYProgress, [0.75, 1], [100, 0]);

  // Parallax effects
  const heroParallax = useParallax(scrollYProgress, [-100, 100]);
  const textParallax = useParallax(scrollYProgress, [0, -50]);

  useEffect(() => {
    if (isTimerActive) {
      progressValue.set(0);
      const interval = setInterval(() => {
        const currentValue = progressValue.get();
        const newValue = currentValue + (1 / (focusTime * 60));
        
        if (newValue >= 1) {
          progressValue.set(1);
          setIsTimerActive(false);
          clearInterval(interval);
        } else {
          progressValue.set(newValue);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isTimerActive, focusTime]);

  return (
    <>
      <Navbar onNotifyClick={() => setIsModalOpen(true)} />
      <main className="min-h-screen bg-neutral-900 text-neutral-100">
        {/* Fixed Hero Section */}
        <motion.section
          style={{ scale, y, opacity: heroOpacity }}
          className="fixed inset-0 z-0 pointer-events-none"
        >
          <DrawingAnimation className="absolute inset-0 opacity-20" />
          
          {/* Animated background gradients */}
          <motion.div 
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 50% 50%, rgba(66, 133, 244, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 50%, rgba(53, 234, 62, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 50%, rgba(5, 9, 251, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 50%, rgba(52, 168, 83, 0.1) 0%, transparent 50%)',
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />

          <div className="container mx-auto px-4 h-screen flex items-center justify-center">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center pt-16 xs:pt-20 sm:pt-16 md:pt-0">
              {/* Left content */}
              <motion.div
                className="text-center md:text-left pointer-events-auto mt-4 xs:mt-8 sm:mt-12 md:mt-0"
              >
                <motion.h1
                  className="text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-bold pb-2 mb-4 sm:mb-6 text-gradient-multi max-w-[280px] xs:max-w-[300px] sm:max-w-none mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Manage Flow,
                  <br className="hidden xs:block sm:hidden" />
                  <span className="inline-block mt-1 xs:mt-0"> Simplified</span>
                </motion.h1>

                

                 <motion.p
                  className="text-sm xs:text-base sm:text-lg md:text-xl text-neutral-200 mb-4 sm:mb-8 max-w-[260px] xs:max-w-[280px] sm:max-w-none mx-auto md:pr-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="dissapear-text">LumenFlow is designed to cut through the noise. </span> 
                  {/* <span className="text-white block mt-1 sm:inline sm:mt-0" style={{ fontSize: 'clamp(0.875rem, 2vw, 1.1rem)', fontWeight: 'bold' }}> Achieve more, stress less.</span> */}
                   <span className="text-white block mt-1 sm:inline sm:mt-0" style={{ fontSize: 'clamp(0.975rem, 2vw, 1.1rem)', fontWeight: 'bold' }}> Clarity Over Complexity: Your Focus,<span style={{ color: 'rgb(243, 255, 70)' }}> Elevated.</span></span>
                  
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start pointer-events-auto scale-90 sm:scale-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
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
                  {/* <button className="btn-material bg-neutral-800 hover:bg-neutral-700">
                    Watch Demo
                  </button> */}
                </motion.div>
              </motion.div>

              {/* Right content - App Preview Cards */}
              <motion.div
                className="relative pointer-events-auto -mt-4 xs:mt-0 md:mt-0 scale-75 xs:scale-90 sm:scale-100"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Main app preview card */}
                <div className="relative text-center">
                  <div className="material-card material-card-main w-full max-w-lg mx-auto rounded-3xl flex items-center justify-center" 
                    style={{ 
                      height: 'min(45vh, 600px)',
                      backgroundColor: 'rgba(255, 255, 255, 0.0)', 
                      backdropFilter: 'none', 
                      border: 'none', 
                      boxShadow: 'none' 
                    }}
                  >
                    <Image src={appPreview} alt="App Preview" className="h-full w-full object-contain" />
                  </div>

                  {/* Top floating card - Sound Library */}
                  <motion.div
                    className="absolute -top-4 sm:-top-6 text-center left-1/2 -translate-x-1/2 material-card bg-neutral-800/40 rounded-2xl p-1 sm:p-4 backdrop-blur-lg shadow-lg overflow-hidden w-[110px] h-[90px] sm:w-[140px] sm:h-[130px]"
                    initial={{ y: -50, opacity: 0, scale: 0.8 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    transition={{ delay: 0.52, duration: 0.8 }}
                  >
                    <motion.p 
                      className="text-[10px] sm:text-sm mb-1 sm:mb-2 text-neutral-200"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.52, duration: 0.8 }}
                    >
                      Curated Sound Library
                    </motion.p>
                    <div className="relative h-[30px] sm:h-[45px]">
                      <svg
                        viewBox="0 0 100 50"
                        className="w-full h-6 sm:h-8 absolute bottom-0 left-0"
                        style={{ filter: 'blur(0.5px)' }}
                      >
                        <motion.path
                          d="M 20,25 L 30,15 L 40,35 L 50,5 L 60,45 L 70,20 L 80,30"
                          stroke="rgba(234, 67, 53, 1)"
                          strokeWidth="5"
                          fill="none"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ 
                            pathLength: [0, 1, 1, 0],
                            opacity: [1, 1, 1, 1]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.4, 0.6, 1]
                          }}
                        />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Right floating card - Stats Panel */}
                  <motion.div
                    className="absolute top-1/4 -right-2 sm:-right-12 material-card bg-neutral-800/40 rounded-2xl p-2 sm:p-4 backdrop-blur-lg shadow-lg overflow-hidden w-[90px] h-[100px] sm:w-[140px] sm:h-[160px]"
                  >
                    <motion.p 
                      className="text-[10px] sm:text-sm mb-1 sm:mb-2 text-neutral-200"
                    >
                      Intuitive Stats Panel
                    </motion.p>
                    <div className="relative h-[50px] sm:h-[90px]">
                      <svg
                        viewBox="0 0 100 100"
                        className="w-full h-12 sm:h-20 absolute bottom-0 left-0"
                        style={{ filter: 'blur(0.5px)' }}
                      >
                        <motion.path
                          d="M 20,80 L 20,60 L 40,40 L 60,70 L 80,20"
                          stroke="rgba(66, 133, 244, 1)"
                          strokeWidth="5"
                          fill="none"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ 
                            pathLength: [0, 1, 1, 0],
                            opacity: [1, 1, 1, 1]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.4, 0.6, 1]
                          }}
                        />
                        <motion.circle
                          cx="20"
                          cy="60"
                          r="3"
                          fill="rgba(66, 133, 244, 1)"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ 
                            scale: [0, 1, 1, 0],
                            opacity: [1, 1, 1, 1]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.4, 0.6, 1],
                            delay: 1
                          }}
                        />
                        <motion.circle
                          cx="80"
                          cy="20"
                          r="7"
                          fill="rgba(66, 133, 244, 1)"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ 
                            scale: [0, 1, 1, 0],
                            opacity: [1, 1, 1, 1]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.4, 0.6, 1],
                            delay: 1.5
                          }}
                        />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Bottom floating card - Task Overview */}
                  <motion.div
                    className="absolute bottom-1/4 sm:-bottom-8 right-2 sm:right-8 material-card bg-neutral-800/40 rounded-2xl p-2 sm:p-4 backdrop-blur-lg shadow-lg overflow-hidden w-[100px] h-[80px] sm:w-[160px] sm:h-[110px]"
                  >
                    <motion.p 
                      className="text-[10px] sm:text-sm mb-1 sm:mb-2 text-neutral-200"
                    >
                      Effective Task Overview
                    </motion.p>
                    <div className="relative h-[25px] sm:h-[40px]">
                      <svg
                        viewBox="0 0 100 40"
                        className="w-full h-6 sm:h-8 absolute bottom-0 left-0"
                        style={{ filter: 'blur(0.5px)' }}
                      >
                        <motion.rect
                          x="10"
                          y="15"
                          width="20"
                          height="10"
                          rx="2"
                          fill="rgba(251, 188, 5, 1)"
                          initial={{ scaleX: 0, opacity: 0 }}
                          animate={{ 
                            scaleX: [0, 1, 1, 0],
                            opacity: [1, 1, 1, 1]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.4, 0.6, 1]
                          }}
                        />
                        <motion.rect
                          x="40"
                          y="15"
                          width="30"
                          height="10"
                          rx="2"
                          fill="rgba(251, 188, 5, 1)"
                          initial={{ scaleX: 0, opacity: 0 }}
                          animate={{ 
                            scaleX: [0, 1, 1, 0],
                            opacity: [1, 1, 1, 1]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.4, 0.6, 1],
                            delay: 0.5
                          }}
                        />
                        <motion.rect
                          x="80"
                          y="15"
                          width="10"
                          height="10"
                          rx="2"
                          fill="rgba(251, 188, 5, 1)"
                          initial={{ scaleX: 0, opacity: 0 }}
                          animate={{ 
                            scaleX: [0, 1, 1, 0],
                            opacity: [1, 1, 1, 1]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.4, 0.6, 1],
                            delay: 1
                          }}
                        />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Left floating card - Session Mode */}
                  <motion.div
                    className="absolute top-1/3 -left-2 sm:-left-12 material-card bg-neutral-800/40 rounded-2xl p-2 sm:p-4 backdrop-blur-lg shadow-lg overflow-hidden w-[90px] h-[100px] sm:w-[130px] sm:h-[160px]"
                  >
                    <motion.p 
                      className="text-[10px] sm:text-sm mb-1 sm:mb-2 text-neutral-200"
                    >
                      Your Session Mode
                    </motion.p>
                    <div className="relative h-[50px] sm:h-[90px]">
                      <svg
                        viewBox="0 0 100 100"
                        className="w-full h-12 sm:h-20 absolute bottom-0 left-0"
                        style={{ filter: 'blur(0.5px)' }}
                      >
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="30"
                          stroke="rgba(52, 168, 83, 1)"
                          strokeWidth="7"
                          fill="none"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ 
                            pathLength: [0, 1, 1, 0],
                            opacity: [1, 1, 1, 1],
                            rotate: [0, 180, 360, 360]
                          }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.4, 0.6, 1]
                          }}
                          style={{ transformOrigin: '50px 50px' }}
                        />
                        <motion.line
                          x1="50"
                          y1="50"
                          x2="50"
                          y2="30"
                          stroke="rgba(52, 168, 83, 1)"
                          strokeWidth="5"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ 
                            pathLength: [0, 1, 1, 0],
                            opacity: [1, 1, 1, 1],
                            rotate: [0, 180, 360, 360]
                          }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.4, 0.6, 1]
                          }}
                          style={{ transformOrigin: '50px 50px' }}
                        />
                        <motion.line
                          x1="50"
                          y1="50"
                          x2="70"
                          y2="50"
                          stroke="rgba(52, 168, 83, 1)"
                          strokeWidth="5"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ 
                            pathLength: [0, 1, 1, 0],
                            opacity: [1, 1, 1, 1],
                            rotate: [0, 180, 360, 360]
                          }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.4, 0.6, 1]
                          }}
                          style={{ transformOrigin: '50px 50px' }}
                        />
                      </svg>
                    </div>
                  </motion.div>
                </div>
                
                {/* Background decorative elements */}
                <motion.div
                  className="absolute -right-16 -bottom-16 w-32 h-32 bg-blue-500/10 rounded-full"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    times: [0, 1],
                    scale: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                />

                {/* Additional decorative circles */}
                <motion.div
                  className="absolute -left-8 -top-8 w-24 h-24 bg-purple-500/10 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute right-1/4 -bottom-12 w-20 h-20 bg-green-500/10 rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Empty spacer for scroll height */}
        <div className="h-screen w-full" />

        {/* Scrollable Content */}
        <div className="relative z-10 pt-10" style={{ background: 'linear-gradient(180deg,rgba(18, 18, 18, 0.85),rgb(18, 18, 18))', backdropFilter: 'blur(65px)' }}>
          {/* App Screens Section */}
          <Image src={deep_work_pixel} alt="App Screen 1" className="w-10 h-10 object-contain rounded-3xl mx-auto" />
          <section className="relative pb-20 pt-10 overflow-hidden">
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold pb-2 mb-6 text-gradient-multi">
                  Easy & Intuitive Interface
                </h2>
              </motion.div>

              <div className="relative h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center">
                {/* Drawing Animation Background */}
                <motion.div 
                  className="absolute inset-0 opacity-20"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.2 }}
                  viewport={{ margin: "-100px" }}
                  transition={{ duration: 1.5 }}
                >
                  <DrawingAnimation className="w-full h-full" />
                </motion.div>

                {/* Phone Screen 1 */}
                <motion.div
                  className="absolute w-[180px] sm:w-[220px] md:w-[240px] h-[360px] sm:h-[440px] md:h-[480px]"
                  initial={{ opacity: 0, x: -100, y: 100, scale: 0.8 }}
                  whileInView={{ 
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      duration: 1.2,
                      delay: 0.1,
                      bounce: 0.3
                    }
                  }}
                  viewport={{ margin: "-100px" }}
                  animate={{ 
                    y: [-20, 20, -20],
                    scale: [1, 1.05, 1],
                    rotate: [-2, 2, -2]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "easeInOut"
                  }}
                  style={{
                    left: '16.5%',
                    perspective: '1000px'
                  }}
                >
                  <Image
                    src={pixel1}
                    alt="App Screen 1"
                    className="w-full h-full object-contain rounded-3xl shadow-2xl"
                  />
                </motion.div>

                {/* Phone Screen 2 */}
                <motion.div
                  className="absolute w-[200px] sm:w-[240px] md:w-[260px] h-[400px] sm:h-[480px] md:h-[520px] z-10"
                  initial={{ opacity: 0, y: 100, scale: 0.8 }}
                  whileInView={{ 
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      duration: 1.2,
                      delay: 0.3,
                      bounce: 0.3
                    }
                  }}
                  viewport={{ margin: "-100px" }}
                  animate={{ 
                    y: [20, -20, 20],
                    scale: [1.1, 1.15, 1.1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 8,
                    ease: "easeInOut"
                  }}
                  style={{
                    perspective: '1000px'
                  }}
                >
                  <Image
                    src={pixel2}
                    alt="App Screen 2"
                    className="w-full h-full object-contain rounded-3xl shadow-2xl"
                  />
                </motion.div>

                {/* Phone Screen 3 */}
                <motion.div
                  className="absolute w-[180px] sm:w-[220px] md:w-[240px] h-[360px] sm:h-[440px] md:h-[480px]"
                  initial={{ opacity: 0, x: 100, y: 100, scale: 0.8 }}
                  whileInView={{ 
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      duration: 1.2,
                      delay: 0.5,
                      bounce: 0.3
                    }
                  }}
                  viewport={{ margin: "-100px" }}
                  animate={{ 
                    y: [-30, 30, -30],
                    scale: [1, 1.05, 1],
                    rotate: [2, -2, 2]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 12,
                    ease: "easeInOut"
                  }}
                  style={{
                    right: '2%',
                    perspective: '1000px'
                  }}
                >
                  <Image
                    src={stats}
                    alt="App Screen 3"
                    className="w-full h-full object-contain rounded-3xl shadow-2xl"
                  />
                </motion.div>

                {/* Task Management Screen */}
                <motion.div
                  className="absolute w-[160px] sm:w-[200px] md:w-[220px] h-[320px] sm:h-[400px] md:h-[440px]"
                  initial={{ opacity: 0, x: 50, y: 100, scale: 0.8 }}
                  whileInView={{ 
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      duration: 1.2,
                      delay: 0.7,
                      bounce: 0.3
                    }
                  }}
                  viewport={{ margin: "-100px" }}
                  animate={{ 
                    y: [30, -30, 30],
                    scale: [0.9, 0.95, 0.9],
                    rotate: [-3, 3, -3]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 9,
                    ease: "easeInOut"
                  }}
                  style={{
                    right: '22%',
                    perspective: '1000px'
                  }}
                >
                  <Image
                    src={taskMan}
                    alt="Task Management"
                    className="w-full h-full object-contain rounded-3xl shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          <div className="relative pt-10" style={{ height: '200px', width: '100%', marginTop: '-100px', background: 'linear-gradient(180deg,rgba(18, 18, 18, 0.65),rgb(18, 18, 18))', backdropFilter: 'blur(44px)' }}></div>

          {/* Connected Features Section */}
          <ConnectedFeatures />

          {/* Benefits Section */}
          <BenefitsSection />
          <TaskManagementSection />
          <FocusTimerSection />

          

          {/* Feature Sections */}
          {/* <FeatureSectionsContainer 
            features={[
              {
                title: "Smart Focus Timer",
                description: "Take control of your productivity with our intelligent focus timer that adapts to your work patterns.",
                features: [
                  "Customizable focus sessions with smart break reminders",
                  "Ambient sound library for deep concentration",
                  "Progress tracking with visual feedback",
                  "AI-powered session recommendations"
                ],
                color: "blue"
              },
              {
                title: "Task Management",
                description: "Organize your tasks with our intuitive task management system that helps you stay on top of your goals.",
                features: [
                  "Smart categorization with AI-powered suggestions",
                  "Priority management with dynamic scheduling",
                  "Real-time progress tracking and insights",
                  "Seamless team collaboration features"
                ],
                color: "red"
              },
              {
                title: "Stats Analytics",
                description: "Gain deep insights into your productivity patterns with detailed analytics and progress tracking.",
                features: [
                  "Comprehensive productivity analytics dashboard",
                  "Visual progress tracking with interactive charts",
                  "Personalized productivity insights and trends",
                  "Weekly performance reports and recommendations"
                ],
                color: "yellow"
              },
              {
                title: "Seamless Sync",
                description: "Keep your focus sessions and tasks synchronized across all your devices with real-time updates.",
                features: [
                  "Real-time synchronization across all devices",
                  "Offline access with automatic sync on reconnect",
                  "Secure cloud backup with encryption",
                  "Cross-platform compatibility guarantee"
                ],
                color: "green"
              }
            ]}
          /> */}
          <div className="h-[30vh]" />

          {/* Call to Action */}
          <section className="relative pt-20 overflow-hidden">
            <DrawingAnimation className="absolute inset-0 opacity-10" />
            
            <div className="container mx-auto px-4 text-center">
              <motion.div
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold mb-6 sm:mb-8 text-gradient-multi">
                  Ready to Simplify Your Workflow?
                </h2>
                <p className="text-base xs:text-lg sm:text-xl text-neutral-200 mb-8 sm:mb-12 max-w-[300px] xs:max-w-[400px] sm:max-w-none mx-auto" style={{ fontSize: 'clamp(0.92rem, 2vw, 1.2rem)' }}>
                  Join thousands of people who have already discovered LumenFlow.
                  Be amongst the first to know when we launch & get some special perks as a <span className="text-white inline-block mt-1 sm:mt-0" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.35rem)', fontWeight: 'bold', color: 'rgb(243, 255, 70)' }}>thank you for your support.</span>
                </p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center md:justify-center pointer-events-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
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
                </motion.div>
              </motion.div>
            </div>
            <div style={{ height: '100px' }}></div>
            <footer className="rounded-full shadow-sm m-4 mt-20  border border-neutral-700/30">
              <div className="w-full mx-auto max-w-screen-xl py-4 px-0 flex items-center justify-between">
                <span className="text-[12px] sm:text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" className="hover:underline">LumenFlow™</a>. All Rights Reserved.</span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                  <li>
                    <Image src={logo} alt="LumenFlow Logo" className="w-10 h-10" />
                  </li>
                </ul>
              </div>
            </footer>
          </section>
        </div>
        
      </main>
      <NotifyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
