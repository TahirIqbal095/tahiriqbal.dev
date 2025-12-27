import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { Pacifico } from "next/font/google";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

export default function PacificoDashedHeading({ children, className }: Props) {
  return (
    <div
      className={cn(
        `${pacifico.className} border-primary/30 bg-card relative inline-flex items-center justify-center border-2 border-dashed px-6 py-2`,
        className
      )}
    >
      <h2 className="text-foreground relative z-10 text-4xl font-medium md:text-5xl">
        {children}
      </h2>

      <Plus
        size={14}
        className="text-primary absolute -top-[7.5px] -left-[7.5px] z-20"
      />
      <Plus
        size={14}
        className="text-primary absolute -top-[7.5px] -right-[7.5px] z-20"
      />
      <Plus
        size={14}
        className="text-primary absolute -bottom-[7.5px] -left-[7.5px] z-20"
      />
      <Plus
        size={14}
        className="text-primary absolute -right-[7.5px] -bottom-[7.5px] z-20"
      />
    </div>
  );
}
