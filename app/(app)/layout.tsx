import SiteFooter from "@/components/common/site-footer";
import SiteHeader from "@/components/common/site-header";
import React from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <SiteHeader />
        <main className="w-full overflow-x-hidden px-2">{children}</main>
        <SiteFooter />
      </div>
    </>
  );
}
