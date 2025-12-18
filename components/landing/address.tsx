"use client";

import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";

export default function AddressCard() {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    ampm: "AM",
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to IST manually to get pieces
      const timeString = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour12: true,
        hour: "numeric",
        minute: "2-digit",
      });

      const [timePart, ampmPart] = timeString.split(" ");
      const [hoursPart, minutesPart] = timePart.split(":");

      setTime({
        hours: hoursPart.padStart(2, "0"),
        minutes: minutesPart,
        ampm: ampmPart,
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="relative h-[200px] md:h-full flex flex-col items-center justify-center bg-card border transition-colors group overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[16px_16px]" />
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-50" />

      <div className="relative z-10 flex flex-col items-center gap-2">
        {/* Digital Clock */}
        <div className="flex items-start font-mono tracking-tighter leading-none select-none text-foreground/90">
          <span className="text-5xl md:text-6xl font-bold">{time.hours}</span>
          <span className="text-5xl md:text-6xl font-bold animate-pulse text-muted-foreground/50">
            :
          </span>
          <span className="text-5xl md:text-6xl font-bold">{time.minutes}</span>
          <span className="text-lg md:text-xl font-medium text-muted-foreground/60 ml-2 mt-2 self-start">
            {time.ampm}
          </span>
        </div>

        {/* Location / Context */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/50 backdrop-blur-sm border border-secondary">
          <MapPin size={12} className="text-primary" />
          <span className="text-xs font-medium text-secondary-foreground">
            Kashmir, India
          </span>
        </div>
      </div>
    </Card>
  );
}
