import { File, Folder } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { statusConfig } from "@/config/status";

export function CurrentStatus() {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="mb-1 flex items-center justify-between text-xs text-white">
          <CardTitle>{statusConfig.title}</CardTitle>

          <div className="relative flex h-4 w-4 items-center justify-center">
            <span className="signal-dot"></span>
          </div>
        </div>
        <Separator />
      </CardHeader>

      <div className="mt-4">
        <div className="flex items-center gap-2">
          <Folder size={14} className="text-card-foreground" />
          <h4>{statusConfig.availableFor.heading}</h4>
        </div>
        <div className="mt-2 ml-1 flex flex-col gap-2 border-l-2 pl-4">
          {statusConfig.availableFor.jobs.map((j, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <File size={14} className="text-card-foreground" />
              <h4 className="text-muted-foreground hover:text-foreground cursor-pointer underline">
                {j}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
