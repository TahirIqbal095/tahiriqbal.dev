import { cn } from "@/lib/utils";
import { Card } from "../ui/card";

interface QuoteCardProps {
  quote: string;
  author: string;
  className?: string;
}

export default function QuoteCard({
  className,
  quote,
  author,
}: QuoteCardProps) {
  return (
    <Card
      className={cn(
        "group border-muted relative overflow-hidden px-4 py-8 shadow",
        className
      )}
    >
      <div className="text-muted-foreground/40 absolute top-0 h-24 w-24">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310">
          <path
            d="M79 144.11c-6 0-11.37.28-16.19.8 8.02-32.82 27.27-48.06 55.31-60.35L103.1 50.31C75.18 62.56 56.9 76.59 43.81 95.82c-15.2 22.35-22.6 51.72-22.6 89.81v16.46c0 31.83.11 57.6 57.79 57.6 57.79 0 57.79-25.87 57.79-57.79 0-31.91.37-57.79-57.79-57.79zm152 0c-6 0-11.37.28-16.19.8 8.02-32.82 27.27-48.06 55.31-60.35L255.1 50.31c-27.92 12.25-46.2 26.28-59.29 45.51-15.2 22.35-22.6 51.72-22.6 89.81v16.46c0 31.83.11 57.6 57.79 57.6 57.79 0 57.79-25.87 57.79-57.79 0-31.91.37-57.79-57.79-57.79z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <div className="relative z-40 flex flex-col items-start gap-4">
        <div className="w-full">
          <div className="flex flex-col gap-2">
            <p className="text-primary/95 font-serif text-xl font-medium tracking-tight">
              &ldquo;{quote}&rdquo;
            </p>
            <footer className="flex items-center gap-2">
              <div className="ml-auto h-px w-8 bg-neutral-300 dark:bg-neutral-700" />
              <span className="text-muted-foreground text-[10px] font-medium md:text-sm">
                {author}
              </span>
            </footer>
          </div>
        </div>
      </div>
    </Card>
  );
}
