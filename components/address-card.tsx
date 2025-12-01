import Image from "next/image";
import { Card, CardHeader, CardLabel, CardTitle } from "./ui/card";
import MapImage from "@/public/map.webp";
import { Separator } from "./ui/separator";

export default function AddressCard() {
  return (
    <Card className="relative h-60 p-2 overflow-hidden group">
      <CardHeader className="relative z-10">
        <div className="flex justify-between items-center mb-1 text-xs">
          <CardTitle className="text-primary-foreground">Location</CardTitle>
          <CardLabel>Kashmir</CardLabel>
        </div>
        <Separator />
      </CardHeader>
      {/* Background image */}
      <Image
        src={MapImage}
        alt="Map of Kashmir"
        width={250}
        height={350}
        priority
        className="absolute inset-0 z-0 object-cover transition-transform duration-300 ease-in group-hover:scale-150"
      />
      {/* Gradient overlay for text readability */}
      <div
        className="absolute inset-0 z-0 bg-linear-to-t from-black/50 to-black/10"
        aria-hidden
      />
    </Card>
  );
}
