'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

export default function Template({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ 
          opacity: 0,
          y: 20,
          scale: 0.98,
          filter: 'blur(10px)'
        }}
        animate={{ 
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)'
        }}
        exit={{ 
          opacity: 0,
          y: -20,
          scale: 1.02,
          filter: 'blur(10px)'
        }}
        transition={{
          duration: 0.6,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
