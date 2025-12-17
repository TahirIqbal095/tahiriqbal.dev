import Image from "next/image";
import { Card, CardLabel, CardTitle } from "@/components/ui/card";
import MapImage from "@/public/assets/map.webp";
import { Separator } from "@/components/ui/separator";

export default function AddressCard() {
  return (
    <Card className="relative overflow-hidden p-2 group h-full">
      {/* Background image */}
      <Image
        src={MapImage}
        alt="Map of Kashmir"
        fill
        priority
        className="object-cover absolute inset-0 z-0 transition-transform group-hover:scale-150 duration-300 ease-in"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/40 to-black/10 z-10" />

      {/* Foreground content */}
      <div className="relative z-20">
        <div className="flex justify-between items-center mb-1">
          <CardTitle>Location</CardTitle>
          <CardLabel>Kashmir</CardLabel>
        </div>
        <Separator />
      </div>
    </Card>
  );
}
