"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "../ui/separator";
import { UserWithMessages } from "@/db/types";
import Image from "next/image";

export default function GuestbookList({
  messages,
}: {
  messages: UserWithMessages[];
}) {
  function initialsFromName(n: string) {
    if (!n) return "?";
    return n
      .split(" ")
      .map((s) => s[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  }

  function formatDate(iso: string | Date) {
    try {
      const d = iso instanceof Date ? iso : new Date(iso);
      return d.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
      });
    } catch {
      return typeof iso === "string" ? iso : iso.toString();
    }
  }

  return (
    <Card className="relative mt-6 overflow-hidden">
      <CardHeader className="mb-1 flex items-center justify-between">
        <CardTitle>Guestbook</CardTitle>
        <div className="text-muted-foreground text-xs">
          {messages.length} signs
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="no-scrollbar relative max-h-[60vh] overflow-x-hidden overflow-y-auto pb-8">
        {messages.map((m, idx) => (
          <div
            key={`${m.user.name}-${idx}`}
            className="group flex items-start gap-2 rounded-lg p-3"
            aria-label={`Message from ${m.user.name}`}
          >
            {m.user.image ? (
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src={m.user.image}
                  alt={m.user.name}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium">
                {initialsFromName(m.user.name)}
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-baseline justify-between gap-4">
                <h4 className="text-xs">{m.user.name}</h4>
                <time className="text-muted-foreground text-[10px] md:text-xs">
                  {formatDate(new Date(m.createdAt))}
                </time>
              </div>
              <p className="text-foreground mt-1 text-sm">{m.message}</p>
            </div>
          </div>
        ))}
      </CardContent>
      <div className="from-card absolute right-0 bottom-0 left-0 z-10 h-16 bg-linear-to-t to-transparent" />
    </Card>
  );
}
