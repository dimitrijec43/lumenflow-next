'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { useState } from 'react';
import NotifyModal from '@/components/NotifyModal';
import logo from '@/assets/logo.png';

const PrivacyPolicy = () => {
  const [isNotifyModalOpen, setIsNotifyModalOpen] = useState(false);

  const sections = [
    {
      title: "Introduction",
      content: "Welcome to LumenFlow's Privacy Policy. This policy explains how we collect, use, and protect your personal information when you use our website and services. By using LumenFlow, you agree to the collection and use of information in accordance with this policy."
    },
    {
      title: "Information We Collect",
      content: "We collect information that you voluntarily provide to us when you:",
      list: [
        "Sign up for notifications about our launch",
        "Subscribe to our newsletter",
        "Contact us through our website",
        "Interact with our website features"
      ]
    },
    {
      title: "Types of Data Collected",
      content: "The personal information we collect may include:",
      list: [
        "Name (when provided)",
        "Email address",
        "Device information (platform type)",
        "Usage data and preferences",
        "Cookies and technical information"
      ]
    },
    {
      title: "How We Use Your Information",
      content: "We use the collected information for:",
      list: [
        "Sending you notifications about our launch and updates",
        "Improving our website and services",
        "Analyzing usage patterns and preferences",
        "Communicating with you about our services",
        "Ensuring the security of our website"
      ]
    },
    {
      title: "Cookies",
      content: "LumenFlow uses cookies to enhance your browsing experience. These cookies help us:",
      list: [
        "Remember your preferences",
        "Analyze website traffic and usage patterns",
        "Improve our website's performance",
        "Provide a better user experience"
      ]
    },
    {
      title: "Data Security",
      content: "We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security."
    },
    {
      title: "Third-Party Services",
      content: "We may use third-party services that collect, monitor, and analyze data to help us improve our services. These third parties have their own privacy policies addressing how they use such information."
    },
    {
      title: "Your Rights",
      content: "You have the right to:",
      list: [
        "Access your personal information",
        "Request correction of your data",
        "Request deletion of your data",
        "Opt-out of marketing communications",
        "Be informed about how your data is used"
      ]
    },
    {
      title: "Updates to This Policy",
      content: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the date at the top of this policy."
    },
    {
      title: "Contact Us",
      content: "If you have any questions about this Privacy Policy, please contact us through our website or email us at privacy@lumenflow.com"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-900">
      <Navbar onNotifyClick={() => setIsNotifyModalOpen(true)} />
      <NotifyModal isOpen={isNotifyModalOpen} onClose={() => setIsNotifyModalOpen(false)} />
      <div className="pb-1">
        <div className="max-w-5xl mx-auto mt-10 px-4 py-16 sm:py-24">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            >
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
                Privacy Policy
            </h1>
            <p className="text-neutral-400 mb-12">
                Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="space-y-12">
                {sections.map((section, index) => (
                <motion.section
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="space-y-4"
                >
                    <h2 className="text-2xl font-semibold text-neutral-100">
                    {section.title}
                    </h2>
                    <div className="text-neutral-300 space-y-4">
                    <p>{section.content}</p>
                    {section.list && (
                        <ul className="list-disc list-inside space-y-2 text-neutral-400 ml-4">
                        {section.list.map((item, i) => (
                            <li key={i} className="hover:text-neutral-300 transition-colors">
                            {item}
                            </li>
                        ))}
                        </ul>
                    )}
                    </div>
                </motion.section>
                ))}
            </div>
            </motion.div>
        </div>
        <footer className="rounded-3xl shadow-lg m-4 mt-20 border border-neutral-700/30 bg-neutral-800/20 backdrop-blur-sm">
              <div className="w-full mx-auto max-w-screen-xl p-6 md:p-8 flex flex-col md:flex-row cols-3 items-center justify-between ">
                {/* <div className="flex flex-col items-center md:items-start gap-2">
                  <span className="text-sm sm:text-base text-gray-300">© 2025 <a href="/" className="hover:text-blue-400 transition-colors">illumioFlow™</a></span>
                  <p className="text-gray-400 text-sm">All Rights Reserved.</p>
                </div> */}
                
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

                <div className="flex items-center justify-center pt-5 md:pt-0">
                  <img 
                    src={logo.src} 
                    alt="illumioFlow Logo" 
                    className="w-8 h-8 sm:w-10 sm:h-10 opacity-80 hover:opacity-100 transition-opacity" 
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-center gap-2 pb-5">
                  <span className="text-sm sm:text-base text-gray-300">© 2025 <a href="/" className="hover:text-blue-400 transition-colors">illumioFlow™</a></span>
                  <p className="text-gray-400 text-sm">All Rights Reserved.</p>
                </div>
            </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 