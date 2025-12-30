import { getAllPublishedBlogs } from "@/lib/blogs";
import { generateMetadata } from "@/config/meta";
import BlogsView from "@/components/blogs/blogs-view";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata("/blogs");

export default function Home() {
  const blogs = getAllPublishedBlogs();
  const tags = Array.from(
    new Set(blogs.flatMap((blog) => blog.frontmatter.tags))
  );

  return <BlogsView blogs={blogs} tags={tags} />;
}
