"use client";

import { footerData } from "@/config/footer";
import { motion } from "motion/react";

export default function FooterSm() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="text-muted-foreground text-center"
    >
      <div className="flex flex-col gap-1 text-[10px] md:text-xs">
        <p className="">
          {footerData.title}{" "}
          <a href="https://github.com/tahiriqbal095" target="_blank">
            <span className="text-primary font-medium hover:underline">
              {footerData.name}
            </span>
          </a>
        </p>
        <p className="">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </motion.footer>
  );
}
