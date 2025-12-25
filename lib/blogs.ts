import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogFrontmatter, BlogPostPreview } from "@/types/blogs";
import { cache } from "react";

const BLOGS_DIR = path.join(process.cwd(), "data/blogs");

export function getAllBlogsSlug(): string[] {
  if (!fs.existsSync(BLOGS_DIR)) {
    return [];
  }
  const files = fs.readdirSync(BLOGS_DIR);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export const getBlogBySlug = cache((slug: string) => {
  const fullPath = path.join(BLOGS_DIR, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContent);

  const frontmatter = data as BlogFrontmatter;
  if (!frontmatter.title || !frontmatter.description) {
    throw new Error(`Invalid frontmatter for ${slug}.mdx`);
  }

  return {
    slug,
    frontmatter,
    content,
  };
});

export function getBlogList(): BlogPostPreview[] {
  const slugs = getAllBlogsSlug();

  const blogs = slugs.map((slug) => {
    const blog = getBlogBySlug(slug);
    if (!blog) {
      return null;
    }
    return {
      slug,
      frontmatter: blog.frontmatter,
    };
  });

  return blogs
    .filter((blog) => blog !== null)
    .sort((a, b) => {
      return (
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
      );
    }) as BlogPostPreview[];
}

export function getAllPublishedBlogs(): BlogPostPreview[] {
  const blogs = getBlogList();
  return blogs.filter((blog) => blog.frontmatter.isPublished);
}
