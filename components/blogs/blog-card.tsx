import { ArrowRight } from "lucide-react";
import { Link } from "next-view-transitions";

interface Props {
  slug: string;
  title: string;
  description: string;
  date: string;
}

export default function BlogCard({ slug, title, description, date }: Props) {
  return (
    <Link href={`/blogs/${slug}`} className="block group w-full outline-none">
      <div className="p-4 border-b border-border/40 group-last:border-b-0 hover:bg-muted/30 px-4 -mx-4 rounded-lg transition-colors duration-200">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-medium tracking-tight group-hover:text-primary transition-colors">
              {title}
            </h2>
            <span className="text-xs text-muted-foreground/60 font-mono shrink-0">
              {date}
            </span>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed max-w-[85%] line-clamp-2">
            {description}
          </p>
        </div>
        <div className="flex items-center text-xs font-medium text-emerald-600 dark:text-emerald-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Read Article
          <ArrowRight size={14} className="ml-1" />
        </div>
      </div>
    </Link>
  );
}
