'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

interface NotifyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotifyModal: React.FC<NotifyModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset and close after success
    setTimeout(() => {
      setIsSuccess(false);
      setEmail('');
      onClose();
    }, 3500); // Increased timeout to show thank you message longer
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed left-1/2 top-1/2 w-full max-w-md z-50"
            initial={{ opacity: 0, y: 100, x: "-50%", scale: 0.95 }}
            animate={{ opacity: 1, y: "-50%", scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <div className="relative bg-neutral-900 rounded-2xl p-8 shadow-xl border border-neutral-800">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-neutral-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Content */}
              <div className="text-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-16 h-16 bg-blue-500/10 rounded-full mx-auto mb-4 flex items-center justify-center"
                >
                  <svg
                    className="w-8 h-8 text-yellow-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </svg>
                </motion.div>
                <motion.h3
                  className="text-2xl font-bold mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {isSuccess ? "Thank You for Your support!" : "Stay in the Loop"}
                </motion.h3>
                <motion.p
                  className="text-neutral-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {isSuccess 
                    ? "We're thrilled to have you join our community!"
                    : "Be the first to know when we launch and get exclusive early access."}
                </motion.p>
              </div>

              {/* Form */}
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {!isSuccess && (
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-neutral-800 rounded-lg border border-neutral-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                      required
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: email ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ originX: 0 }}
                    />
                  </div>
                )}

                <motion.button
                  type="submit"
                  className={`relative w-full py-3 text-white rounded-lg font-medium overflow-hidden ${
                    isSuccess 
                      ? 'bg-gradient-to-r from-green-600 to-green-400' 
                      : 'bg-gradient-to-r from-blue-600 to-blue-400'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting || isSuccess}
                >
                  {isSubmitting ? (
                    <motion.div
                      className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full mx-auto"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  ) : isSuccess ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring" }}
                      className="font-bold text-lg"
                    >
                      ✓ You're all set!
                    </motion.div>
                  ) : (
                    "Notify Me"
                  )}

                  {/* Button shine effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent ${
                      !isSuccess ? '' : 'opacity-50'
                    }`}
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                    style={{ skewX: -12 }}
                  />
                </motion.button>

                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-6"
                  >
                    <p className="text-neutral-300 text-sm">
                      Thanks for joining! <span className="text-green-300">We appreciate your support!</span> 
                    </p>
                    <p className="text-neutral-400 text-xs mt-1">
                      We'll send you exciting updates soon!
                    </p>
                  </motion.div>
                )}

                {!isSuccess && (
                  <motion.p
                    className="text-sm text-neutral-500 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    We respect your privacy. Unsubscribe at any time.
                  </motion.p>
                )}
              </motion.form>

              {/* Success confetti effect */}
              {isSuccess && (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-blue-500 rounded-full"
                      initial={{
                        x: "50%",
                        y: "50%",
                      }}
                      animate={{
                        x: `${50 + (Math.random() - 0.5) * 100}%`,
                        y: `${50 + (Math.random() - 0.5) * 100}%`,
                        opacity: 0,
                        scale: 0,
                      }}
                      transition={{
                        duration: 1,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NotifyModal; 