'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookiesAccepted');
    if (!hasAccepted) {
      // Show the banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-neutral-900/95 backdrop-blur-lg border border-neutral-800 p-4 rounded-xl shadow-xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <img src={logo.src} alt="logo" className="w-8 h-8" />
                <p className="text-neutral-300 text-sm">
                  By continuing to browse this site, you agree to our use of cookies and our{' '}
                  <a href="/privacy" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Privacy Policy
                  </a>.
                </p>
              </div>
              <button
                onClick={handleClose}
                className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-lg text-sm font-medium transition-colors"
              >
                Got it
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent; 