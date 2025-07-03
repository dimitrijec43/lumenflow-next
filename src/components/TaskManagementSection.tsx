'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import taskMan from '@/assets/task_man.png';

const TaskManagementSection = () => {
  return (
    <section className="py-24 bg-neutral-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Right Column - Interactive Demo */}
          <div className="relative order-2 md:order-1">
            {/* Decorative elements */}
            <motion.div 
              className="absolute -right-10 w-40 h-40 bg-green-500/5 rounded-full blur-xl"
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
              <div className="space-y-6">
                {/* Task List */}
                {[
                  { title: 'Design Review', priority: 'High', time: '2h', completed: false },
                  { title: 'Team Meeting', priority: 'Medium', time: '1h', completed: true },
                  { title: 'Project Planning', priority: 'High', time: '3h', completed: false },
                ].map((task, index) => (
                  <motion.div
                    key={task.title}
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
                        <motion.div
                          className={`w-5 h-5 rounded-full border-2 ${task.completed ? 'bg-green-500 border-green-500' : 'border-neutral-400'}`}
                          whileHover={{ scale: 1.2 }}
                        >
                          {task.completed && (
                            <svg className="w-full h-full text-white p-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </motion.div>
                        <span className="text-neutral-200">{task.title}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          task.priority === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {task.priority}
                        </span>
                        <span className="text-neutral-400 text-sm">{task.time}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Add Task Button */}
                <motion.button
                  className="w-full mt-4 py-3 rounded-lg border border-dashed border-neutral-600 text-neutral-400 flex items-center justify-center gap-2"
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: '#60A5FA',
                    color: '#60A5FA'
                  }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add New Task
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Left Column - Features */}
          <div className="space-y-12 relative order-1 md:order-2">
            <motion.div 
              className="absolute -left-20 -top-20 w-40 h-40 bg-green-500/5 rounded-full blur-xl"
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
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/10"
                >
                  <span className="text-green-500 text-2xl font-semibold">1</span>
                </motion.div>
                <motion.h3 
                  className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-500"
                  whileHover={{ scale: 1.02 }}
                >
                  Easy Task Management
                </motion.h3>
              </div>
              {/* <motion.p 
                className="text-neutral-300 pl-15 leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                Organize your tasks with intelligent prioritization and time management. 
                Let AI help you optimize your workflow and maintain peak productivity.
              </motion.p> */}
              <motion.div className='p-6 bg-neutral-800/50 rounded-lg border border-neutral-700/50 flex flex-col justify-center items-center'>
              <motion.ul 
                className="space-y-3 pl-15"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {[
                  "AI-powered task prioritization",
                  "Smart time allocation",
                  "Progress tracking and reminders",
                  "Team collaboration features"
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
                      <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        </div>
      </div>
    </section>
  );
};

export default TaskManagementSection; 