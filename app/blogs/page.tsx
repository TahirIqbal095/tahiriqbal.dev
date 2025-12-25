import { getAllPublishedBlogs } from "@/lib/blogs";
import { generateMetadata } from "@/config/meta";
import { Metadata } from "next";
import BlogPreview from "@/components/blogs/blog-preview";
import { Separator } from "@/components/ui/separator";
import Tag from "@/components/ui/tag";
import PacificoDashedHeading from "@/components/ui/pacifico-dashed-heading";

export const metadata: Metadata = generateMetadata("/blogs");

export default function Home() {
  const blogs = getAllPublishedBlogs();
  const totalBlogs = blogs.length;
  const tags = Array.from(
    new Set(blogs.flatMap((blog) => blog.frontmatter.tags))
  );

  return (
    <section className="mx-auto mt-8 max-w-3xl space-y-6 px-2">
      <div className="w-full space-y-2 text-center">
        <PacificoDashedHeading>Blogs</PacificoDashedHeading>
        <p className="text-muted-foreground mx-auto max-w-lg text-sm">
          Thoughts, tutorials, and insights on engineering, and programming.
        </p>
      </div>
      <div className="space-y-12">
        <Separator />
        <div className="space-y-3">
          <h2 className="text-xl font-medium">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <Tag key={idx}>{tag}</Tag>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-medium">
            Latest Blogs{" "}
            <sup className="text-muted-foreground text-sm">({totalBlogs})</sup>
          </h2>
          <article className="relative mt-4 grid gap-4 space-y-8 md:grid-cols-2">
            {blogs.map((blog, idx) => (
              <BlogPreview
                key={idx}
                frontmatter={blog.frontmatter}
                slug={blog.slug}
              />
            ))}
          </article>
        </div>
      </div>
    </section>
  );
}
