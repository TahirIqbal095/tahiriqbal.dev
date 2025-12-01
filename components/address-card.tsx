import Image from "next/image";
import { Card, CardLabel, CardTitle } from "./ui/card";
import MapImage from "@/public/map.webp";
import { Separator } from "./ui/separator";

export default function AddressCard() {
  return (
    <Card className="relative overflow-hidden h-56 p-2 group">
      {/* Background image */}
      <Image
        src={MapImage}
        alt="Map of Kashmir"
        fill
        priority
        className="object-cover absolute inset-0 z-0 transition-transform group-hover:scale-150 duration-300 ease-in"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-black/10 z-10" />

      {/* Foreground content */}
      <div className="relative z-20">
        <div className="flex justify-between items-center mb-1 text-xs text-white">
          <CardTitle>Location</CardTitle>
          <CardLabel>Kashmir</CardLabel>
        </div>
        <Separator className="bg-white/40" />
      </div>
    </Card>
  );
}
