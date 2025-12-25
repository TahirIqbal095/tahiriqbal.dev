import { BlogComponents } from "@/components/mdx/mdx-components";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeftIcon } from "lucide-react";
import { Link } from "next-view-transitions";
import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/lib/blogs";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return notFound();
  }

  return (
    <article className="container mx-auto max-w-3xl px-4 py-6">
      <div className="mb-6">
        <Button className="group" asChild variant={"link"}>
          <Link href={"/blogs"}>
            <ArrowLeftIcon
              className="transition-all group-hover:-translate-x-1"
              size={20}
            />
            <span>Back</span>
          </Link>
        </Button>
        <h1 className="mt-2 text-4xl leading-tight font-extrabold tracking-tighter sm:text-5xl">
          {blog.frontmatter.title}
        </h1>
        <p className="text-muted-foreground mt-4 text-xl">
          {blog.frontmatter.description}
        </p>
        <div className="mt-4 flex space-x-4">
          <p className="text-muted-foreground text-sm">
            {new Date(blog.frontmatter.date).toISOString().split("T")[0]}
          </p>
          <div className="flex space-x-2">
            {blog.frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="focus:ring-ring inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <Separator className="mt-8" />
      </div>
      <MDXRemote
        components={BlogComponents}
        source={blog.content}
        options={{
          mdxOptions: {
            rehypePlugins: [
              [rehypePrettyCode, { theme: "one-dark-pro" }],
              rehypeAutolinkHeadings,
            ],
          },
        }}
      />
    </article>
  );
}
