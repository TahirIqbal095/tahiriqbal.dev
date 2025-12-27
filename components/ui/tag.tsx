import { cn } from "@/lib/utils";

interface TagsProps {
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
}

export default function Tag({ children, className, isActive }: TagsProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none md:text-xs",
        className,
        isActive && "bg-primary text-primary-foreground"
      )}
    >
      {children}
    </span>
  );
}
