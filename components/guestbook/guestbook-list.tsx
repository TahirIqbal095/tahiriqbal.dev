"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "../ui/separator";
import { useSession } from "@/lib/auth-client";
import InputForm from "./input-form";
import { Activity } from "react";

interface SignGuestbookProps {
  messages: {
    user: string;
    message: string;
    date: string; // ISO date string
  }[];
}

export default function SignGuestbook({ messages }: SignGuestbookProps) {
  const { data } = useSession();
  console.log(data);
  function initialsFromName(n: string) {
    if (!n) return "?";
    return n
      .split(" ")
      .map((s) => s[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  }

  function formatDate(iso: string) {
    try {
      const d = new Date(iso);
      return d.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return iso;
    }
  }

  return (
    <section>
      <Activity mode={data?.session ? "visible" : "hidden"}>
        <InputForm />
      </Activity>
      <Card className="relative mt-6 overflow-hidden">
        <CardHeader className="mb-1 flex items-center justify-between">
          <CardTitle>Guestbook</CardTitle>
          <div className="text-muted-foreground text-xs">
            {messages.length} signs
          </div>
        </CardHeader>
        <Separator />
        <CardContent>
          <div className="max-h-[60vh] overflow-x-hidden overflow-y-auto pb-8">
            {messages.map((m, idx) => (
              <div
                key={`${m.user}-${m.date}-${idx}`}
                className="group flex items-start gap-2 rounded-lg p-3"
                aria-label={`Message from ${m.user}`}
              >
                <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium">
                  {initialsFromName(m.user)}
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="text-xs">{m.user}</h4>
                    <time className="text-muted-foreground text-xs">
                      {formatDate(m.date)}
                    </time>
                  </div>
                  <p className="text-foreground mt-1 text-sm">{m.message}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <div className="from-background absolute right-0 bottom-0 left-0 z-10 h-12 bg-linear-to-t to-transparent" />
      </Card>
    </section>
  );
}
