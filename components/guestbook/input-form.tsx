"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Send, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { FormEvent, useState } from "react";
import Spinner from "../ui/spinner";

export default function InputForm() {
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!text.trim()) {
      setError("Please provide a message.");
      return;
    }

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 2000));

    setText("");
    setSubmitting(false);
  }

  return (
    <div className="relative w-full">
      <div className="bg-card relative rounded-xl border p-1 shadow-sm">
        <div
          className={cn(
            "absolute -inset-0.5 rounded-xl bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-20 blur-xl transition duration-500",
            isFocused ? "opacity-50" : "opacity-20"
          )}
        ></div>
        <form onSubmit={handleSubmit} className="relative flex flex-col">
          <div className="relative flex items-center">
            <Input
              value={text}
              onChange={(e) => setText(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Sign the guestbook..."
              className="border-0 bg-transparent py-6 pr-14 text-base shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
              disabled={submitting}
            />
            <div className="absolute top-1 right-1 bottom-1 flex items-center">
              <Button
                type="submit"
                size="icon"
                disabled={submitting || !text.trim()}
                className={cn(
                  "h-10 w-10 rounded-lg transition-all duration-300",
                  text.trim()
                    ? "bg-linear-to-r from-pink-500 to-purple-600 text-white shadow-md hover:scale-105 hover:shadow-lg"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {submitting ? (
                  <Spinner className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="ml-0.5 h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </form>
      </div>

      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            className="text-destructive mt-2 flex items-center gap-2 px-2 text-sm font-medium"
          >
            <span className="bg-destructive inline-block h-1.5 w-1.5 rounded-full" />
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-muted-foreground mt-3 flex items-center justify-between px-2 text-xs">
        <span className="flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5 text-yellow-500/70" />
          Be kind and respectful
        </span>
      </div>
    </div>
  );
}
