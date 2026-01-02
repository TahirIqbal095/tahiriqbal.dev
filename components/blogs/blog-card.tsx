import { BlogPostPreview } from "@/types/blogs";
import { Link } from "next-view-transitions";
import { ArrowRightIcon, Calendar } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Tag from "../ui/tag";

export default function BlogCard({ slug, frontmatter }: BlogPostPreview) {
  return (
    <div className="bg-card flex h-full flex-col gap-2 overflow-hidden rounded-md border">
      <div className="relative aspect-video overflow-hidden bg-white">
        <Image
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          src={frontmatter.image}
          alt={frontmatter.title}
          fill
          loading="lazy"
        />
      </div>
      <div className="flex flex-col justify-between gap-4 p-3">
        <div className="space-y-3">
          <div className="space-y-2">
            <h2 className="group-hover:text-primary text-xl font-semibold tracking-tight transition-colors">
              {frontmatter.title}
            </h2>
            <div className="text-muted-foreground flex items-center gap-2 text-xs">
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                <span>
                  {new Date(frontmatter.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </span>
            </div>
          </div>
          <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
            {frontmatter.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {frontmatter.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className="mt-2">
          <Button
            asChild
            variant={"link"}
            size="sm"
            className="group h-auto p-0 hover:bg-transparent"
          >
            <Link
              href={`/blogs/${slug}`}
              className="text-primary hover:text-primary/80 flex items-center gap-1 text-xs font-medium"
            >
              Read More
              <ArrowRightIcon
                className="transition-transform group-hover:translate-x-1"
                size={14}
              />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
