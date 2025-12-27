"use client";

import { footerData } from "@/config/footer";

export default function FooterSm() {
  return (
    <footer className="text-muted-foreground text-center">
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
    </footer>
  );
}
