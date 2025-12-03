import { File, Folder } from "lucide-react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

export function CurrentStatus() {
  return (
    <Card className="p-2 h-full">
      <CardHeader>
        <div className="flex justify-between items-center mb-1 text-xs text-white">
          <CardTitle>Status</CardTitle>

          <div className="relative h-4 w-4 flex items-center justify-center">
            <span className="signal-dot"></span>
          </div>
        </div>
        <Separator />
      </CardHeader>

      <div className="mt-4">
        <div className="flex gap-2 items-center">
          <Folder size={14} className="text-card-foreground" />
          <h4>available_for</h4>
        </div>
        <div className="ml-2 mt-2 flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <File size={14} className="text-card-foreground" />
            <h4 className="text-muted-foreground underline hover:text-foreground cursor-pointer">
              freelance
            </h4>
          </div>
          <div className="flex gap-2 items-center">
            <File size={14} className="text-card-foreground" />
            <h4 className="text-muted-foreground underline hover:text-foreground cursor-pointer">
              full_time
            </h4>
          </div>
          <div className="flex gap-2 items-center">
            <File size={14} className="text-card-foreground" />
            <h4 className="text-muted-foreground underline hover:text-foreground cursor-pointer">
              contract
            </h4>
          </div>
        </div>
      </div>
    </Card>
  );
}
