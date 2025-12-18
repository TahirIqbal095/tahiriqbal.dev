import type { Metadata } from "next";
import "@/styles/globals.css";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/providers/theme-provider";
import SiteHeader from "@/components/common/site-header";
import SiteFooter from "@/components/common/site-footer";

export const metadata: Metadata = {
  title: "Tahir Iqbal",
  description: "Personal Portfolio website of Tahir Iqbal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html
        className={"font-hanken-grotesk antialiased"}
        lang="en"
        suppressHydrationWarning
      >
        <body className={`antialiased tracking-tight`}>
          <ThemeProvider>
            <div className="relative max-w-7xl min-h-screen mx-auto space-y-4">
              <SiteHeader />
              <main className="w-full overflow-x-hidden py-20 px-2">
                {children}
              </main>
              <SiteFooter />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
