'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '@/assets/logo.png';

interface NavbarProps {
  onNotifyClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNotifyClick }) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRinging, setIsRinging] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { scrollY } = useScroll();
  
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(23, 23, 23, 0)", "rgba(23, 23, 23, 0.85)"]
  );
  
  const navBorderOpacity = useTransform(
    scrollY,
    [0, 100],
    [0, 0.15]
  );

  const navBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Run initial animation only once when component mounts
  useEffect(() => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  }, []);

  // Handle click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current && 
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Bell icon SVG path
  const bellPath = "M20 17h1a1 1 0 0 1 .117 1.993L21 19H3a1 1 0 0 1-.117-1.993L3 17h1v-6c0-4.418 3.582-8 8-8s8 3.582 8 8v6zm-8 4a2 2 0 0 1-1.995-1.85L10 19h4a2 2 0 0 1-2 2zm-7-4h14v-6c0-3.866-3.134-7-7-7s-7 3.134-7 7v6z";

  const ringBell = () => {
    setIsRinging(true);
    setTimeout(() => setIsRinging(false), 1000);
  };

  // Menu animation variants
  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  // Menu item animation variants
  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      x: -10,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const menuItems = [
    { 
      href: '/', 
      label: 'Hello!',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
          <defs>
            <linearGradient id="welcomeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#9333EA" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          <motion.path
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            stroke="url(#welcomeGradient)"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M9 11h.01M15 11h.01M9.5 15a3.5 3.5 0 005.5 0"
            stroke="url(#welcomeGradient)"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }}
          />
        </svg>
      )
    },
    { 
      href: '/why', 
      label: 'Why we made illumioFlow?',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
          <defs>
            <linearGradient id="whyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#9333EA" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          <motion.path
            d="M12 3v3m0 15v-3M3 12h3m15 0h-3m-2.5-7.5l-2 2m-7 7l-2 2m11-2l2 2m-11-11l2 2"
            stroke="url(#whyGradient)"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.circle
            cx="12"
            cy="12"
            r="4"
            stroke="url(#whyGradient)"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>
      )
    },
    { 
      href: '/how', 
      label: 'How It Works?',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
          <defs>
            <linearGradient id="howGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#9333EA" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          <motion.path
            d="M12 3v2m0 14v2M5.45 5.11l1.41 1.41m10.28 10.28l1.41 1.41M3 12h2m14 0h2M5.45 18.89l1.41-1.41m10.28-10.28l1.41-1.41"
            stroke="url(#howGradient)"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.circle
            cx="12"
            cy="12"
            r="5"
            stroke="url(#howGradient)"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.path
            d="M12 9v3l2 2"
            stroke="url(#howGradient)"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
          />
        </svg>
      )
    },
  ];

  // Add this helper function to determine if a link is active
  const isActivePath = (path: string) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname?.startsWith(path);
  };

  return (
    <motion.nav
      style={{
        background: navBackground,
        backdropFilter: navBlur,
        borderBottom: useTransform(navBorderOpacity, (opacity) => 
          `1px solid rgba(38, 38, 38, ${opacity})`)
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'backdrop-saturate-150' : ''
      }`}
      initial={hasAnimated ? false : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`container mx-auto py-2 px-4 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-3'
      }`}>
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={hasAnimated ? false : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <Link href="/" className="relative w-10 h-10 hover:opacity-80 transition-opacity">
              <Image
                src={logo}
                alt="illumioFlow"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </motion.div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href || 
                (item.href !== '/' && pathname?.startsWith(item.href));
              
              return (
                <motion.div
                  key={item.href}
                  initial={hasAnimated ? false : { opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: hasAnimated ? 0 : 0.1 * (index + 1) }}
                  className="relative"
                >
                  <Link 
                    href={item.href}
                    className={`relative group px-4 py-2 ${isActive ? 'text-white' : 'text-neutral-300 hover:text-white'} transition-colors flex items-center gap-2`}
                  >
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-0 -ml-8"
                      >
                        {item.icon}
                      </motion.div>
                    )}
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 rounded-xl"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      >
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
                        <motion.div 
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20"
                          animate={{
                            opacity: [0.1, 0.2, 0.1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        <div className="absolute inset-0 rounded-xl border border-neutral-700/50" />
                        {/* <motion.div
                          className="absolute -bottom-0.5 left-0 right-0 h-[2px]"
                          style={{
                            background: "linear-gradient(90deg, #3B82F6, #9333EA, #EC4899)",
                          }}
                          animate={{
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        /> */}
                      </motion.div>
                    )}
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05))",
                      }}
                    />
                  </Link>
                </motion.div>
              );
            })}

            {/* Bell Icon - Desktop */}
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
                onClick={() => {
                  ringBell();
                  onNotifyClick();
                }}
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

              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
              />
            </motion.div>
          </div>

          {/* Mobile menu button and bell */}
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
                onClick={() => {
                  ringBell();
                  onNotifyClick();
                }}
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
              ref={buttonRef}
              onClick={toggleMenu}
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-full left-0 right-0 bg-neutral-900/95 backdrop-blur-lg border-t border-neutral-800"
            >
              <div className="px-4 py-2 space-y-1">
                {menuItems.map((item, index) => {
                  const isActive = pathname === item.href || 
                    (item.href !== '/' && pathname?.startsWith(item.href));
                  
                  return (
                    <motion.div
                      key={item.href}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      <Link
                        href={item.href}
                        className={`block py-3 px-4 text-neutral-300 hover:text-white hover:bg-neutral-800/50 rounded-lg transition-colors relative ${
                          isActive ? 'text-white' : ''
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute inset-0 rounded-xl -z-10"
                            initial={false}
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          >
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
                            <motion.div 
                              className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20"
                              animate={{
                                opacity: [0.1, 0.2, 0.1],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                            <div className="absolute inset-0 rounded-xl border border-neutral-700/50" />
                          </motion.div>
                        )}
                        <div className="flex items-center gap-3 relative z-10">
                          {isActive ? (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="w-6 h-6 flex items-center justify-center"
                            >
                              {item.icon}
                            </motion.div>
                          ) : (
                            <div className="w-6 h-6 flex items-center justify-center opacity-50">
                              {item.icon}
                            </div>
                          )}
                          <span className={isActive ? 'font-medium' : ''}>{item.label}</span>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar; 