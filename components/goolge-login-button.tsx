"use client";

import { signIn } from "@/lib/auth-client";
import { motion } from "motion/react";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function GoogleLoginButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    await signIn.social({
      provider: "google",
      callbackURL: "/",
    });
    // Note: isLoading stays true until redirect or error logic handles it,
    // but better-auth might not reset it automatically if redirecting.
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleLogin}
      disabled={isLoading}
      className="focus-visible:ring-ring relative flex w-full max-w-sm items-center justify-center gap-3 overflow-hidden rounded-xl bg-white px-6 py-3 font-medium text-black shadow-lg ring-1 ring-black/5 transition-colors hover:bg-gray-50 focus-visible:ring-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-70 dark:bg-zinc-900 dark:text-white dark:ring-white/10 dark:hover:bg-zinc-800"
    >
      {/* Background gradient glow effect */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 via-purple-500/10 to-red-500/10 opacity-0 transition-opacity duration-500 hover:opacity-100" />

      {isLoading ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : (
        <>
          <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          <span className="relative">Continue with Google</span>
        </>
      )}
    </motion.button>
  );
}
