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
    <Link href={`/blogs/${slug}`} className="group block w-full outline-none">
      <div className="border-border/40 hover:bg-muted/30 -mx-4 rounded-lg border-b p-4 px-4 transition-colors duration-200 group-last:border-b-0">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <h2 className="group-hover:text-primary text-xl font-medium tracking-tight transition-colors">
              {title}
            </h2>
            <span className="text-muted-foreground/60 shrink-0 font-mono text-xs">
              {date}
            </span>
          </div>

          <p className="text-muted-foreground line-clamp-2 max-w-[85%] text-sm leading-relaxed">
            {description}
          </p>
        </div>
        <div className="mt-3 flex items-center text-xs font-medium text-emerald-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-emerald-400">
          Read Article
          <ArrowRight size={14} className="ml-1" />
        </div>
      </div>
    </Link>
  );
}
