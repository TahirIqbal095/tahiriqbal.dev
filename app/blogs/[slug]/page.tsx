import { Mdx } from "@/components/mdx/mdx-components";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { allMyBlogs, MyBlogs } from "contentlayer/generated";
import { ArrowLeftIcon } from "lucide-react";
import { Link } from "next-view-transitions";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = async () => {
  return allMyBlogs.map((post) => ({ slug: post._raw.flattenedPath }));
};

export const generateMetadata = async ({ params }: Props) => {
  const { slug } = await params;
  const post = allMyBlogs.find(
    (post: MyBlogs) => post._raw.flattenedPath === slug
  );
  if (!post) {
    notFound();
  }
  return { title: post.title, description: post.description };
};

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const blog = allMyBlogs.find(
    (blog: MyBlogs) => blog._raw.flattenedPath === slug
  );

  if (!blog) {
    return notFound();
  }

  return (
    <article className="container mx-auto max-w-3xl py-6 bg-card px-4">
      <div>
        <Button className="group" asChild variant={"link"}>
          <Link href={"/blogs"}>
            <ArrowLeftIcon
              className="group-hover:-translate-x-1 transition-all"
              size={20}
            />
            <span>Back</span>
          </Link>
        </Button>
        <h1 className="mt-2 text-4xl font-extrabold leading-tight tracking-tighter sm:text-5xl">
          {blog.title}
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">{blog.description}</p>
        <div className="mt-4 flex space-x-4">
          <p className="text-sm text-muted-foreground">{blog.date}</p>
          <div className="flex space-x-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <Separator className="mt-8" />
      </div>
      <Mdx code={blog.body.code} />
    </article>
  );
}
