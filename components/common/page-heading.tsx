import { cn } from "@/lib/utils";

interface BlogHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export default function PageHeading({
  title,
  description,
  className,
}: BlogHeaderProps) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <div className="relative mb-4">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          <span className="from-foreground to-foreground/60 bg-linear-to-b bg-clip-text text-transparent">
            {title}
          </span>
        </h1>
      </div>

      <p className="text-muted-foreground mx-auto max-w-md text-base leading-relaxed md:max-w-lg md:text-lg">
        {description}
      </p>
    </div>
  );
}
