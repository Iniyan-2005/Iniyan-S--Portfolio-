import React from 'react';
import { motion } from 'framer-motion';

const SectionDivider = () => {
  return (
    <div className="relative flex items-center justify-center py-2 overflow-hidden">
      {/* Left line */}
      <motion.div
        className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-primary/20 to-primary/40"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      />

      {/* Center diamond */}
      <motion.div
        className="mx-4 relative"
        initial={{ scale: 0, rotate: 0 }}
        whileInView={{ scale: 1, rotate: 45 }}
        transition={{ duration: 0.5, delay: 0.3, type: 'spring', stiffness: 200 }}
        viewport={{ once: true }}
      >
        <div className="w-3 h-3 bg-gradient-to-br from-primary to-accent rounded-sm shadow-glow" />
      </motion.div>

      {/* Right line */}
      <motion.div
        className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-accent/20 to-accent/40"
        initial={{ scaleX: 0, originX: 1 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      />
    </div>
  );
};

export default SectionDivider;
