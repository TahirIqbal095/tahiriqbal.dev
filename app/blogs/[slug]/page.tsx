import { BlogComponents } from "@/components/mdx/mdx-components";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeftIcon } from "lucide-react";
import { Link } from "next-view-transitions";
import { notFound } from "next/navigation";
import { getAllBlogsSlug, getBlogBySlug } from "@/lib/blogs";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { Metadata } from "next";
import Tag from "@/components/ui/tag";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogsSlug();
  const staticParams = slugs.map((slug) => ({ slug }));
  return staticParams;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return notFound();
  }

  return {
    title: blog.frontmatter.title,
    description: blog.frontmatter.description,
    keywords: blog.frontmatter.tags,
    openGraph: {
      title: blog.frontmatter.title,
      description: blog.frontmatter.description,
      images: [
        {
          url: blog.frontmatter.image,
          width: 1200,
          height: 630,
          alt: blog.frontmatter.title,
        },
      ],
    },
    twitter: {
      title: blog.frontmatter.title,
      description: blog.frontmatter.description,
      card: "summary_large_image",
      images: [
        {
          url: blog.frontmatter.image,
          width: 1200,
          height: 630,
          alt: blog.frontmatter.title,
        },
      ],
    },
    alternates: {
      canonical:
        process.env.NEXT_PUBLIC_URL ||
        "http://localhost:3000" + "/blogs/" + slug,
    },
  };
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
        <div className="mt-4 justify-between space-y-2 md:flex">
          <p className="text-muted-foreground text-sm">
            {new Date(blog.frontmatter.date).toISOString().split("T")[0]}
          </p>
          <div className="flex flex-wrap gap-2">
            {blog.frontmatter.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
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
              rehypeSlug,
              rehypeAutolinkHeadings,
            ],
          },
        }}
      />
    </article>
  );
}
