"use client";

import BlogCard from "@/components/blogs/blog-card";
import { Separator } from "@/components/ui/separator";
import Tag from "@/components/ui/tag";
import PageHeading from "@/components/common/page-heading";
import QuoteCard from "@/components/common/quote-card";
import { Button } from "@/components/ui/button";
import { BlogPostPreview } from "@/types/blogs";
import { useState } from "react";
import { ContainerVariants, ItemVariants } from "../common/page-animation";
import { blogConfig } from "@/config/blogs";

interface BlogsViewProps {
  blogs: BlogPostPreview[];
  tags: string[];
}

export default function BlogsView({ blogs, tags }: BlogsViewProps) {
  const [showAllBlogs, setShowAllBlogs] = useState(false);
  const [showAllTags, setShowAllTags] = useState(false);

  const totalBlogs = blogs.length;

  const visibleBlogs = showAllBlogs ? blogs : blogs.slice(0, 2);
  const visibleTags = showAllTags ? tags : tags.slice(0, 8);
  const moreTags = tags.length - visibleTags.length;

  const toggleBlogsView = () => {
    setShowAllBlogs((prev) => !prev);
  };

  const showAllTagsHandler = () => {
    setShowAllTags((prev) => !prev);
  };

  return (
    <ContainerVariants className="space-y-8 md:space-y-10">
      <ItemVariants>
        <PageHeading
          title={blogConfig.title}
          description={blogConfig.description}
        />
      </ItemVariants>

      <ItemVariants>
        <Separator />
      </ItemVariants>

      <ItemVariants>
        <h2 className="text-xl font-medium">Tags</h2>
        <div className="flex flex-wrap items-center gap-2">
          {visibleTags.map((tag, idx) => (
            <Tag key={idx}>{tag}</Tag>
          ))}
          {!showAllTags ? (
            <span
              onClick={showAllTagsHandler}
              className="text-muted-foreground cursor-pointer text-xs underline"
            >
              {moreTags > 0 && `+ ${moreTags} more`}
            </span>
          ) : (
            <span
              onClick={showAllTagsHandler}
              className="text-muted-foreground cursor-pointer text-xs underline"
            >
              Show Less
            </span>
          )}
        </div>
      </ItemVariants>

      <ItemVariants>
        <p className="text-xl font-medium">
          Latest Blogs{" "}
          <sup className="text-muted-foreground text-sm">({totalBlogs})</sup>
        </p>

        <div className="flex flex-col items-center gap-10">
          <article className="relative mt-4 grid gap-4 md:grid-cols-2">
            {visibleBlogs.map((blog, idx) => (
              <div key={`${blog.slug}-${idx}`}>
                <BlogCard frontmatter={blog.frontmatter} slug={blog.slug} />
              </div>
            ))}
          </article>

          <Button
            onClick={toggleBlogsView}
            variant={"outline"}
            className="w-fit cursor-pointer"
          >
            {showAllBlogs ? "View Less" : "View All"}
          </Button>
        </div>
      </ItemVariants>

      <ItemVariants>
        <QuoteCard
          quote={blogConfig.quote.q}
          author={blogConfig.quote.author}
        />
      </ItemVariants>
    </ContainerVariants>
  );
}
