"use client";

import Logo from "./logo";
import { ThemeToggleButton } from "@/components/toggle-theme";
import { motion } from "motion/react";
import { Link } from "next-view-transitions";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { MobileNav } from "./mobile-nav";
import { NavItem } from "@/types/nav";

const pages: NavItem[] = [
  { title: "Blogs", href: "/blogs" },
  { title: "Guestbook", href: "/guestbook" },
];

export default function Navbar() {
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

      <div className="flex items-center gap-4">
        <div className="hidden md:flex md:gap-2">
          {pages.map((page, idx) => (
            <Button key={idx} asChild variant="link">
              <Link href={page.href} className="ml-2">
                {page.title}
              </Link>
            </Button>
          ))}
        </div>
        <ThemeToggleButton start="top-right" />
        <MobileNav items={pages} className="md:hidden" />
      </div>
    </motion.nav>
  );
}
