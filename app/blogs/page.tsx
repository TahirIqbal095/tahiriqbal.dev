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
    <div className="space-y-1">
      <Button className="group" asChild variant={"link"}>
        <Link href={"/"}>
          <ArrowLeftIcon
            className="group-hover:-translate-x-1 transition-all"
            size={20}
          />
          <span>Back</span>
        </Link>
      </Button>
      <h1 className="text-3xl font-bold mb-4">Blogs</h1>
      <article className="flex flex-col gap-6">
        {posts.map((post, idx) => (
          <BlogCard key={idx} {...post} slug={post._raw.flattenedPath} />
        ))}
      </article>
    </div>
  );
}
