import { Link } from "next-view-transitions";
import { compareDesc } from "date-fns";
import { allMyBlogs } from "contentlayer/generated";
import BlogCard from "@/components/blogs/blog-card";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";

export default function Home() {
  const posts = allMyBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="bg-card rounded-md border p-4">
      <Button className="group" asChild variant={"link"}>
        <Link href={"/"}>
          <ArrowLeftIcon
            className="transition-all group-hover:-translate-x-1"
            size={20}
          />
          <span>Back</span>
        </Link>
      </Button>
      <h1 className="mb-4 text-3xl font-bold">Blogs</h1>
      <article className="border-border/50 relative my-4 ml-2 space-y-8 border-l border-dashed pl-6">
        {posts.map((post, idx) => (
          <BlogCard key={idx} {...post} slug={post._raw.flattenedPath} />
        ))}
      </article>
    </div>
  );
}
