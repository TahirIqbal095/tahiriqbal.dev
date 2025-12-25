"use client";

import Logo from "./logo";
import { ThemeToggleButton } from "@/components/toggle-theme";
import { motion } from "motion/react";
import { Link } from "next-view-transitions";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{
        opacity: 1,
        y: 0,
        maxWidth: isHome ? "80rem" : "48rem",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 right-0 left-0 z-50 mx-auto flex w-full items-center justify-between border-b px-2 py-2 backdrop-blur"
    >
      <Logo />

      <div className="flex items-center gap-6">
        <Button asChild variant="link">
          <Link href="/blogs" className="ml-2">
            Blogs
          </Link>
        </Button>
        <ThemeToggleButton start="top-right" />
      </div>
    </motion.nav>
  );
}
