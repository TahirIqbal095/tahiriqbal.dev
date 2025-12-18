"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BentoGridProps = {
  children: ReactNode;
  className?: string;
};

type BentoCardProps = {
  children: ReactNode;
  className?: string;
};

export const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const BentoCard = ({ children, className }: BentoCardProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
          },
        },
      }}
      className={cn("h-full", className)}
    >
      {children}
    </motion.div>
  );
};
