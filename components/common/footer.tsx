"use client";

import { IconWrapper } from "./icon-wrapper";
import { footerData } from "@/config/footer";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="text-muted-foreground absolute right-0 bottom-0 left-0 flex items-center justify-between border-t px-2 py-2"
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
      <div className="flex gap-3">
        {footerData.links.map((link, idx) => (
          <a key={idx} href={link.href} target="_blank">
            <IconWrapper>{link.icon}</IconWrapper>
          </a>
        ))}
      </div>
    </motion.footer>
  );
}
