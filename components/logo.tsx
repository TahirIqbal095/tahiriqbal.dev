"use client";

import { motion } from "motion/react";

const Logo = () => {
  const containerVariants = {
    hidden: { opacity: 0.2 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each part animating
        delayChildren: 0.3, // Initial delay before starting
      },
    },
  };

  // The central stem rises from below
  const stemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  // The main body scales up from the center
  const bodyVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" as const },
    },
  };

  // Left highlight slides in from left
  const leftHighlightVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 120 },
    },
  };

  // Right highlight slides in from right
  const rightHighlightVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 120 },
    },
  };

  // The spark pops at the end with a bounce
  const sparkVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: [0, 1.5, 1], // Keyframes for a bounce effect
      opacity: 1,
      transition: { duration: 0.6, times: [0, 0.6, 1] },
    },
  };

  return (
    <div style={{ width: "50px", height: "50px" }}>
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <g transform="translate(0, 10)">
          <motion.path
            d="M100 175L85 85L100 65L115 85L100 175Z"
            fill="#111111"
            variants={stemVariants}
          />

          <motion.path
            d="M100 65L20 50L85 85L100 110L115 85L180 50L100 65Z"
            fill="#444444"
            variants={bodyVariants}
            style={{ originX: "100px", originY: "80px" }}
          />

          <motion.path
            d="M100 65L80 35L20 50L100 65Z"
            fill="#AAAAAA"
            variants={leftHighlightVariants}
          />
          <motion.path
            d="M100 65L120 35L180 50L100 65Z"
            fill="#AAAAAA"
            variants={rightHighlightVariants}
          />

          <motion.path
            d="M100 65L105 55L100 45L95 55L100 65Z"
            fill="#e5e5e5"
            variants={sparkVariants}
            style={{ originX: "100px", originY: "55px" }}
          />
        </g>
      </motion.svg>
    </div>
  );
};

export default Logo;
