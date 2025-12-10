import { Bun } from "@/components/svgs/bun";
import { Badge } from "@/components/ui/badge";

export default function TestPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Badge>
        <Bun />
        <span>Bun</span>
      </Badge>
    </div>
  );
}
