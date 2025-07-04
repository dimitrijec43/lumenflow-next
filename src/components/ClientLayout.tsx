'use client';

import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import NotifyModal from '@/components/NotifyModal';
import { usePathname } from 'next/navigation';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Simulate loading time and resources check
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loading screen for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" />
      ) : (
        <>
          <Navbar onNotifyClick={() => setIsModalOpen(true)} />
          <AnimatePresence mode="wait">
            <div key={pathname}>
              {children}
            </div>
          </AnimatePresence>
          <NotifyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
      )}
    </AnimatePresence>
  );
} 