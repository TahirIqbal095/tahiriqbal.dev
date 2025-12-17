import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "next-view-transitions";

interface Props {
  slug: string;
  title: string;
  description: string;
  date: string;
  landing: boolean;
}

export default function BlogCard({
  slug,
  title,
  description,
  date,
  landing = false,
}: Props) {
  return (
    <div className="relative text-primary/95">
      <div
        className={cn(
          "absolute top-2 h-2.5 w-2.5 rounded-full bg-primary/80",
          landing && "h-2 w-2"
        )}
      />
      <div className="ml-6">
        <div
          className={cn(
            "flex items-center justify-between gap-2",
            landing && "flex-col items-start gap-0.5"
          )}
        >
          <Link
            href={`/blogs/${slug}`}
            className="flex items-center gap-2 group"
          >
            <h2
              className={cn(
                "text-lg font-medium hover:underline cursor-pointer",
                landing && "text-base"
              )}
            >
              {title}
            </h2>
            <ArrowRightIcon
              className="group-hover:translate-x-2 transition-all"
              size={landing ? 14 : 18}
            />
          </Link>
          <p className={cn("text-muted-foreground text-xs")}>{date}</p>
        </div>
        {!landing && (
          <p
            className={cn(
              "text-muted-foreground text-sm max-w-[72ch]",
              landing && "text-xs"
            )}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
