import type { Metadata } from "next";
import "@/styles/globals.css";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/providers/theme-provider";
import Header from "@/components/common/header";
import { Inter } from "next/font/google";
import { generateMetadata } from "@/config/meta";

export const metadata: Metadata = generateMetadata("/");

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
              <Header />
              <main className="w-full overflow-x-hidden px-2 py-20">
                {children}
              </main>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
