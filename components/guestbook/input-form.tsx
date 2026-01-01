"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Send, Sparkles } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { useActionState, useState } from "react";
import Spinner from "../ui/spinner";
import { addGuestbookEntry } from "@/actions/actions";
import { useSession } from "@/lib/auth-client";

export default function InputForm() {
  const { data } = useSession();
  const [state, formAction, isPending] = useActionState(
    addGuestbookEntry,
    null
  );
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full">
      <div className="bg-card relative rounded-xl border p-1 shadow-sm">
        <div
          className={cn(
            "absolute -inset-0.5 rounded-xl bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-20 blur-xl transition duration-500",
            isFocused ? "opacity-50" : "opacity-20"
          )}
        ></div>
        <form action={formAction} className="relative flex flex-col">
          <div className="relative flex items-center">
            <Input
              name="message"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Sign the guestbook..."
              className="border-0 bg-transparent py-6 pr-14 text-base shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Input
              name="userId"
              value={data?.user.id}
              className="invisible h-0 w-0"
            />
            <div className="absolute top-1 right-1 bottom-1 flex items-center">
              <Button
                type="submit"
                size="icon"
                className={cn(
                  "h-10 w-10 rounded-lg transition-all duration-300",
                  state?.message
                    ? "bg-linear-to-r from-pink-500 to-purple-600 text-white shadow-md hover:scale-105 hover:shadow-lg"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {isPending ? (
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
        {state?.error && (
          <span className="text-xs text-red-400">{state.error}</span>
        )}
        {state?.message && (
          <span className="text-sm text-green-400">{state.message}</span>
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
