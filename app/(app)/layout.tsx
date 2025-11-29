import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import React from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="max-w-5xl mx-auto">
        <SiteHeader />
        <main className="w-full overflow-x-hidden px-2">{children}</main>
        <SiteFooter />
      </div>
    </>
  );
}
