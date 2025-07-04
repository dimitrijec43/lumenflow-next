'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const FocusTimerSection = () => {
  const [timerProgress, setTimerProgress] = useState(75);

  return (
    <section className="py-24 bg-neutral-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Features */}
          <div className="space-y-12 relative">
            <motion.div 
              className="absolute -right-10 -top-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center justify-end gap-3">
                
                <motion.h3 
                  className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500"
                  whileHover={{ scale: 1.02 }}
                >
                  Focus Timer & Sessions
                </motion.h3>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-500/10"
                >
                  <span className="text-yellow-500 text-2xl font-semibold">1</span>
                </motion.div>
              </div>
              <motion.div className='p-6 bg-neutral-800/50 rounded-lg border border-neutral-700/50 flex flex-col justify-center items-center'>
              <motion.p 
                className="text-neutral-200 pl-15 leading-relaxed text-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                Maximize your productivity with our intelligent focus timer. 
                Customize your work sessions and breaks to match your natural rhythm.
              </motion.p>
              
              <motion.ul 
                className="space-y-3 pl-15 pt-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {[
                  "Customizable focus intervals",
                  "Smart break scheduling",
                  "Session statistics and insights",
                  "Ambient sound integration"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center gap-3 text-neutral-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={7} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Interactive Demo */}
          <div className="relative">
            <motion.div 
              className="absolute -right-20 -top-20 w-40 h-40 bg-yellow-500/5 rounded-full blur-xl"
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
              className="bg-neutral-800/50 rounded-2xl p-8 backdrop-blur-sm border border-neutral-700/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Timer Display */}
              <div className="relative w-64 h-64 mx-auto mb-8">
                <svg className="w-full h-full transform -rotate-90">
                  <motion.circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    fill="none"
                    stroke="rgba(234, 179, 8, 0.2)"
                    strokeWidth="8"
                  />
                  <motion.circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    fill="none"
                    stroke="rgb(43, 131, 233)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: timerProgress / 100 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    style={{
                      strokeDasharray: "283",
                      strokeDashoffset: "0",
                    }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.span 
                      className="text-4xl font-bold text-blue-500"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      90:00
                    </motion.span>
                    <motion.p 
                      className="text-neutral-200 mt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      style={{ fontSize: '0.765rem' }}
                    >
                      Deep Work Session
                    </motion.p>
                  </div>
                </div>
              </div>

              {/* Timer Controls */}
              <div className="flex justify-center gap-4">
                <motion.button
                  className="p-3 rounded-full bg-blue-500/10 text-blue-500"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(234, 179, 8, 0.2)' }}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
                <motion.button
                  className="p-3 rounded-full bg-blue-500 text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
                  </svg>
                </motion.button>
                <motion.button
                  className="p-3 rounded-full bg-blue-500/10 text-blue-500"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(234, 179, 8, 0.2)' }}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>

              {/* Session Presets */}
              <div className="mt-8 space-y-3">
                {[
                  { name: 'Deep Work Session', duration: '90:00', active: true },
                  { name: 'Short Break', duration: '05:00', active: false },
                  { name: 'Long Break', duration: '15:00', active: false },
                ].map((preset, index) => (
                  <motion.div
                    key={preset.name}
                    className={`p-3 rounded-lg flex items-center justify-between ${
                      preset.active ? 'bg-blue-500/20 text-blue-200 font-bold' : 'bg-neutral-700/30 text-neutral-300'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <span>{preset.name}</span>
                    <span>{preset.duration}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusTimerSection; 