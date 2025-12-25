import { Link } from "next-view-transitions";
import BlogCard from "@/components/blogs/blog-card";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { getAllPublishedBlogs } from "@/lib/blogs";
import { generateMetadata } from "@/config/meta";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata("/blogs");

export default function Home() {
  const blogs = getAllPublishedBlogs();

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
        {blogs.map((blog, idx) => (
          <BlogCard key={idx} frontmatter={blog.frontmatter} slug={blog.slug} />
        ))}
      </article>
    </div>
  );
}
