'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

interface NotifyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotifyModal: React.FC<NotifyModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Add your email submission logic here
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50,
      filter: 'blur(10px)'
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.4,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      filter: 'blur(10px)',
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const successVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const inputVariants = {
    focus: { 
      scale: 1.02,
      boxShadow: "0 0 20px rgba(66, 133, 244, 0.3)",
      transition: { duration: 0.2 }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-md bg-neutral-900 rounded-2xl p-8 border border-neutral-700/50"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <motion.button
              className="absolute top-4 right-4 text-neutral-400 hover:text-white"
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {!isSubmitted ? (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                    Stay in the Loop
                  </h2>
                  <p className="text-neutral-400 mb-6">
                    Be the first to know when LumenFlow launches and get exclusive early access.
                  </p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-neutral-800/50 border border-neutral-700/50 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      required
                      whileFocus="focus"
                      variants={inputVariants}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 0 20px rgba(66, 133, 244, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                  >
                    Notify Me
                  </motion.button>
                </form>
              </>
            ) : (
              <motion.div
                className="text-center py-8"
                variants={successVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                  }}
                >
                  <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-white">Thank You!</h3>
                <p className="text-neutral-400">
                  We'll keep you updated on all the latest news and developments.
                </p>
              </motion.div>
            )}

            {/* Decorative elements */}
            <motion.div
              className="absolute -z-10 inset-0 overflow-hidden rounded-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-20 h-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    x: [0, Math.random() * 20 - 10],
                    y: [0, Math.random() * 20 - 10],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotifyModal; 