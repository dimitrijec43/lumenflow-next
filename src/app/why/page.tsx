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

const IconContainer = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    className="relative w-full h-64 flex items-center justify-center bg-neutral-800/20 rounded-2xl overflow-hidden backdrop-blur-sm border border-neutral-700/30"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-neutral-800/50 to-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
    {children}
  </motion.div>
);

const SectionContainer = ({ children, reverse = false }: { children: React.ReactNode, reverse?: boolean }) => (
  <motion.div 
    variants={itemVariants}
    className={`mb-32 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 w-full`}
  >
    {children}
  </motion.div>
);

export default function WhyPage() {
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
            {/* Enhanced Hero Section */}
            <motion.div 
              variants={itemVariants}
              className="text-center mb-24 relative"
            >
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "8rem", opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <h1 className="text-5xl md:text-6xl font-bold pb-2 mt-5 mb-2 text-gradient-multi relative inline-block">
                Why We Made LumenFlow
                {/* <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "100%", opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                /> */}
              </h1>
              <p className="text-xl md:text-2xl text-yellow-200 mt-6 relative pb-2">
                A journey from complexity to simplicity.
                <motion.span
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-[10px] bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 rounded-full"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "6rem", opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </p>
            </motion.div>

            {/* Section 1: Engineers & Problem Solving */}
            <SectionContainer>
              <div className="w-full md:w-1/2">
                <IconContainer>
                  <motion.svg
                    width="120"
                    height="120"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  >
                    <motion.path
                      d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                      variants={pathVariants}
                    />
                  </motion.svg>
                </IconContainer>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <motion.div
                    className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500/50 to-transparent"
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-multi pl-4">Engineers at Heart</h2>
                  <p className="text-neutral-300 leading-relaxed pl-4 text-lg">
                    As engineers, we're all about solving problems. And when we looked at how people stay productive, we saw a big one: unnecessary complexity. Don't get us wrong, there are some really powerful productivity apps out there. They're often packed with features, and for certain users, that's exactly what they need. But for many of us, especially those just trying to manage daily tasks and maintain focus, these apps can feel overwhelming.
                  </p>
                </div>
              </div>
            </SectionContainer>

            {/* Section 2: Task Managers */}
            <SectionContainer reverse>
              <div className="w-full md:w-1/2">
                <IconContainer>
                  <motion.svg
                    width="120"
                    height="120"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-green-500 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                  >
                    <motion.rect x="3" y="4" width="18" height="18" rx="2" ry="2" variants={pathVariants} />
                    <motion.line x1="16" y1="2" x2="16" y2="6" variants={pathVariants} />
                    <motion.line x1="8" y1="2" x2="8" y2="6" variants={pathVariants} />
                    <motion.line x1="3" y1="10" x2="21" y2="10" variants={pathVariants} />
                    <motion.path d="M8 14h8" variants={pathVariants} />
                    <motion.path d="M8 18h5" variants={pathVariants} />
                  </motion.svg>
                </IconContainer>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <motion.div
                    className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-green-500/50 to-transparent"
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-multi pl-4">Beyond Task Management</h2>
                  <p className="text-neutral-300 leading-relaxed pl-4 text-lg">
                    Most task managers, while robust, seem designed for large projects and teams, not for individuals trying to get through their daily to-dos. They're so bloated with features that you'll rarely touch, making simple things feel unnecessarily complicated. We constantly found ourselves spending more time trying to organize our tasks than actually doing them, or getting lost in layers of menus.
                  </p>
                </div>
              </div>
            </SectionContainer>

            {/* Section 3: Focus Sessions */}
            <SectionContainer>
              <div className="w-full md:w-1/2">
                <IconContainer>
                  <motion.svg
                    width="120"
                    height="120"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]"
                  >
                    <motion.circle cx="12" cy="12" r="10" variants={pathVariants} />
                    <motion.path d="M12 6v6l4 2" variants={pathVariants} />
                    <motion.path
                      d="M4 12a8 8 0 0 1 16 0"
                      variants={pathVariants}
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{ transformOrigin: 'center' }}
                    />
                  </motion.svg>
                </IconContainer>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <motion.div
                    className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-yellow-500/50 to-transparent"
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-multi pl-4">Flexible Focus</h2>
                  <p className="text-neutral-300 leading-relaxed pl-4 text-lg">
                    Then there's the world of focus session apps – Pomodoro, deep work, and similar techniques. Again, fantastic concepts, and they definitely help. But we consistently hit a wall: they were often too rigid. They just didn't allow enough customization for how we work, or how you might work. We wanted to tweak the intervals, the breaks, the very essence of how we focused, and most apps simply didn't offer that flexibility.
                  </p>
                </div>
              </div>
            </SectionContainer>

            {/* Section 4: Our Solution */}
            <SectionContainer reverse>
              <div className="w-full md:w-1/2">
                <IconContainer>
                  <motion.svg
                    width="120"
                    height="120"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-purple-500 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                  >
                    <motion.path
                      d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                      variants={pathVariants}
                    />
                    <motion.circle
                      cx="12"
                      cy="12"
                      r="3"
                      variants={pathVariants}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.svg>
                </IconContainer>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <motion.div
                    className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500/50 to-transparent"
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-multi pl-4">The Solution We Needed</h2>
                  <p className="text-neutral-300 leading-relaxed pl-4 text-lg">
                    That's why we created this app. We envisioned a tool that strips away the unnecessary, giving you a simple, intuitive task manager without the bulk. We integrated popular session methods, but with the crucial addition of extensive customizable options, letting you tailor your focus exactly how you need it. And to truly enhance your productivity, we added specially curated frequencies to play in the background, designed to keep you in the zone.
                  </p>
                </div>
              </div>
            </SectionContainer>

            {/* Enhanced Conclusion */}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient-multi">Our Vision</h2>
                <p className="text-neutral-300 leading-relaxed text-lg">
                  Our goal was to create the app we always wished we had: an intuitive, easy-to-navigate solution that empowers you to achieve more, stress less, and truly reclaim your focus. It's about giving you precisely what you need, nothing more, nothing less.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <NotifyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
} 