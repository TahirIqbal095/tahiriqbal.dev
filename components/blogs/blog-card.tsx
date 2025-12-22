import { Link } from "next-view-transitions";

interface Props {
  slug: string;
  title: string;
  description: string;
  date: string;
}

export default function BlogCard({ slug, title, description, date }: Props) {
  return (
    <Link
      href={`/blogs/${slug}`}
      className="group relative block w-full outline-none"
    >
      <div className="relative">
        <div className="flex flex-col gap-1">
          {/* Timeline Dot */}
          <span className="bg-background ring-primary/20 absolute top-1 -left-[32px] flex size-4 items-center justify-center rounded-full ring-2 transition-transform duration-300 group-hover:scale-125">
            <span className="bg-primary size-2 rounded-full transition-colors duration-300 group-hover:bg-emerald-500" />
          </span>

          <div className="flex flex-col gap-0.5">
            <div className="flex items-baseline justify-between gap-2">
              <h2 className="group-hover:text-primary text-base font-medium tracking-tight transition-colors">
                {title}
              </h2>
              <span className="text-muted-foreground/60 shrink-0 font-mono text-xs whitespace-nowrap">
                {date}
              </span>
            </div>

            <p className="text-muted-foreground group-hover:text-foreground/80 line-clamp-2 text-sm leading-relaxed transition-colors duration-300">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
