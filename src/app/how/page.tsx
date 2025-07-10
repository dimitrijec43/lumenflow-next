'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import NotifyModal from '@/components/NotifyModal';
import DrawingAnimation from '@/components/DrawingAnimation';
import VideoPlayer from '@/components/VideoPlayer';
import PhoneCarousel from '@/components/PhoneCarousel';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import exampleVideo from '@/assets/example.mp4';
import pixel2 from '@/assets/pixel5.jpg';
import stats from '@/assets/stats.png';
import taskMan from '@/assets/task_man.png';
import deepWork from '@/assets/deep_work.png';
import inHand from '@/assets/in_hand.png';
import mockup from '@/assets/mockup.png';
import mockup2 from '@/assets/mockup2.png';
import pomodoro from '@/assets/pomodoro.png';
import custom from '@/assets/custom.png';

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
      <main className="min-h-screen text-neutral-100 relative overflow-hidden" style={{ backgroundColor: 'rgba(10, 12, 15, 0.82)' }}>
        <DrawingAnimation className="absolute inset-0 opacity-10" />
        
        {/* Animated Background */}
        <motion.div 
          className="fixed inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Gradient Orbs */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Top left orb */}
            <motion.div
              className="absolute -left-32 -top-32 w-96 h-96 rounded-full"
              style={{
                background: "radial-gradient(circle at center, rgba(66, 133, 244, 0.15), transparent 70%)"
              }}
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 20, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Top right orb */}
            <motion.div
              className="absolute -right-32 -top-32 w-96 h-96 rounded-full"
              style={{
                background: "radial-gradient(circle at center, rgba(52, 168, 83, 0.15), transparent 70%)"
              }}
              animate={{
                scale: [1.2, 1, 1.2],
                x: [0, -20, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Bottom orbs */}
            <motion.div
              className="absolute -bottom-32 left-1/4 w-96 h-96 rounded-full"
              style={{
                background: "radial-gradient(circle at center, rgba(251, 188, 5, 0.15), transparent 70%)"
              }}
              animate={{
                scale: [1, 1.3, 1],
                x: [0, 30, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Animated Grid */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 2px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 2px)
              `,
              backgroundSize: '12px 12px'
            }}
            animate={{
              // backgroundPosition: ['0px 0px', '50px 50px'],
              opacity: [0.3, 0.4, 0.3]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Floating Particles */}
          <div className="absolute inset-0">
            {Array.from({ length: 80 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/10"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: '5px',
                  height: '5px',
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Subtle Wave Effect */}
          <motion.div
            className="absolute inset-x-0 top-1/2 h-96 -translate-y-1/2"
            style={{
              background: 'linear-gradient(180deg, transparent, rgba(66, 133, 244, 0.03), transparent)'
            }}
            animate={{
              y: [-400, 400],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Hero Section with Hands Holding Phone */}
        <section className="fixed bottom-0 left-0 right-0 w-full min-h-[100vh] flex items-end justify-center overflow-hidden pb-0" style={{ marginBottom: '-0px' }}>
          {/* Step Cards */}
          <div className="absolute inset-0 z-10">
            {/* Top Card */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ 
                opacity: 1, 
                y: [-10, 10, -10],
                x: [-5, 5, -5]
              }}
              transition={{ 
                opacity: { duration: 0.5 },
                y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                x: { duration: 10, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-[25%] xs:top-[22%] sm:top-[20%] md:top-[15%] left-[50%] -translate-x-[50%] w-[180px] xs:w-[200px] sm:w-[250px] md:w-64 bg-neutral-800/30 backdrop-blur-lg rounded-2xl p-2 xs:p-3 sm:p-4 border border-neutral-700/30 transform hover:scale-105 transition-transform"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <motion.svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" className="text-blue-400 sm:w-5 sm:h-5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <motion.path d="M12 4v16m8-8H4" strokeLinecap="round" />
                  </motion.svg>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                  Just Start a Session
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300">
                Quick and simple to begin. No complex setup needed - jump right into your focused work time.
              </p>
            </motion.div>

            {/* Right Card - Customize Duration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: 1,
                y: [-15, 15, -15],
                x: [10, 20, 10]
              }}
              transition={{ 
                opacity: { duration: 0.5, delay: 0.2 },
                y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
                x: { duration: 11, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-[45%] xs:top-[42%] sm:top-[40%] right-[2%] xs:right-[3%] sm:right-[5%] md:right-[8%] w-[180px] xs:w-[200px] sm:w-[250px] md:w-64 bg-neutral-800/30 backdrop-blur-lg rounded-2xl p-2 xs:p-3 sm:p-4 border border-neutral-700/30 transform hover:scale-105 transition-transform"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <motion.svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" className="text-purple-400 sm:w-5 sm:h-5"
                    initial={{ rotate: -90 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                  >
                    <motion.path
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.7 }}
                    />
                  </motion.svg>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
                  Customize Duration
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300">
                Set your ideal focus time. Choose from presets or create your own custom duration.
              </p>
            </motion.div>

            {/* Left Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ 
                opacity: 1,
                y: [15, -15, 15],
                x: [-20, -10, -20]
              }}
              transition={{ 
                opacity: { duration: 0.5, delay: 0.4 },
                y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                x: { duration: 12, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-[45%] xs:top-[42%] sm:top-[40%] left-[2%] xs:left-[3%] sm:left-[5%] md:left-[8%] w-[180px] xs:w-[200px] sm:w-[250px] md:w-64 bg-neutral-800/30 backdrop-blur-lg rounded-2xl p-2 xs:p-3 sm:p-4 border border-neutral-700/30 transform hover:scale-105 transition-transform"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <motion.svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" className="text-green-400 sm:w-5 sm:h-5"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <motion.path
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.9 }}
                    />
                  </motion.svg>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent">
                  Add Your Tasks
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300">
                Easily organize your work. Add, prioritize, and track tasks as you complete them.
              </p>
            </motion.div>

            {/* Bottom Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: 1,
                y: ['35vh', 'calc(65vh + 20px)', '65vh'],
                x: [-5, 5, -5]
              }}
              transition={{ 
                opacity: { duration: 0.5, delay: 0.6 },
                y: { duration: 11, repeat: Infinity, ease: "easeInOut" },
                x: { duration: 13, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute bottom-[85%] xs:bottom-[8%] sm:bottom-[80%] md:bottom-[82%] left-[50%] sm:left-[60%] -translate-x-[50%] w-[180px] xs:w-[200px] sm:w-[250px] md:w-64 bg-neutral-800/30 backdrop-blur-lg rounded-2xl p-2 xs:p-3 sm:p-4 border border-neutral-700/30 transform hover:scale-105 transition-transform"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <motion.svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" className="text-yellow-400 sm:w-5 sm:h-5"
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: 1,
                      rotate: [0, 15, -15, 0]
                    }}
                    transition={{ 
                      duration: 0.5,
                      delay: 1.1,
                      rotate: {
                        duration: 1,
                        repeat: Infinity,
                        repeatDelay: 3
                      }
                    }}
                  >
                    <motion.path
                      d="M15.536 8.464a5 5 0 010 7.072M12 12h.01M8.464 8.464a5 5 0 000 7.072m4.536-.232a2 2 0 01-2.828 0"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1.1 }}
                    />
                  </motion.svg>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                  Choose Your Sound
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300">
                Pick from our curated sound library. Find the perfect background audio for your focus.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="w-full max-w-7xl mx-auto px-4 h-full flex items-end pb-0 -mb-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.svg
              viewBox="0 0 1200 800"
              className="w-full h-full max-h-[85vh] translate-y-[3%]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Define animated gradients */}
              <defs>
                <linearGradient id="robotHandGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <motion.stop
                    offset="0%"
                    animate={{
                      stopColor: ["#4285f4", "#34a853", "#fbbc05", "#ea4335", "#4285f4"],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.stop
                    offset="100%"
                    animate={{
                      stopColor: ["#34a853", "#fbbc05", "#ea4335", "#4285f4", "#34a853"],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                </linearGradient>
                <linearGradient id="robotHandGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <motion.stop
                    offset="0%"
                    animate={{
                      stopColor: ["#ea4335", "#4285f4", "#34a853", "#fbbc05", "#ea4335"],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.stop
                    offset="100%"
                    animate={{
                      stopColor: ["#fbbc05", "#ea4335", "#4285f4", "#34a853", "#fbbc05"],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                </linearGradient>
                {/* Glowing filter */}
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Left Robot Hand */}
              <motion.path
                d="M400,400 
                   C380,380 370,350 380,320 
                   Q390,290 420,280 
                   Q450,270 470,290 
                   L490,310 
                   Q510,330 500,350 
                   Q490,370 470,380 
                   L450,390 
                   Q430,400 400,400 
                   Z"
                fill="none"
                stroke="url(#robotHandGradient1)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />

              {/* Right Robot Hand */}
              <motion.path
                d="M800,400 
                   C820,380 830,350 820,320 
                   Q810,290 780,280 
                   Q750,270 730,290 
                   L710,310 
                   Q690,330 700,350 
                   Q710,370 730,380 
                   L750,390 
                   Q770,400 800,400 
                   Z"
                fill="none"
                stroke="url(#robotHandGradient2)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />

              {/* Left Arm Segments - New design */}
              <motion.path
                d="M400,400 
                   C380,440 370,480 390,520 
                   Q410,560 450,580 
                   C470,590 490,595 510,590
                   Q530,585 540,570"
                fill="none"
                stroke="url(#robotHandGradient1)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              />

              {/* Right Arm Segments - New design */}
              <motion.path
                d="M800,400 
                   C820,440 830,480 810,520 
                   Q790,560 750,580 
                   C730,590 710,595 690,590
                   Q670,585 660,570"
                fill="none"
                stroke="url(#robotHandGradient2)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              />

              {/* Phone Frame - with gradient */}
              <motion.rect
                x="458"
                y="356"
                width="284"
                height="500"
                rx="32"
                ry="32"
                fill="none"
                stroke="url(#robotHandGradient1)"
                strokeWidth="7"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.52, ease: "easeInOut", delay: 0.35 }}
              />

              {/* Phone Screen Area - Adjusted position */}
              <foreignObject x="460" y="360" width="280" height="643" style={{ pointerEvents: 'all' }}>
                <div style={{ width: '100%', height: '100%', position: 'relative', borderRadius: '25px', overflow: 'hidden', background: 'rgba(0,0,0,0.2)' }}>
                  <PhoneCarousel 
                    images={[
                      pixel2.src
                    ]}
                  />
                </div>
              </foreignObject>

              {/* Phone Top Notch */}
              <motion.rect
                x="570"
                y="335"
                width="60"
                height="6"
                rx="3"
                fill="url(#robotHandGradient2)"
                filter="url(#glow)"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              />

              {/* Additional decorative elements for the new design */}
              <motion.path
                d="M450,340 Q470,360 490,340"
                fill="none"
                stroke="url(#robotHandGradient1)"
                strokeWidth="2"
                strokeLinecap="round"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
              />

              <motion.path
                d="M750,340 Q730,360 710,340"
                fill="none"
                stroke="url(#robotHandGradient2)"
                strokeWidth="2"
                strokeLinecap="round"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
              />

              {/* Animated joints for robot hands - Updated positions */}
              {[
                { cx: 420, cy: 280 },
                { cx: 470, cy: 290 },
                { cx: 500, cy: 350 },
                { cx: 780, cy: 280 },
                { cx: 730, cy: 290 },
                { cx: 700, cy: 350 },
                { cx: 450, cy: 580 },
                { cx: 750, cy: 580 }
              ].map((point, index) => (
                <motion.circle
                  key={index}
                  cx={point.cx}
                  cy={point.cy}
                  r="4"
                  fill="url(#robotHandGradient1)"
                  filter="url(#glow)"
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                />
              ))}

              {/* Subtle pulse animation for the entire illustration */}
              <motion.path
                d="M100,0 
                   H1100 
                   Q1200,0 1200,100 
                   V800 
                   H0 
                   V100 
                   Q0,0 100,0"
                fill="none"
                stroke="url(#robotHandGradient1)"
                strokeWidth="0"
                opacity="0.1"
                initial={{ scale: 0.95 }}
                animate={{ 
                  scale: [1, 1, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.svg>
          </motion.div>
        </section>

        {/* Empty spacer for scroll height */}
        <div className="h-screen w-full" />

        {/* Scrollable Content */}
        <div className="relative z-10 bg-neutral-900">
          {/* Dynamic Background */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Animated Circles */}
            <div className="absolute inset-0">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: `${300 + i * 100}px`,
                    height: `${300 + i * 100}px`,
                    border: '1px solid rgba(66, 133, 244, 0.1)',
                    left: '50%',
                    top: '30%',
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 20 + i * 5,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    scale: {
                      duration: 8 + i * 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                />
              ))}
            </div>

            {/* Glowing Orbs */}
            {[
              { color: 'rgba(66, 133, 244, 0.15)', x: '20%', y: '30%' },
              { color: 'rgba(52, 168, 83, 0.15)', x: '80%', y: '60%' },
              { color: 'rgba(251, 188, 5, 0.15)', x: '60%', y: '20%' },
              { color: 'rgba(234, 67, 53, 0.15)', x: '30%', y: '70%' }
            ].map((orb, i) => (
              <motion.div
                key={i}
                className="absolute w-100 h-100 rounded-full"
                style={{
                  background: `radial-gradient(circle at center, ${orb.color} 0%, transparent 70%)`,
                  left: orb.x,
                  top: orb.y,
                  filter: 'blur(40px)',
                  transform: 'translate(-50%, -50%)'
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
              />
            ))}

            {/* Animated Lines */}
            {/* <div className="absolute inset-0" style={{ perspective: '1000px' }}>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-px w-full"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(66, 133, 244, 0.2) 50%, transparent 100%)',
                    top: `${i * 15}%`,
                  }}
                  animate={{
                    rotateX: [0, 360],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{
                    rotateX: {
                      duration: 15 + i,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    opacity: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2
                    }
                  }}
                />
              ))}
            </div> */}

            {/* Floating Elements */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  width: Math.random() * 3 + 10 + 'px',
                  height: Math.random() * 3 + 10 + 'px',
                  background: `rgba(${
                    [
                      [66, 133, 244],  // Google Blue
                      [52, 168, 83],   // Google Green
                      [251, 188, 5],   // Google Yellow
                      [234, 67, 53]    // Google Red
                    ][Math.floor(Math.random() * 4)]
                  }, 0.6)`,
                  borderRadius: '50%',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%'
                }}
                animate={{
                  y: [0, -100],
                  x: [0, Math.random() * 5 - 2.5],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          <div className="mx-auto pb-4 pt-20 relative">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="max-w-4xl mx-auto w-full"
            >
              {/* Hero Section */}
              <motion.div 
                variants={itemVariants}
                className="text-center mb-10 relative pt-10"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-2 pb-2 text-gradient-multi">
                  Try it Yourself
                </h1>
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
              </motion.div>

              <Image src={mockup2} alt="LumenFlow" className="w-full h-auto" />

              {/* Main Content Section - Video and Features */}
              <div className="">
                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <FeatureCard
                    title="Use it Your way"
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
                  className="absolute inset-0 "
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2 }}
                />
                <div className="max-w-3xl mx-auto pt-20 px-6">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient-multi">
                    Productivity Designed Around You
                  </h2>
                  <p className="text-neutral-300 leading-relaxed text-lg mb-8">
                    In a world of rigid tools and digital noise, illumioFlow is your sanctuary of personalized focus. Every pixel, every feature, is designed to be intuitive and direct, helping you achieve more without feeling overwhelmed.
                  </p>

                  {/* Adding Comparison Section */}
                  <div className="mt-16 pt-20 text-left relative z-10">
                    <h3 className="text-3xl font-bold mb-6 text-gradient-multi text-center">Why illumioFlow Stands Out</h3>
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
                        <h4 className="text-xl font-bold mb-4 text-green-400">illumioFlow Approach</h4>
                        <ul className="space-y-3 text-neutral-100">
                          <li className="font-bold">• Essential features only</li>
                          <li>• Instant productivity</li>
                          <li>• Personalized experience</li>
                          <li>• Flexible focus sessions</li>
                          <li>• Scientifically-designed sounds</li>
                        </ul>
                      </motion.div>
                    </div>
                  </div>
                  <div className="mt-16 pt-20 relative z-10 flex gap-12 justify-center flex-wrap">
                    <img src={deepWork.src} alt="illumioFlow" className="w-[150px] sm:w-[200px] h-[52.5px] sm:h-[76.5px] px-5" />
                    <img src={pomodoro.src} alt="illumioFlow" className="w-[150px] sm:w-[200px] h-[52.5px] sm:h-[76.5px] px-5" />
                    <img src={custom.src} alt="illumioFlow" className="w-[150px] sm:w-[200px] h-[52.5px] sm:h-[76.5px] px-5" />
                  </div>

                  {/* Adding Benefits Section */}
                  <div className="mt-16 pt-20 relative z-10">
                    <h3 className="text-2xl font-bold mb-8 text-gradient-multi text-center">The illumioFlow Difference</h3>
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
            <footer className="rounded-3xl shadow-lg m-4 mt-20 border border-neutral-700/30 bg-neutral-800/20 backdrop-blur-sm">
              <div className="w-full mx-auto max-w-screen-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex flex-col items-center md:items-start gap-2">
                  <span className="text-sm sm:text-base text-gray-300">© 2025 <a href="/" className="hover:text-blue-400 transition-colors">illumioFlow™</a></span>
                  <p className="text-gray-400 text-sm">All Rights Reserved.</p>
                </div>
                
                <div className="flex flex-col items-center gap-2">
                  <p className="text-gray-300 text-sm sm:text-base font-medium">Get in touch with us</p>

                  <div className='border border-neutral-700/30 rounded-full px-5 py-2 flex items-center justify-center'>
                    <a 
                      href="mailto:contact@illumioflow.io" 
                      className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 group"
                    >
                      <svg 
                        className="w-4 h-4 group-hover:scale-110 transition-transform" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                        />
                      </svg>
                      <span className="text-sm sm:text-base pb-1">contact@illumioflow.io</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <Image 
                    src={logo} 
                    alt="illumioFlow Logo" 
                    className="w-8 h-8 sm:w-10 sm:h-10 opacity-80 hover:opacity-100 transition-opacity" 
                  />
                </div>
              </div>
            </footer>
          </div>
          
        </div>

        
      </main>
      <NotifyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
} 