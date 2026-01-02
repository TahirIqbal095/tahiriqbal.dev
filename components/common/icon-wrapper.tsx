"use client";

import { motion } from "motion/react";

export const IconWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.1 },
      }}
      whileTap={{ scale: 0.9 }}
      className="cursor-pointer"
    >
      {children}
    </motion.div>
  );
};
