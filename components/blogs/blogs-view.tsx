"use client";

import { motion, Variants } from "motion/react";
import BlogCard from "@/components/blogs/blog-card";
import { Separator } from "@/components/ui/separator";
import Tag from "@/components/ui/tag";
import BlogHeader from "@/components/blogs/blog-header";
import QuoteCard from "@/components/common/quote-card";
import { Button } from "@/components/ui/button";
import FooterSm from "@/components/common/footer-sm";
import { BlogPostPreview } from "@/types/blogs";
import { useState } from "react";

interface BlogsViewProps {
  blogs: BlogPostPreview[];
  tags: string[];
}

const blogConfig = {
  title: "Blogs",
  description: "Insights, Stories, and Ideas on Engineering, and Programming.",
};

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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="mx-auto mt-4 max-w-3xl space-y-8 px-2 md:space-y-10"
    >
      <BlogHeader
        title={blogConfig.title}
        description={blogConfig.description}
      />

      <div className="space-y-8 md:space-y-10">
        <motion.div variants={itemVariants}>
          <Separator />
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-3">
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
        </motion.div>

        <div className="space-y-4">
          <motion.h2 variants={itemVariants} className="text-xl font-medium">
            Latest Blogs{" "}
            <sup className="text-muted-foreground text-sm">({totalBlogs})</sup>
          </motion.h2>

          <article className="relative mt-4 grid gap-4 md:grid-cols-2">
            {visibleBlogs.map((blog, _) => (
              <motion.div
                key={blog.slug}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
              >
                <BlogCard frontmatter={blog.frontmatter} slug={blog.slug} />
              </motion.div>
            ))}
          </article>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex justify-center"
          >
            <Button
              onClick={toggleBlogsView}
              variant={"outline"}
              className="w-fit cursor-pointer"
            >
              {showAllBlogs ? "View Less" : "View All"}
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div variants={itemVariants}>
        <QuoteCard />
      </motion.div>

      <motion.div variants={itemVariants}>
        <FooterSm />
      </motion.div>
    </motion.section>
  );
}
