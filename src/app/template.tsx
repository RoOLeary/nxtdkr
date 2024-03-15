'use client';

// eslint-disable-next-line import/no-extraneous-dependencies
import { motion } from 'framer-motion';

export default function Loading({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
    >
      {children}
      <h1 className="text-3xl font-black justify-center content-center">
        LOADER GOES HERE! <br />
        THIS IS JUST A PLACEHOLDER
      </h1>
    </motion.div>
  );
}
