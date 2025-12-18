"use client";

import Logo from "./logo";
import { ThemeToggleButton } from "@/components/toggle-theme";
import { motion } from "motion/react";

export default function SiteHeader() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed max-w-7xl mx-auto backdrop-blur z-50 px-2 top-0 left-0 right-0 flex items-center justify-between border-b py-2"
    >
      <Logo />
      <ThemeToggleButton start="top-right" />
    </motion.nav>
  );
}
