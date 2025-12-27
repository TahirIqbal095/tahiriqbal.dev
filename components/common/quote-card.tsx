"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { QUOTES } from "@/data/quotes";
import { cn } from "@/lib/utils";
import { RefreshCw, Quote as QuoteIcon } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

interface QuoteCardProps {
  className?: string;
}

export default function QuoteCard({ className }: QuoteCardProps) {
  const [currentQuoteIndex, setCurrentQuoteIndex] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const nextQuote = React.useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentQuoteIndex((prev) => (prev + 1) % QUOTES.length);
  }, [isAnimating]);

  const currentQuote = QUOTES[currentQuoteIndex];

  return (
    <Card
      className={cn(
        "group border-muted relative overflow-hidden py-8 shadow",
        className
      )}
    >
      <div className="text-muted-foreground/40 absolute top-0 h-24 w-24">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310">
          <path
            d="M79 144.11c-6 0-11.37.28-16.19.8 8.02-32.82 27.27-48.06 55.31-60.35L103.1 50.31C75.18 62.56 56.9 76.59 43.81 95.82c-15.2 22.35-22.6 51.72-22.6 89.81v16.46c0 31.83.11 57.6 57.79 57.6 57.79 0 57.79-25.87 57.79-57.79 0-31.91.37-57.79-57.79-57.79zm152 0c-6 0-11.37.28-16.19.8 8.02-32.82 27.27-48.06 55.31-60.35L255.1 50.31c-27.92 12.25-46.2 26.28-59.29 45.51-15.2 22.35-22.6 51.72-22.6 89.81v16.46c0 31.83.11 57.6 57.79 57.6 57.79 0 57.79-25.87 57.79-57.79 0-31.91.37-57.79-57.79-57.79z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <Button
        onClick={nextQuote}
        disabled={isAnimating}
        aria-label="Next quote"
        className="text-muted-foreground absolute top-0 right-0 z-50 cursor-pointer rounded-full p-3"
        variant={"ghost"}
      >
        <RefreshCw className={cn("h-4 w-4", isAnimating && "animate-spin")} />
      </Button>
      <div className="relative z-40 flex flex-col items-start gap-4">
        <div className="w-full">
          <AnimatePresence
            mode="wait"
            onExitComplete={() => setIsAnimating(false)}
          >
            <motion.div
              key={currentQuoteIndex}
              initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col gap-2"
            >
              <p className="text-primary/95 font-serif text-xl font-medium tracking-tight">
                &ldquo;{currentQuote.text}&rdquo;
              </p>
              <footer className="flex items-center gap-2">
                <div className="ml-auto h-px w-8 bg-neutral-300 dark:bg-neutral-700" />
                <span className="text-muted-foreground text-[10px] font-medium md:text-sm">
                  {currentQuote.author}
                </span>
              </footer>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Card>
  );
}
