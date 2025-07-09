'use client';

import { motion } from 'framer-motion';

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-neutral-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Features */}
          <div className="space-y-12 relative">
            {/* Decorative background elements */}
            <motion.div 
              className="absolute -right-10 -top-5 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"
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
              className="absolute -right-10 bottom-0 w-32 h-32 bg-purple-500/5 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
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
              <div className="flex items-center gap-3 justify-end">
                
                <motion.h3 
                  className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500"
                  whileHover={{ scale: 1.02 }}
                >
                  Smart Sound Integration
                </motion.h3>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10"
                >
                  <span className="text-blue-500 text-2xl font-semibold">1</span>
                </motion.div>
              </div>
              <motion.div className='p-6 bg-neutral-800/50 rounded-lg border border-neutral-700/50 flex flex-col justify-center items-center'>
              <motion.p 
                className="text-neutral-200 pl-15 leading-relaxed text-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                Enhance your focus with scientifically-designed sound frequencies. Choose from ambient 
                noise, nature sounds, or binaural beats for deep concentration.
              </motion.p>
              </motion.div>
              {/* <motion.ul 
                className="space-y-3 pl-15"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {[
                  "Customizable sound environments",
                  "Auto-adjusting volume levels",
                  "Session-based sound profiles"
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
                      <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    {item}
                  </motion.li>
                ))}
              </motion.ul> */}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center justify-end gap-3">
                
                <motion.h3 
                  className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-orange-500"
                  whileHover={{ scale: 1.02 }}
                >
                  Progress Analytics
                </motion.h3>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10"
                >
                  <span className="text-purple-500 text-2xl font-semibold">2</span>
                </motion.div>
              </div>
              {/* <motion.p 
                className="text-neutral-200 pl-15 leading-relaxed text-right"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                Track your productivity journey with detailed insights. Understand your focus patterns 
                and optimize your work sessions for maximum efficiency.
              </motion.p> */}
              <motion.div className='p-6 bg-neutral-800/50 rounded-lg border border-neutral-700/50 flex flex-col justify-center items-center'>
              <motion.p 
                className="text-neutral-200 pl-15 leading-relaxed text-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                Track your productivity journey with detailed insights. Understand your focus patterns 
                and optimize your work sessions for maximum efficiency.
              </motion.p>
                <motion.ul 
                  className="space-y-3 pl-15 pt-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {[
                    "Daily and weekly trends",
                    "Focus score metrics",
                    "Productivity insights"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center gap-3 text-white"
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
                        <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="rgb(64, 223, 77)">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={6} d="M5 13l4 4L19 7" />
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
            {/* Decorative elements */}
            <motion.div 
              className="absolute -right-20 -top-20 w-40 h-40 bg-blue-500/5 rounded-full blur-xl"
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
              className="absolute -left-10 -bottom-10 w-32 h-32 bg-purple-500/5 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
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
              {/* Analytics Display */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-48 mx-auto bg-neutral-800/80 rounded-xl p-4 overflow-hidden">
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.4), rgba(147, 51, 234, 0.4))',
                      filter: 'blur(40px)',
                    }}
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 8, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  <div className="flex justify-between items-center mb-4">
                    {/* <motion.h4 
                      className="text-white font-semibold"
                      whileHover={{ scale: 1.05 }}
                    >
                      Focus Score
                    </motion.h4> */}
                    <motion.span 
                      className="text-blue-300"
                      whileHover={{ scale: 1.05 }}
                      style={{
                        fontSize: '13.5px',
                        fontWeight: 'bold',
                      }}
                    >
                      This Week
                    </motion.span>
                  </div>
                  <div className="flex items-end justify-between h-32 gap-2">
                    {[65, 78, 92, 85, 90, 88, 95].map((height, index) => (
                      <motion.div 
                        key={index} 
                        className="w-full bg-blue-500/20 rounded-t-sm"
                        style={{ height: `${height}%` }}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scaleY: 1.1 }}
                      >
                        <motion.div 
                          className="bg-blue-500 rounded-t-sm transition-all duration-500"
                          style={{ height: `${height}%` }}
                          whileHover={{
                            backgroundColor: '#8B5CF6',
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between text-sm text-neutral-400 mt-2 px-4">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                    <motion.span
                      key={day}
                      whileHover={{ 
                        scale: 1.1, 
                        color: '#60A5FA'
                      }}
                    >
                      {day}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Sound Controls */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {[
                  { name: 'Track #1', color: 'blue', progress: 75 },
                  { name: 'Track #2', color: 'green', progress: 50 },
                  { name: 'Track #3', color: 'purple', progress: 25 }
                ].map((sound, index) => (
                  <motion.div 
                    key={sound.name}
                    className="bg-neutral-700/30 p-4 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: 'rgba(64, 64, 64, 0.4)'
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <motion.svg 
                          className={`w-5 h-5 text-${sound.color}-500`}
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" 
                          />
                        </motion.svg>
                        <span className="text-neutral-200">{sound.name}</span>
                      </div>
                      <div className={`w-24 h-1 bg-${sound.color}-500/30 rounded-full overflow-hidden`}>
                        <motion.div 
                          className={`h-full bg-${sound.color}-500 rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${sound.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection; 