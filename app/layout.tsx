import type { Metadata } from "next";
import "@/styles/globals.css";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/providers/theme-provider";
import SiteHeader from "@/components/common/site-header";
import SiteFooter from "@/components/common/site-footer";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Tahir Iqbal",
  description: "Personal Portfolio website of Tahir Iqbal",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html
        className={`${inter.variable} ${inter.className} antialiased`}
        lang="en"
        suppressHydrationWarning
      >
        <body>
          <ThemeProvider>
            <div className="relative mx-auto min-h-screen max-w-7xl space-y-4">
              <SiteHeader />
              <main className="w-full overflow-x-hidden px-2 py-20">
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
