'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.png';

interface NavbarProps {
  onNotifyClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNotifyClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRinging, setIsRinging] = useState(false);
  const { scrollY } = useScroll();
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(23, 23, 23, 0)", "rgba(23, 23, 23, 0.8)"]
  );
  const navBorderOpacity = useTransform(
    scrollY,
    [0, 100],
    [0, 0.1]
  );

  // Bell icon SVG path
  const bellPath = "M20 17h1a1 1 0 0 1 .117 1.993L21 19H3a1 1 0 0 1-.117-1.993L3 17h1v-6c0-4.418 3.582-8 8-8s8 3.582 8 8v6zm-8 4a2 2 0 0 1-1.995-1.85L10 19h4a2 2 0 0 1-2 2zm-7-4h14v-6c0-3.866-3.134-7-7-7s-7 3.134-7 7v6z";

  const ringBell = () => {
    setIsRinging(true);
    setTimeout(() => setIsRinging(false), 1000);
    onNotifyClick();
  };

  return (
    <motion.nav
      style={{
        background: navBackground,
        borderBottom: useTransform(navBorderOpacity, (opacity) => 
          `1px solid rgba(38, 38, 38, ${opacity})`)
      }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg"
    >
      <div className="container mx-auto py-2 px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <div className="relative w-10 h-10">
              <Image
                src={logo}
                alt="LumenFlow"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* <span className="text-xl font-bold text-gradient-multi">LumenFlow</span> */}
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link 
                href="/why"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                Why we made LumenFlow?
              </Link>
            </motion.div>
            {/* <motion.a
              href="#pricing"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-neutral-300 hover:text-white transition-colors"
            >
              Pricing
            </motion.a>
            <motion.a
              href="#about"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-neutral-300 hover:text-white transition-colors"
            >
              About
            </motion.a> */}

            {/* Bell Icon */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.button
                className="p-2 rounded-full hover:bg-neutral-800 transition-colors relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={ringBell}
              >
                <motion.svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  animate={isRinging ? {
                    rotate: [0, -10, 10, -10, 10, -5, 5, 0],
                    transition: {
                      duration: 1,
                      ease: "easeInOut"
                    }
                  } : {}}
                >
                  <path d={bellPath} />
                  {/* Bell clapper */}
                  <motion.path
                    d="M12 4 L12 2"
                    animate={isRinging ? {
                      rotate: [0, -15, 15, -15, 15, -7, 7, 0],
                      originY: 2
                    } : {}}
                    transition={{ duration: 1 }}
                  />
                </motion.svg>
                
                {/* Ripple effect */}
                {isRinging && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-blue-500"
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                )}
              </motion.button>

              {/* Notification dot */}
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
              />
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Bell Icon for mobile */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.button
                className="p-2 rounded-full hover:bg-neutral-800 transition-colors relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={ringBell}
              >
                <motion.svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  animate={isRinging ? {
                    rotate: [0, -10, 10, -10, 10, -5, 5, 0],
                    transition: {
                      duration: 1,
                      ease: "easeInOut"
                    }
                  } : {}}
                >
                  <path d={bellPath} />
                  <motion.path
                    d="M12 4 L12 2"
                    animate={isRinging ? {
                      rotate: [0, -15, 15, -15, 15, -7, 7, 0],
                      originY: 2
                    } : {}}
                    transition={{ duration: 1 }}
                  />
                </motion.svg>
              </motion.button>

              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
              />
            </motion.div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-100 p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4"
          >
            <Link
              href="/why"
              className="block py-2 text-neutral-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Why we made LumenFlow?
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar; 