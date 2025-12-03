import { cn } from "@/lib/utils";

type SeparatorProps = {
  direction?: "horizontal" | "vertical";
  className?: string;
};

function Separator({ direction = "horizontal", className }: SeparatorProps) {
  const styles =
    direction === "vertical" ? "w-[0.3px] h-full" : "h-[0.3px] w-full";

  return <div className={cn("bg-muted-foreground", styles, className)} />;
}

export { Separator };
