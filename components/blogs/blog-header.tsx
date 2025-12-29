"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface BlogHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export default function BlogHeader({
  title,
  description,
  className,
}: BlogHeaderProps) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative mb-4"
      >
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          <span className="from-foreground via-foreground/70 to-foreground/60 bg-linear-to-r bg-clip-text text-transparent">
            {title}
          </span>
        </h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          className="bg-primary/20 mx-auto mt-2 h-1 w-16 rounded-full md:w-24"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-muted-foreground mx-auto max-w-md text-base leading-relaxed md:max-w-lg md:text-lg"
      >
        {description}
      </motion.p>
    </div>
  );
}
